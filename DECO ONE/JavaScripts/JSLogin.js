document.addEventListener('DOMContentLoaded', () => {
    // Seleccion de todos los elementos
    const btnInicio = document.querySelector('.botonInicioSesion');
    const btnRegistro = document.querySelector('.botonRegistro');
    const contenedorBotones = document.getElementById('contenedorBotones');

    const formLogin = document.getElementById('formularioLogin');
    const formRegistro = document.getElementById('formularioRegistro');
    const formRecuperar = document.getElementById('recuperarContraseña');
    const linkRecuperar = document.getElementById('linkRecuperar');

    // Limpieza de pantalla
    const ocultarTodo = () => {
        formLogin.style.display = 'none';
        formRegistro.style.display = 'none';
        if (formRecuperar) formRecuperar.style.display = 'none';
    };

    // Inicio de Sesion
    btnInicio.addEventListener('click', (e) => {
        e.preventDefault();
        ocultarTodo();
        formLogin.style.display = 'block'; 
        btnInicio.classList.add('activo');
        btnRegistro.classList.remove('activo');
        contenedorBotones.classList.remove('mover-derecha');
    });

    // Registro de cuentaa
    btnRegistro.addEventListener('click', (e) => {
        e.preventDefault();
        ocultarTodo();
        formRegistro.style.display = 'block';
        
        btnRegistro.classList.add('activo');
        btnInicio.classList.remove('activo');
        contenedorBotones.classList.add('mover-derecha');
    });
    //Recuperar contraseñas.
    if (linkRecuperar) {
        linkRecuperar.addEventListener('click', (e) => {
            e.preventDefault();
            ocultarTodo();
            formRecuperar.style.display = 'block';
            
            // Si entra a recuperar, apagamos ambos botones de arriba
            btnInicio.classList.remove('activo');
            btnRegistro.classList.remove('activo');
        });
    }

    // --- AQUÍ ABAJO PUEDES DEJAR EL CÓDIGO DE VALIDACIÓN DE CONTRASEÑAS QUE HICIMOS ANTES ---
});