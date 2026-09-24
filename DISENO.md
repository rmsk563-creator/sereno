# Sereno — diseño visual

> Archivo de Figma: <https://www.figma.com/design/lDSDTReeXTNl2Jbe0dTiRa> («Sereno — Diseño v1», equipo UI/UX).
> Checkpoint 1 aprobado el 2026-09-23. Checkpoint 2 (cierre de la fase de Figma) entregado el mismo día y **pendiente de la última aprobación antes del código**. Revisión final hecha el mismo día: la búsqueda automática de ámbar como texto, calles, «propietario», emojis, `tel:` y textos sin estilo salió limpia en escritorio, móvil y tablet.

## Qué hay en el archivo
| Página | Contenido |
|---|---|
| Portada | Índice y cómo abrir el prototipo |
| Fundamentos | Variables de color, espacio y **tipografía (3 modos)**, 12 estilos de texto, espaciado, grids, fuentes y créditos de las 12 fotos |
| Componentes | 20 componentes con variantes y propiedades, más 13 iconos |
| Escritorio · 1440 | Inicio · Servicios · Emergencias (+ estado Llamar y estado Cómo llegar) · Pedir cita (lleno + revisar) · Equipo y clínica · Aviso legal · 404 · 2 overlays demo |
| Móvil · 390 | Las mismas páginas + Pedir cita con errores + Menú abierto · 2 overlays demo |
| Tablet · 768 | Inicio · Servicios · Emergencias · Pedir cita |

## Sistema
- **Variables** `Color` (21) y `Espacio` (12) con sintaxis de código `var(--…)`, para pasar tal cual a `styles.css`.
- `--borde-campo` = `#6F7D86` (4.2:1 sobre blanco). El `#8A979F` inicial daba 3.0:1, justo en el límite.
- **Grid:** escritorio con 12 columnas, contenido de 1200, márgenes de 120 y separación de 24. Móvil con 4 columnas, márgenes de 20 y separación de 16.
- **Espacio en base 4.** Entre secciones: 96 en escritorio y 48 en móvil. Radios: campo 8, tarjeta 12, píldora.
- **Tipografía:** Bricolage Grotesque (títulos y cifras) y Atkinson Hyperlegible Next (cuerpo, interfaz). El 0 de Atkinson tiene una barra: es parte del diseño de la fuente, no un error.
- **Tablet (768):** grid de 8 columnas, márgenes de 40 y separación de 24. Por debajo de 900 px se usan la **cabecera móvil y la barra inferior**, como ya decía ESTRUCTURA. Las parejas de tarjetas («Dos caminos», «Sí / No», los pasos) van lado a lado; las tarjetas de servicio siguen en una columna porque a 768 px no caben tres.

## Escala tipográfica: de 17 a 12 estilos
El checkpoint 1 tenía cada título duplicado (escritorio/móvil), un estilo sin ningún uso y 46 textos con tamaño o peso ajustado a mano. Ahora cada rol tiene **un solo estilo**, y el tamaño sale de la colección de variables `Tipografía`, con modos Escritorio / Tablet / Móvil. Es el mismo modelo que el `clamp()` de CSS.

| Estilo | Escritorio | Tablet | Móvil | CSS propuesto |
|---|---|---|---|---|
| Título 1 | 64 | 52 | 40 | `clamp(2.5rem, 1.6rem + 3.2vw, 4rem)` |
| Título 2 | 40 | 34 | 30 | `clamp(1.875rem, 1.5rem + 1.3vw, 2.5rem)` |
| Título 3 | 24 | 22 | 21 | `clamp(1.3125rem, 1.2rem + .4vw, 1.5rem)` |
| Entradilla | 20 | 19 | 18 | `clamp(1.125rem, 1.05rem + .3vw, 1.25rem)` |
| Cuerpo / Cuerpo negrita | 18 | 18 | 17 | `clamp(1.0625rem, 1rem + .2vw, 1.125rem)` |
| Cifra | 32 | 32 | 32 | `2rem` |
| Pequeño / Pequeño negrita | 15 | 15 | 15 | `.9375rem` |
| Navegación | 16 | — | — | `1rem` |
| Botón | 17 | 17 | 17 | `1.0625rem` |
| Etiqueta | 13 (mayúsculas) | 13 | 13 | `.8125rem` + `letter-spacing: .08em` |

