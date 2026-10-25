import React from 'react';
import { needs } from '../data/siteContent.js';

export function NeedsSection() {
  return (
    <section className="needs-section section-light" id="necesidades" aria-labelledby="needs-heading">
          <div className="container needs-layout">
            <div data-reveal><p className="section-kicker">TECNOLOGÍA PARA RESOLVER PROBLEMAS REALES</p><h2 id="needs-heading">Resolvemos lo que frena el avance.</h2><p className="section-intro">Una solución digital empieza por entender la necesidad.</p></div>
            <div className="needs-list" data-reveal>{needs.map((need) => <article className="need-item" key={need.title}><span className="need-icon">{React.createElement(need.icon, { size: 19, stroke: 1.7, 'aria-hidden': true })}</span><div><h3>{need.title}</h3><p>{need.text}</p></div></article>)}</div>
          </div>
        </section>
  );
}
