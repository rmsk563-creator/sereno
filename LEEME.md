# Sereno — clínica veterinaria ficticia (v1.0)

> **Proyecto ficticio / demo de portafolio. No brinda atención veterinaria real.**
> Nombres, precios, horarios, teléfono y ubicación son inventados.

Web estática de 6 páginas + 404 en HTML, CSS y JavaScript sin build, pensada para GitHub Pages.

## Cómo verla en local
El sitio usa rutas relativas y un sprite de iconos externo, que no funcionan con `file://`. Hay que servirlo:

```sh
cd ~/Downloads
python3 -m http.server 8790
# abrir http://127.0.0.1:8790/sereno/
```

Se sirve desde la carpeta de arriba para que la URL sea `/sereno/`, igual que en GitHub Pages. La 404 depende de eso (`<base href="/sereno/">`).

## Estructura
```
index.html  servicios.html  emergencias.html  equipo.html  cita.html  legal.html  404.html
styles.css        ← 1. tokens (colores, espacio, tipografía) · 2. base · … · 7. movimiento
app.js            ← menú móvil, botones demo, índice de servicios, aparición suave (solo Inicio)
cita.js           ← formulario de cita → mensaje de WhatsApp sin destinatario
favicon.svg  robots.txt  sitemap.xml
assets/fotos/     ← 14 fotos WebP de Unsplash (créditos en legal.html y DISENO.md)
assets/logos/     ← logo en trazos (claro, oscuro, símbolo), iconos de app 32/180/192/512
assets/iconos/iconos.svg ← sprite de Lucide (stroke = currentColor)
assets/og.png     ← imagen para compartir en redes
_qa/              ← pruebas locales (ignorado por git)
```

## Dónde editar
- **Colores, tamaños y espacios:** solo en la sección 1 de `styles.css`. Si algo necesita un valor que no está, falta un token.
- **Cabecera, pie, menú y barra inferior** están repetidos en las 7 páginas. Si cambias uno, cambia los 7.
- **Precios, horarios y textos:** directamente en cada `.html`. El horario aparece en el pie, en el menú (`app.js`), en Inicio, en Pedir cita y en la validación de domingos (`cita.js`).

## Reglas que no se rompen
Están en `DECISIONS.md` y `ESTRUCTURA.md`:
- Sin `tel:`, sin mapas y sin direcciones reales. WhatsApp va siempre sin destinatario.
- Todo dato inventado lleva su etiqueta demo.
- Todas las páginas llevan `noindex, nofollow`.

## Documentación
`MARCA.md` · `ESTRUCTURA.md` · `DISENO.md` (Figma) · `DECISIONS.md` · `ROADMAP.md` · `QA.md`
