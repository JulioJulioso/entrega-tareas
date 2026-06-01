const nombreInput = document.querySelector('#name');
const formPost = document.querySelector('#form-post');
const contenedorPublicaciones = document.querySelector('#contenedor-post');

function crearPublicacion(nombre, texto) {
    const postUser = document.createElement('div');
    postUser.classList.add('posteo');

    const nombreUsuario = document.createElement('h4');
    nombreUsuario.textContent = nombre;

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', function () {
        postUser.remove();
    });

    nombreUsuario.appendChild(deleteButton);
    postUser.appendChild(nombreUsuario);
    contenedorPublicaciones.appendChild(postUser);
}

formPost.addEventListener('submit', function(event) {
    event.preventDefault();

    const valorInputNombre = nombreInput.value.trim();

    if (valorInputNombre === '') {
        alert('Debes escribir alguna tarea')
        return;
    }

    crearPublicacion(valorInputNombre);
    nombreInput.value = '';
});