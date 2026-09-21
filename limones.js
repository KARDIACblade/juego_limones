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
//variable del puntaje y vidas
let puntaje = 0;
let vidas = 3;

let velocidadCaida=200;
let intervaloCaida;

function iniciar (){
    intervaloCaida=setInterval(bajarLimon,velocidadCaida);  //1erparametro nombre funcion,2 parametro velocidad milisegundos   
            
    dibujarSuelo();
    dibujarPersonaje();
   
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
function dibujarLimon (){
    ctx.fillStyle="green";
    ctx.fillRect(limonX,limonY,ANCHO_LIMON,ALTO_LIMON)
}
// mover limon hacia abajo
function bajarLimon (){
    limonY = limonY + 10;
     actualizarCanva();
    detectarColision();

    detectarPiso();
  
}
// funcion detectar colision
function detectarColision(){
    if (limonX + ANCHO_LIMON > personajeX && limonX < personajeX + ANCHO_PERSONAJE
        && limonY + ALTO_LIMON > personajeY && limonY < personajeY + ALTURA_PERSONAJE){
              
        aparecerLimon();

        puntaje = puntaje +1;
     
       mostrarEnSpan("txtPuntaje",puntaje);


       if(puntaje == 3){
         velocidadCaida=150;
         clearInterval(intervaloCaida);
         intervaloCaida=setInterval(bajarLimon,velocidadCaida)
       }
       if (puntaje == 6){
        velocidadCaida=100
        clearInterval(intervaloCaida);
         intervaloCaida=setInterval(bajarLimon,velocidadCaida)  
       }
       if(puntaje==10){
        clearInterval(intervaloCaida);
        alert("Eres el ganador del juego")
        
       }
    }
}
// funcion aparecer limon al principio
function aparecerLimon (){
    limonX= generarAleatorio(0,canvas.width-ANCHO_LIMON);
    limonY=0;
    //se debe actualizar
    actualizarCanva();
}

//funcion detectar el piso
function detectarPiso (){
    if(limonY+ALTO_LIMON==canvas.height-ALTURA_SUELO){
        aparecerLimon();
        vidas= vidas-1
   
         mostrarEnSpan("txtVidas",vidas);
         if(vidas==0){
            clearInterval(intervaloCaida);
            alert("GAME OVER")
            

         }
    }
}

//reiniciar
function reiniciar (){
    clearInterval(intervaloCaida);
    vidas=3;
    puntaje=0;
    velocidadCaida=200;
    mostrarEnSpan("txtVidas",vidas);
    mostrarEnSpan("txtPuntaje",puntaje);
    iniciar();
}