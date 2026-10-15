import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import {
  IconApps,
  IconArrowUpRight,
  IconBrandInstagram,
  IconAutomation,
  IconBulb,
  IconCode,
  IconMouse,
  IconPlugConnected,
  IconRepeat,
  IconSparkles,
  IconUnlink,
} from '@tabler/icons-react';

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MorphSVGPlugin);

const whatsappUrl = 'https://wa.me/573104339539?text=Hola%20LUNBIT%2C%20quiero%20hablar%20sobre%20un%20proyecto.';
const nextProjectWhatsappUrl = `https://wa.me/573104339539?text=${encodeURIComponent('Hola LUNBIT, quiero que mi proyecto sea el próximo en aparecer aquí. Hablemos de mi idea.')}`;
const brandIsotipoPath = 'M88 72 H142 V246 C142 273.614 164.386 296 192 296 H294 V242 H196 V72 Z';
const brandIsotipoSeed = 'M180 180 C186 180 196 180 202 180';

const needs = [
  { icon: IconBulb, title: 'Una idea por lanzar', text: 'Dale forma y conviértela en un producto digital.' },
  { icon: IconRepeat, title: 'Tareas que se repiten', text: 'Automatiza pasos manuales y recupera tiempo.' },
  { icon: IconUnlink, title: 'Sistemas aislados', text: 'Conecta herramientas y comparte información.' },
];

const services = [
  { number: '01', title: 'Producto digital', text: 'Diseño y desarrollo de software, aplicaciones y productos a medida.', image: '/images/service-product.webp', imageAlt: 'Laptop con una interfaz de producto digital y bocetos de diseño sobre un escritorio.' , icon: IconCode, tags: ['Web y móvil', 'SaaS', 'Evolución de producto'] },
  { number: '02', title: 'Automatización e IA', text: 'Procesos digitales conectados para reducir tareas manuales y aprovechar mejor la información.', image: '/images/lunbit-founder-work.webp', imageAlt: 'La persona detrás de LUNBIT trabajando frente a una interfaz de procesos digitales.', icon: IconAutomation, tags: ['Automatización', 'Inteligencia artificial', 'Flujos de trabajo'] },
  { number: '03', title: 'Integraciones y plataforma', text: 'Conexión entre aplicaciones, datos y servicios que ya usa el negocio.', image: '/images/service-integrations.webp', imageAlt: 'Laptop, tableta y teléfono con interfaces digitales coordinadas.', icon: IconPlugConnected, tags: ['APIs', 'Backend y datos', 'Infraestructura'] },
];

const steps = [
  { number: '01', name: 'Descubrir', text: 'Aclaramos el contexto, las personas y el objetivo.', chip: 'Entender el contexto' },
  { number: '02', name: 'Diseñar', text: 'Definimos experiencia, alcance y arquitectura.', chip: 'Definir el camino' },
  { number: '03', name: 'Construir', text: 'Convertimos el concepto en un producto funcional.', chip: 'Hacerlo realidad' },
  { number: '04', name: 'Conectar', text: 'Integramos servicios y datos cuando el proyecto lo necesita.', chip: 'Integrar las piezas' },
  { number: '05', name: 'Lanzar', text: 'Validamos y preparamos la solución para salir.', chip: 'Ponerlo en marcha' },
  { number: '06', name: 'Mejorar', text: 'Evolucionamos el producto según nuevas necesidades.', chip: 'Seguir evolucionando' },
];

function Logo() {
  return <img className="brand-logo" src="/brand/LUNBIT_logo_white.svg" alt="LUNBIT Digital Solutions" />;
}

function PageScrollProgress() {
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
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return <div className="page-scroll-widget" role="group" aria-label="Indicador de desplazamiento de la página"><IconMouse className="page-scroll-icon" size={18} stroke={1.6} aria-hidden="true"/><span className="page-scroll-progress" role="progressbar" aria-label="Progreso de desplazamiento de la página" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><i/></span></div>;
}

function Header() {
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
        <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Hablemos <span aria-hidden="true">↗</span></a>
        <a className="menu-brand-mark" href="#inicio" aria-label="LUNBIT, volver al inicio" onClick={() => setOpen(false)}><img src="/brand/LUNBIT_isotipo.svg" alt="" /></a>
      </nav>
    </header>
  );
}

