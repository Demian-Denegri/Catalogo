# Denegri Web — Catálogo de páginas web

Sitio estático que funciona como **catálogo de plantillas** para ofrecer a locales y
emprendimientos. Incluye una página principal (propuesta, plantillas, precios, preguntas
frecuentes y contacto) y **5 demos navegables** de cada tipo de negocio.

Modelo de negocio que comunica la web: **pago único por el desarrollo + abono mensual
por el mantenimiento**.

---

## ✏️ Cómo editar los datos (lo más importante)

Todo lo que cambia seguido está en **un solo archivo**:

```
assets/js/config.js
```

Ahí podés completar:

| Campo | Qué completa |
|---|---|
| `marca` | El nombre de tu marca o emprendimiento |
| `profesional` | Tu nombre (se muestra en el contacto) |
| `ubicacion` | Tu ciudad / zona |
| `telefono` | Teléfono como se muestra en pantalla |
| `telefonoLink` | El mismo número para "llamar" (con `+` y sin espacios) |
| `whatsapp` | **Solo dígitos**, con código de país, sin `+` ni espacios. Ej: `5491123456789` |
| `whatsappMensaje` | Mensaje que se escribe solo al abrir WhatsApp |
| `email` | Tu correo |
| `linkedin` | URL de tu perfil de LinkedIn |
| `instagram` | (Opcional) si lo dejás vacío, se oculta automáticamente |
| `precios.desarrollo` | Precio del desarrollo (pago único) |
| `precios.mantenimiento` | Precio del abono mensual |
| `heroTitulo` / `heroSubtitulo` | Los textos grandes de la portada |
| `notaPie` | Aclaración sobre los precios |

> La marca, el teléfono, el WhatsApp, el email, el LinkedIn y los precios ya están cargados.
> Solo queda reemplazar las imágenes de ejemplo por fotos reales.

---

## 📁 Estructura

```
Catalogo/
├── index.html               ← Página principal (catálogo)
├── assets/
│   ├── img/
│   │   ├── logo.svg         ← Logo completo (marca + nombre)
│   │   └── favicon.svg      ← Ícono del sitio
│   └── js/
│       ├── config.js        ← ⭐ Datos editables
│       └── main.js          ← Menú, animaciones, FAQ, inyección de datos
└── demos/
    ├── peluqueria.html      ← Estética / Peluquería / Barbería
    ├── gimnasio.html        ← Gimnasio / Fitness
    ├── tienda.html          ← Comercio / Tienda (con filtro por categorías)
    ├── servicios.html       ← Servicios profesionales
    └── eventos.html         ← Salones de eventos / fiestas
```

### Colores
Los colores base están en las variables de `assets/css/base.css` (`:root`).
Cada demo cambia su color de acento con el atributo `data-accent` en el `<body>`:

```html
<body data-accent="gimnasio">
```

Valores disponibles: `peluqueria`, `gimnasio`, `tienda`, `servicios`, `eventos`.

---

## 🎨 Marca y logo

La marca del sitio es **Denegri Web** y su logo es un monograma **D** con un degradado
violeta → celeste, más el wordmark con un punto de color.

- `assets/img/logo.svg` → logo completo (ícono + nombre). Úsalo en tus redes, facturas, etc.
- `assets/img/favicon.svg` → ícono que aparece en la pestaña del navegador.
- El ícono dentro de la web está en línea (inline) en el header y el footer de `index.html`.

**Si querés cambiar el nombre**, editá `marca` en `config.js`. Ojo: el monograma es la
letra **D**, así que si elegís un nombre que no empiece con D, conviene pedir un logo nuevo.

Otras opciones de nombre por si querés probar: `Denegri Digital`, `Denegri Estudio`,
`Estudio Denegri`, `Dena Web`, `Denegri.dev`.

---

## 🖼️ Reemplazar las imágenes

Todas las imágenes son **placeholders** (bloques con degradado y una etiqueta).
Para poner fotos reales, buscá los bloques:

```html
<div class="ph ph--4x3">
  <div class="ph__label">Foto del local<small>Reemplazá por tu imagen</small></div>
</div>
```

y reemplazalos por:

```html
<img src="ruta/a/tu-foto.jpg" alt="Descripción de la foto" style="border-radius: var(--radius)" />
```

Las clases `ph--16x9`, `ph--4x3`, `ph--1x1` y `ph--3x4` definen la proporción.

---

## 🚀 Cómo verlo y publicarlo

**Ver en tu computadora:** hacé doble clic en `index.html`.
(Si querés un servidor local: `python -m http.server` dentro de la carpeta y abrí
`http://localhost:8000`.)

**Publicarlo gratis (sin costo):**

- **Netlify / Vercel:** arrastrá la carpeta `Catalogo` a la sección "Deploy".
- **GitHub Pages:** subí el contenido a un repositorio y activá Pages en la rama `main`.

> Nota: las tipografías se cargan desde Google Fonts. Si no hay internet, el sitio usa
> tipografías del sistema y se sigue viendo bien.

---

## ✅ Antes de publicar — checklist

- [x] Marca, teléfono, WhatsApp, email, LinkedIn y precios cargados en `assets/js/config.js`.
- [ ] Revisar los precios de las demos (siguen siendo de ejemplo).
- [ ] Reemplazar los placeholders de imágenes por fotos reales.
- [ ] Probar los botones de WhatsApp en celular (confirmar que el número tenga WhatsApp).
- [ ] Actualizar la fecha del pie si hace falta (se pone sola con el año actual).
