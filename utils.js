//generar un numero aleatorio
function  generarAleatorio (min,max){
    let random = Math.random();
    let numero = random*(max-min);
    let numeroEntero = Math.ceil(numero);
    numeroEntero = numeroEntero + min;
    return (numeroEntero)
}
// funcion probar aleatorio

function probarAleatorio (){
    let aleatorio = generarAleatorio(10,80);
    console.log(aleatorio);
    
}

function mostrarEnSpan (idSpan,valor){
    let componente = document.getElementById(idSpan);
    componente.textContent = valor;
}