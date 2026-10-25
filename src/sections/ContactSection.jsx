import React from 'react';
import { IconBrandWhatsapp, IconSparkles } from '@tabler/icons-react';
import { whatsappUrl } from '../data/siteContent.js';

export function ContactSection() {
  return (
    <section className="contact-section section-dark" id="contacto" aria-labelledby="contact-heading">
          <div className="contact-glow" aria-hidden="true"/><div className="container contact-layout">
            <div className="contact-copy" data-reveal><p className="section-kicker">EMPECEMOS POR CONVERSAR</p><h2 id="contact-heading">¿Tienes una idea<br/>o un problema?</h2><p>Cuéntanos qué necesitas. Te ayudamos a explorar el siguiente paso para convertirlo en una solución digital.</p><div className="contact-small"><span className="contact-pulse"/> <span>Desde Cali, Valle del Cauca · Atención remota en Colombia</span></div></div>
            <div className="contact-panel contact-whatsapp-panel" data-reveal><div className="contact-panel-head"><span>HABLEMOS DE TU PROYECTO</span><span className="panel-spark"><IconSparkles size={17} stroke={1.6} aria-hidden="true" /></span></div><p>Cuéntanos sobre tu idea, proyecto o proceso en una conversación directa por WhatsApp.</p><a className="button button-primary whatsapp-button" href={whatsappUrl} target="_blank" rel="noreferrer"><IconBrandWhatsapp size={17} aria-hidden="true"/> Hablemos por WhatsApp</a></div>
          </div>
        </section>
  );
}
