//document.getElementById("nene").style.display = 'none';



/*const nene = document.getElementById('nene');

nene.style.display = 'none';
nene.style.display = 'block';

botonEncriptar.addEventListener('click', encriptar()); {
    inner.textContent = encriptar();
    nene.style.display = 'none';
}

function demoDisplay() {
    document.getElementById("nene").style.display = "none";
}
*/

function mostrarOcultar() {
    document.getElementById('botonCopiar').style.display = 'block';
    document.getElementById("interno").style.display = "none";

    var frase = document.getElementById("mensaje").value.toLowerCase();

    var mensaje = frase.replace(/e/img, "enter");
    var mensaje = mensaje.replace(/o/img, "ober");
    var mensaje = mensaje.replace(/i/img, "imes");
    var mensaje = mensaje.replace(/a/img, "ai");
    var mensaje = mensaje.replace(/u/img, "ufat");

    document.getElementById("textoD").innerHTML = mensaje;
}

function encriptaTexto(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = "abcdefghijklmnopqrstuvwxyz ";

    especiales = [8, 13];
    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }
    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        alert("Ingresar solo letras minúsculas");
        return false;
    }
}


function desencriptar() {
    var frase = document.getElementById("mensaje").value.toLowerCase();

    var mensaje = frase.replace(/enter/img, "e");
    var mensaje = mensaje.replace(/ober/img, "o");
    var mensaje = mensaje.replace(/imes/img, "i");
    var mensaje = mensaje.replace(/ai/img, "a");
    var mensaje = mensaje.replace(/ufat/img, "u");

    document.getElementById("textoD").innerHTML = mensaje;
}

function copiar() {
    var copyPaste = document.querySelector("#textoD");
    copyPaste.select();
    document.execCommand("copy");
}