- **Fusionados:** Móvil/H1–H3 → Título 1–3. Cifra/Media (22) → Título 3. Cuerpo/Móvil (17) → Cuerpo, que cambia de tamaño con el modo.
- **Eliminado:** Escritorio/Destacado, que no tenía ningún uso.
- **Nuevo:** Cuerpo negrita, que reemplaza tres ajustes manuales de 18 px en negrita.
- **El teléfono de emergencias** usa Título 2. Antes era un tamaño suelto de 44 px.
- **Solo quedan dos textos sin estilo, a propósito:** el número dentro del círculo de Paso y la palabra «sereno» del logotipo.

## Componentes
Botón (Farol / Urgencia / Línea / Línea clara × Normal / Hover / Foco / Presionado, con icono intercambiable) · Etiqueta demo · Aviso demo · Franja emergencia · Cabecera (escritorio / móvil, con propiedades para ocultar botones) · Barra inferior · Mensaje demo · Pie · Ficha especie · Tarjeta servicio · Fila precio · Señal alarma · Paso · Vista previa mensaje · Campo (Texto / Área × 4 estados) · Opción · Pregunta frecuente · Tarjeta veterinario · Logo · 13 iconos Lucide.

## Decisiones tomadas en el diseño
- **El bloque principal de Emergencias va en azul noche.** Remite a la guardia nocturna (el *sereno*) y separa visualmente esa página del resto sin usar rojo de fondo, que alarmaría.
- **El aviso demo reforzado va arriba del H1 en Emergencias**, antes que cualquier botón de llamada. «Llamar» y «Cómo llegar» mantienen su peso visual, y al tocarlos muestran el Mensaje demo justo debajo.
- **En «Cuánto cuesta» van los precios de emergencia en la primera pantalla**, porque son la duda número 1 después de «¿están abiertos?».
- **El anillo de foco se hace con un trazo exterior de 3 px.** Por defecto es noche; sobre fondo noche pasa a neblina, porque un anillo noche sobre fondo noche no se vería.
- **En el móvil, la barra inferior se dibuja al final de cada frame**, sobre los 120 px que el pie le reserva. En la web va fija a la pantalla.
- **En el móvil, el equipo es una fila que se desliza de lado.** La tarjeta siguiente asoma cortada para indicar que hay más.
- **El formulario de cita no pide celular ni correo**, y lo dice. Los errores aparecen junto a cada campo y además en un resumen arriba.

## Prototipo navegable
| Página | Flujo | Recorrido |
|---|---|---|
| Escritorio | 1 · Cita | Inicio → Servicios → «Pedir cita para esto» → Pedir cita → Preparar mensaje → Revisar → Abrir WhatsApp (overlay demo) · Copiar (overlay demo) · Editar |
| Escritorio | 2 · Emergencia | Servicios → franja o «Emergencias 24 h» → Emergencias → Llamar / Cómo llegar → estado con el aviso demo (se puede pasar de uno a otro) |
| Móvil | 3 · Cita y navegación | Inicio → Menú (5 destinos + Cerrar = volver) · barra inferior fija (Emergencia / Pedir cita) · mismo recorrido de cita |
| Móvil | 4 · Emergencia | Servicios → barra «Emergencia» → Llamar / Cómo llegar → aviso demo |

