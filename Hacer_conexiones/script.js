
var user = document.querySelector('#jane_h1');
var p = document.querySelector('#edit_principal')

p.addEventListener('click', function edit() {
    console.log("hola");
    user.innerHTML = '<input type="text">';

})
var numero = document.querySelector('#numero')
var boton = document.querySelector('#accept-circle')
var denegar = document.querySelector('#close_circle')

boton.addEventListener('click', function name(params) {
    console.log('chao')
    numero--;
    numero.textContent = -1;
})