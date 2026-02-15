import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AboutTab from "@/components/tabs/AboutTab";
import ProjectsTab from "@/components/tabs/ProjectsTab";
import ExperienceTab from "@/components/tabs/ExperienceTab";
import ContactTab from "@/components/tabs/ContactTab";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 px-6 py-6 md:px-12">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <h2 className="text-gradient text-xl font-semibold tracking-tight" style={{ fontFamily: "'DM Serif Display', serif" }}>
            JD
          </h2>
          <p className="text-sm text-muted-foreground">Portfolio &mdash; 2026</p>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Hello, I'm</p>
          <h1 className="mb-4 text-5xl leading-tight md:text-7xl">
            Jane <span className="text-gradient">Doe</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            A designer & developer crafting thoughtful digital experiences. Currently based in San Francisco.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <main className="px-6 pb-24 md:px-12">
        <div className="mx-auto max-w-5xl">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="mb-10 h-auto w-full justify-start gap-1 rounded-none border-b border-border bg-transparent p-0">
              {["about", "projects", "experience", "contact"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="rounded-none border-b-2 border-transparent px-5 py-3 text-sm font-medium capitalize text-muted-foreground transition-all data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="about"><AboutTab /></TabsContent>
            <TabsContent value="projects"><ProjectsTab /></TabsContent>
            <TabsContent value="experience"><ExperienceTab /></TabsContent>
            <TabsContent value="contact"><ContactTab /></TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 px-6 py-8 md:px-12">
        <div className="mx-auto flex max-w-5xl items-center justify-between text-sm text-muted-foreground">
          <p>&copy; 2026 Jane Doe</p>
          <p>Made with care</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
