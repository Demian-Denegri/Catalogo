window.CATALOGO_CONFIG = {
  /* Datos del dueno de las plantillas (Denegri Web). Se inyectan aca para que
     esta plantilla sea 100% autocontenida y funcione sin el catalogo. */
  marca: "Denegri Web",
  profesional: "Demian Denegri",
  whatsapp: "5491168220298",
  whatsappMensaje: "!Hola! Vi el catalogo de paginas web y quiero hacerte una consulta.",
  anio: new Date().getFullYear(),
};
/* ============================================================================
   main.js — comportamiento del catálogo y de las demos
   No hace falta editar este archivo: los datos salen de config.js
   ============================================================================ */

(function () {
  "use strict";

  var cfg = window.CATALOGO_CONFIG || {};

  /* ---------------------------------------------------------------- utils --- */
  function get(path) {
    return path.split(".").reduce(function (obj, key) {
      return obj && obj[key] != null ? obj[key] : null;
    }, cfg);
  }

  function soloDigitos(txt) {
    return String(txt || "").replace(/[^\d]/g, "");
  }

  function waLink(mensaje) {
    var num = soloDigitos(cfg.whatsapp);
    var texto = encodeURIComponent(mensaje || cfg.whatsappMensaje || "");
    if (!num) return "#contacto";
    return "https://wa.me/" + num + (texto ? "?text=" + texto : "");
  }

  /* ------------------------------------------- inyectar datos de config --- */
  function aplicarConfig() {
    // Texto:  <span data-config="marca"></span>
    document.querySelectorAll("[data-config]").forEach(function (el) {
      var val = get(el.getAttribute("data-config"));
      if (val != null && val !== "") el.textContent = val;
    });

    // Enlaces:  <a data-config-href="whatsapp" data-wa="Mensaje opcional">
    document.querySelectorAll("[data-config-href]").forEach(function (el) {
      var clave = el.getAttribute("data-config-href");
      var href = "#";

      if (clave === "whatsapp") {
        href = waLink(el.getAttribute("data-wa"));
      } else if (clave === "telefono") {
        var tel = (cfg.telefonoLink || cfg.telefono || "").replace(/[^\d+]/g, "");
        href = tel ? "tel:" + tel : "#contacto";
      } else if (clave === "email") {
        href = cfg.email ? "mailto:" + cfg.email : "#contacto";
      } else if (clave === "instagram") {
        href = cfg.instagram || "#contacto";
      } else {
        href = get(clave) || "#contacto";
      }

      el.setAttribute("href", href);
      if (/^https?:\/\//.test(href)) {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener noreferrer");
      }
    });

    // Elementos que se ocultan si el dato viene vacío:  data-config-if="instagram"
    document.querySelectorAll("[data-config-if]").forEach(function (el) {
      if (!get(el.getAttribute("data-config-if"))) el.remove();
    });

    // Año del pie:  <span data-year></span>
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = cfg.anio || new Date().getFullYear();
    });
  }

  /* ------------------------------------------------------- menú mobile --- */
  function menu() {
    var toggle = document.querySelector("[data-menu-toggle]");
    var panel = document.querySelector("[data-menu]");
    if (!toggle || !panel) return;

    toggle.addEventListener("click", function () {
      var abierto = document.body.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", String(abierto));
    });

    panel.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        document.body.classList.remove("menu-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        document.body.classList.remove("menu-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* --------------------------------------------------- header con scroll --- */
  function headerScroll() {
    var header = document.querySelector("[data-header]");
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ------------------------------------------------------- scroll reveal --- */
  function reveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach(function (el) {
      io.observe(el);
    });
  }

  /* ------------------------------------------------------------ acordeón --- */
  function acordeon() {
    var botones = document.querySelectorAll("[data-faq]");
    botones.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var item = btn.closest(".faq-item");
        if (!item) return;
        var abierto = item.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", String(abierto));
      });
    });
  }

  /* -------------------------------------------------- nav activa al scroll --- */
  function navActiva() {
    var enlaces = document.querySelectorAll("[data-nav-link]");
    if (!enlaces.length || !("IntersectionObserver" in window)) return;

    var mapa = {};
    enlaces.forEach(function (a) {
      var id = a.getAttribute("href");
      if (id && id.charAt(0) === "#") {
        var sec = document.querySelector(id);
        if (sec) mapa[id] = a;
      }
    });

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            enlaces.forEach(function (a) {
              a.classList.remove("is-active");
            });
            var activo = mapa["#" + entry.target.id];
            if (activo) activo.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    Object.keys(mapa).forEach(function (id) {
      io.observe(document.querySelector(id));
    });
  }

  /* --------------------------------------------------------------- init --- */
  function init() {
    aplicarConfig();
    menu();
    headerScroll();
    reveal();
    acordeon();
    navActiva();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
