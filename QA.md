# Sereno — QA de la v1.0 (2026-09-24)

Todo se probó en local (`http://127.0.0.1:8790/sereno/`) con Chrome headless. La versión publicada **todavía no existe**.

## Pruebas automáticas (`_qa/pruebas.html`) — 184 / 184 ✅
- **Por página (7):** `noindex, nofollow`, `lang="es-PE"`, un solo h1, aviso demo arriba y en el pie, «Saltar al contenido» y `aria-current` en la página actual. También comprueba que no hay `tel:`, enlaces a mapas, direcciones de calle ni reseñas, cifras o colegiaturas; que el teléfono siempre va con su etiqueta demo; que los precios dicen «de ejemplo»; que todas las imágenes tienen `alt` y cargan; y que todo lo que lleva `hidden` está oculto de verdad.
- **Enlaces y recursos:** todos los internos existen (HTML, CSS, JS, fotos, logos, sprite) y todas las anclas (`servicios.html#…`) apuntan a un `id` que existe.
- **Navegación:**
  - Nunca hay un botón a la página actual: en Pedir cita no aparece «Pedir cita» y en Emergencias no aparecen la franja ni el botón de la barra.
  - La cabecera es sticky.
  - La barra inferior es fija en móvil y no aparece en escritorio.
- **Emergencias:**
  - «Llamar» y «Cómo llegar» son `<button>`, no navegan y muestran el mensaje demo justo debajo, anunciado por `role=status`.
  - Solo hay un mensaje abierto a la vez, y un segundo toque lo cierra.
- **Menú móvil:** se abre, tiene los 5 destinos y el horario de hoy, y «Cerrar» lo cierra y devuelve el foco al botón.
- **Pedir cita:**
  - `?motivo=` preselecciona el motivo.
  - Con el formulario vacío muestra «Revisa 6 campos», con el foco en el primer error.
  - Detecta «Otra» especie, un domingo por la tarde y una fecha pasada.
  - Con datos válidos pasa a «Revisa tu mensaje» con el formato de Figma.
  - El enlace es `https://wa.me/?text=…`, **sin número**, y lleva el mensaje exacto.
  - Tiene el estado «listo» con la alternativa de copiar, y «Editar» conserva los datos.
  - `cita.js` no usa almacenamiento ni envía nada por red.
- **Sin errores de JavaScript.**

## Accesibilidad (axe-core 4.10, WCAG 2 A/AA + buenas prácticas) — 0 problemas ✅
Revisadas las 7 páginas a 390 y 1440 px. Se corrigieron 2 avisos moderados: el aviso demo y la franja no estaban dentro de una región (landmark), y en Equipo faltaba un h2 antes de las tarjetas. Los contrastes de la paleta están en `MARCA.md`, y los bordes de los campos dan 4.2:1.

## Diseño adaptable ✅
- Sin desbordamiento horizontal en ninguna página a **320, 360, 390 y 768 px** (medido en el DOM con `scrollWidth`).
- Comparado a ojo con Figma a 390, 768 y 1440 px.
- **Aviso sobre las capturas:** Chrome headless no deja la ventana más estrecha de unos 500 px. Por eso las capturas de móvil se hacen dentro de un iframe del ancho exacto (`_qa/vista.html`). Una captura directa «mostraba» un desbordamiento que no existía.

## Bugs encontrados y corregidos en esta QA
| Bug | Causa | Arreglo |
|---|---|---|
| Servicios desbordaba 923 px en móvil | El índice con scroll horizontal ensanchaba la rejilla (`min-width: auto` de los hijos de grid) | `minmax(0, 1fr)` + `min-width: 0` |
| El resumen de errores se veía vacío al cargar Pedir cita | `display: flex` de la clase ganaba sobre el atributo `hidden` | `[hidden] { display: none !important }` global y una prueba nueva que lo comprueba |
| El mensaje decía «jueves, 1 de octubre» | `toLocaleDateString('es-PE')` pone una coma | Se quita la coma, como en Figma |
| Servicios desbordaba 13 px a 320 px | La etiqueta larga de precios no podía partirse (`nowrap`) | Se permite que se parta |
| «Emergencias 24 h» se partía entre «24» y «h» | Espacio normal | Espacio duro (`&nbsp;`) |

