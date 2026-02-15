const skills = ["React", "TypeScript", "Figma", "Node.js", "Tailwind CSS", "PostgreSQL", "Python", "AWS"];

const AboutTab = () => (
  <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
    <div className="grid gap-12 md:grid-cols-2">
      <div>
        <h2 className="mb-4 text-3xl">About Me</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          I'm a full-stack designer and developer with 7+ years of experience building products that people love. I care deeply about craft, accessibility, and performance.
        </p>
        <p className="leading-relaxed text-muted-foreground">
          When I'm not coding, you'll find me hiking trails, sketching in coffee shops, or experimenting with generative art.
        </p>
      </div>
      <div>
        <h3 className="mb-4 text-xl" style={{ fontFamily: "'DM Serif Display', serif" }}>Skills & Tools</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-secondary-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default AboutTab;
