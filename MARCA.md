# Sereno — identidad de marca

> Marca **ficticia** para un proyecto de portafolio. No existe una clínica real con este nombre.
> Aprobada el 2026-09-23. Tablero visual: <https://claude.ai/artifact/3MhGY3tzka3RPimagq1UQt>

## Nombre

**Sereno** — clínica veterinaria en Santiago de Surco, Lima.

- El *sereno* era el vigilante nocturno de Lima, que hacía la ronda con un farol: la guardia de 24 horas.
- También significa calma, que es lo que la clínica quiere transmitir.
- Dominios `serenovet.pe` y `serenovet.com` libres según whois (2026-09-23). No se van a comprar: el sitio vive en GitHub Pages.
- Lema: **«De día te cuidamos. De noche también.»**

## Logo

Luna creciente en noche con una cruz en farol dentro de la parte que le falta a la luna. El nombre va en minúscula, en Bricolage Grotesque 700.

- La cruz va **siempre en farol**, sobre cualquier fondo.
- Versión clara: luna en `#15314A`. Versión oscura: luna en `#EEF1EF`.
- En el archivo final, la palabra se convierte en trazos para que el SVG no dependa de la fuente.
- Entregables pendientes (fase de código): `assets/logos/` con SVG claro y oscuro, PNG en 32, 180, 192 y 512 px, y `favicon.svg`.

## Paleta

| Token | HEX | Uso |
|---|---|---|
| `--noche` | `#15314A` | Primario: textos, logo, pie de página y secciones oscuras |
| `--neblina` | `#EEF1EF` | Fondo general |
| `--farol` | `#F2B441` | Acento: botón «Pedir cita» y cruz del logo |
| `--salvia` | `#CFE0D8` | Secundario: bloques de apoyo y fichas de especie |
| `--urgencia` | `#B3261E` | **Solo** emergencias. No es un color de marca |
| `--tinta-suave` | `#3C4A56` | Texto secundario |
| `--blanco` | `#FFFFFF` | Tarjetas y formularios sobre neblina |

```css
:root {
  --noche: #15314A;
  --neblina: #EEF1EF;
  --farol: #F2B441;
  --salvia: #CFE0D8;
  --urgencia: #B3261E;
  --tinta-suave: #3C4A56;
  --blanco: #FFFFFF;
}
```

### Contraste verificado (WCAG 2)

| Texto / fondo | Ratio | AA |
|---|---|---|
| Noche / neblina | 11.76 | ✅ |
| Tinta suave / neblina | 8.01 | ✅ |
| Noche / farol | 7.25 | ✅ |
| Noche / salvia | 9.75 | ✅ |
| Blanco / urgencia | 6.54 | ✅ |
| Farol / noche | 7.25 | ✅ |
| Urgencia / neblina | 5.75 | ✅ |
| **Farol / neblina** | **1.62** | ❌ **Prohibido**: el farol nunca va como texto sobre un fondo claro |

## Tipografía

- **Títulos:** Bricolage Grotesque (500, 600, 700). Es una grotesca con rasgos irregulares y tamaño óptico.
- **Cuerpo:** Atkinson Hyperlegible Next (400, 500, 700). Fue diseñada para lectores con baja visión, y sus letras y números no se confunden entre sí.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700&family=Atkinson+Hyperlegible+Next:wght@400;500;700&display=swap">
```

```css
:root {
  --fuente-titulos: "Bricolage Grotesque", "Avenir Next", "Segoe UI", system-ui, sans-serif;
  --fuente-cuerpo: "Atkinson Hyperlegible Next", system-ui, -apple-system, sans-serif;
}
```

## Tono de voz

**Sereno · Claro · Cercano.**

- **Sereno:** nunca alarma. Incluso en una emergencia, lo primero es qué hacer, no el miedo.
- **Claro:** dice precios, horarios y límites sin letra chica. Lo que no ofrece, lo dice.
- **Cercano:** trata de «tú», con español de Lima. La mascota tiene nombre, y quien la trae es su familia o su tutor, no su «propietario».

| Situación | En tono | Fuera de tono |
|---|---|---|
| Portada | Atención tranquila para perros, gatos y conejos. | ¡¡La mejor clínica de Lima para tu peludito!! 🐾 |
| Emergencia | Si no respira bien, sangra o convulsiona, ven ahora. Llama en camino y te preparamos la sala. | ¡URGENTE! No pierdas tiempo, tu mascota podría morir. |
| Precio | Consulta general: S/ 70. Si hace falta un examen, te lo decimos antes de hacerlo. | Precios accesibles. Consulta según evaluación. |
| Formulario enviado | Listo. Se abrió WhatsApp con tu mensaje: revísalo y envíalo desde ahí. | ¡Gracias! Nos pondremos en contacto a la brevedad. |
| Lo que no hay | No atendemos aves ni reptiles. Te recomendamos buscar un especialista en exóticos. | (Callarlo.) |

## Decisiones de diseño que salen de la marca

- Se descartó crema + serifa + terracota (demasiado típico de diseño generado por IA) y el azul brillante o verde menta de las clínicas de Lima.
- Para el diseño, **Taste es la guía principal** porque es una web para convencer, no una app. Impeccable da el encuadre y Emil decide los detalles de movimiento.
