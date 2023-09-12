var boton = document.querySelector('#boton');
var contador = document.querySelector('#contador');
var number = 3;
contador.textContent 
boton.onclick = function () {
    number++;
    contador.textContent = number;
    
}