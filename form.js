var nombre = document.getElementById('Nombre');
var apellido = document.getElementById('Apellido');
var dni = document.getElementById('Dni');
var correo = document.getElementById('Correo');
var error = document.getElementById('error');

function enviarFormulario(){
    console.log('Enviando Formulario');

    var mensajeError=[];
    if(nombre.value === null || nombre.value === ''){
        mensajeError.push('Ingrese su nombre');
    }
    if(apellido.value === null || apellido.value === ''){
        mensajeError.push('Ingrese su apellido');
    }
    if(dni.value === null || dni.value === ''){
        mensajeError.push('Ingrese su dni');
    }
    if(correo.value === null || correo.value === ''){
        mensajeError.push('Ingrese su email');
    }

    error.innerHTML = mensajeError.join(', ');

    return false;
}
