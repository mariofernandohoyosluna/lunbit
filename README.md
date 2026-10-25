# LUNBIT Digital Solutions

Landing page responsive para LUNBIT Digital Solutions, construida con React, Vite y GSAP. Usa los SVG oficiales y los archivos Sora locales, además de imágenes WebP optimizadas para el hero, los servicios y el proyecto Lux Aurea Legal. Las imágenes de las secciones de trabajo incluyen al propietario de LUNBIT a partir del retrato proporcionado.

## Requisitos

- Node.js 20.19+ o 22.12+
- npm

## Iniciar en desarrollo

```bash
npm install
npm run dev
```

Vite mostrará la dirección local en la terminal.

## Compilar para producción

```bash
npm run build
npm run preview
```

## Contacto

Los botones abren WhatsApp al número y con el mensaje configurados en `src/data/siteContent.js`. No hay formulario ni backend de contacto.

## Estructura del código

`src/App.jsx` compone la página y conecta las piezas. La interfaz está dividida por responsabilidad:

- `src/sections/`: secciones de la landing y la franja de servicios.
- `src/components/layout/`: navegación, progreso de lectura y pie de página.
- `src/components/ui/`: controles reutilizables como el botón flotante de WhatsApp.
- `src/hooks/`: comportamiento de animación y desplazamiento de la página.
- `src/data/siteContent.js`: textos, servicios, etapas, enlaces y configuración compartida.
- `src/styles.css`: estilos globales y visuales.
