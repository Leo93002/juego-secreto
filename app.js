let numeroSecreto = 0;
let titulo = document.querySelector ("h1");
let intentos = 1;
let listaNumeros = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
};
function generarNumeroSecreto() {

    let numeroSec = Math.floor(Math.random ()* numeroMaximo)+1;

    if (listaNumeros.length == numeroMaximo){
        asignarTextoElemento("p","Ya se sortearon todos los numeros posibles")
    }
        else { if (listaNumeros.includes(numeroSec)){
            return generarNumeroSecreto();
        }
        else {
        listaNumeros.push(numeroSec);
    return numeroSec;}   
    
};
 };

 function limpiarCaja (){
    let valorCaja = document.querySelector("#numeroIngresado");
    valorCaja.value = "";
};

function condicionesIniciales (){
    asignarTextoElemento ("h1","Juego del número secreto"); 
    asignarTextoElemento ("p",`Ingrese un numero del 1 al ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);

}  ; 

function reiniciarJuego (){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled","true");
 };

 condicionesIniciales ();


function intentoDeUsuario() {
   
    
    let numeroUsuario = parseInt(document.getElementById("numeroIngresado").value);
    if(numeroUsuario == numeroSecreto){
        asignarTextoElemento ("p",`Acertaste el numero en ${intentos} ${(intentos == 1 ? "intento" : "intentos" )}`)
        document.querySelector("#reiniciar").removeAttribute("disabled");
    }

    else {
        limpiarCaja();
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento ("p","El numero es menor")
        }
        else {
            asignarTextoElemento ("p","El numero es mayor")
        }
        ;
        intentos++;
    };
        return;
     };