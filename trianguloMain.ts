import {Punto} from "./punto"
import {Triangulo} from "./triangulo" 

/*
Modificar el fichero main para crear un objeto de la clase triangulo e invocar al
método calcularLongitudLados.
*/

let posicion1 = new Punto(4,1);
let posicion2 = new Punto(7,9);
let posicion3 = new Punto(3,4);

let miTriangulo:Triangulo = new Triangulo(posicion1,posicion2,posicion3);

console.log(miTriangulo.calcularLongitudLados())

