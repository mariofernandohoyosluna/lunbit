import React from 'react';
import { steps } from '../data/siteContent.js';

export function ProcessSection() {
  return (
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
  );
}
