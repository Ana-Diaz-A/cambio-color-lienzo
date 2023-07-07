let colors = [ 'red', 'blue', 'green', 'orange', 'purple', 'black', 'yellow']; //7 colores

//cambiar el fondo del lienzo cuando se hace clic en el botón
let button = document.getElementById('button');

button.addEventListener('click', function(){
    let index = parseInt((Math.random()*colors.length)+1); //selecciona un número aleatorio entre 0 - 6
    let canvas = document.getElementById('canvas');
    canvas.style.background = `${colors[index]}`
})