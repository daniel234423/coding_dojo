
var botonMeGusta = document.getElementById("botonMeGusta");
var contador = document.getElementById("contadorMeGusta");

var meGusta = 0;

botonMeGusta.addEventListener("click", function() {
meGusta++;
contador.innerText = meGusta + " Me gusta";
});
