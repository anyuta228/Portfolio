import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header.tsx';
import { HeroVoid } from './components/HeroVoid.tsx';
import { MetricsBar } from './components/MetricsBar.tsx';
import { ProjectsGallery } from './components/ProjectsGallery.tsx';
import { MotionGallery } from './components/MotionGallery.tsx';
import { CareerTimeline } from './components/CareerTimeline.tsx';
import { SkillsMatrix } from './components/SkillsMatrix.tsx';
import { EndorsementsSection } from './components/EndorsementsSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ProjectDetailPage } from './components/ProjectDetailPage.tsx';
import { ResumeModal } from './components/ResumeModal.tsx';
import { ProjectCase } from './types.ts';

export function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectCase | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // 60 FPS global mouse spotlight tracker using requestAnimationFrame & CSS variables (Zero React re-render)
  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const updateSpotlight = () => {
      if (rootRef.current) {
        rootRef.current.style.setProperty('--mouse-x', `${mouseX}px`);
        rootRef.current.style.setProperty('--mouse-y', `${mouseY}px`);
      }
      rafId = requestAnimationFrame(updateSpotlight);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    rafId = requestAnimationFrame(updateSpotlight);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const handleExploreWorks = () => {
    const el = document.getElementById('works-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // If a project is selected, render the dedicated full-page case study view
  if (selectedProject) {
    return (
      <div className="min-h-screen bg-[#08090C] text-[#F8FAFC] selection:bg-[#8AB4F8] selection:text-[#08090C] relative font-sans">
        <ProjectDetailPage
          project={selectedProject}
          onBack={() => {
            setSelectedProject(null);
            setTimeout(() => {
              const el = document.getElementById('works-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 50);
          }}
          onSelectProject={(nextP) => setSelectedProject(nextP)}
        />

        {/* Official Resume CV Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      className="min-h-screen bg-[#08090C] text-[#F8FAFC] selection:bg-[#8AB4F8] selection:text-[#08090C] relative font-sans eclipse-grid"
    >
      {/* Floating Island / Pill Header */}
      <Header onOpenResume={() => setIsResumeOpen(true)} />

      {/* Hero Section with Human Copywriting & Interactive Eclipse Stage */}
      <main className="relative z-10">
        <HeroVoid
          onOpenResume={() => setIsResumeOpen(true)}
          onExploreWorks={handleExploreWorks}
        />

        {/* Commercial Verified Metrics from Resume */}
        <MetricsBar />

        {/* Selected Projects Archive with Live Interactive Preview Stage */}
        <ProjectsGallery onSelectProject={(p) => setSelectedProject(p)} />

        {/* Motion & Interaction Physics Showcase from Dribbble */}
        <MotionGallery />

        {/* Verified Career Chronology & Achievements */}
        <CareerTimeline />

        {/* Hard Skills, Tooling & Design Systems Matrix */}
        <SkillsMatrix />

        {/* Peer Endorsements & Social Proof from UPROCK & Industry */}
        <EndorsementsSection />

        {/* Minimalist Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Official Resume CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
