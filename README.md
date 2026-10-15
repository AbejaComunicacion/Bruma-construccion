# BRUMA — landing

Landing responsive de una sola página construida con Astro, TypeScript, CSS y GSAP/ScrollTrigger. Las secciones y el contenido editable están separados; no requiere React ni un backend.

## Desarrollo y build

```sh
npm install
npm run dev
npm run check
npm run build
npm run preview
```

El resultado estático de producción se genera en `dist/` y puede publicarse en cualquier alojamiento estático. Define `SITE_URL` al compilar para emitir el sitemap, añadir su referencia en `robots.txt` y publicar la URL canónica y Open Graph. Sin un dominio real, el build no genera una URL ficticia.

En PowerShell, por ejemplo:

```powershell
$env:SITE_URL = "https://tu-dominio-real.com"
npm run build
```

## Antes de publicar

- Completar `brand.location`, `brand.email` y `brand.phone` en `src/data/site.ts`.
- Sustituir `https://tu-dominio-real.com` por el dominio definitivo en `SITE_URL`.
- Confirmar o retirar las categorías de servicio propuestas en ese mismo archivo.
- Sustituir las imágenes de referencia por fotografías propias y actualizar títulos, descripciones y textos alternativos. Las imágenes actuales se sirven desde Unsplash y están identificadas como provisionales, no como trabajos de BRUMA.
- Añadir dominio y URL canónica cuando se conozca el dominio definitivo.

Los colores de marca y los ritmos visuales se centralizan en las variables CSS de `src/styles/global.css`. El símbolo verde Hoja del repositorio se utiliza como marca principal y el isotipo circular como favicon y recurso secundario.
