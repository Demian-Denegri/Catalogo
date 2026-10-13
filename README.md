# Denegri Web — Catálogo de páginas web

Sitio estático que funciona como **catálogo de plantillas** para ofrecer a locales y
emprendimientos. Incluye una página principal (propuesta, plantillas, precios, preguntas
frecuentes y contacto) y **6 demos navegables** de cada tipo de negocio.

Modelo de negocio que comunica la web: **pago único por el desarrollo + abono mensual
por el mantenimiento**.

---

## ✏️ Cómo editar los datos (lo más importante)

Todo lo que cambia seguido está en **un solo archivo**:

```
assets/js/config.js
```

> Para el **catálogo** (`index.html`). Las **plantillas** (`demos/`) son autocontenidas:
> si entregás una por separado, sus datos (WhatsApp, mensajes, año) se editan en el
> `js/main.js` de esa carpeta.

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
├── assets/                  ← Assets compartidos del catálogo (index)
│   ├── css/
│   │   ├── base.css         ← Variables y estilos base
│   │   ├── demo.css         ← Estilos de las demos
│   │   ├── catalog.css      ← Estilos exclusivos del catálogo
│   │   └── restaurante.css  ← Hoja original de la demo de restaurante
│   ├── img/
│   │   ├── logo.svg         ← Logo completo (marca + nombre)
│   │   ├── favicon.svg      ← Ícono del sitio
│   │   └── amida/           ← Fotos originales de Amida Sushi (respaldo; la plantilla usa su copia propia)
│   └── js/
│       ├── config.js        ← ⭐ Datos editables (catálogo)
│       └── main.js          ← Comportamiento compartido (catálogo y demos)
└── demos/                   ← 🔒 Plantillas 100% autocontenidas
    ├── peluqueria/          ← Estética / Peluquería / Barbería
    ├── gimnasio/            ← Gimnasio / Fitness
    ├── tienda/              ← Comercio / Tienda (con filtro por categorías)
    ├── servicios/           ← Servicios profesionales
    ├── eventos/             ← Salones de eventos / fiestas
    └── restaurante/         ← Restaurante / Sushi (personalizada para Amida Sushi)
```

### Plantillas autocontenidas

Cada carpeta de `demos/` es una **plantilla completa e independiente**: se puede copiar,
entregar o publicar por separado, sin depender del catálogo ni de `assets/`.

```
demos/restaurante/
├── index.html              ← La plantilla en sí
└── assets/                 ← Assets propios de la plantilla
    ├── css/main.css        ← Estilos propios de la plantilla
    ├── js/main.js          ← Lógica propia (datos del dueño + comportamientos)
    └── img/                ← Imágenes propias (fotos del negocio, favicon, etc.)
```

Cada plantilla tiene su **propia** carpeta `assets/` (`css/`, `js/`, `img/`), con la misma
organización que el catálogo, pero totalmente independiente de él.

- El único enlace hacia afuera es la barra de demo **"Volver al catálogo"** (`../../index.html`),
  que se puede quitar al entregar la plantilla (o quedar para mostrar el catálogo completo).
- Los botones de venta **"Quiero esta plantilla"** apuntan al WhatsApp del dueño del catálogo,
  que ahora está configurado dentro de cada `assets/js/main.js`.

### Colores
Los colores base están en las variables de `assets/css/base.css` (`:root`).
Cada demo cambia su color de acento con el atributo `data-accent` en el `<body>`:

```html
<body data-accent="gimnasio">
```

Valores disponibles: `peluqueria`, `gimnasio`, `tienda`, `servicios`, `eventos`, `restaurante`.

> La demo **`demos/restaurante/`** no usa `base.css` ni `demo.css`: tiene su propia hoja
> `assets/css/main.css` con una estética oscura y premium (negro carbón, dorado cálido y
> tipografías Montserrat + Poppins).

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

> La demo **`demos/restaurante/`** ya viene con **fotos profesionales** de archivo (WebP) en
> `assets/img/amida/` —incluye el feed con publicaciones reales de Instagram en `ig-1.jpg`…
> `ig-8.jpg`— y con **opiniones reales** de Google. Su diseño es una **estética oscura y
> premium** hecha a medida (no usa el CSS del catálogo): fondo carbón `#0B0D0D`, superficie
> `#191A18`, dorado cálido `#B98A52` (uso medido), vino `#8C3B2E` opcional, tipografías
> **Montserrat** (títulos e interfaz) y **Poppins** (texto). Los estilos están en
> `assets/css/main.css`.
> Las fotos son **de archivo (stock de Pexels)**, no del local real; para una publicación
> definitiva conviene reemplazarlas por fotos originales de Amida Sushi y confirmar que tenés
> permiso para usarlas. El detalle de las fuentes está en `demos/restaurante/assets/img/CREDITOS.md`.

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
