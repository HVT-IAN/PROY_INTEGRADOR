document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery img');

    if (images.length > 0) {
        // Asignamos la clase 'activa' a la primera imagen por defecto
        images[0].classList.add('activa');

        images.forEach(img => {
            img.addEventListener('click', function() {
                // 1. Le quitamos la clase 'activa' a todas las imágenes
                images.forEach(i => i.classList.remove('activa'));
                
                // 2. Se la agregamos solo a la que el usuario le dio clic
                this.classList.add('activa');
            });
        });
    }
});