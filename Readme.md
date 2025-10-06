# 🌐 LANCE — Observatorio

Sitio web institucional del Observatorio LANCE.  
Diseño estático, moderno y limpio en tonos **azul y blanco**, con carrusel automático de imágenes, secciones informativas y mapa de ubicación.

Autor Principal: Daniela Rodríguez, estudiante 9no semestre LMAD
Asesor/a del proyecto: Dr. Esmeralda

---

## 📁 Estructura del proyecto

LANCE/
│
├── index.html # Página principal
├── styles.css # Estilos generales
├── script.js # Lógica del carrusel y botón 'ir arriba'
└── img/ # Carpeta de imágenes
├── carrusel1.jpg
├── carrusel2.jpg
└── carrusel3.jpg


---

## 🖥️ Cómo visualizar el sitio

1. Descarga todos los archivos del proyecto y colócalos en una carpeta llamada **LANCE**.  
2. Abre el archivo `index.html` en tu navegador (doble clic o "Abrir con...").  
3. ¡Listo! El sitio funcionará sin necesidad de servidor o base de datos.

---

## 🧭 Secciones del sitio

- **Inicio:** Carrusel automático con tres imágenes.
- **Información:** Cuatro recuadros azules con datos del observatorio.
- **Investigación:** Espacio para difundir líneas de investigación.
- **Servicios:** Área para mostrar servicios o colaboraciones.
- **Contacto:** Información de contacto y mapa embebido de Google Maps.

---

## 🖼️ Imágenes recomendadas

Coloca tus imágenes en la carpeta `img/` con los nombres:

- `carrusel1.jpg`
- `carrusel2.jpg`
- `carrusel3.jpg`

---

## ⚙️ Publicar en línea

### Opción 1: **GitHub Pages**
1. Crea un repositorio en GitHub llamado `lance`.
2. Sube todos los archivos del proyecto.
3. En GitHub, entra a **Settings → Pages**.
4. En “Source”, selecciona la rama principal (`main` o `master`), y guarda.
5. GitHub generará un enlace como:
https://tuusuario.github.io/lance/


---

## 📍 Ubicación del observatorio

El mapa del pie de página apunta a:
**Observatorio Astronómico Universitario**
(Coordenadas aproximadas: 24.7552102, –99.8953279)

---

## 📬 Contacto

Correo: contacto@lance.org  
Teléfono: +52 123 456 7890  
© 2025 LANCE — Todos los derechos reservados.

---

## ✏️ Personalización

- Cambia el color institucional en `styles.css` (busca el color `#003366`).
- Sustituye los textos de ejemplo en cada sección.
- Puedes ajustar la velocidad del carrusel en `script.js` modificando:
```js
setTimeout(showSlides, 4000);

