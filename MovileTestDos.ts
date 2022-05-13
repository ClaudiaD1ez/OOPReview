import { Mobile } from "./Mobile";

// 6. En otro fichero hacer las mismas operaciones que se hicieron en el punto 2.

let Nokia:Mobile = new Mobile("Nokia 3210", "3210" , "Nokia", 32 , "Gris" , false , 0 , 59 )
let iPhone:Mobile = new Mobile("iPhone3G","3G","iPhone", 99 , "Negro" , false , 1 , 399 )
let Sammsung:Mobile = new Mobile("Sammsung Galaxy 10","Galaxy 10","Sammsung", 130 , "Blanco" , true , 3 , 580)


// Mostrar por consola todos los atributos de cada objeto

console.log(Nokia);
console.log(iPhone);
console.log(Sammsung);

// Modificar el Nokia3210 para que tenga 5G y 4 camaras

Nokia.setnuevoIs5G(true);
Nokia.setnuevoCameraNumber(4);

//Mostrar todos los atributos del todos los objetos creados

console.log(Nokia);
console.log(iPhone);
console.log(Sammsung);

// 7. Crear un array de objetos de la clase Mobile con los tres objetos ya creados

let moviles:Mobile[] = [Nokia,iPhone,Sammsung];

/* 8. Mostrar cada uno de los atributos de cada uno de los objetos del array creado
tal y como se especifica en el punto 5.*/

for(let i=0 ; i<moviles.length ; i++){
     moviles[i].impCaract();
}
// Nokia.impCaract();
// iPhone.impCaract();
// Sammsung.impCaract();

