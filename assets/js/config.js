/* ============================================================================
   CONFIGURACIÓN CENTRAL  —  ✏️  EDITÁ SOLO ESTE ARCHIVO
   ----------------------------------------------------------------------------
   Todo lo que ves con [CORCHETES] o "XXXX" en la página se completa desde acá.
   Cambiá los valores de la derecha y se actualizan en TODAS las páginas
   (el catálogo y las 5 demos) automáticamente.

   Reglas rápidas:
   • No borres las comillas.
   • Los precios son texto libre: podés escribir "$85.000", "USD 150", etc.
   • El WhatsApp es solo el número, con código de país y SIN "+", espacios
     ni guiones. Ejemplo Argentina: 5491123456789
   ============================================================================ */

window.CATALOGO_CONFIG = {
  /* ---------- MARCA / IDENTIDAD ------------------------------------------- */
  marca: "Denegri Web",
  profesional: "Demián Denegri",
  ubicacion: "Buenos Aires, Argentina",

  /* ---------- CONTACTO ---------------------------------------------------- */
  telefono: "+54 11 6822-0298", // cómo se muestra en pantalla
  telefonoLink: "+541168220298", // mismo número, apto para "llamar"
  whatsapp: "5491168220298", // solo dígitos, sin "+" ni espacios
  whatsappMensaje: "¡Hola! Vi tu catálogo de páginas web y quiero hacerte una consulta.",
  email: "tu@email.com",
  linkedin: "https://www.linkedin.com/in/demiandenegri",
  instagram: "", // opcional. Si lo dejás vacío, se oculta.

  /* ---------- PRECIOS (pago único + abono mensual) ------------------------ */
  precios: {
    desarrollo: "$XX.XXX", // precio de desarrollo, pago único
    mantenimiento: "$X.XXX", // abono por mantenimiento
    mantenimientoPeriodo: "por mes",
  },

  /* ---------- TEXTOS PRINCIPALES ----------------------------------------- */
  heroTitulo: "Páginas web que hacen que tu negocio se vea tan bien como es.",
  heroSubtitulo:
    "Diseño y desarrollo sitios para locales y emprendimientos. Pagás una vez por el desarrollo y un abono mensual por el mantenimiento: yo me encargo de que tu página esté siempre al día.",

  /* ---------- PUBLICACIÓN / NOTA LEGAL DEL PIE --------------------------- */
  notaPie:
    "Los precios son de referencia y pueden variar según la cantidad de secciones y funcionalidades.",
  anio: new Date().getFullYear(),
};
