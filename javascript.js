var nombre = prompt("Ingresa tu Nombre");
var distancia = confirm("¿Vives a menos de 80km de San nicolas?");

function validarDistancia (distancia){
    if(distancia == true) {
        alert(nombre + " Tu envio es Gratis");
    } else {
        alert(nombre + " Tu envio sale $800");
    }
}

validarDistancia(distancia);