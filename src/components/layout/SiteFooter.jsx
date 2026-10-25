import React from 'react';
import { Logo } from './SiteChrome.jsx';

export function SiteFooter() {
  return (
    <footer className="site-footer section-dark">
      <div className="container footer-main">
        <a className="logo-link footer-logo" href="#inicio" aria-label="LUNBIT, volver al inicio"><Logo /></a>
        <nav className="footer-nav" aria-label="Enlaces del pie de página">
          <a href="/privacidad">Políticas y privacidad</a>
        </nav>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} LUNBIT Digital Solutions. Todos los derechos reservados.</span>
        <span>Desde Cali, Valle del Cauca · Colombia</span>
      </div>
    </footer>
  );
}
