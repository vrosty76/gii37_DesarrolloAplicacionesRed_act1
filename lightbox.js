// Esperamos a que todo el HTML esté cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

  // 1. Crear los elementos del Lightbox
  // Creamos el fondo oscuro (el 'modal')
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  
  // Creamos el contenedor para la imagen
  const lightboxImage = document.createElement('img');
  lightboxImage.id = 'lightbox-img';
  
  // Añadimos la imagen al modal, y el modal al body
  lightbox.appendChild(lightboxImage);
  document.body.appendChild(lightbox);

  // 2. Buscar todas las imágenes DENTRO de los artículos
  // Usamos '.blog-post img' para no afectar a otras imágenes (ej: un logo)
  const images = document.querySelectorAll('.blog-post img');

  // 3. Añadir un "escuchador" de clics a cada imagen
  images.forEach(image => {
    image.addEventListener('click', () => {
      // Cuando se hace clic en una imagen:
      // 1. Ponemos el 'src' de esa imagen en nuestra imagen del lightbox
      lightboxImage.src = image.src;
      // 2. Mostramos el lightbox (añadiendo la clase 'visible')
      lightbox.classList.add('visible');
    });
  });

  // 4. Añadir un "escuchador" al propio lightbox para cerrarlo
  lightbox.addEventListener('click', () => {
    // Ocultamos el lightbox (quitando la clase 'visible')
    lightbox.classList.remove('visible');
  });

});