import React, { useEffect } from 'react';
import { IconArrowLeft, IconBrandWhatsapp } from '@tabler/icons-react';
import './privacy-policy.css';

const privacyContactUrl = 'https://wa.me/573104339539?text=Hola%20LUNBIT%2C%20quiero%20hacer%20una%20consulta%20sobre%20mis%20datos%20personales.';

function PolicySection({ number, title, children }) {
  return (
    <section className="privacy-section">
      <h2><span>{number}</span>{title}</h2>
      {children}
    </section>
  );
}

export function PrivacyPolicyPage() {
  useEffect(() => {
    const title = 'Política de tratamiento de datos personales | LUNBIT';
    const description = 'Conoce cómo LUNBIT Digital Solutions trata los datos personales de las personas que nos contactan y de las campañas que gestionamos para nuestros clientes.';
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', 'https://lunbit.dev/privacidad');
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', 'https://lunbit.dev/privacidad');
  }, []);

  return (
    <main className="privacy-page">
      <header className="privacy-header">
        <a className="privacy-logo" href="/" aria-label="LUNBIT, ir al inicio">
          <img src="/brand/LUNBIT_logo_white.svg" alt="LUNBIT Digital Solutions" />
        </a>
        <a className="privacy-home-link" href="/"><IconArrowLeft size={16} aria-hidden="true" /> Volver al sitio</a>
      </header>

      <article className="privacy-content">
        <p className="privacy-eyebrow">LUNBIT DIGITAL SOLUTIONS · CALI, COLOMBIA</p>
        <h1>Política de tratamiento de datos personales</h1>
        <p className="privacy-lead">En esta política explicamos cómo tratamos los datos personales cuando alguien se comunica con LUNBIT o cuando prestamos servicios digitales y de marketing que implican tratar datos por cuenta de un cliente.</p>
        <p className="privacy-updated">Última actualización: 25 de octubre de 2026</p>

        <PolicySection number="01" title="A quién aplica">
          <p>Aplica a las personas que visitan lunbit.dev, nos escriben por WhatsApp o Instagram, solicitan información o una propuesta, contratan nuestros servicios, o participan en procesos relacionados con un proyecto de LUNBIT.</p>
          <p>Cuando prestamos servicios de marketing para un cliente, también puede aplicar el tratamiento de datos de las personas que interactúan con sus anuncios o campañas. En ese caso, esta política se complementa con las instrucciones y documentos de privacidad del cliente responsable.</p>
        </PolicySection>

        <PolicySection number="02" title="Qué datos podemos tratar">
          <ul>
            <li>Datos de contacto e identificación que nos compartas, como nombre, teléfono, correo y empresa.</li>
            <li>Información que incluyas al describir una consulta, idea, cotización o proyecto.</li>
            <li>Información contractual, de facturación y de comunicaciones necesaria para prestar servicios.</li>
            <li>Datos de prospectos o usuarios de campañas que el cliente nos entregue o nos autorice a recopilar para ejecutar el servicio acordado.</li>
            <li>Datos técnicos básicos que puedan generar el navegador, el alojamiento o los mecanismos de seguridad al visitar el sitio.</li>
          </ul>
          <p>No solicitamos datos sensibles para recibir consultas comerciales. Si un proyecto requiere tratar datos sensibles o de menores de edad, se definirá previamente con el cliente el fundamento, las autorizaciones y las medidas aplicables.</p>
        </PolicySection>

        <PolicySection number="03" title="Para qué usamos los datos">
          <ul>
            <li>Responder mensajes, preguntas y solicitudes de cotización.</li>
            <li>Preparar propuestas, prestar servicios y mantener la relación con clientes y proveedores.</li>
            <li>Gestionar pagos, facturación, obligaciones legales, seguridad y soporte.</li>
            <li>Ejecutar campañas, administrar audiencias o entregar reportes a un cliente, según el alcance contratado y sus instrucciones.</li>
            <li>Enviar a nuestros propios contactos información sobre servicios, novedades o contenidos de LUNBIT cuando exista autorización para ese fin.</li>
          </ul>
          <p>Si no quieres recibir comunicaciones comerciales de LUNBIT, puedes pedirlo por WhatsApp en cualquier momento. La solicitud no afecta los mensajes necesarios para responder una consulta o gestionar un servicio vigente.</p>
        </PolicySection>

        <PolicySection number="04" title="Datos tratados para campañas de clientes">
          <p>En los proyectos de marketing, el cliente normalmente define el objetivo de la campaña y los usos de los datos de sus prospectos. Cuando LUNBIT actúa como encargado, trata esos datos únicamente para prestar el servicio contratado, de acuerdo con instrucciones documentadas, y aplica compromisos contractuales de confidencialidad y seguridad.</p>
          <p>El cliente debe contar con las autorizaciones y avisos de privacidad que correspondan, y definir los fines, canales y plazos de conservación. LUNBIT no utiliza las listas de prospectos del cliente para promocionar sus propios servicios ni las conserva para fines propios una vez terminada la necesidad contractual, salvo que exista una obligación legal o una instrucción válida que disponga otra cosa.</p>
          <p>El rol de cada parte puede variar según el servicio concreto. Las responsabilidades, plataformas, accesos, instrucciones de eliminación y obligaciones de reporte se deben precisar en el contrato o anexo de tratamiento de datos del proyecto.</p>
        </PolicySection>

        <PolicySection number="05" title="Autorización para comunicaciones comerciales">
          <p>Cuando LUNBIT recopile datos directamente para enviar publicidad o novedades propias, solicitaremos una autorización previa, informada y demostrable para esa finalidad. La autorización para responder una solicitud o prestar un servicio no se entiende como autorización automática para enviar publicidad.</p>
          <p>En las campañas de un cliente, la autorización para contactar a los prospectos debe cubrir los fines y canales utilizados. Si LUNBIT recoge datos por cuenta del cliente, seguirá el aviso y el mecanismo de autorización que el cliente haya aprobado.</p>
        </PolicySection>

        <PolicySection number="06" title="Proveedores y plataformas">
          <p>Para operar el sitio y prestar servicios podemos utilizar proveedores de alojamiento, comunicación, analítica, gestión de proyectos o plataformas de anuncios, únicamente cuando sean necesarios para la actividad contratada. Los proveedores que participen en una campaña se definirán según cada proyecto y los accesos autorizados por el cliente.</p>
          <p>Al abrir WhatsApp o Instagram desde nuestros enlaces, la interacción ocurre en la plataforma correspondiente y también queda sujeta a las políticas de ese proveedor. No controlamos el tratamiento que esas plataformas realizan por cuenta propia.</p>
          <p>El código actual de este sitio no incorpora formularios de captura ni píxeles propios de analítica o publicidad. Si se añaden herramientas de ese tipo, actualizaremos esta información y los avisos o controles que correspondan antes de activarlas.</p>
        </PolicySection>

        <PolicySection number="07" title="Conservación y seguridad">
          <p>Conservamos los datos solo durante el tiempo necesario para atender la finalidad informada, cumplir obligaciones legales o contractuales y gestionar reclamaciones. Para campañas de clientes, la devolución o eliminación de datos se acuerda con el cliente de acuerdo con el contrato y las obligaciones aplicables.</p>
          <p>Adoptamos medidas razonables de carácter técnico, humano y administrativo para proteger la información frente a pérdida, alteración, consulta o uso no autorizado. Los clientes deben limitar los accesos que conceden a LUNBIT al alcance necesario para el servicio.</p>
        </PolicySection>

        <PolicySection number="08" title="Tus derechos y cómo ejercerlos">
          <p>Como titular puedes solicitar acceso a tus datos, pedir que se actualicen o corrijan, solicitar prueba de la autorización, conocer los usos realizados, pedir la revocatoria de la autorización o la supresión cuando sea procedente, y dejar de recibir mensajes publicitarios.</p>
          <p>Envía tu solicitud por <a href={privacyContactUrl}><IconBrandWhatsapp size={14} aria-hidden="true"/> WhatsApp</a> con el asunto “Protección de datos”. Indica tu nombre, el canal por el que nos contactaste y qué solicitud deseas hacer. Si actúas en nombre de otra persona, incluye la información que permita acreditar esa representación. Atenderemos consultas y reclamos dentro de los plazos y el procedimiento previstos en la normativa colombiana.</p>
          <p>Si el tratamiento se realiza por cuenta de un cliente, podremos remitir la solicitud al cliente responsable o apoyarlo para atenderla, según el contrato y la ley.</p>
        </PolicySection>

        <PolicySection number="09" title="Cambios a esta política">
          <p>Podemos actualizar esta política cuando cambien nuestras prácticas, las herramientas que utilizamos o las normas aplicables. Publicaremos aquí la versión vigente y su fecha de actualización.</p>
          <p>Los ajustes editoriales que no afecten la identidad del responsable, las finalidades ni el tratamiento pueden publicarse aquí sin aviso individual. Si cambia la identidad del responsable o una finalidad informada, comunicaremos el cambio antes de aplicarlo o, como máximo, al implementar la nueva política. Si cambia la finalidad para la que se autorizó el tratamiento, obtendremos una nueva autorización antes de tratar los datos con esa finalidad.</p>
        </PolicySection>

        <div className="privacy-endnote">
          <b>¿Tienes una pregunta?</b>
          <p>Escríbenos por WhatsApp y te orientamos sobre cómo ejercer tus derechos.</p>
          <a className="privacy-whatsapp-cta" href={privacyContactUrl} target="_blank" rel="noreferrer"><IconBrandWhatsapp size={18} aria-hidden="true" /> Contactar a LUNBIT</a>
        </div>
      </article>

      <footer className="privacy-footer"><span>© {new Date().getFullYear()} LUNBIT Digital Solutions</span><a href="/">Volver a lunbit.dev</a></footer>
    </main>
  );
}
