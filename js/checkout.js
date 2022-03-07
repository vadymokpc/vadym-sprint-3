// Obtener los campos de entrada

let password = document.querySelector(".password");
let phone = document.querySelector('.phone');

let name = document.querySelector('.name');

// Obtener los elementos de error

let errorPassword = document.getElementById("errorPassword");
let errorName = document.getElementById('errorName');
let errorPhone = document.getElementById('errorPhone');

// Exercise 6
// Validar campos ingresados ​​por el usuario: nombre, teléfono, contraseña y correo electrónico

function validate(e) {

    e.preventDefault();

    let nombre = document.querySelector('.nombre');
    let apellido = document.querySelector('.apellido');
    let email = document.querySelector('.email').value;
    let contraseña = document.querySelector('.contraseña').value;
    let direccion = document.querySelector('.direccion').value;
    let telefono = document.querySelector('.telefono').value;

    const errorName = document.querySelector('#errorName');

const errorLastName = document.querySelector('#errorLastName');
    // Todos los campos deben tener al menos 3 caracteres
    /*  if (nombre.length < 3 || apellido.length < 3 || email.length < 3 || contraseña.length < 3 || direccion.length < 3 || telefono.length < 3) {
         alert('Todos los campos deben tener al menos 3 caracteres');
         return false;
     } */
    // Todos los campos deben tener al menos 3 caracteres

    const regexSoloLetras = /^[A-Za-z]+$/;

    if (regexSoloLetras.test(nombre.value)) {
        if (nombre.classList.contains('is-invalid')) {
            nombre.classList.remove('is-invalid');
        }
        if (errorName.style.display === 'block') {
            errorName.style.display = 'none';
        }
    } else {
        nombre.classList.add('is-invalid')
        errorName.style.display = 'block';
    }

    if (regexSoloLetras.test(apellido.value)) {
        if (apellido.classList.contains('is-invalid')) {
            apellido.classList.remove('is-invalid');
        }
        if (errorLastName.style.display === 'block') {
            errorLastName.style.display = 'none';
        }
    } else {
        apellido.classList.add('is-invalid')
        errorLastName.style.display = 'block';
    }

};