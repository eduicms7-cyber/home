(() => {
  const teams = window.dubitnaraeTeams;
  const filters = document.querySelector("#year-filter");
  const grid = document.querySelector("#team-grid");

  if (teams.length === 0) {
    filters.hidden = true;
    grid.innerHTML = `
      <div class="placeholder-box">
        <strong>자료 정리 중</strong>
        연도 · 팀명 · 아이템 · 해결하려던 문제 · 설명 · 수상 결과 · 사진 · 고쳐 본 이야기
      </div>
    `;
    return;
  }

  const years = [...new Set(teams.map((team) => team.year))].sort((a, b) => b - a);

  const renderTeams = (year) => {
    grid.innerHTML = "";
    teams
      .filter((team) => year === "all" || team.year === year)
      .sort((a, b) => b.year - a.year)
      .forEach((team) => {
        const card = document.createElement("article");
        card.className = "team-card";

        const meta = document.createElement("div");
        meta.className = "story-meta";
        const teamName = document.createElement("span");
        teamName.textContent = team.team;
        const teamYear = document.createElement("span");
        teamYear.textContent = team.year;
        meta.append(teamName, teamYear);

        const title = document.createElement("h3");
        title.textContent = team.item;
        card.append(meta, title);

        if (team.image) {
          const image = document.createElement("img");
          image.src = team.image;
          image.alt = `${team.item} 사진`;
          image.loading = "lazy";
          card.append(image);
        }

        [
          ["문제", team.problem],
          ["", team.description],
          ["고쳐 본 이야기", team.story]
        ].forEach(([label, text]) => {
          if (!text) return;
          const paragraph = document.createElement("p");
          paragraph.textContent = label ? `${label} · ${text}` : text;
          card.append(paragraph);
        });

        if (team.award) {
          const award = document.createElement("span");
          award.className = "team-award";
          award.textContent = team.award;
          card.append(award);
        }

        grid.append(card);
      });
  };

  ["all", ...years].forEach((year) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-button";
    button.textContent = year === "all" ? "전체" : year;
    button.addEventListener("click", () => {
      filters.querySelectorAll(".filter-button").forEach((item) => {
        item.classList.toggle("is-active", item === button);
        item.setAttribute("aria-pressed", String(item === button));
      });
      renderTeams(year);
    });
    filters.append(button);
  });

  filters.firstElementChild.classList.add("is-active");
  filters.firstElementChild.setAttribute("aria-pressed", "true");
  renderTeams("all");
})();
