# 1. Empezamos desde una imagen base de Fedora
FROM fedora:latest

# 2. Instalamos el servidor web Apache (httpd)
RUN dnf -y install httpd && dnf clean all

# 3. Copiamos los archivos de nuestro blog
COPY *.html /var/www/html/
COPY *.css /var/www/html/

# --- AÑADE ESTA LÍNEA PARA LAS IMÁGENES ---
COPY *.jpg /var/www/html/

# Copia 'entrada-1.html' para que también sea el 'index.html'
COPY entrada-1.html /var/www/html/index.html

# 4. Exponemos el puerto 80
EXPOSE 80

# 5. El comando para arrancar el servidor
CMD ["/usr/sbin/httpd", "-D", "FOREGROUND"]