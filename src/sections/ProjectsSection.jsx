import React from 'react';
import { IconArrowUpRight, IconBrandWhatsapp } from '@tabler/icons-react';
import { nextProjectWhatsappUrl } from '../data/siteContent.js';

export function ProjectsSection() {
  return (
    <section className="projects-section section-light" id="proyectos" aria-labelledby="projects-heading"><div className="container"><div className="section-heading" data-reveal><div><p className="section-kicker">PORTAFOLIO</p><h2 id="projects-heading">Soluciones para<br/><span>el mundo real.</span></h2></div><p className="section-intro">Un proyecto que ya está en línea y espacios reservados para los próximos trabajos.</p></div><div className="project-placeholders" aria-label="Proyecto destacado y espacios para próximos proyectos">
          <article className="featured-project" data-reveal>
            <a className="featured-project-image" href="https://luxaurealegal.com.mx/" target="_blank" rel="noreferrer" aria-label="Visitar el sitio de Lux Aurea Legal"><img src="/images/lux-aurea-legal.webp" alt="Página de inicio de Lux Aurea Legal: asesoría legal con un diseño sobrio y fotografía editorial." loading="lazy" decoding="async"/><span className="featured-project-visit">VER SITIO <IconArrowUpRight size={14} stroke={1.8} aria-hidden="true"/></span></a>
            <div className="featured-project-content"><p className="featured-project-kicker">PROYECTO DESTACADO <i/> MÉXICO</p><h3>Lux Aurea Legal</h3><p>Sitio web para un despacho legal que presenta sus áreas de práctica, explica su enfoque y facilita el contacto directo por WhatsApp.</p><div className="featured-project-tags"><span>Sitio web</span><span>Bufete legal</span></div><a className="featured-project-link" href="https://luxaurealegal.com.mx/" target="_blank" rel="noreferrer">Visitar sitio <IconArrowUpRight size={16} stroke={1.8} aria-hidden="true"/></a></div>
          </article>
          <a className="project-image-placeholder" href={nextProjectWhatsappUrl} target="_blank" rel="noreferrer" aria-label="Quiero que mi proyecto sea el próximo en aparecer aquí. Hablemos por WhatsApp"><span>¿TU PROYECTO, EL PRÓXIMO?</span><small><IconBrandWhatsapp size={14} aria-hidden="true"/> Hablemos de tu idea por WhatsApp ↗</small></a><a className="project-image-placeholder" href={nextProjectWhatsappUrl} target="_blank" rel="noreferrer" aria-label="Quiero que mi proyecto sea el próximo en aparecer aquí. Hablemos por WhatsApp"><span>¿TU PROYECTO, EL PRÓXIMO?</span><small><IconBrandWhatsapp size={14} aria-hidden="true"/> Hablemos de tu idea por WhatsApp ↗</small></a>
        </div></div></section>
  );
}
