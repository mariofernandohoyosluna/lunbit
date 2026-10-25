import { IconAutomation, IconBulb, IconCode, IconPlugConnected, IconRepeat, IconUnlink } from '@tabler/icons-react';

export const whatsappUrl = 'https://wa.me/573104339539?text=Hola%20LUNBIT%2C%20quiero%20hablar%20sobre%20un%20proyecto.';
export const nextProjectWhatsappUrl = `https://wa.me/573104339539?text=${encodeURIComponent('Hola LUNBIT, quiero que mi proyecto sea el próximo en aparecer aquí. Hablemos de mi idea.')}`;
export const brandIsotipoPath = 'M88 72 H142 V246 C142 273.614 164.386 296 192 296 H294 V242 H196 V72 Z';
export const brandIsotipoSeed = 'M180 180 C186 180 196 180 202 180';

export const needs = [
  { icon: IconBulb, title: 'Una idea por lanzar', text: 'Dale forma y conviértela en un producto digital.' },
  { icon: IconRepeat, title: 'Tareas que se repiten', text: 'Automatiza pasos manuales y recupera tiempo.' },
  { icon: IconUnlink, title: 'Sistemas aislados', text: 'Conecta herramientas y comparte información.' },
];

export const services = [
  { number: '01', title: 'Producto digital', text: 'Diseño y desarrollo de software, aplicaciones y productos a medida.', image: '/images/service-product.webp', imageAlt: 'Laptop con una interfaz de producto digital y bocetos de diseño sobre un escritorio.' , icon: IconCode, tags: ['Web y móvil', 'SaaS', 'Evolución de producto'] },
  { number: '02', title: 'Automatización e IA', text: 'Procesos digitales conectados para reducir tareas manuales y aprovechar mejor la información.', image: '/images/lunbit-founder-work.webp', imageAlt: 'La persona detrás de LUNBIT trabajando frente a una interfaz de procesos digitales.', icon: IconAutomation, tags: ['Automatización', 'Inteligencia artificial', 'Flujos de trabajo'] },
  { number: '03', title: 'Integraciones y plataforma', text: 'Conexión entre aplicaciones, datos y servicios que ya usa el negocio.', image: '/images/service-integrations.webp', imageAlt: 'Laptop, tableta y teléfono con interfaces digitales coordinadas.', icon: IconPlugConnected, tags: ['APIs', 'Backend y datos', 'Infraestructura'] },
];

export const steps = [
  { number: '01', name: 'Descubrir', text: 'Aclaramos el contexto, las personas y el objetivo.', chip: 'Entender el contexto' },
  { number: '02', name: 'Diseñar', text: 'Definimos experiencia, alcance y arquitectura.', chip: 'Definir el camino' },
  { number: '03', name: 'Construir', text: 'Convertimos el concepto en un producto funcional.', chip: 'Hacerlo realidad' },
  { number: '04', name: 'Conectar', text: 'Integramos servicios y datos cuando el proyecto lo necesita.', chip: 'Integrar las piezas' },
  { number: '05', name: 'Lanzar', text: 'Validamos y preparamos la solución para salir.', chip: 'Ponerlo en marcha' },
  { number: '06', name: 'Mejorar', text: 'Evolucionamos el producto según nuevas necesidades.', chip: 'Seguir evolucionando' },
];

export const capabilities = ['SOFTWARE A MEDIDA', 'AUTOMATIZACIÓN', 'INTEGRACIONES', 'INTELIGENCIA ARTIFICIAL'];
