# Sereno — contexto para sesiones nuevas

Clínica veterinaria **FICTICIA** (portafolio de Matías). Web estática de 6 páginas + 404, sin build, en español, para GitHub Pages en `https://rmsk563-creator.github.io/sereno/` (aún no publicada).

**Leer antes de tocar nada:** `ROADMAP.md` (estado), `DECISIONS.md`, `ESTRUCTURA.md`, `MARCA.md`, `DISENO.md` (Figma: https://www.figma.com/design/lDSDTReeXTNl2Jbe0dTiRa) y `QA.md`.

Reglas duras:
- Sin `tel:`, sin mapas ni direcciones reales. WhatsApp siempre `wa.me/?text=` sin número.
- Aviso «Proyecto ficticio / demo» arriba y en el pie de todas las páginas. `noindex, nofollow` en todas.
- Tokens solo en la sección 1 de `styles.css`. Cabecera, pie, menú y barra están repetidos en las 7 páginas.
- Probar con `python3 -m http.server 8790` desde `~/Downloads` (URL `/sereno/`). `_qa/pruebas.html` y `_qa/axe.html` corren las pruebas en Chrome headless.
