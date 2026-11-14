(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const CAT = { odoo: "Odoo & ERP", fullstack: "Full-stack", web: "Web", mobile: "iOS" };
  const GH = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5z"/></svg>';
  const ARROW = '<svg viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></svg>';
  const isDark = () => document.documentElement.dataset.theme === "dark";
  const repoOf = (p) => (p.links || []).find((l) => l.href.includes("github.com"));

  const media = (p) => {
    const tag = `<span class="tag">${CAT[p.cat]}</span>`;
    if (p.media.logo === "qast")
      return `<div class="media logo"><img class="qast" src="assets/img/${isDark() ? "qast-logo-white" : "qast-logo"}.png" alt="QAST logo" loading="lazy" width="480" height="223">${tag}</div>`;
    if (p.media.github) {
      const r = repoOf(p);
      return `<a class="media gh" href="${r ? r.href : "https://github.com/onoureman"}" target="_blank" rel="noopener" aria-label="${esc(p.title)} on GitHub">${GH}<span>github.com/onoureman/<b>${esc(r ? r.href.split("/").pop() : "")}</b></span>${tag}</a>`;
    }
    return `<button class="media" data-img="assets/img/${p.media.img}.webp" aria-label="Enlarge screenshot of ${esc(p.title)}"><img class="shot" src="assets/img/${p.media.img}.webp" alt="Screenshot of ${esc(p.title)}" loading="lazy" width="1200" height="750">${tag}</button>`;
  };

  // One grid, same card for every project. GitHub repos are mixed in from near the top.
  const all = window.PROJECTS;
  const others = all.filter((p) => !p.media.github);
  const gh = all.filter((p) => p.media.github);
  const list = [];
  others.forEach((p, i) => { list.push(p); if (i % 3 === 1 && gh.length) list.push(gh.shift()); });
  list.push(...gh);

  $("#grid").innerHTML = list.map((p) => {
    const meta = [p.where, p.date].filter(Boolean).map(esc).join(" · ");
    const isGh = p.media.github || !!repoOf(p);
    return `
    <article class="card" data-cat="${p.cat}" data-gh="${isGh ? 1 : 0}">
      ${media(p)}
      <div class="body">
        ${meta ? `<span class="meta">${meta}</span>` : ""}
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.desc)}</p>
        ${p.note ? `<span class="note">${esc(p.note)}</span>` : ""}
        <div class="chips">${p.tech.map((t) => `<i>${esc(t)}</i>`).join("")}</div>
        ${p.links ? `<div class="plinks">${p.links.map((l) => `<a href="${l.href}" target="_blank" rel="noopener">${esc(l.label)} ${ARROW}</a>`).join("")}</div>` : ""}
      </div>
    </article>`;
  }).join("");

  // Filters with counts
  const cards = $$(".card");
  const match = (c, f) => f === "all" || (f === "github" ? c.dataset.gh === "1" : c.dataset.cat === f);
  $$("#filters button").forEach((b) => ($("span", b).textContent = cards.filter((c) => match(c, b.dataset.f)).length));
  $("#filters").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    $$("#filters button").forEach((x) => x.classList.toggle("on", x === b));
    cards.forEach((c) => (c.hidden = !match(c, b.dataset.f)));
  });

  // Lightbox
  const lb = $("#lightbox");
  const close = () => { lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true"); };
  document.addEventListener("click", (e) => {
    const m = e.target.closest("button.media");
    if (m) { $("img", lb).src = m.dataset.img; lb.classList.add("open"); lb.setAttribute("aria-hidden", "false"); }
    else if (e.target === lb || e.target.closest(".lightbox button")) close();
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });

  // Theme
  $("#themeToggle").addEventListener("click", () => {
    const t = isDark() ? "light" : "dark";
    document.documentElement.dataset.theme = t;
    try { localStorage.setItem("theme", t); } catch (e) {}
    $$("img.qast").forEach((i) => (i.src = `assets/img/${t === "dark" ? "qast-logo-white" : "qast-logo"}.png`));
  });

  // Mobile menu
  const nav = $("#navLinks");
  $("#menuBtn").addEventListener("click", () => nav.classList.toggle("open"));
  $$("a", nav).forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));

  // Highlight current section in nav
  const io = new IntersectionObserver((ents) => ents.forEach((en) => {
    if (en.isIntersecting) $$("a", nav).forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + en.target.id));
  }), { rootMargin: "-40% 0px -55% 0px" });
  $$("main section[id]").forEach((s) => io.observe(s));

  $("#year").textContent = new Date().getFullYear();
})();
