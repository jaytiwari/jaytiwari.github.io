import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const links = [
  { icon: Mail, label: "jane@example.com", href: "mailto:jane@example.com" },
  { icon: Github, label: "github.com/janedoe", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "@janedoe", href: "https://twitter.com" },
];

const ContactTab = () => (
  <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
    <h2 className="mb-4 text-3xl">Get in Touch</h2>
    <p className="mb-10 max-w-lg leading-relaxed text-muted-foreground">
      I'm always open to interesting conversations and new opportunities. Feel free to reach out through any of the channels below.
    </p>
    <div className="grid gap-4 sm:grid-cols-2">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:glow-accent group"
        >
          <l.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{l.label}</span>
        </a>
      ))}
    </div>
  </div>
);

export default ContactTab;
