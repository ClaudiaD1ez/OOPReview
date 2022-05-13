export class Mobile {
    // public name:string 
    // public model:string 
    // public trademark:string 
    // public sdSize:number 
    // public color:string
    // public is5G:boolean
    // public cameraNumber:number
    // public price:number

    constructor (private name:string , private model:string , private trademark:string , private sdSize:number ,
                 private color:string , private is5G:boolean , private cameraNumber:number , private price:number){
                 {
                    this.name = name;
                    this.model = model;
                    this.trademark = trademark;
                    this.sdSize = sdSize;
                    this.color = color;
                    this.is5G = is5G;
                    this.cameraNumber = cameraNumber;
                    this.price = price;
                 }
                 
      

       }

     //setters y getters
     public getName():string{
        return this.name
    }
     public setnuevoName(nuevoNombre:string){
           this.name = nuevoNombre
     }

     public getModel():string{
         return this.model
     }
     public setnuevoModel(nuevoModelo:string){
         this.model = nuevoModelo
     }

     public getTrademark():string{
         return this.trademark
     }
     public setnuevoTrademark(nuevoMarca:string){
         this.trademark = nuevoMarca
     }

     public getsdSize():number{
         return this.sdSize
     }
     public setnuevoSdSize(nuevoTamaño:number){
         this.sdSize = nuevoTamaño
     }

     public getColor():string{
         return this.color
     }
     public setnuevoColor(nuevoColor:string){
         this.color = nuevoColor
     }

     public getIs5G():boolean{
         return this.is5G
     }
     public setnuevoIs5G(nuevo5G:boolean){
         this.is5G = nuevo5G
     }

     public getCameraNumber():number{
         return this.cameraNumber
     }
     public setnuevoCameraNumber(nuevoCamera:number){
         this.cameraNumber = nuevoCamera
     }

     public getPrice():number{
         return this.price
     }
     public setnuevoPrice(nuevoPrecio:number){
         this.price = nuevoPrecio
     }

     //METODOS 

     impCaract(){
         console.log("The characteristics of the mobile name are: " + "\n" + "name: " + this.name +"\n" + 
        "model: " + this.model + "/n" + "Trademark: " + this.trademark + "\n" + "SD Size (GB) : " + this.sdSize + "\n" +
        "color: " + this.color + "\n" + "is5G? " + this.is5G + "\n" + "Number of Cameras: " + this.cameraNumber)
     }
    

}