- **180 elementos con interacción**, contados en el archivo: 100 en escritorio y 80 en móvil. Funcionan el logo, la cabecera completa, la franja, las tarjetas de servicio, los botones de la 404 y el menú y la barra en móvil. En la primera pasada, la cabecera de escritorio (logo, Servicios, Equipo y Emergencias) quedó sin conectar; se completó en la revisión final.
- **Limitaciones:**
  - La cabecera fija (sticky) no se puede configurar desde la API. Irá en CSS con `position: sticky`.
  - En móvil, la barra inferior se dibuja a 844 px porque está marcada como fija, y en el lienzo tapa contenido.
  - Los enlaces del pie no están conectados; son secundarios.
  - El tablet no tiene prototipo.

## Fotos (Unsplash, licencia libre, revisadas una por una)
| Uso | Unsplash | Nota |
|---|---|---|
| Portada | `e4f87NzUJsU` | El parche de la manga está desenfocado y no se lee |
| Por qué Sereno | `BATIVPqWwqw` | Sin texto visible |
| Dra. Paredes (ficticia) | `83HBHD-VT7M` | |
| Dr. Quispe (ficticio) | `3HIroMoyre8` | |
| Dra. Rojas (ficticia) | `vh6henQFueg` | |
| Dr. Salas (ficticio) | `ihuDukzCeLU` | Con mascarilla, en cirugía |
| Recepción | `1ebbokV07KE` | |
| Sala para gatos | `OBu_nabEpAw` | |
| Consultorios | `I3KxEBS6iOc` | Misma serie que la portada |
| Laboratorio | `_9xRHrMOjeg` | Instalación real (Universidad de Trnava). No se ve ningún logo; la marca del microscopio no se lee al tamaño de uso |
| Quirófano | `Z6sbbTdPJTY` | |
| Hospitalización | `fQeLC7WlNm8` | Misma serie que la portada |

**Autores (para la página de créditos):** Alexander Mass (3), Sueda Güzeldere, Karlo Tottoc, vaibhav vivian, ooneiroslyl, Haim Charbit, Greg Rosenke, Oles Borys, Trnava University y César Badilla Miranda.

**Descartadas en el checkpoint 1:** 8 fotos de Unsplash+ (de pago). 3 por nombres o logos reales bordados en el uniforme: «…Rodrigues, Fisioterapeuta», el logo de una clínica en un uniforme turquesa y «Rafael Dre…». 1 por un letrero comercial real («DÖNER KEBAB»).
**Descartadas en el checkpoint 2:** 12 de pago más. La recepción, porque se lee la marca «CareMe®» en la pared. 2 retratos: uno con el nombre de un hospital impreso en el uniforme y otro con emblemas institucionales en los carteles del fondo. Otro con un logo en el uniforme. El quirófano en blanco y negro, porque se ve un paciente humano.

## Contenido corregido al comparar con ESTRUCTURA
- La guardia es «24 h, todos los días», pero el Dr. Salas solo cubría de domingo a jueves. Ahora dice: «Coordina la guardia nocturna · dom a jue 20:00–8:00 · vie y sáb, turno rotativo del equipo».

## Skills de diseño: quién decide qué
Como es una web para convencer, **Taste manda** en el tono visual y en lo que se prohíbe. Por eso se descartaron crema + serifa + terracota, las tres tarjetas iguales como único recurso y el gradiente morado. **Impeccable** separa las páginas para convencer (Inicio, Servicios) de las páginas de tarea (Pedir cita, Emergencias), que llevan el mínimo de decoración. **Emil** decide el movimiento: 120–200 ms con `ease-out` y `scale(.97)` al presionar. Cuando chocan, Emil gana en las pantallas de tarea.

## Micro-interacciones previstas (fase de código)
1. Hover en Tarjeta servicio: `translateY(-2px)` + sombra, 200 ms.
2. Botones: `scale(.97)` al presionar, 120 ms.
3. Aparición suave de las secciones, **solo en Inicio**.
4. Mensaje demo: aparece con opacidad en 160 ms.

Todo se apaga con `prefers-reduced-motion`.
