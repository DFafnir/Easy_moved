// Función para mostrar la imagen seleccionada
function mostrarImagen(event) {
    const imagen = document.getElementById('ver-imagen');
    imagen.src = URL.createObjectURL(event.target.files[0]);
    imagen.style.display = 'block';
}

// Función para validar el formulario
function validarFormulario() {
    const form = document.getElementById('formulario');
    if (form.checkValidity()) {
        alert('Gracias por usar nuestros servicios, notificaremos a su correo los detalles');
        return true;
    }
    alert('Por favor, complete todos los campos requeridos');
    return false;
}
