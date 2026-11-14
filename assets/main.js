(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const CAT = { odoo: "ERP · Odoo", fullstack: "Full-stack", web: "Website", mobile: "iOS app" };
  const ext = '<svg viewBox="0 0 24 24"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>';
  const GH = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5z"/></svg>';
  const isDark = () => document.documentElement.dataset.theme === "dark";
  const repoOf = (p) => (p.links || []).find((l) => l.href.includes("github.com"));

  // Image area: screenshot, QAST logo, or GitHub panel — same frame for every card.
  const shot = (p) => {
    const tag = `<span class="tag">${CAT[p.cat]}</span>`;
    if (p.media.logo === "qast")
      return `<div class="shot logo"><img class="qast" src="assets/img/${isDark() ? "qast-logo-white" : "qast-logo"}.png" alt="QAST logo" loading="lazy" width="480" height="223">${tag}</div>`;
    if (p.media.github) {
      const r = repoOf(p);
      return `<a class="shot gh" href="${r ? r.href : "https://github.com/onoureman"}" target="_blank" rel="noopener" aria-label="${esc(p.title)} on GitHub">${GH}<small>github.com/onoureman/<b>${esc(r ? r.href.split("/").pop() : "")}</b></small>${tag}</a>`;
    }
    return `<button class="shot" data-img="assets/img/${p.media.img}.webp" data-title="${esc(p.title)}" aria-label="Enlarge screenshot of ${esc(p.title)}"><img class="img" src="assets/img/${p.media.img}.webp" alt="Screenshot of ${esc(p.title)}" loading="lazy" width="1200" height="750">${tag}</button>`;
  };

  // Order: projects as listed, with GitHub repos mixed in from near the top.
  // General software development first; ERP is one area among several.
  const ORDER = { fullstack: 0, web: 1, odoo: 2, mobile: 3 };
  const LEAD = ["MyCase: Knowledge Management & Case Workflow", "PMO Portfolio Dashboard", "Payment Tracker", "SaaS Subscription Manager"];
  const rank = (p) => { const i = LEAD.indexOf(p.title); return i >= 0 ? i - 100 : ORDER[p.cat] * 100 + window.PROJECTS.indexOf(p); };
  const sorted = [...window.PROJECTS].sort((a, b) => rank(a) - rank(b));
  const others = sorted.filter((p) => !p.media.github);
  const gh = sorted.filter((p) => p.media.github);
  const list = [];
  others.forEach((p, i) => { list.push(p); if (i % 3 === 1 && gh.length) list.push(gh.shift()); });
  list.push(...gh);

  $("#projectGrid").innerHTML = list.map((p) => {
    const meta = [p.where, p.date].filter(Boolean).map(esc).join(" · ");
    return `
    <article class="project" data-cat="${p.cat}" data-gh="${p.media.github || repoOf(p) ? 1 : 0}">
      ${shot(p)}
      <div class="body">
        ${meta ? `<span class="meta">${meta}</span>` : ""}
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.desc)}</p>
        ${p.note ? `<span class="note">${esc(p.note)}</span>` : ""}
        <div class="chips">${p.tech.map((t) => `<i>${esc(t)}</i>`).join("")}</div>
        ${p.links ? `<div class="plinks">${p.links.map((l) => `<a href="${l.href}" target="_blank" rel="noopener">${esc(l.label)} ${ext}</a>`).join("")}</div>` : ""}
      </div>
    </article>`;
  }).join("");

  // Filters with counts
  const cards = $$(".project");
  const match = (c, f) => f === "all" || (f === "github" ? c.dataset.gh === "1" : c.dataset.cat === f);
  $$("#filters button").forEach((b) => b.insertAdjacentHTML("beforeend", `<span>${cards.filter((c) => match(c, b.dataset.f)).length}</span>`));
  $("#filters").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    $$("#filters button").forEach((x) => x.classList.toggle("active", x === b));
    cards.forEach((c) => c.classList.toggle("hide", !match(c, b.dataset.f)));
  });

  // Lightbox
  const lb = $("#lightbox");
  const close = () => { lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true"); };
  document.addEventListener("click", (e) => {
    const s = e.target.closest("button.shot");
    if (s) { $("img", lb).src = s.dataset.img; $("img", lb).alt = s.dataset.title; $("p", lb).textContent = s.dataset.title; lb.classList.add("open"); lb.setAttribute("aria-hidden", "false"); }
    else if (e.target === lb || e.target.closest(".lightbox button")) close();
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });

  // Odoo CV link inside the CV contact card
  $$(".link-inline").forEach((el) => el.addEventListener("click", (e) => { e.preventDefault(); e.stopPropagation(); const a = document.createElement("a"); a.href = el.dataset.href; a.download = ""; a.click(); }));

  // Theme
  $("#themeToggle").addEventListener("click", () => {
    const t = isDark() ? "light" : "dark";
    document.documentElement.dataset.theme = t;
    try { localStorage.setItem("theme", t); } catch (e) {}
    $$("img.qast").forEach((i) => (i.src = `assets/img/${t === "dark" ? "qast-logo-white" : "qast-logo"}.png`));
  });

  // Mobile menu
  const links = $("#navLinks");
  $("#menuBtn").addEventListener("click", () => links.classList.toggle("open"));
  $$("a", links).forEach((a) => a.addEventListener("click", () => links.classList.remove("open")));

  // Active nav link
  const navIo = new IntersectionObserver((ents) => ents.forEach((en) => {
    if (en.isIntersecting) $$("a", links).forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach((s) => navIo.observe(s));

  $("#year").textContent = new Date().getFullYear();
})();
