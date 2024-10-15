
const formularioregistro = document.getElementById("formulario-registro");
const mesajeserror =document.getElementById("mensajeserror");

formularioregistro.addEventListener("submit", function(event){

    event.preventDefault();

const usuario = document.getElementById("usuario").value;
const correo = document.getElementById("correo").value;
const contrasena = document.getElementById("contrasena")

mesajeserror.innerHTML = "";

if ( !usuario.trim()) {
    mostrarError("le nombre de usuario es obligatorio");
    return;
}

if ( !correo.trim() || esCorreoValido(correo)) {
    mostrarError("el correo es obligatorio");
    return;
}

if ( !contrasena.trim() || escontrasenacorreo(contrasena)) {
  mostrarError("la contraseña es requerida");
  return;
}


});

function mostrarError ( mensaje ){
    const mensajeserror = document.createElement("div");
    mensajeserror.classname = error;
    mensajeserror.textContent = mensaje;
    mensajeserror.appendChild(mensajeserror)
}

function esCorreoValido( correo ){
    return /{}/+$*/+{*}/.test(correo);
}
    function esCorreoValido( contrasena) {
        let patron = /(?.*/d?+{Az} 
        return patron.test(contrasena);
    }
