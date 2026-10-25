import React from 'react';
import { SiteFooter } from './components/layout/SiteFooter.jsx';
import { WhatsAppButton } from './components/ui/WhatsAppButton.jsx';
import { Header, PageScrollProgress } from './components/layout/SiteChrome.jsx';
import { useLandingAnimations } from './hooks/useLandingAnimations.js';
import { HeroSection } from './sections/HeroSection.jsx';
import { NeedsSection } from './sections/NeedsSection.jsx';
import { ServicesSection } from './sections/ServicesSection.jsx';
import { ProcessSection } from './sections/ProcessSection.jsx';
import { ProjectsSection } from './sections/ProjectsSection.jsx';
import { ContactSection } from './sections/ContactSection.jsx';
import { MotionRibbon } from './sections/MotionRibbon.jsx';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage.jsx';

export default function App() {
  const isPrivacyPage = window.location.pathname.replace(/\/+$/, '') === '/privacidad';
  useLandingAnimations(!isPrivacyPage);

  if (isPrivacyPage) return <PrivacyPolicyPage />;

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header />
      <PageScrollProgress />
      <WhatsAppButton />
      <div id="smooth-wrapper"><div id="smooth-content">
      <main id="contenido">
        <HeroSection />

        <MotionRibbon />

        <NeedsSection />

        <ServicesSection />

        <ProcessSection />

        <ProjectsSection />

        <ContactSection />
      </main>
      <SiteFooter />
          </div></div>
        </>
  );
}
