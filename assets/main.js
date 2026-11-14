(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const CAT = { odoo: "Odoo & ERP", fullstack: "Full-stack", web: "Website", mobile: "iOS app" };
  const ext = '<svg viewBox="0 0 24 24"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>';

  // Projects
  $("#projectGrid").innerHTML = window.PROJECTS.map((p) => `
    <article class="project reveal" data-cat="${p.cat}">
      <button class="shot" data-img="assets/img/${p.img}.webp" data-title="${esc(p.title)}" aria-label="Enlarge screenshot of ${esc(p.title)}">
        <img src="assets/img/${p.img}.webp" alt="Screenshot of ${esc(p.title)}" loading="lazy" width="1200" height="750">
        <span class="tag">${CAT[p.cat]}</span>
      </button>
      <div class="body">
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.desc)}</p>
        ${p.note ? `<span class="note">${esc(p.note)}</span>` : ""}
        <div class="chips">${p.tech.map((t) => `<i>${esc(t)}</i>`).join("")}</div>
        ${p.links ? `<div class="plinks">${p.links.map((l) => `<a href="${l.href}" target="_blank" rel="noopener">${esc(l.label)} ${ext}</a>`).join("")}</div>` : ""}
      </div>
    </article>`).join("");

  $("#repoList").innerHTML = window.REPOS.map((r) => `
    <a class="repo reveal" href="https://github.com/onoureman/${r.name}" target="_blank" rel="noopener">
      <b>${esc(r.name)}</b><p>${esc(r.desc)}</p><small>${esc(r.lang)}</small>
    </a>`).join("");

  // Filters
  $("#filters").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    $$("#filters button").forEach((x) => x.classList.toggle("active", x === b));
    const f = b.dataset.f;
    $$(".project").forEach((p) => p.classList.toggle("hide", f !== "all" && p.dataset.cat !== f));
  });

  // Lightbox
  const lb = $("#lightbox");
  document.addEventListener("click", (e) => {
    const s = e.target.closest(".shot");
    if (s) { $("img", lb).src = s.dataset.img; $("img", lb).alt = s.dataset.title; $("p", lb).textContent = s.dataset.title; lb.classList.add("open"); lb.setAttribute("aria-hidden", "false"); }
    else if (e.target === lb || e.target.closest(".lightbox button")) { lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true"); }
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") lb.classList.remove("open"); });

  // Inline link inside a link (Odoo CV)
  $$(".link-inline").forEach((el) => el.addEventListener("click", (e) => { e.preventDefault(); e.stopPropagation(); const a = document.createElement("a"); a.href = el.dataset.href; a.download = ""; a.click(); }));

  // Theme
  $("#themeToggle").addEventListener("click", () => {
    const t = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = t;
    try { localStorage.setItem("theme", t); } catch (e) {}
  });

  // Mobile menu
  const links = $("#navLinks");
  $("#menuBtn").addEventListener("click", () => links.classList.toggle("open"));
  $$("a", links).forEach((a) => a.addEventListener("click", () => links.classList.remove("open")));

  // Reveal on scroll + active nav link
  $$(".section h2, .skill-card, .timeline > li, .cert, .contact-card").forEach((el) => el.classList.add("reveal"));
  const io = new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: 0.08 });
  $$(".reveal").forEach((el) => io.observe(el));
  const navIo = new IntersectionObserver((ents) => ents.forEach((en) => {
    if (en.isIntersecting) $$("a", links).forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach((s) => navIo.observe(s));

  $("#year").textContent = new Date().getFullYear();
})();
