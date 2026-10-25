import React from 'react';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { whatsappUrl } from '../../data/siteContent.js';

export function WhatsAppButton() {
  return (
    <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Escríbenos por WhatsApp">
      <IconBrandWhatsapp size={21} stroke={1.8} aria-hidden="true" />
      <span>Hablemos por WhatsApp</span>
    </a>
  );
}
