import { Mobile } from "./Mobile";

let Nokia:Mobile = new Mobile("Nokia 3210", "3210" , "Nokia", 32 , "Gris" , false , 0 , 59 )
let iPhone:Mobile = new Mobile("iPhone3G","3G","iPhone", 99 , "Negro" , false , 1 , 399 )
let Sammsung:Mobile = new Mobile("Sammsung Galaxy 10","Galaxy 10","Sammsung", 130 , "Blanco" , true , 3 , 580)


// Mostrar por consola todos los atributos de cada objeto

console.log(Nokia);
console.log(iPhone);
console.log(Sammsung);

// Modificar el Nokia3210 para que tenga 5G y 4 camaras

Nokia.is5G = true;
Nokia.cameraNumber = 4;

//Mostrar todos los atributos del todos los objetos creados

console.log(Nokia);
console.log(iPhone);
console.log(Sammsung);

