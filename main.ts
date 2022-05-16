import {Punto} from "./punto";

let puntoUno:Punto = new Punto(3,4);
let puntoDos:Punto = new Punto(5,9); 

//console.log(puntoUno)

console.log(puntoUno.distanciaAlOrigen());

console.log(puntoUno.calcularDistancia(puntoDos));

console.log(puntoUno.calcularCuadrante());

//

let puntoCero = new Punto(4,2)
let punto1 = new Punto (7,9)
let punto2 = new Punto (2,5)
let punto3 = new Punto (8,1)
let puntos = [punto1,punto2,punto3]

//console.log(puntoCero.calcularMasCercano(puntos))
