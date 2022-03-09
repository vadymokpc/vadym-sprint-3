// Obtener los campos de entrada

let password = document.querySelector(".password");
let phone = document.querySelector(".phone");

let name = document.querySelector(".name");

// Obtener los elementos de error

let errorPassword = document.getElementById("errorPassword");
let errorName = document.getElementById("errorName");
let errorPhone = document.getElementById("errorPhone");

// Exercise 6
// Validar campos ingresados ​​por el usuario: nombre, teléfono, contraseña y correo electrónico

function validate(e) {
    e.preventDefault(); // Esto hara que al dar BUY que no se recargue la pagina

    let nombre = document.querySelector(".nombre");
    let apellido = document.querySelector(".apellido");
    let email = document.querySelector(".email");
    let contraseña = document.querySelector(".contraseña");
    let direccion = document.querySelector(".direccion");
    let telefono = document.querySelector(".telefono");

    let errorName = document.querySelector("#errorName");
    let errorLastName = document.querySelector("#errorLastName");
    let errorEmail = document.querySelector("#errorEmail");
    let errorAddress = document.querySelector("#errorAddress");
    let errorPhone = document.querySelector("#errorPhone");
    let errorPassword = document.querySelector("#errorPassword");

    // Expresiones regulares para requisitos en los campos
    let expresionRegularSoloLetras = /^[A-Za-z]+$/; // Solo letras (Mayusculas, minusculas)
    // Formato de email nombre@algo.com
    let expresionRegularEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // Numeros y letras (Mayusculas, minusculas)
    let expresionRegularNumerosLetras = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/;

    //Nombre

    // Si el campo nombre esta vacio...
    if (nombre.value === "") {
        // Si esta vacio le vamos a añadir esta clase al input
        nombre.classList.add("is-invalid"); // is-invalid es una clase de bootstrap que pinta en rojo
        // igualamos la variable errorName a esta cadena (innerText sirve para pintar mensajes de alerta)
        errorName.innerText = "Este campo es obligatorio";
        // Aplicamos display block para que se vea el mensaje, de lo cpontrario no veriamos el texto
        errorName.style.display = "block";
    }
    // Si el campo nombre tiene menos de 3 caracteres ejecutame esto... 
    else if (nombre.value.length < 3) {
        // Si esta vacio le vamos a añadir esta clase al input
        nombre.classList.add("is-invalid");
        // Lo que introducimos se vacia automaticamente 
        nombre.value = "";
        // Muestra un mensaje de correccion de error
        errorName.innerText = "Este campo debe tener al menos 3 caracteres";
        // Aplicamos display block para que se vea el mensaje, de lo cpontrario no veriamos el texto
        errorName.style.display = "block";
    }
    // Si no se detectan solo letras en el campo Nombre ejecutame esto... 
    else if (!expresionRegularSoloLetras.test(nombre.value)) {

        nombre.classList.add("is-invalid");
        // Lo que introducimos se vacia automaticamente 
        nombre.value = "";
        // Muestra un mensaje de correccion de error
        errorName.innerText = "Los números en el nombre no son válidos";

        errorName.style.display = "block";
    }
    // Cuando el input es valido...
    else {
        if (nombre.classList.contains("is-invalid")) { // Quitamos la clase
            nombre.classList.remove("is-invalid"); // Borramos el mensaje
        }
        // Si el mensaje de error error esta pintado le decimos que lo quite 
        if (errorName.style.display === "block") {
            errorName.style.display = "none";
        }
    }

    //Apellido

    if (apellido.value === "") {
        apellido.classList.add("is-invalid");
        errorLastName.innerText = "Este campo es obligatorio";
        errorLastName.style.display = "block";
    }
    //
    else if (apellido.value.length < 3) {
        apellido.classList.add("is-invalid");
        apellido.value = "";
        errorLastName.innerText = "Este campo debe tener al menos 3 caracteres";
        errorLastName.style.display = "block";
    }
    //
    else if (!expresionRegularSoloLetras.test(apellido.value)) {
        apellido.classList.add("is-invalid");
        apellido.value = "";
        errorLastName.innerText = "El apellido solo puede contener letras";
        errorLastName.style.display = "block";
    }
    //
    else {
        if (apellido.classList.contains("is-invalid")) {
            apellido.classList.remove("is-invalid");
        }
        if (errorLastName.style.display === "block") {
            errorLastName.style.display = "none";
        }
    }

    //Email

    if (email.value === "") {
        email.classList.add("is-invalid");
        errorEmail.innerText = "Este campo es obligatorio";
        errorEmail.style.display = "block";
    }
    //
    else if (!expresionRegularEmail.test(email.value)) {
        email.classList.add("is-invalid");
        email.value = "";
        errorEmail.innerText = "Por favor utilice una dirección de correo electrónico válida";
        errorEmail.style.display = "block";
    }
    //
    else {
        if (email.classList.contains("is-invalid")) {
            email.classList.remove("is-invalid");
        }
        if (errorEmail.style.display === "block") {
            errorEmail.style.display = "none";
        }
    }

    //Direccion

    if (direccion.value === "") {
        direccion.classList.add("is-invalid");
        errorAddress.innerText = "Este campo es obligatorio";
        errorAddress.style.display = "block";
    }
    //
    else if (direccion.value.length < 3) {
        direccion.classList.add("is-invalid");
        errorAddress.innerText = "Este campo debe tener al menos 3 caracteres";
        errorAddress.style.display = "block";
    }
    //
    else {
        if (direccion.classList.contains("is-invalid")) {
            direccion.classList.remove("is-invalid");
        }
        if (errorAddress.style.display === "block") {
            errorAddress.style.display = "none";
        }
    }

    //Numero de telefono

    if (telefono.value === "") {
        telefono.classList.add("is-invalid");
        errorPhone.innerText = "Este campo es obligatorio";
        errorPhone.style.display = "block";
    }
    //
    else if (telefono.value.length < 3) {
        telefono.classList.add("is-invalid");
        telefono.value = "";
        errorPhone.innerText = "Este campo debe tener al menos 3 caracteres";
        errorPhone.style.display = "block";
    }
    //
    else {
        if (telefono.classList.contains("is-invalid")) {
            telefono.classList.remove("is-invalid");
        }
        if (errorPhone.style.display === "block") {
            errorPhone.style.display = "none";
        }
    }

    //Contraseña

    if (contraseña.value === "") {
        contraseña.classList.add("is-invalid");
        errorPassword.innerText = "Este campo es obligatorio";
        errorPassword.style.display = "block";
    }
    //
    else if (contraseña.value.length < 4) {
        contraseña.classList.add("is-invalid");
        contraseña.value = "";
        errorPassword.innerText = "Este campo debe tener al menos 4 caracteres";
        errorPassword.style.display = "block";
    }
    //
    else if (!expresionRegularNumerosLetras.test(contraseña.value)) {
        contraseña.classList.add("is-invalid");
        contraseña.value = "";
        errorPassword.innerText = "La contraseña debe contener letras y números";
        errorPassword.style.display = "block";
    }
    //
    else {
        if (contraseña.classList.contains("is-invalid")) {
            contraseña.classList.remove("is-invalid");
        }
        if (errorPassword.style.display === "block") {
            errorPassword.style.display = "none";
        }
    }
};