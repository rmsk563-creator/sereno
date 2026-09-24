/* Sereno · formulario «Pedir cita» (demo).
   Arma un mensaje de WhatsApp en el navegador y lo abre SIN destinatario
   (wa.me/?text=). No envía nada a ningún servidor y no guarda nada. */
(function () {
  "use strict";

  var form = document.getElementById("form-cita");
  if (!form) return;
  var revisar = document.getElementById("revisar");
  var resumen = document.getElementById("resumen-errores");
  var resumenTexto = document.getElementById("resumen-texto");
  var vista = document.getElementById("vista-previa");
  var abrir = document.getElementById("abrir-whatsapp");
  var estado = document.getElementById("estado");
  var detalle = document.getElementById("detalle");
  var contador = document.getElementById("contador-detalle");
  var dia = document.getElementById("dia");

  var ESPECIES = { perro: "perro", gato: "gato", conejo: "conejo" };
  var MSJ = {
    "nombre-mascota": "Falta el nombre de tu mascota.",
    especieVacia: "Elige la especie de tu mascota.",
    especieOtra: "No atendemos aves, reptiles ni otros exóticos. Te recomendamos buscar un especialista en animales exóticos.",
    motivo: "Elige el motivo de la cita.",
    diaVacio: "Elige un día.",
    diaPasado: "Elige hoy o un día posterior.",
    domingoTarde: "Los domingos atendemos solo de 9:00 a 13:00. Elige «Mañana» u otro día.",
    franja: "Elige mañana o tarde.",
    "tu-nombre": "Falta tu nombre."
  };

  /* Fecha de hoy en hora local (no UTC) para el mínimo del calendario. */
  var hoy = new Date();
  var aISO = function (f) {
    return f.getFullYear() + "-" + String(f.getMonth() + 1).padStart(2, "0") + "-" + String(f.getDate()).padStart(2, "0");
  };
  dia.min = aISO(hoy);
  var leerFecha = function (valor) {
    var p = valor.split("-").map(Number);
    return new Date(p[0], p[1] - 1, p[2]);
  };

  /* Motivo ya elegido desde Servicios: cita.html?motivo=vacunas */
  var motivo = new URLSearchParams(window.location.search).get("motivo");
  if (motivo && form.motivo.querySelector('option[value="' + motivo.replace(/[^a-z]/g, "") + '"]')) {
    form.motivo.value = motivo;
  }

  detalle.addEventListener("input", function () {
    contador.textContent = detalle.value.length + " / 300";
  });

  /* «Otra» especie: se avisa en cuanto se elige, no solo al enviar. */
  form.querySelectorAll('input[name="especie"]').forEach(function (r) {
    r.addEventListener("change", function () {
      if (r.value === "otra") marcar("especie", MSJ.especieOtra);
      else limpiar("especie");
    });
  });

  function marcar(id, texto) {
    var control = document.getElementById(id);
    var error = document.getElementById("error-" + id);
    control.setAttribute("aria-invalid", "true");
    error.querySelector("span").textContent = texto;
    error.hidden = false;
  }
  function limpiar(id) {
    var control = document.getElementById(id);
    var error = document.getElementById("error-" + id);
    control.removeAttribute("aria-invalid");
    error.hidden = true;
  }
  function valorRadio(nombre) {
    var r = form.querySelector('input[name="' + nombre + '"]:checked');
    return r ? r.value : "";
  }

  function validar() {
    var errores = [];
    ["nombre-mascota", "especie", "motivo", "dia", "franja", "tu-nombre"].forEach(limpiar);

    if (!form["nombre-mascota"].value.trim()) { marcar("nombre-mascota", MSJ["nombre-mascota"]); errores.push("nombre-mascota"); }

    var especie = valorRadio("especie");
    if (!especie) { marcar("especie", MSJ.especieVacia); errores.push("especie"); }
    else if (especie === "otra") { marcar("especie", MSJ.especieOtra); errores.push("especie"); }

    if (!form.motivo.value) { marcar("motivo", MSJ.motivo); errores.push("motivo"); }

    var franja = valorRadio("franja");
    if (!dia.value) { marcar("dia", MSJ.diaVacio); errores.push("dia"); }
    else {
      var f = leerFecha(dia.value);
      var hoy0 = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
      if (f < hoy0) { marcar("dia", MSJ.diaPasado); errores.push("dia"); }
      else if (f.getDay() === 0 && franja === "tarde") { marcar("dia", MSJ.domingoTarde); errores.push("dia"); }
    }
    if (!franja) { marcar("franja", MSJ.franja); errores.push("franja"); }

    if (!form["tu-nombre"].value.trim()) { marcar("tu-nombre", MSJ["tu-nombre"]); errores.push("tu-nombre"); }
    return errores;
  }

  function armarMensaje() {
    var especie = ESPECIES[valorRadio("especie")];
    var edad = form.edad.value.trim();
    var primera = valorRadio("primera");
    var mascota = form["nombre-mascota"].value.trim() + " (" + especie + (edad ? ", " + edad : "") + ")";
    if (primera === "si") mascota += " · primera visita";
    if (primera === "no") mascota += " · ya es paciente";
    var motivoTexto = form.motivo.options[form.motivo.selectedIndex].text;
    var extra = detalle.value.trim();
    var fecha = leerFecha(dia.value).toLocaleDateString("es-PE", { weekday: "long", day: "numeric", month: "long" });
    var franja = valorRadio("franja") === "manana" ? "en la mañana" : "en la tarde";
    return [
      "Hola, Sereno. Quiero pedir una cita.",
      "Mascota: " + mascota,
      "Motivo: " + motivoTexto + (extra ? " — " + extra : ""),
      "Prefiero: " + fecha + ", " + franja,
      "Mi nombre: " + form["tu-nombre"].value.trim()
    ].join("\n");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var errores = validar();
    if (errores.length) {
      resumenTexto.textContent = errores.length === 1
        ? "Revisa 1 campo antes de preparar el mensaje."
        : "Revisa " + errores.length + " campos antes de preparar el mensaje.";
      resumen.hidden = false;
      var primero = document.getElementById(errores[0]);
      var enfocable = primero.matches("fieldset") ? primero.querySelector("input") : primero;
      enfocable.focus();
      return;
    }
    resumen.hidden = true;
    var mensaje = armarMensaje();
    vista.textContent = mensaje;
    abrir.href = "https://wa.me/?text=" + encodeURIComponent(mensaje);
    estado.hidden = true;
    form.hidden = true;
    revisar.hidden = false;
    document.getElementById("t-revisar").focus();
  });

  abrir.addEventListener("click", function () {
    estado.innerHTML = "";
    estado.append("Se abrió WhatsApp con tu mensaje: revísalo y envíalo desde ahí. ");
    var b = document.createElement("strong");
    b.textContent = "¿No se abrió WhatsApp? Copia el mensaje y pégalo donde quieras.";
    estado.append(b);
    estado.hidden = false;
  });

  document.getElementById("copiar").addEventListener("click", function () {
    var texto = vista.textContent;
    var avisar = function (ok) {
      estado.textContent = ok ? "Mensaje copiado. Pégalo donde quieras." : "No se pudo copiar automáticamente: el mensaje quedó seleccionado para que lo copies.";
      estado.hidden = false;
    };
    var seleccionar = function () {
      var r = document.createRange();
      r.selectNodeContents(vista);
      var s = window.getSelection();
      s.removeAllRanges();
      s.addRange(r);
      avisar(false);
    };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(texto).then(function () { avisar(true); }, seleccionar);
    } else {
      seleccionar();
    }
  });

  document.getElementById("editar").addEventListener("click", function () {
    revisar.hidden = true;
    form.hidden = false;
    form["nombre-mascota"].focus();
  });
})();
