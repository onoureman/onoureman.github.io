(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const CAT = { odoo: "Odoo & ERP", fullstack: "Full-stack", web: "Web", mobile: "iOS" };
  const GH = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5z"/></svg>';

  const media = (p) => {
    const m = p.media;
    if (m.logo === "qast") {
      const dark = document.documentElement.dataset.theme === "dark";
      return `<div class="media logo"><img class="qast" src="assets/img/${dark ? "qast-logo-white" : "qast-logo"}.png" alt="QAST logo" loading="lazy" width="480" height="223"></div>`;
    }
    if (m.github) {
      const repo = (p.links || []).find((l) => l.href.includes("github.com"));
      return `<a class="media gh" href="${repo ? repo.href : "https://github.com/onoureman"}" target="_blank" rel="noopener" aria-label="${esc(p.title)} on GitHub">${GH}<span>github.com/onoureman/<b>${esc(repo ? repo.href.split("/").pop() : "")}</b></span></a>`;
    }
    return `<button class="media" data-img="assets/img/${m.img}.webp" aria-label="Enlarge screenshot of ${esc(p.title)}"><img class="shot" src="assets/img/${m.img}.webp" alt="Screenshot of ${esc(p.title)}" loading="lazy" width="1200" height="750"></button>`;
  };
  const meta = (p) => `<div class="meta"><b>${CAT[p.cat]}</b>${p.where ? `<span>${esc(p.where)}</span>` : ""}${p.date ? `<span>${esc(p.date)}</span>` : ""}</div>`;
  const links = (p) => p.links ? `<div class="plinks">${p.links.map((l) => `<a href="${l.href}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join("")}</div>` : "";
  const note = (p) => p.note ? `<span class="note">${esc(p.note)}</span>` : "";

  const all = window.PROJECTS;
  $("#featured").innerHTML = all.filter((p) => p.featured).map((p) => `
    <article class="feature">
      ${media(p)}
      <div>
        ${meta(p)}
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.desc)}</p>
        ${p.points ? `<ul>${p.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
        <p class="tech">${p.tech.map(esc).join(" · ")}</p>
        ${note(p)}${links(p)}
      </div>
    </article>`).join("");

  // Grid order: GitHub repos are mixed in, with most of them near the top.
  const others = all.filter((p) => !p.featured && !p.media.github);
  const gh = all.filter((p) => !p.featured && p.media.github);
  const rest = [];
  others.forEach((p, i) => { rest.push(p); if (i % 3 === 0 && gh.length) rest.push(gh.shift()); });
  rest.push(...gh);
  $("#grid").innerHTML = rest.map((p) => `
    <article class="card" data-cat="${p.cat}">
      ${media(p)}
      ${meta(p)}
      <h4>${esc(p.title)}</h4>
      <p>${esc(p.desc)}</p>
      <p class="tech">${p.tech.map(esc).join(" · ")}</p>
      ${note(p)}${links(p)}
    </article>`).join("");
  const setCount = (n) => ($("#count").textContent = `(${n})`);
  setCount(rest.length);

  $("#filters").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    $$("#filters button").forEach((x) => x.classList.toggle("on", x === b));
    let n = 0;
    $$(".card").forEach((c) => { const show = b.dataset.f === "all" || c.dataset.cat === b.dataset.f; c.hidden = !show; n += show; });
    setCount(n);
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
    const t = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = t;
    try { localStorage.setItem("theme", t); } catch (e) {}
    $$("img.qast").forEach((i) => (i.src = `assets/img/${t === "dark" ? "qast-logo-white" : "qast-logo"}.png`));
  });

  // Mobile menu
  const nav = $("#navLinks");
  $("#menuBtn").addEventListener("click", () => nav.classList.toggle("open"));
  $$("a", nav).forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));

  // Active section in nav
  const io = new IntersectionObserver((ents) => ents.forEach((en) => {
    if (en.isIntersecting) $$("a", nav).forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + en.target.id));
  }), { rootMargin: "-40% 0px -55% 0px" });
  $$("main section[id]").forEach((s) => io.observe(s));

  $("#year").textContent = new Date().getFullYear();
})();
