var Nombre = document.getElementById("Nombre");
var Email = document.getElementById("Email");
var Mensaje = document.getElementById("Mensaje");
var error = document.getElementById("Error");
error.style.color = "red";





function enviarFormulario() {
    console.log("Enviando Formulario...");

    var mensajesError = [];

    if(Nombre.value === null || Nombre.value === ""){
            mensajesError.push("Ingresa tu nombre");

    }

    if(Email.value === null || Email.value === ""){
        mensajesError.push("Ingresa tu Email");
    }

    if(Mensaje.value === null || Mensaje.value === ""){
        mensajesError.push("Ingresa tu Mensaje");
    }

    error.innerHTML = mensajesError.join(", ");

    return false;
}