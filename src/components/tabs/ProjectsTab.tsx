const projects = [
  { title: "Aura Dashboard", desc: "A real-time analytics platform with data visualization and AI-powered insights.", tags: ["React", "D3.js", "Python"] },
  { title: "Noma Studio", desc: "Design collaboration tool for remote creative teams with live editing.", tags: ["TypeScript", "WebSocket", "Figma API"] },
  { title: "Meridian", desc: "Personal finance app helping users track spending habits and savings goals.", tags: ["React Native", "Node.js", "Stripe"] },
  { title: "Voxel Engine", desc: "A browser-based 3D voxel rendering engine built with WebGL and Rust/WASM.", tags: ["Rust", "WebGL", "WASM"] },
];

const ProjectsTab = () => (
  <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
    <h2 className="mb-8 text-3xl">Selected Projects</h2>
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((p) => (
        <div
          key={p.title}
          className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:glow-accent"
        >
          <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {p.title}
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
          <div className="flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="rounded bg-secondary px-2.5 py-1 text-xs text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ProjectsTab;
