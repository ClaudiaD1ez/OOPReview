import { Mobile } from "./Mobile";

export class MobileLibrary{
    private name : string
    private location : string
    private mobiles : Mobile[]
    private totalPrice: number 

    constructor(name : string , location : string , mobiles : Mobile[]){

        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    
    }

    //settes y getters

    public getName():string{
        return this.name
    }
    public setnuevoName(nuevoNombre:string){
        this.name = nuevoNombre;
    }

    public getLocation():string{
        return this.location
    }
    public setnuevoLocation(nuevoLocat:string){
        this.location=nuevoLocat
    }

    public getMobiles():Mobile[]{
        return this.mobiles
    }
    public setnuevoMobiles(nuevosMovil:Mobile[]){
        this.mobiles = nuevosMovil
    }

    //Metodos
    /* Crear una función denominada totalPriceCalculation que te calcule el
precio total de la librería (suma de los precios de todos los objetos
almacenados en el atributo mobiles).*/

        private totalPriceCalculation():number{
            let suma = 0;
            for(let i = 0 ; i< this.mobiles.length ; i++){
              suma += this.mobiles[i].getPrice()
            }
            return suma;
        }

        public getTotalPriceCalculation():number{
            return this.totalPrice
        }

        /*Crear un nuevo método denominado printLibrary que recorra todos los
objetos del atributo mobile y los muestre por consola*/
        
        public printLibrar():void{
           
            for(let i=0 ; i <this.getMobiles().length ; i++){
                
                 console.log("This is all my mobiles: " + "\n" + "The characteristics of the "  + this.getMobiles()[i].getName() + " are:" + "\n" +
             "\n" + "name: " + this.getMobiles()[i].getName() +"\n" + "model: " + this.getMobiles()[i].getModel() + "/n" + "Trademark: " + this.getMobiles()[i].getTrademark() + "\n" + "SD Size (GB) : " + 
              this.getMobiles()[i].getsdSize() + "\n" + "color: " + this.getMobiles()[i].getColor() + "\n" + "is5G? " + this.getMobiles()[i].getIs5G() + "\n" + "Number of Cameras: " + this.getMobiles()[i].getCameraNumber())
            }
                console.log( "“Price overall: "+ this.getTotalPriceCalculation());
              
        }

}


/* RETO 12
En el fichero principal crear los objetos necesarios para crear un nuevo
objeto de la clase MobileLibrary y comprobar todos sus métodos.*/


let Motorola:Mobile = new Mobile("Motorola g9 plus", "g9 plus" , "Motorola", 60 , "Azul" , false , 1 , 300 )
let Huawei:Mobile = new Mobile("Huawei p40 lite","p40 lite","Huawei", 110 , "Blanco" , true , 3 , 490 )
let Poco:Mobile = new Mobile("Poco f3","f3","Poco", 150 , "Negro" , true , 3 , 200)

let misMoviles = [Motorola,Huawei,Poco];

let LibraryMobile = new MobileLibrary("moviles" , "nose" , misMoviles)


console.log(LibraryMobile.printLibrar())
