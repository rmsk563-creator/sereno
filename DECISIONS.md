# Decisiones — Sereno

| Fecha | Decisión | Motivo |
|---|---|---|
| 2026-09-23 | Clínica veterinaria **ficticia** en Lima, publicada en GitHub Pages | Proyecto de portafolio |
| 2026-09-23 | Nombre **Sereno** | Une el vigilante nocturno limeño (guardia 24 h) con la idea de calma. Aprobado |
| 2026-09-23 | Paleta noche / neblina / farol / salvia + urgencia | Se diferencia del azul brillante y el verde menta del rubro en Lima. Aprobada |
| 2026-09-23 | Bricolage Grotesque + Atkinson Hyperlegible Next | Carácter en títulos y máxima legibilidad en el cuerpo. Aprobadas por ahora |
| 2026-09-23 | **Web de varias páginas en HTML estático**, sin navegación por `#` | Se comporta como una web pública real y es mejor para SEO. Rompe a propósito la convención de un solo `index.html` de las apps anteriores |
| 2026-09-23 | «Pedir cita» = formulario que prepara un mensaje de WhatsApp **sin destinatario** (`wa.me/?text=`) | Nada llega a un número ni a un negocio real. Sin backend |
| 2026-09-23 | Nada de reseñas, cifras de pacientes ni sellos de acreditación | La marca es ficticia: no se presenta como real la prueba social que no existe |
| 2026-09-23 | **Estructura aprobada**: 6 páginas + 404 (ver `ESTRUCTURA.md`) | Separa al visitante con una emergencia del que quiere planificar una visita |
| 2026-09-23 | Se publica con **`noindex, nofollow`** en todas las páginas, incluida la 404. El trabajo de SEO se hace completo | Una clínica de emergencias ficticia que aparezca en buscadores podría confundir a alguien con una mascota grave |
| 2026-09-23 | `robots.txt` = `Allow: /`, **nunca `Disallow`**, y no enlaza el `sitemap.xml` | Si el buscador no puede entrar a la página, no lee el `noindex`. Además, en GitHub Pages el `robots.txt` de `/sereno/` no está en la raíz del dominio y los buscadores lo ignoran: lo que protege es la etiqueta en cada página |
| 2026-09-23 | Datos estructurados `VeterinaryCare` **sin teléfono ni calle**, solo `addressLocality` | Se mantiene el trabajo de SEO sin publicar datos de contacto falsos como si fueran reales |
| 2026-09-23 | Ubicación: **«Ubicación demostrativa: Surco, Lima»**. Sin calle, sin referencias, sin mapa | Nada que pueda confundirse con una ubicación real. **Reemplaza** la propuesta anterior de una calle inventada |
| 2026-09-23 | Teléfono `(01) 000-0000` escrito como **texto** con la etiqueta «ficticio / demo». **Ningún enlace `tel:`** en todo el sitio | Corrige una contradicción: la estructura v1 proponía `tel:` a un número inválido, en contra de lo dicho en la fase de marca («no se podrá marcar») |
| 2026-09-23 | «Llamar» y «Cómo llegar» son `<button>`, no enlaces. Mantienen su peso visual, pero al tocarlos muestran justo debajo «Función demostrativa: …» (anunciado con `aria-live`) | Se demuestra la experiencia de uso sin llamar ni abrir mapas de verdad |
| 2026-09-23 | Aviso **«Proyecto ficticio / demo — no brinda atención veterinaria real»** arriba de todas las páginas, en todos los anchos y sin botón para cerrarlo. También en el pie, y reforzado en Emergencias con «contacta a una clínica veterinaria real» | Pedido explícito. En Emergencias el aviso se ve antes que cualquier botón de llamada |
| 2026-09-23 | Recorridos aprobados: emergencia (2 toques hasta «Llamar» demo) y cita (6 campos → WhatsApp sin destinatario) | La barra lleva a la página, no a la acción, así que el aviso siempre se ve primero |
| 2026-09-23 | **Diseño en Figma antes del código** (plan Professional, equipo UI/UX) | Pedido de Matías: aprobar la propuesta visual antes de implementar |
| 2026-09-23 | `--borde-campo` pasa de `#8A979F` a `#6F7D86` | 3.0:1 era el mínimo justo para bordes de campos; ahora da 4.2:1 |
| 2026-09-23 | El bloque principal de Emergencias va en azul noche, con el aviso demo antes del H1 | Remite a la guardia nocturna sin usar rojo de fondo, y el aviso se ve antes que el botón de llamar |
| 2026-09-23 | Checkpoint 1 de diseño **aprobado**. Antes del código: checkpoint 2 + prototipo navegable mínimo + revisión de la escala tipográfica | Cerrar la fase de Figma completa antes de implementar |
| 2026-09-23 | **Escala tipográfica de 12 estilos** (antes 17). El tamaño va por variables con modos Escritorio / Tablet / Móvil → `clamp()` en CSS | Había títulos duplicados por breakpoint, un estilo sin uso y 46 textos ajustados a mano |
| 2026-09-23 | Tablet 768: cabecera móvil + barra inferior (el corte a escritorio sigue en 900 px), grid de 8 columnas y márgenes de 40 | Cumple la regla de ESTRUCTURA: la navegación de escritorio no cabe a 768 px |
| 2026-09-23 | Guardia de viernes y sábado: «turno rotativo del equipo» | Corrige una incoherencia propia: la guardia es de 24 h todos los días, pero el Dr. Salas solo cubría de domingo a jueves |
| 2026-09-23 | Prototipo mínimo: 4 flujos (cita y emergencia, en escritorio y en móvil), overlays demo para WhatsApp y Copiar | Validar los recorridos principales antes de implementar |
