import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Services } from './components/Services';
import { GitHubSection } from './components/GitHubSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { SpiderWebCanvas } from './components/SpiderWebCanvas';
import { Project } from './types/portfolio';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [initialContactService, setInitialContactService] = useState<string | undefined>(undefined);

  const scrollToContact = (serviceName?: string) => {
    if (serviceName) {
      setInitialContactService(serviceName);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#07070b] text-[#f1f1f6] selection:bg-[#ff2a55] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Spider-Verse Background Web Canvas (Dynamic Node Strands & Particle Bursts) */}
      <SpiderWebCanvas />

      {/* Main Sticky Navbar */}
      <Navbar onContactClick={() => scrollToContact()} />

      <main className="relative z-10">
        {/* Hero Section */}
        <Hero
          onViewWorkClick={scrollToProjects}
          onContactClick={() => scrollToContact()}
        />

        {/* About Section ("ENTER MY SPIDER-VERSE") */}
        <About />

        {/* Skills Section ("MY POWERS") */}
        <Skills />

        {/* Projects Section ("MY MISSIONS") */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Experience Section ("THE ORIGIN STORY") */}
        <Experience />

        {/* Services Section ("WHAT I CAN BUILD") */}
        <Services onSelectService={(service) => scrollToContact(service)} />

        {/* GitHub / Activity Section ("MY WEB-SHOOTER") */}
        <GitHubSection />

        {/* Contact Section ("NEED A DEVELOPER?") */}
        <Contact initialService={initialContactService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Detail Modal with Spider-Verse Portal Effect */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
