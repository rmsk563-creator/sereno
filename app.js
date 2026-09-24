/* Sereno · comportamiento compartido de todas las páginas.
   Sin build ni módulos. Nada de esto envía datos a ningún servidor. */
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  /* Menú móvil ---------------------------------------------------------
     <dialog> modal: atrapa el foco, se cierra con Esc y devuelve el foco
     al botón «Menú» al cerrarse. */
  var menu = document.getElementById("menu");
  var botonMenu = document.querySelector("[data-abrir-menu]");
  if (menu && botonMenu && typeof menu.showModal === "function") {
    botonMenu.addEventListener("click", function () {
      menu.showModal();
      botonMenu.setAttribute("aria-expanded", "true");
    });
    menu.addEventListener("close", function () {
      botonMenu.setAttribute("aria-expanded", "false");
      botonMenu.focus();
    });
    menu.querySelectorAll("[data-cerrar-menu]").forEach(function (b) {
      b.addEventListener("click", function () { menu.close(); });
    });
  }

  /* «Hoy, miércoles · Consultas de 8:00 a 20:00» en el menú. */
  var hoy = document.querySelector("[data-horario-hoy]");
  if (hoy) {
    var dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    var d = new Date().getDay();
    hoy.querySelector("[data-dia]").textContent = "Hoy, " + dias[d];
    hoy.querySelector("[data-horas]").textContent =
      (d === 0 ? "Consultas de 9:00 a 13:00" : "Consultas de 8:00 a 20:00") + " · Emergencias 24 h";
  }

  /* Botones demo («Llamar», «Cómo llegar») ------------------------------
     No llaman ni abren mapas: muestran el mensaje demostrativo justo
     debajo y lo anuncian a lectores de pantalla. Solo uno abierto a la vez. */
  var anuncio = document.getElementById("anuncio-demo");
  var botonesDemo = document.querySelectorAll("[data-demo]");
  botonesDemo.forEach(function (boton) {
    boton.addEventListener("click", function () {
      var mensaje = document.getElementById(boton.getAttribute("aria-controls"));
      var abrir = boton.getAttribute("aria-expanded") !== "true";
      botonesDemo.forEach(function (otro) {
        otro.setAttribute("aria-expanded", "false");
        var m = document.getElementById(otro.getAttribute("aria-controls"));
        if (m) m.hidden = true;
      });
      if (abrir && mensaje) {
        boton.setAttribute("aria-expanded", "true");
        mensaje.hidden = false;
        mensaje.classList.remove("mensaje-demo--entra");
        void mensaje.offsetWidth; // reinicia la animación
        mensaje.classList.add("mensaje-demo--entra");
        if (anuncio) {
          anuncio.textContent = "";
          window.setTimeout(function () { anuncio.textContent = mensaje.textContent.replace(/\s+/g, " ").trim(); }, 50);
        }
      }
    });
  });

  /* Índice de Servicios: marca la categoría visible ---------------------- */
  var indice = document.querySelectorAll("[data-indice] a");
  if (indice.length && "IntersectionObserver" in window) {
    var porId = {};
    indice.forEach(function (a) { porId[a.getAttribute("href").slice(1)] = a; });
    var marcar = function (id) {
      indice.forEach(function (a) { a.removeAttribute("aria-current"); });
      var a = porId[id];
      if (!a) return;
      a.setAttribute("aria-current", "true");
      var lista = a.closest("ul");
      if (lista && lista.scrollWidth > lista.clientWidth) {
        lista.scrollTo({ left: a.offsetLeft - 20, behavior: "auto" });
      }
    };
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) { if (e.isIntersecting) marcar(e.target.id); });
    }, { rootMargin: "-30% 0px -60% 0px" });
    Object.keys(porId).forEach(function (id) {
      var s = document.getElementById(id);
      if (s) obs.observe(s);
    });
  }

  /* Aparición suave: solo en Inicio (DISENO.md). Sin JS, todo se ve. */
  var revelar = document.querySelectorAll(".revelar");
  var menosMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (revelar.length) {
    if (menosMovimiento || !("IntersectionObserver" in window)) {
      revelar.forEach(function (el) { el.classList.add("visible"); });
    } else {
      var obsR = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("visible"); obsR.unobserve(e.target); }
        });
      }, { rootMargin: "0px 0px -10% 0px" });
      revelar.forEach(function (el) { obsR.observe(el); });
    }
  }
})();
