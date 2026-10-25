import React from 'react';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { services, whatsappUrl } from '../data/siteContent.js';

export function ServicesSection() {
  return (
    <section className="services-section section-dark" id="servicios" aria-labelledby="services-heading">
          <div className="container">
            <div className="section-heading" data-reveal><div><p className="section-kicker">LO QUE PODEMOS CONSTRUIR</p><h2 id="services-heading">Tecnología según el problema.<br/><span>No al revés.</span></h2></div><p className="section-intro">Combinamos producto, desarrollo e integración según las necesidades reales de cada negocio.</p></div>
            <div className="services-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="service-image"><img src={service.image} alt={service.imageAlt} loading="lazy" decoding="async"/><span className="service-image-number">{service.number}</span></div><div className="service-card-body"><div className="service-top"><span className="service-number">SERVICIO</span><span className="service-icon">{React.createElement(service.icon, { size: 21, stroke: 1.65, 'aria-hidden': true })}</span></div><h3>{service.title}</h3><p>{service.text}</p><ul className="service-tags">{service.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul><a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`Hablar por WhatsApp sobre ${service.title}`}><IconBrandWhatsapp size={15} aria-hidden="true"/> Hablemos <span aria-hidden="true">↗</span></a></div></article>)}</div>
          </div>
        </section>
  );
}
