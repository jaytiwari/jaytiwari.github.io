(function () {
  const params = new URLSearchParams(window.location.search);
  if (params.get("embed") === "1") {
    document.body.classList.add("embed");
  }

  const root = document.getElementById("articleRoot");
  const leftNav = document.getElementById("leftNav");
  const progress = document.getElementById("progressBar");

  if (!root || !leftNav || !progress) {
    return;
  }

  const headings = Array.from(root.querySelectorAll("h2, h3"));
  const h2s = headings.filter((h) => h.tagName === "H2");

  const slugify = (text) =>
    String(text || "section")
      .toLowerCase()
      .replace(/[^a-z0-9\\s-]/g, "")
      .trim()
      .replace(/\\s+/g, "-")
      .slice(0, 64);

  const ensureId = (h) => {
    if (h.id) return h.id;
    let base = slugify(h.textContent);
    if (!base) base = "section";
    let candidate = base;
    let i = 2;
    while (document.getElementById(candidate)) {
      candidate = base + "-" + i;
      i += 1;
    }
    h.id = candidate;
    return candidate;
  };

  const makeItem = (target, label, depth) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#" + target;
    a.textContent = label;
    if (depth) a.dataset.depth = String(depth);
    li.appendChild(a);
    return li;
  };

  h2s.forEach((h2) => {
    const id = ensureId(h2);
    leftNav.appendChild(makeItem(id, h2.textContent.trim(), 2));
  });

  const links = Array.from(document.querySelectorAll(".nav-list a"));
  const setActive = (id) => {
    links.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + id));
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((e) => e.isIntersecting);
      if (visible.length > 0) {
        setActive(visible[0].target.id);
      }
    },
    { rootMargin: "-20% 0px -70% 0px", threshold: [0, 1] }
  );

  headings.forEach((h) => observer.observe(h));

  const updateProgress = () => {
    const doc = document.documentElement;
    const scrollTop = doc.scrollTop || document.body.scrollTop || 0;
    const height = doc.scrollHeight - doc.clientHeight;
    const ratio = height > 0 ? Math.min(1, Math.max(0, scrollTop / height)) : 0;
    progress.style.transform = "scaleX(" + ratio.toFixed(4) + ")";
  };

  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
})();
