(() => {
  const grid = document.querySelector("#project-grid");
  const filters = document.querySelectorAll("[data-filter]");
  const projects = window.siteProjects ?? [];

  function renderProjects(category = "all") {
    const visibleProjects = projects.filter(
      (project) => category === "all" || project.category === category
    );

    grid.replaceChildren();
    visibleProjects.forEach((project, index) => {
      const card = document.createElement("article");
      card.className = "project-card";
      card.style.setProperty("--card-index", index);

      const visual = document.createElement("div");
      visual.className = `project-visual ${project.visual}`;
      visual.setAttribute("aria-hidden", "true");
      visual.innerHTML = `
        <span class="visual-orbit visual-orbit-one"></span>
        <span class="visual-orbit visual-orbit-two"></span>
        <span class="visual-symbol">${project.symbol}</span>
        <span class="visual-index">${project.categoryLabel}</span>
      `;

      const content = document.createElement("div");
      content.className = "project-content";

      const meta = document.createElement("div");
      meta.className = "project-meta";
      meta.innerHTML = `<span>${project.categoryLabel}</span><span class="project-status"><i></i>${project.status}</span>`;

      const title = document.createElement("h3");
      title.textContent = project.name;

      const description = document.createElement("p");
      description.className = "project-description";
      description.textContent = project.description;

      const actions = document.createElement("div");
      actions.className = "project-actions";

      const appLink = document.createElement("a");
      appLink.className = "button button-dark project-open";
      appLink.href = project.url;
      appLink.target = "_blank";
      appLink.rel = "noopener noreferrer";
      appLink.innerHTML = '프로그램 열기 <span aria-hidden="true">↗</span>';

      const logLink = document.createElement("a");
      logLink.className = "project-log-link";
      logLink.href = `log.html?id=${encodeURIComponent(project.id)}`;
      logLink.innerHTML = '작업일지 <span aria-hidden="true">→</span>';

      actions.append(appLink, logLink);
      content.append(meta, title, description, actions);
      card.append(visual, content);
      grid.append(card);
    });
  }

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      filters.forEach((filter) => {
        const selected = filter === button;
        filter.classList.toggle("is-active", selected);
        filter.setAttribute("aria-pressed", String(selected));
      });
      renderProjects(button.dataset.filter);
    });
  });

  renderProjects();
})();
