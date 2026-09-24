# Sereno — clínica veterinaria ficticia

> **Proyecto ficticio / demo de portafolio.**
> Sereno **no existe** y **no representa a ninguna clínica veterinaria real**. No brinda atención veterinaria.
> El equipo, los precios, los horarios, el teléfono `(01) 000-0000` y la «ubicación demostrativa: Surco, Lima» son inventados.
> **Si tu mascota tiene una emergencia real, contacta a una clínica veterinaria real.**

**Sitio publicado:** https://rmsk563-creator.github.io/sereno/

Web estática de 6 páginas + 404 (Inicio, Servicios y precios, Emergencias 24 h, Equipo y clínica, Pedir cita y Aviso legal). Está hecha en HTML, CSS y JavaScript sin build, y se publica en GitHub Pages.

## Qué hace (y qué no)
- **«Llamar» y «Cómo llegar»** son botones de demostración: no hacen llamadas ni abren mapas; muestran un aviso.
- **«Pedir cita»** arma un mensaje en tu navegador y abre WhatsApp **sin destinatario** (`wa.me/?text=`). Tú eliges a quién mandarlo. Nada se envía a ningún servidor ni se guarda.
- **Todas las páginas** llevan `noindex, nofollow` para que el sitio no aparezca en buscadores y nadie lo confunda con una clínica real.
- **No hay** cookies, analítica, cuentas ni backend.

## Ver en local
```sh
cd ..                       # la carpeta que contiene «sereno»
python3 -m http.server 8790
# abrir http://127.0.0.1:8790/sereno/
```

## Documentación
Más detalle en [LEEME.md](LEEME.md): estructura y dónde editar.

| Archivo | Contenido |
|---|---|
| [MARCA.md](MARCA.md) | Identidad |
| [ESTRUCTURA.md](ESTRUCTURA.md) | Páginas y recorridos |
| [DISENO.md](DISENO.md) | Sistema visual, basado en el diseño de Figma |
| [DECISIONS.md](DECISIONS.md) | Decisiones y su motivo |
| [QA.md](QA.md) | Pruebas |
| [ROADMAP.md](ROADMAP.md) | Estado |

## Créditos
- Fotos de [Unsplash](https://unsplash.com): los autores aparecen en la página *Aviso legal*. Las personas retratadas no son el equipo; los nombres son inventados.
- Tipografías: Bricolage Grotesque y Atkinson Hyperlegible Next (SIL Open Font).
- Iconos: Lucide (ISC).
