
var user = document.querySelector('#jane_h1');
var p = document.querySelector('#edit_principal');

p.addEventListener('click', function edit() {
    console.log("hola");
    user.innerHTML = '<input id="hola" type="text">';
})
var contador = document.querySelector('#numero');
var boton = document.querySelector('#accept-circle');
var boton2 = document.querySelector('#accept-circle2');
var denegar = document.querySelector('#close_circle');
var denegar2 = document.querySelector('#close_circle2');
var numero = (contador.textContent, 2);
var caja = document.querySelector('#perfil_div');
var caja2 = document.querySelector('#perfil_div2');
var contador2 = document.querySelector('#numero2')
var numero2 = (contador2.textContent, 418);


boton.addEventListener('click', function name(params) {
    console.log('chao')
    numero--;
    contador.textContent = numero;
    caja.remove();
    numero2 ++;
    contador2.textContent = numero2;
})
boton2.addEventListener('click', function name(params) {
    console.log('chao');
    numero--;
    contador.textContent = numero;
    caja2.remove();
    numero2++;
    contador2.textContent = numero2;

})
denegar.addEventListener('click', function name(params) {
    console.log('chao');
    numero--;
    contador.textContent = numero;
    caja.remove();

})
denegar2.addEventListener('click', function name(params) {
    console.log('chao');
    numero--;
    contador.textContent = numero;
    caja2.remove();
})