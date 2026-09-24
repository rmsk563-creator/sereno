# Sereno — diseño visual

> Archivo de Figma: <https://www.figma.com/design/lDSDTReeXTNl2Jbe0dTiRa> («Sereno — Diseño v1», equipo UI/UX).
> Checkpoint 1 entregado el 2026-09-23. **Pendiente de aprobación**: no se programa hasta aprobarlo.

## Qué hay en el archivo
| Página | Contenido |
|---|---|
| Portada | Índice del checkpoint |
| Fundamentos | Paleta (variables), 17 estilos de texto, espaciado, grids y fuentes de las fotos |
| Componentes | 19 componentes con variantes y propiedades |
| Escritorio · 1440 | Emergencias (+ aviso demo abierto) · Pedir cita (lleno + revisar mensaje) · Inicio · Servicios y precios |
| Móvil · 390 | Emergencias (+ aviso demo) · Pedir cita (errores + revisar) · Inicio · Servicios · Menú abierto |

## Sistema
- **Variables** `Color` (21) y `Espacio` (12) con sintaxis de código `var(--…)`, para pasar tal cual a `styles.css`.
- `--borde-campo` = `#6F7D86` (4.2:1 sobre blanco). El `#8A979F` inicial daba 3.0:1, justo en el límite.
- **Grid:** escritorio con 12 columnas, contenido de 1200, márgenes de 120 y separación de 24. Móvil con 4 columnas, márgenes de 20 y separación de 16.
- **Espacio en base 4.** Entre secciones: 96 en escritorio y 48 en móvil. Radios: campo 8, tarjeta 12, píldora.
- **Tipografía:** Bricolage Grotesque (títulos y cifras) y Atkinson Hyperlegible Next (cuerpo, interfaz). El 0 de Atkinson tiene una barra: es parte del diseño de la fuente, no un error.

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

## Fotos (Unsplash, licencia libre, revisadas una por una)
| Uso | Unsplash | Nota |
|---|---|---|
| Portada | `e4f87NzUJsU` | El parche de la manga está desenfocado y no se lee |
| Por qué Sereno | `BATIVPqWwqw` | Sin texto visible |
| Dra. Paredes (ficticia) | `83HBHD-VT7M` | |
| Dr. Quispe (ficticio) | `3HIroMoyre8` | |
| Dra. Rojas (ficticia) | `vh6henQFueg` | |

**Descartadas:** 8 fotos de Unsplash+ (de pago). 3 por nombres o logos reales bordados en el uniforme: «…Rodrigues, Fisioterapeuta», el logo de una clínica en un uniforme turquesa y «Rafael Dre…». 1 por un letrero comercial real («DÖNER KEBAB»).

## Skills de diseño: quién decide qué
Como es una web para convencer, **Taste manda** en el tono visual y en lo que se prohíbe. Por eso se descartaron crema + serifa + terracota, las tres tarjetas iguales como único recurso y el gradiente morado. **Impeccable** separa las páginas para convencer (Inicio, Servicios) de las páginas de tarea (Pedir cita, Emergencias), que llevan el mínimo de decoración. **Emil** decide el movimiento: 120–200 ms con `ease-out` y `scale(.97)` al presionar. Cuando chocan, Emil gana en las pantallas de tarea.

## Micro-interacciones previstas (fase de código)
1. Hover en Tarjeta servicio: `translateY(-2px)` + sombra, 200 ms.
2. Botones: `scale(.97)` al presionar, 120 ms.
3. Aparición suave de las secciones, **solo en Inicio**.
4. Mensaje demo: aparece con opacidad en 160 ms.

Todo se apaga con `prefers-reduced-motion`.
