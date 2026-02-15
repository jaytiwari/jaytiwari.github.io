const experience = [
  { role: "Senior Frontend Engineer", company: "Vercel", period: "2023 — Present", desc: "Leading design system development and building developer tooling for the Next.js ecosystem." },
  { role: "Product Designer & Engineer", company: "Stripe", period: "2020 — 2023", desc: "Designed and shipped payment components used by millions of businesses worldwide." },
  { role: "Full-Stack Developer", company: "Freelance", period: "2018 — 2020", desc: "Built custom web applications for startups across fintech, healthcare, and e-commerce." },
];

const ExperienceTab = () => (
  <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
    <h2 className="mb-8 text-3xl">Experience</h2>
    <div className="space-y-0">
      {experience.map((e, i) => (
        <div key={e.company} className="group relative border-l-2 border-border py-8 pl-8 transition-colors hover:border-primary">
          <div className="absolute -left-[7px] top-10 h-3 w-3 rounded-full border-2 border-border bg-background transition-colors group-hover:border-primary group-hover:bg-primary" />
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-primary">{e.period}</p>
          <h3 className="mb-1 text-xl font-semibold text-foreground">{e.role}</h3>
          <p className="mb-2 text-sm text-muted-foreground">{e.company}</p>
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default ExperienceTab;