## Diferencias con Figma, a propósito
- **«Abrir WhatsApp»** abre WhatsApp de verdad, sin destinatario. En el prototipo era un diálogo que lo simulaba (ver `DECISIONS.md`).
- **Servicios en móvil** muestra los 13 servicios. El frame de Figma resumía la segunda mitad con una nota.
- **La barra inferior** va fija a la pantalla (`position: fixed`), y la **cabecera** es sticky, cosa que Figma no podía representar.

## Pendiente de probar en la versión publicada
- Que GitHub Pages sirva `404.html` en rutas inexistentes con sus estilos.
- Que las URL de `canonical`/`og` coincidan con la URL real.
- Que las fuentes carguen desde Google Fonts en producción.
- En un teléfono real: la barra inferior con la zona segura del iPhone y el calendario nativo del campo de fecha.

---

# Smoke test en producción (2026-09-24)
**URL:** https://rmsk563-creator.github.io/sereno/ · **Repositorio:** https://github.com/rmsk563-creator/sereno

- **HTTP:** las 7 páginas, CSS, JS, favicon, sprite, fotos, `og.png`, `robots.txt` y `sitemap.xml` responden 200 con el tipo de contenido correcto.
- **404 real:** `/sereno/no-existe.html` y `/sereno/carpeta/que/no/existe` devuelven **404** con la página de Sereno completa y sus estilos, gracias a `<base href="/sereno/">`.
- **Metadatos:** `canonical`, `og:url` y `og:image` apuntan a la URL pública real (no hubo que cambiarlas), y las 6 URL del `sitemap.xml` responden 200.
- **Revisión del HTML publicado:** `noindex, nofollow` en 7 de 7 páginas, 0 `tel:` y 0 enlaces a mapas.
- **Pruebas automáticas sobre los archivos publicados:** 184 / 184 ✅. Se sirven a través de un proxy local (`_qa/proxy_prod.py`) que los descarga en vivo de GitHub Pages, para poder leer el DOM desde el mismo origen.
- **axe-core sobre producción:** 0 problemas en las 7 páginas, a 390 y 1440 px.
- **Diseño adaptable en producción:** sin desbordamiento a 390, 768 y 1440 px. Capturas revisadas: Inicio a 390, Emergencias a 768, y Servicios y la 404 real a 1440.
- **Pruebas en la página real** (HTTPS, sin iframe, clics reales mediante el protocolo de depuración de Chrome; `_qa/copiar_real.mjs`):
  - **Servicio → Pedir cita:** `?motivo=vacunas` precarga «Vacunas».
  - **Copiar mensaje:** el portapapeles contiene el mensaje exacto y aparece «Mensaje copiado». Funciona con y sin permiso previo.
  - **Abrir WhatsApp:** abre una pestaña nueva en `wa.me/?text=…`, que WhatsApp redirige a `api.whatsapp.com/send/?text=…` **sin número de teléfono**, y aparece el estado «Se abrió WhatsApp…».

## Diferencias entre local y producción
Ninguna en contenido, estilos ni comportamiento.

- **Nota del entorno de pruebas:** dentro de un iframe en Chrome headless, la promesa de `navigator.clipboard.writeText` no se resuelve nunca. Por eso «Copiar» se prueba en la página real y no en el arnés. No es un bug del sitio.
- **Nota del entorno de pruebas:** Chrome headless no permite iframes de otro origen ni con `--disable-web-security` (se queda colgado); de ahí el proxy local.

## Sin probar (necesita un teléfono real)
- La zona segura de la barra inferior en un iPhone con barra de gestos.
- El scroll con la cabecera sticky y la barra fija en Safari iOS.
- El selector de fecha nativo.
- La apertura de la app de WhatsApp desde el teléfono.
