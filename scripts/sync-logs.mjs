// 각 프로젝트의 작업일지를 GitHub에서 읽어,
// projects.js에 아직 없는 날짜의 "한 일"을 보여 준다.
// 실행: node scripts/sync-logs.mjs   (맥·윈도우 모두 같은 명령)
// 비공개 저장소도 읽을 수 있도록 GitHub CLI(gh) 로그인을 사용한다.

import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const projectsFile = fileURLToPath(new URL("../projects.js", import.meta.url));
const sandbox = { window: {} };
vm.runInNewContext(readFileSync(projectsFile, "utf8"), sandbox);
const projects = sandbox.window.siteProjects;

function ghApi(path, token) {
  return execFileSync("gh", ["api", path, "-H", "Accept: application/vnd.github.raw"], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"],
    env: token ? { ...process.env, GH_TOKEN: token } : process.env
  });
}

// 현재 gh 계정으로 먼저 읽고, 안 되면 저장소 주인 계정의 토큰으로 다시 읽는다.
function readFromRepo(owner, repo, path, raw = true) {
  const apiPath = `repos/${owner}/${repo}/contents/${path.split("/").map(encodeURIComponent).join("/")}`;
  const run = (token) => (raw ? ghApi(apiPath, token) : ghJson(apiPath, token));
  try {
    return run();
  } catch {
    try {
      const token = execFileSync("gh", ["auth", "token", "--user", owner], {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"]
      }).trim();
      return run(token);
    } catch {
      return null;
    }
  }
}

function ghJson(path, token) {
  return JSON.parse(
    execFileSync("gh", ["api", path], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
      env: token ? { ...process.env, GH_TOKEN: token } : process.env
    })
  );
}

// "한 일" 제목 아래 내용을 다음 제목이나 구분선 전까지 가져온다.
function extractDone(text) {
  const done = text.match(/^#{2,3} 한 일\s*\n([\s\S]*?)(?=^#{2,3} |^---|(?![\s\S]))/m);
  return (done ? done[1] : "").trim();
}

const toDotDate = (date) => date.replace(/-/g, ".");

// 작업일지는 두 형식이 있다.
// 1) docs/작업일지.md 한 파일에 "## 2026-10-15" 섹션이 쌓이는 형식
// 2) docs/worklog/2026-10-15.md 처럼 날짜마다 파일이 따로 있는 형식
function readSections(owner, repo) {
  const single = readFromRepo(owner, repo, "docs/작업일지.md");
  if (single !== null) {
    return single
      .split(/^## /m)
      .slice(1)
      .map((part) => ({ date: part.match(/^\d{4}-\d{2}-\d{2}/)?.[0], text: part }))
      .filter((section) => section.date)
      .map((section) => ({ date: toDotDate(section.date), done: extractDone(section.text) }));
  }

  const files = readFromRepo(owner, repo, "docs/worklog", false);
  if (!Array.isArray(files)) return null;
  return files
    .map((file) => file.name.match(/^(\d{4}-\d{2}-\d{2})\.md$/)?.[1])
    .filter(Boolean)
    .sort()
    .reverse()
    .map((date) => ({
      date: toDotDate(date),
      done: extractDone(readFromRepo(owner, repo, `docs/worklog/${date}.md`) ?? "")
    }));
}

let missingCount = 0;

for (const project of projects) {
  const match = project.repository?.match(/github\.com\/([^/]+)\/([^/]+)/);
  if (!match) continue;
  const [, owner, repo] = match;

  const sections = readSections(owner, repo);
  if (sections === null) {
    console.log(`\n■ ${project.name}: GitHub에서 작업일지(docs/작업일지.md 또는 docs/worklog/)를 읽지 못했습니다.`);
    continue;
  }

  const known = new Set(project.logs.map((entry) => entry.date));
  const missing = sections.filter((section) => !known.has(section.date));

  if (missing.length === 0) {
    console.log(`\n■ ${project.name}: 최신 상태입니다.`);
    continue;
  }

  missingCount += missing.length;
  console.log(`\n■ ${project.name}: 홈페이지에 없는 날짜 ${missing.length}개`);
  for (const section of missing) {
    console.log(`\n  [${section.date}]`);
    console.log(section.done.replace(/^/gm, "    "));
  }
}

console.log(
  missingCount === 0
    ? "\n모든 프로젝트가 홈페이지와 맞습니다."
    : `\n위 ${missingCount}개 날짜를 projects.js의 logs 맨 앞에 방문자용 한 줄 요약으로 추가하세요.`
);
