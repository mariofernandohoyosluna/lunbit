import React from 'react';
import { IconApps, IconBrandWhatsapp, IconBulb, IconMouse } from '@tabler/icons-react';
import { whatsappUrl, brandIsotipoSeed } from '../data/siteContent.js';

export function HeroSection() {
  return (
    <section className="hero section-dark" id="inicio" aria-labelledby="hero-heading">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow"><span className="eyebrow-mark"/> SOFTWARE · IA · AUTOMATIZACIÓN</p>
            <h1 className="hero-title" id="hero-heading">Ideas que se convierten en <span>soluciones reales.</span></h1>
            <p className="hero-copy">Diseñamos y construimos software, productos digitales y soluciones inteligentes adaptadas a las necesidades de cada negocio.</p>
            <div className="hero-actions"><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer"><IconBrandWhatsapp size={17} aria-hidden="true"/> Hablemos de tu idea</a><a className="text-link" href="#servicios">Conoce lo que hacemos <span aria-hidden="true">↓</span></a></div>
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
          <a className="scroll-cue" href="#necesidades" aria-label="Desliza hacia abajo para descubrir más">
            <span className="scroll-cue-line" aria-hidden="true" />
            <IconMouse className="scroll-cue-icon" size={20} stroke={1.7} aria-hidden="true" />
            <span className="scroll-cue-label">DESLIZA PARA DESCUBRIR</span>
          </a>
        </section>
  );
}
