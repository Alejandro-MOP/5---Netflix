//validar el formulario
const $inputs = document.querySelectorAll('form .campo input');

$inputs.forEach( $input => {
    $input.addEventListener('blur', validarInput);
});

$inputs.forEach( $input => {
    $input.addEventListener('input', validarInput);
});

function validarInput(e) {

    const estado =['valido', 'no-valido'];
    let clase;

    if (e.target.value.length === 0) {
        clase = estado[1];
    } else {
        clase = estado[0];
    }

    e.target.classList.remove(...estado);
    e.target.nextElementSibling.classList.remove(...estado);
    e.target.classList.add(clase);
    e.target.nextElementSibling.classList.add(clase);

    //inyectar el div error
    if (clase === 'no-valido') {
        if (e.target.parentElement.nextElementSibling.classList[0] !== 'alerta') {
            const $erroDiv = document.createElement('div');
            $erroDiv.appendChild( document.createTextNode('Este campo es obligatorio') );
            $erroDiv.classList.add('alerta');
            e.target.parentElement.parentElement.insertBefore($erroDiv, e.target.parentElement.nextElementSibling);
        }
    } else {
        if (e.target.parentElement.nextElementSibling.classList[0] === 'alerta') {
            e.target.parentElement.nextElementSibling.remove();
        }
    }
}

//mostrar/ocultar password

const $mostrarPwdBtn = document.querySelector('form .campo span');

$mostrarPwdBtn.addEventListener('click', e => {
    const $passwordInput = document.querySelector('#pass');

    if (e.target.classList.contains('mostrar')) {
        e.target.classList.remove('mostrar');
        e.target.textContent = 'Ocultar';
        $passwordInput.type = 'text';
    } else {
        e.target.classList.add('mostrar');
        e.target.textContent = 'Mostrar';
        $passwordInput.type = 'password';
    }
})