export default function App() {
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add({
      reduce: '(prefers-reduced-motion: reduce)',
      desktop: '(min-width: 761px) and (prefers-reduced-motion: no-preference)',
      mobile: '(max-width: 760px) and (prefers-reduced-motion: no-preference)',
    }, (context) => {
      const { reduce } = context.conditions;
      if (reduce) return () => {};
      const duration = context.conditions.mobile ? 0.55 : 0.8;
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
      intro.from('.eyebrow, .hero-title, .hero-copy, .hero-actions', { y: 22, opacity: 0, duration, stagger: 0.12 })
        .from('.hero-art-wrap', { x: 34, opacity: 0, scale: 0.97, duration: 1.05 }, '-=0.65')
        .from('.hero-visual-chip', { y: 14, opacity: 0, duration: 0.55, stagger: 0.12 }, '-=0.45');
      gsap.to('.hero-visual-chip', { y: -7, duration: 2.8, repeat: -1, yoyo: true, ease: 'sine.inOut', stagger: 0.28 });
      gsap.set('.hero-brand-mark', { autoAlpha: 0, scale: 0.92 });
      gsap.set('.hero-brand-stroke', { drawSVG: 0 });
      const isMobile = context.conditions.mobile;
      const heroBrandTimeline = gsap.timeline({ scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: `+=${isMobile ? 850 : 1200}`,
        pin: !isMobile,
        pinSpacing: true,
        anticipatePin: 1,
        scrub: isMobile ? 0.35 : 0.7,
        invalidateOnRefresh: true,
      } });
      heroBrandTimeline
        .to('.hero-brand-path', { morphSVG: { shape: brandIsotipoPath, type: 'rotational' }, duration: 0.32, ease: 'power2.inOut' }, 0)
        .to('.hero-brand-path', { drawSVG: '0% 100%', duration: 0.27, ease: 'none' }, 0.29)
        .to('.hero-brand-rect', { drawSVG: '0% 100%', duration: 0.17, ease: 'none' }, 0.48)
        .to('.hero-brand-mark', { autoAlpha: 1, scale: 1, duration: 0.22, ease: 'none' }, 0.43)
        .to('.hero-brand-stroke', { autoAlpha: 0, duration: 0.08, ease: 'none' }, 0.57)
        .to('.hero-brand-mark', { autoAlpha: 0, scale: 0.94, duration: 0.14, ease: 'none' }, 0.8)
        .to('.hero-brand-path', { morphSVG: { shape: brandIsotipoSeed, type: 'rotational' }, drawSVG: '100% 100%', autoAlpha: 0, duration: 0.2, ease: 'power1.inOut' }, 0.8)
        .to('.hero-brand-rect', { drawSVG: '100% 100%', autoAlpha: 0, duration: 0.2, ease: 'power1.inOut' }, 0.8);
      gsap.to('.ribbon-track', { xPercent: context.conditions.mobile ? -5 : -11, ease: 'none', scrollTrigger: { trigger: '.motion-ribbon', start: 'top bottom', end: 'bottom top', scrub: 0.65 } });
      gsap.utils.toArray('[data-reveal]').forEach((element) => {
        gsap.from(element, { y: 28, opacity: 0, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 86%', once: true } });
      });
      gsap.from('.services-grid', { y: 20, opacity: 0, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: '.services-grid', start: 'top 82%', once: true } });
      const processSteps = gsap.utils.toArray('.process-step');
      gsap.set('.connection-glow', { drawSVG: '0%', opacity: 0.14 });
      const activateStep = (step, index) => {
        const stage = document.querySelector('.process-stage');
        stage?.setAttribute('data-stage', index);
        const counter = stage?.querySelector('.stage-counter b');
        if (counter) counter.textContent = step.querySelector('.step-number').textContent.slice(0, 2);
        const current = stage?.querySelector('.stage-current');
        if (current) current.textContent = step.querySelector('h3').textContent.toUpperCase();
        processSteps.forEach((item, itemIndex) => item.classList.toggle('is-active', itemIndex === index));
        stage?.querySelectorAll('.process-module').forEach((module, moduleIndex) => module.classList.toggle('is-lit', moduleIndex <= Math.min(index, 4)));
        gsap.to('.process-beam', { scaleY: index / Math.max(processSteps.length - 1, 1), duration: 0.55, ease: 'power2.out', overwrite: true });
        gsap.to('.stage-progress i', { scaleX: (index + 1) / processSteps.length, duration: 0.65, ease: 'power2.out', overwrite: true });
        gsap.fromTo('.process-module', { scale: 0.94 }, { scale: 1, duration: 0.55, stagger: 0.045, ease: 'power2.out', overwrite: true });
        gsap.to('.connection-glow', { drawSVG: ((index + 1) / processSteps.length) * 100 + '%', opacity: 0.92, duration: 0.7, ease: 'power2.out', overwrite: true });
        gsap.to('.process-visual-core', { rotation: index * 32, duration: 0.8, ease: 'power2.out', overwrite: true });
      };
      processSteps.forEach((step, index) => {
        ScrollTrigger.create({
          trigger: step,
          start: context.conditions.desktop ? 'center center' : 'top 62%',
          end: context.conditions.desktop ? 'center center' : 'bottom 62%',
          onEnter: () => activateStep(step, index),
          onEnterBack: () => activateStep(step, index),
        });
      });
      activateStep(processSteps[0], 0);
      return () => { intro.kill(); };
    });
    return () => mm.revert();
  }, []);

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header />
      <PageScrollProgress />
      <main id="contenido">
        <section className="hero section-dark" id="inicio" aria-labelledby="hero-heading">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow"><span className="eyebrow-mark"/> SOFTWARE · IA · AUTOMATIZACIÓN</p>
            <h1 className="hero-title" id="hero-heading">Ideas que se convierten en <span>soluciones reales.</span></h1>
            <p className="hero-copy">Diseñamos y construimos software, productos digitales y soluciones inteligentes adaptadas a las necesidades de cada negocio.</p>
            <div className="hero-actions"><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Hablemos de tu idea <span aria-hidden="true">↗</span></a><a className="text-link" href="#servicios">Conoce lo que hacemos <span aria-hidden="true">↓</span></a></div>
            <div className="hero-proof"><span className="hero-proof-line"/><span>Ideas digitales</span><i/><span>Automatización</span><i/><span>Integraciones</span></div>
          </div>
          <div className="hero-art-wrap">
            <div className="hero-image-frame">
              <div className="hero-brand-visual" aria-hidden="true">
                <span className="hero-brand-halo" />
                <span className="hero-brand-orbit hero-brand-orbit-a" />
                <span className="hero-brand-orbit hero-brand-orbit-b" />
                <div className="hero-brand-mark-wrap">
                  <img className="hero-brand-mark" src="/brand/LUNBIT_isotipo.svg" alt="" />
                  <svg className="hero-brand-outline" viewBox="0 0 382 360" aria-hidden="true">
                    <defs><linearGradient id="heroBrandGradient" gradientUnits="userSpaceOnUse" x1="88" y1="72" x2="270" y2="300"><stop offset="0%" stopColor="#2376E8"/><stop offset="48%" stopColor="#6C3CF3"/><stop offset="72%" stopColor="#315CEB"/><stop offset="100%" stopColor="#10BBD1"/></linearGradient></defs>
                    <g transform="translate(0 15)"><path className="hero-brand-stroke hero-brand-path" d={brandIsotipoSeed}/><rect className="hero-brand-stroke hero-brand-rect" x="196" y="34" width="62" height="62" rx="8"/></g>
                  </svg>
                </div>
              </div>
              <div className="hero-visual-chip chip-concept"><IconBulb size={16} stroke={1.7} aria-hidden="true"/><span><small>01 / PUNTO DE PARTIDA</small>Una idea</span></div>
              <div className="hero-visual-chip chip-product"><IconApps size={17} stroke={1.7} aria-hidden="true"/><span><small>02 / LO QUE CONSTRUIMOS</small>Un producto digital</span></div>
              <div className="hero-art-caption"><span className="caption-pulse"/> IDEA <i/> DISEÑO <i/> PRODUCTO</div>
              <span className="hero-image-frame-line" aria-hidden="true" />
            </div>
          </div>
          <a className="scroll-cue" href="#necesidades"><span/> DESPLAZA PARA DESCUBRIR</a>
        </section>

        <div className="motion-ribbon" aria-hidden="true"><div className="ribbon-track"><div className="ribbon-group">{['SOFTWARE A MEDIDA','AUTOMATIZACIÓN','INTEGRACIONES','INTELIGENCIA ARTIFICIAL'].map((item)=><span className="ribbon-item" key={item}>{item}<i/></span>)}</div><div className="ribbon-group">{['SOFTWARE A MEDIDA','AUTOMATIZACIÓN','INTEGRACIONES','INTELIGENCIA ARTIFICIAL'].map((item)=><span className="ribbon-item" key={`repeat-${item}`}>{item}<i/></span>)}</div></div></div>

        <section className="needs-section section-light" id="necesidades" aria-labelledby="needs-heading">
          <div className="container needs-layout">
            <div data-reveal><p className="section-kicker">TECNOLOGÍA PARA RESOLVER PROBLEMAS REALES</p><h2 id="needs-heading">Resolvemos lo que frena el avance.</h2><p className="section-intro">Una solución digital empieza por entender la necesidad.</p></div>
            <div className="needs-list" data-reveal>{needs.map((need) => <article className="need-item" key={need.title}><span className="need-icon">{React.createElement(need.icon, { size: 19, stroke: 1.7, 'aria-hidden': true })}</span><div><h3>{need.title}</h3><p>{need.text}</p></div><span className="need-arrow" aria-hidden="true">↗</span></article>)}</div>
          </div>
        </section>

        <section className="services-section section-dark" id="servicios" aria-labelledby="services-heading">
          <div className="container">
            <div className="section-heading" data-reveal><div><p className="section-kicker">LO QUE PODEMOS CONSTRUIR</p><h2 id="services-heading">Tecnología según el problema.<br/><span>No al revés.</span></h2></div><p className="section-intro">Combinamos producto, desarrollo e integración según las necesidades reales de cada negocio.</p></div>
            <div className="services-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="service-image"><img src={service.image} alt={service.imageAlt} loading="lazy" decoding="async"/><span className="service-image-number">{service.number}</span></div><div className="service-card-body"><div className="service-top"><span className="service-number">SERVICIO</span><span className="service-icon">{React.createElement(service.icon, { size: 21, stroke: 1.65, 'aria-hidden': true })}</span></div><h3>{service.title}</h3><p>{service.text}</p><ul className="service-tags">{service.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul><a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`Hablar por WhatsApp sobre ${service.title}`}>Hablemos <span aria-hidden="true">↗</span></a></div></article>)}</div>
          </div>
        </section>

        <section className="process-section section-light" id="proceso" aria-labelledby="process-heading">
          <div className="container">
            <div className="section-heading process-heading" data-reveal><div><p className="section-kicker">UN CAMINO CLARO, DE PRINCIPIO A FIN</p><h2 id="process-heading">De la pregunta<br/>a la <span>puesta en marcha.</span></h2></div><p className="section-intro">Cada etapa acerca la idea a su lugar en el mundo real. Con diálogo, intención y espacio para aprender en el camino.</p></div>
            <div className="process-story">
              <div className="process-steps"><div className="process-rail" aria-hidden="true"/><div className="process-beam" aria-hidden="true"/>{steps.map((step, index) => <article className={`process-step${index === 0 ? ' is-active' : ''}`} key={step.number}><span className="step-dot"/><span className="step-number">{step.number} / ETAPA</span><h3>{step.name}</h3><p>{step.text}</p><span className="step-chip">{step.chip}</span></article>)}</div>
              <div className="process-stage" data-stage="0" aria-hidden="true">
                <div className="process-stage-top"><span><i/> EN PROCESO <b className="stage-current">DESCUBRIR</b></span><span className="stage-counter"><b>01</b> — 06</span></div>
                <div className="process-canvas"><div className="canvas-grid"/><div className="process-halo"/><div className="process-orbit orbit-a"/><div className="process-orbit orbit-b"/>
                  <div className="process-module module-idea"><span>01</span><b>IDEA</b><i>Contexto</i></div><div className="process-module module-design"><span>02</span><b>DISEÑO</b><i>Experiencia</i></div><div className="process-module module-build"><span>03</span><b>BUILD</b><i>Producto</i></div><div className="process-module module-data"><span>04</span><b>DATOS</b><i>Conexiones</i></div><div className="process-module module-launch"><span>05</span><b>LIVE</b><i>En marcha</i></div>
                  <svg className="process-connections" viewBox="0 0 500 330" preserveAspectRatio="none"><path d="M94 78 C155 78 155 160 220 160 S292 78 367 78 M220 160 C285 160 295 247 380 247"/><path d="M94 78 C155 78 155 160 220 160 S292 78 367 78 M220 160 C285 160 295 247 380 247" className="connection-glow"/></svg>
                  <div className="process-visual-core"><img src="/brand/LUNBIT_isotipo.svg" alt=""/></div><div className="process-orbit orbit-c"/>
                </div>
                <div className="process-stage-footer"><span className="stage-live-dot"/><span className="stage-caption">DE LA IDEA A UNA SOLUCIÓN CONECTADA</span><span className="stage-progress"><i/></span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section section-light" id="proyectos" aria-labelledby="projects-heading"><div className="container"><div className="section-heading" data-reveal><div><p className="section-kicker">PORTAFOLIO</p><h2 id="projects-heading">Soluciones para<br/><span>el mundo real.</span></h2></div><p className="section-intro">Un proyecto que ya está en línea y espacios reservados para los próximos trabajos.</p></div><div className="project-placeholders" aria-label="Proyecto destacado y espacios para próximos proyectos">
          <article className="featured-project" data-reveal>
            <a className="featured-project-image" href="https://luxaurealegal.com.mx/" target="_blank" rel="noreferrer" aria-label="Visitar el sitio de Lux Aurea Legal"><img src="/images/lux-aurea-legal.webp" alt="Página de inicio de Lux Aurea Legal: asesoría legal con un diseño sobrio y fotografía editorial." loading="lazy" decoding="async"/><span className="featured-project-visit">VER SITIO <IconArrowUpRight size={14} stroke={1.8} aria-hidden="true"/></span></a>
            <div className="featured-project-content"><p className="featured-project-kicker">PROYECTO DESTACADO <i/> MÉXICO</p><h3>Lux Aurea Legal</h3><p>Sitio web para un despacho legal que presenta sus áreas de práctica, explica su enfoque y facilita el contacto directo por WhatsApp.</p><div className="featured-project-tags"><span>Sitio web</span><span>Bufete legal</span></div><a className="featured-project-link" href="https://luxaurealegal.com.mx/" target="_blank" rel="noreferrer">Visitar sitio <IconArrowUpRight size={16} stroke={1.8} aria-hidden="true"/></a></div>
          </article>
          <a className="project-image-placeholder" href={nextProjectWhatsappUrl} target="_blank" rel="noreferrer" aria-label="Quiero que mi proyecto sea el próximo en aparecer aquí. Hablemos por WhatsApp"><span>¿TU PROYECTO, EL PRÓXIMO?</span><small>Hablemos de tu idea por WhatsApp ↗</small></a><a className="project-image-placeholder" href={nextProjectWhatsappUrl} target="_blank" rel="noreferrer" aria-label="Quiero que mi proyecto sea el próximo en aparecer aquí. Hablemos por WhatsApp"><span>¿TU PROYECTO, EL PRÓXIMO?</span><small>Hablemos de tu idea por WhatsApp ↗</small></a>
        </div></div></section>

        <section className="contact-section section-dark" id="contacto" aria-labelledby="contact-heading">
          <div className="contact-glow" aria-hidden="true"/><div className="container contact-layout">
            <div className="contact-copy" data-reveal><p className="section-kicker">EMPECEMOS POR CONVERSAR</p><h2 id="contact-heading">¿Tienes una idea<br/>o un problema?</h2><p>Cuéntanos qué necesitas. Te ayudamos a explorar el siguiente paso para convertirlo en una solución digital.</p><div className="contact-small"><span className="contact-pulse"/> <span>Proyectos remotos y digitales · Colombia</span></div></div>
            <div className="contact-panel contact-whatsapp-panel" data-reveal><div className="contact-panel-head"><span>HABLEMOS DE TU PROYECTO</span><span className="panel-spark"><IconSparkles size={17} stroke={1.6} aria-hidden="true" /></span></div><p>Cuéntanos sobre tu idea, proyecto o proceso en una conversación directa por WhatsApp.</p><a className="button button-primary whatsapp-button" href={whatsappUrl} target="_blank" rel="noreferrer">Hablemos por WhatsApp <span aria-hidden="true">↗</span></a><span className="whatsapp-number">+57 310 433 9539</span></div>
          </div>
        </section>
      </main>
      <footer className="site-footer section-dark"><div className="container footer-main"><a className="logo-link footer-logo" href="#inicio" aria-label="LUNBIT, volver al inicio"><Logo /></a><p>Ideas que se convierten<br/>en soluciones reales.</p><nav className="footer-nav" aria-label="Enlaces del pie de página"><a href="#servicios">Servicios</a><a href="#proceso">Proceso</a><a href="#proyectos">Proyectos</a><a href="#contacto">Contacto</a><a className="footer-social-link" href="https://www.instagram.com/lunbit.dev" target="_blank" rel="noopener noreferrer" aria-label="LUNBIT en Instagram (se abre en una nueva pestaña)"><IconBrandInstagram size={15} stroke={1.7} aria-hidden="true"/><span>Instagram</span></a></nav><a className="back-top" href="#inicio">Volver arriba <span aria-hidden="true">↑</span></a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} LUNBIT Digital Solutions. Todos los derechos reservados.</span><span>Proyectos remotos y digitales · Colombia</span></div></footer>
    </>
  );
}
