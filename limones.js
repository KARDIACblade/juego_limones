let canvas = document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");


const   ALTURA_SUELO=40;
const ALTURA_PERSONAJE=60;
const ANCHO_PERSONAJE=40;

let personajeX = canvas.width/2
let personajeY  = canvas.height-(ALTURA_SUELO  +ALTURA_PERSONAJE)

//variables limon
let limonX=canvas.width/2;
let limonY=0
const ANCHO_LIMON = 20
const ALTO_LIMON = 20

function iniciar (){
    dibujarSuelo();
    dibujarPersonaje();
    // dibujarLimon(); // dibujar limon
    aparecerLimon();
    
}


function dibujarSuelo (){
    ctx.fillStyle="blue";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO)
}

function dibujarPersonaje (){
    ctx.fillStyle="yellow";
    ctx.fillRect(personajeX,personajeY,ANCHO_PERSONAJE,ALTURA_PERSONAJE)
}

function moverIzquierda(){
    personajeX=personajeX-10;
    actualizarCanva();
   
}
// mover dercha

function moverDerecha(){
    personajeX=personajeX+10;
    actualizarCanva();
    
}

 function actualizarCanva(){
         limpiarCanva();
         dibujarSuelo();
         dibujarPersonaje();
          dibujarLimon();
 }
function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
// dibujar limon
function dibujarLimon (){
    ctx.fillStyle="green";
    ctx.fillRect(limonX,limonY,ANCHO_LIMON,ALTO_LIMON)
}
// mover limon
function bajarLimon (){
    limonY = limonY + 10;
     actualizarCanva();
    detectarColision();
  
}
// funcion detectar colision
function detectarColision(){
    if (limonX + ANCHO_LIMON > personajeX && limonX < personajeX + ANCHO_PERSONAJE
        && limonY + ALTO_LIMON > personajeY && limonY < personajeY + ALTURA_PERSONAJE)
     // alert("atrapado !!")
        aparecerLimon();
}
// funcion aparecer limon al principio
function aparecerLimon (){
    limonX= generarAleatorio(0,canvas.width-ANCHO_LIMON);
    limonY=0;
    //se debe actualizar
    actualizarCanva();
}