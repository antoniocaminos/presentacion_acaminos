/* funcion saludar con alret */
function mostrarMensaje() {
    alert('¡Bienvenidos a nuestra clase de JavaScript!');
}
/* funcion cambiar texto */
    let textoInicial = true;

    function alternarTexto() {
        const textoElemento = document.getElementById('mi-texto');
        if (textoInicial) {
            textoElemento.innerText = 'Texto cambiado con JavaScript';
        } else {
            textoElemento.innerText = 'Texto inicial';
        }
        textoInicial = !textoInicial; // Cambia entre verdadero y falso
    }
/* cambiar color caja */
function cambiarColorAleatorio() {
    const colores = ['#ff9999', '#99ff99', '#9999ff', '#ffcc99', '#99ccff', '#cc99ff', '#ff99cc'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.getElementById('caja').style.backgroundColor = colorAleatorio;
}
/* funcion pedir nombre */
function pedirNombre () {
    let nombre = prompt('Cual es tu nombre?')
    alert('Hola ' + nombre + ', Estas disfutando la clase?')
}