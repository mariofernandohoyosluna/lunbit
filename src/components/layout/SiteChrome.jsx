import React, { useEffect, useState } from 'react';
import { Observer } from 'gsap/Observer';
import { IconBrandWhatsapp, IconMouse } from '@tabler/icons-react';
import { whatsappUrl } from '../../data/siteContent.js';

export function Logo() {
  return <img className="brand-logo" src="/brand/LUNBIT_logo_white.svg" alt="LUNBIT Digital Solutions" />;
}

export function PageScrollProgress() {
  useEffect(() => {
    const progress = document.querySelector('.page-scroll-progress');
    if (!progress) return undefined;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const percentage = scrollable > 0 ? Math.min(100, Math.max(0, Math.round((window.scrollY / scrollable) * 100))) : 0;
        progress.setAttribute('aria-valuenow', String(percentage));
        progress.style.setProperty('--page-progress', `${percentage}%`);
      });
    };
    update();
    const progressObserver = Observer.create({ target: window, type: 'scroll', debounce: true, onChange: update });
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(frame);
      progressObserver.kill();
      window.removeEventListener('resize', update);
    };
  }, []);

  return <div className="page-scroll-widget" role="group" aria-label="Indicador de desplazamiento de la página"><IconMouse className="page-scroll-icon" size={18} stroke={1.6} aria-hidden="true"/><span className="page-scroll-progress" role="progressbar" aria-label="Progreso de desplazamiento de la página" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><i/></span></div>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const closeOnEscape = (event) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);
  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 12);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);
  useEffect(() => {
    let frame = 0;
    const updateActiveSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const links = [...document.querySelectorAll('#main-nav a[href^="#"]')];
        const current = links
          .map((link) => ({ id: link.getAttribute('href').slice(1), top: document.getElementById(link.getAttribute('href').slice(1))?.getBoundingClientRect().top }))
          .filter((section) => section.top !== undefined && section.top <= 112)
          .at(-1);
        setActiveSection(current?.id || '');
      });
    };
    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);
  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <a className="logo-link nav-logo-link" href="#inicio" aria-label="LUNBIT, inicio"><img className="nav-isotipo" src="/brand/LUNBIT_isotipo.svg" alt="LUNBIT" /></a>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>
        <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span><span/><span/>
      </button>
      <nav id="main-nav" className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Navegación principal">
        <a href="#servicios" className={activeSection === 'servicios' ? 'is-active' : ''} aria-current={activeSection === 'servicios' ? 'location' : undefined} onClick={() => setOpen(false)}>Servicios</a><a href="#proceso" className={activeSection === 'proceso' ? 'is-active' : ''} aria-current={activeSection === 'proceso' ? 'location' : undefined} onClick={() => setOpen(false)}>Proceso</a><a href="#proyectos" className={activeSection === 'proyectos' ? 'is-active' : ''} aria-current={activeSection === 'proyectos' ? 'location' : undefined} onClick={() => setOpen(false)}>Proyectos</a><a href="#contacto" className={activeSection === 'contacto' ? 'is-active' : ''} aria-current={activeSection === 'contacto' ? 'location' : undefined} onClick={() => setOpen(false)}>Contacto</a>
        <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}><IconBrandWhatsapp size={16} aria-hidden="true"/> Hablemos <span aria-hidden="true">↗</span></a>
        <a className="menu-brand-mark" href="#inicio" aria-label="LUNBIT, volver al inicio" onClick={() => setOpen(false)}><img src="/brand/LUNBIT_isotipo.svg" alt="" /></a>
      </nav>
    </header>
  );
}

