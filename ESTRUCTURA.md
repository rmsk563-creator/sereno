# Sereno — estructura aprobada (2026-09-23)

> Documento completo con maquetas y recorridos: <https://claude.ai/artifact/QTAXYngv1iw4TvRDnB7Hs3> (v2).
> Este archivo es el resumen que manda si hay dudas. Las decisiones con su motivo están en `DECISIONS.md`.

## Reglas transversales
- Sitio **ficticio**. Aviso «Proyecto ficticio / demo — no brinda atención veterinaria real» arriba de todas las páginas, sin forma de cerrarlo, y en el pie.
- **Sin `tel:`, sin enlaces a mapas, WhatsApp sin destinatario** (`wa.me/?text=`).
- Teléfono `(01) 000-0000 · ficticio / demo`, siempre como texto. Ubicación «Ubicación demostrativa: Surco, Lima».
- `<meta name="robots" content="noindex, nofollow">` en todas las páginas y en `404.html`. `robots.txt` con `Allow: /`.
- Nada de reseñas, cifras de pacientes, sellos ni colegiaturas. Los precios llevan la etiqueta «de ejemplo».
- Horario: consultas lun–sáb de 8:00 a 20:00 y dom de 9:00 a 13:00. Emergencias 24 h, todos los días.
- Especies: perros, gatos y conejos. No se atienden aves, reptiles ni otros exóticos, ni se hace peluquería.

## Páginas
| Archivo | Pregunta que responde | Acción principal |
|---|---|---|
| `index.html` | ¿Es este el lugar para mi mascota? | Pedir cita |
| `servicios.html` | ¿Hacen lo que necesito, y cuánto cuesta? | «Pedir cita para esto» → `cita.html?motivo=…` |
| `emergencias.html` | ¿Qué hago ahora mismo? | Llamar (demo) |
| `equipo.html` | ¿Quién atiende a mi mascota, y dónde? | Pedir cita |
| `cita.html` | ¿Cómo pido una hora? | Preparar mensaje → WhatsApp |
| `legal.html` | ¿Esto es real? ¿Qué pasa con mis datos? | — |
| `404.html` | ¿Dónde estoy? | Inicio y Emergencias |

### Inicio
Portada (H1 «Atención tranquila para perros, gatos y conejos en Surco») → dos caminos (¿es urgente? / ¿quieres planificar?) → 6 servicios más buscados con precio desde → por qué Sereno (precios publicados, sala para gatos, guardia presencial) → tu primera visita (4 pasos) → vista previa del equipo → horario y ubicación demostrativa → 5 preguntas frecuentes.

### Servicios y precios
Encabezado + especies → índice (Consultas y prevención · Diagnóstico · Cirugía y hospitalización · Especialidades · Emergencias) → cada servicio con qué es, para quién, qué incluye y qué no, cuánto dura, qué preparar y precio → lo que no hacemos → cómo cobramos.

Precios de ejemplo: consulta S/ 70 · vacuna desde S/ 60 · desparasitación desde S/ 25 · hemograma S/ 60 · radiografía S/ 90 · ecografía S/ 120 · esterilización de gata desde S/ 380 y de perra desde S/ 480 · limpieza dental desde S/ 320 · hospitalización desde S/ 150 al día · medicina felina y conejos S/ 90 · dermatología S/ 110 · emergencia S/ 120 de día y S/ 150 de noche y feriados.

### Emergencias 24 h
Aviso de demo reforzado → H1 «¿Emergencia? Guardia las 24 horas» → número como texto + botones Llamar y Cómo llegar (demo, sin salir de la página) → ven ahora si… (señales de alarma, incluido el conejo que lleva más de 12 h sin comer ni hacer caca) → mientras llegas → qué pasa al llegar (triaje) → cuánto cuesta → ¿puede esperar a mañana? → «Esta información es orientativa».

### Equipo y clínica
Encabezado → 4 veterinarios ficticios (Paredes, Quispe, Rojas, Salas), cada uno con foto, enfoque y días, sin colegiatura → la clínica (recepción, sala para gatos, consultorios, laboratorio, quirófano, hospitalización) → cómo trabajamos.

### Pedir cita
Encabezado con la etiqueta demo → «¿Es urgente? Ve a Emergencias» → formulario → horario, ubicación demostrativa y teléfono demo → qué traer.

## Navegación
- **Escritorio (≥ 900 px):** aviso demo → franja roja «¿Es una emergencia? → Qué hacer» (sin número; no aparece en Emergencias) → cabecera fija: logo · Servicios y precios · Equipo y clínica · Emergencias 24 h (rojo) · [Pedir cita] (ámbar).
- **Celular:** aviso demo → logo + menú → barra inferior fija [Emergencia] [Pedir cita].
- Nunca hay un botón a la página en la que ya estás. `aria-current="page"`, enlace «Saltar al contenido», y el menú del celular con manejo de foco y cierre con Esc.
- Pie de página: logo y lema, horario, ubicación demostrativa, teléfono demo, enlaces y aviso de demo.

## Recorridos
**Emergencia:** barra o franja → primera pantalla de Emergencias con el aviso visible → Llamar o Cómo llegar → mensaje «Función demostrativa…» debajo del botón.

**Cita:** entrada (cabecera, barra o servicio con el motivo ya elegido) → mascota (nombre*, especie*: perro/gato/conejo/otra; con «otra» se detiene y lo explica; edad; primera visita) → motivo* + detalle, día* y franja*, tu nombre* → vista previa del mensaje → Abrir WhatsApp (sin destinatario) o Copiar.
Estados: errores junto a cada campo al enviar y foco en el primero · fecha imposible (anterior a hoy, o domingo por la tarde) · listo · WhatsApp no se abrió → copiar.

## Fuera de la v1.0
Una página por servicio (v1.1), blog, membresías, cuenta o historial, calendario real, mapa, versión en inglés.
