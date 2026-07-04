document.addEventListener('DOMContentLoaded', () => {
    // Selección de todos los elementos
    const btnInicio = document.querySelector('.botonInicioSesion');
    const btnRegistro = document.querySelector('.botonRegistro');
    const contenedorBotones = document.getElementById('contenedorBotones');

    const formLogin = document.getElementById('formularioLogin');
    const formRegistro = document.getElementById('formularioRegistro');
    const formRecuperar = document.getElementById('recuperarContraseña');
    const linkRecuperar = document.getElementById('linkRecuperar');

    // Variable para rastrear qué formulario está visible actualmente
    let formActivo = formLogin; 

    // Función mágica para el cambio dinámico
    const transicionFormulario = (nuevoForm) => {
        if (formActivo === nuevoForm) return; // Si ya estamos en ese form, no hace nada

        // 1. Hacemos que el formulario actual desaparezca suavemente
        formActivo.classList.add('ocultandose');

        // 2. Esperamos 300ms a que termine la animación de salida
        setTimeout(() => {
            formActivo.style.display = 'none';
            formActivo.classList.remove('ocultandose'); // Limpiamos la clase

            // 3. Mostramos el nuevo formulario (usamos 'flex' para no romper tu CSS)
            nuevoForm.style.display = 'flex'; 
            formActivo = nuevoForm; // Actualizamos cuál es el activo ahora
        }, 300);
    };

    // Inicio de Sesión
    btnInicio.addEventListener('click', (e) => {
        e.preventDefault();
        transicionFormulario(formLogin);
        
        btnInicio.classList.add('activo');
        btnRegistro.classList.remove('activo');
        contenedorBotones.classList.remove('mover-derecha');
    });

    // Registro de cuenta
    btnRegistro.addEventListener('click', (e) => {
        e.preventDefault();
        transicionFormulario(formRegistro);
        
        btnRegistro.classList.add('activo');
        btnInicio.classList.remove('activo');
        contenedorBotones.classList.add('mover-derecha');
    });

    // Recuperar contraseña
    if (linkRecuperar) {
        linkRecuperar.addEventListener('click', (e) => {
            e.preventDefault();
            transicionFormulario(formRecuperar);
            
            // Si entra a recuperar, apagamos la selección de ambos botones superiores
            btnInicio.classList.remove('activo');
            btnRegistro.classList.remove('activo');
        });
    }

    // --- AQUÍ ABAJO PUEDES DEJAR EL CÓDIGO DE VALIDACIÓN DE CONTRASEÑAS QUE HICIMOS ANTES ---
});