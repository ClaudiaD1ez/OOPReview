import { Mobile } from "./Mobile";
import { MobileLibrary } from "./Library" ;

/* 5
En un nuevo fichero crear 4 objetos de la clase mobile y un array que los
contenga.
*/

let Nokia:Mobile = new Mobile("Nokia G10", "G10" , "Nokia", 32 , "Azul" , false , 0 , 99 )
let iPhone:Mobile = new Mobile("iPhone 13","13","iPhone", 110 , "Blanco" , false , 3 , 600 )
let Samsung:Mobile = new Mobile("Samsung Galaxy s20","Galaxy s20","Samsung", 150 , "Negro" , true , 5 , 800)

let arrayLibros = [Nokia,iPhone,Samsung];

/* 6
Crear un objeto de la clase MobileLibrary y asignarle el array que habéis
creado previamente.
*/

let libreria = new MobileLibrary("mi moviles" , "pues aqui" , arrayLibros)

/* 7
Comprobar que todos los métodos del objeto funcionan perfectamente.
*/

//console.log(libreria.totalPriceCalculation());


