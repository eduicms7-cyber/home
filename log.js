(() => {
  const params = new URLSearchParams(window.location.search);
  const project = window.siteProjects.find((item) => item.id === params.get("id"));
  const container = document.querySelector("#log-content");
  const heading = document.querySelector("title");

  if (!project) {
    heading.textContent = "프로젝트를 찾을 수 없습니다 — 작업실";
    container.innerHTML = `
      <div class="log-empty">
        <p class="eyebrow">NOT FOUND</p>
        <h1>아직 이 프로젝트를 찾을 수 없어요.</h1>
        <a class="button button-dark" href="./#projects">프로젝트 목록으로</a>
      </div>
    `;
    return;
  }

  heading.textContent = `${project.name} 작업일지 — 작업실`;

  const hero = document.createElement("div");
  hero.className = "log-hero";
  hero.innerHTML = `
    <p class="eyebrow">${project.categoryLabel} · WORK LOG</p>
    <h1></h1>
    <p class="log-description"></p>
  `;
  hero.querySelector("h1").textContent = `${project.name}의 작업일지`;
  hero.querySelector(".log-description").textContent = project.description;
  container.append(hero);

  const list = document.createElement("ol");
  list.className = "log-list";

  project.logs.forEach((entry) => {
    const item = document.createElement("li");
    item.className = "log-entry";

    const date = document.createElement("time");
    date.textContent = entry.date;

    const content = document.createElement("div");
    const title = document.createElement("h2");
    title.textContent = entry.title;
    const description = document.createElement("p");
    description.textContent = entry.description;
    content.append(title, description);
    item.append(date, content);
    list.append(item);
  });

  if (project.logs.length === 0) {
    const empty = document.createElement("li");
    empty.className = "log-entry log-entry-empty";
    empty.textContent = "아직 등록된 작업일지가 없습니다. projects.js에 첫 기록을 추가해 보세요.";
    list.append(empty);
  }

  container.append(list);

  const links = document.createElement("div");
  links.className = "log-source-links";
  if (project.workLogUrl) {
    const fullLog = document.createElement("a");
    fullLog.href = project.workLogUrl;
    fullLog.target = "_blank";
    fullLog.rel = "noopener noreferrer";
    fullLog.textContent = "전체 작업일지 보기 ↗";
    links.append(fullLog);
  }

  const repository = document.createElement("a");
  repository.href = project.repository;
  repository.target = "_blank";
  repository.rel = "noopener noreferrer";
  repository.textContent = "프로젝트 저장소 ↗";
  links.append(repository);
  container.append(links);
})();
