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
        //this.totalPrice = totalPrice;
    
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

        totalPriceCalculation(){
            let suma = 0;
            for(let i = 0 ; i< this.mobiles.length ; i++){
              suma += this.mobiles[i].getPrice()
            }
            return suma;
        }

}