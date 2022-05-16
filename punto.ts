export class Punto {
      
    private x: number ;
    private y: number ;

    constructor(x:number , y:number){
         
        this.x = x;
        this.y = y;

    }
     
    //setter y getters

     public getX():number{
        return this.x
     }
     public setNuevoX(NuevoX:number){
         this.x = NuevoX
     }

     public getY():number{
        return this.y
     }
     public setNuevoY(NuevoY:number){
         this.x = NuevoY
     }

    //Metodos
     
    //convierta a texto las coordenada del punto,
    
    toString(x:number,y:number):void{
        console.log("(" + this.getX() + "," + this.getY() + ")")
    }

    //devuelva la distancia del punto al origen de coordenadas (0,0).

    distanciaAlOrigen():number{
       let numeroOrigen:number = (this.getX()*this.getX()) + (this.getY()*this.getY());
       let origen:number = Math.sqrt(numeroOrigen);
       return origen;
    }
    
    //Calcular la distancia de un punto a otro punto.
    calcularDistancia(otroPunto:Punto):number{
        let numeroDistancia:number =( Math.pow((otroPunto.getX() - this.getX()),2) ) + (Math.pow((otroPunto.getY() - this.getY()),2));
        let distancia = Math.sqrt(numeroDistancia);
        return distancia;
    } 
    
    //el cuadrante en el que se encuentra el punto.
    calcularCuadrante():number{
        let cuadrante:number 
       if(this.getX() == 0 || this.getY() == 0){
        cuadrante = 0
        return cuadrante
       }else if(this.getX() > 0 && this.getY() > 0){
           cuadrante = 1
           return cuadrante
       }else if(this.getX() < 0 && this.getY() > 0){
           cuadrante = 2
           return cuadrante
       }else if(this.getX() < 0 && this.getY() < 0){
           cuadrante = 3
           return cuadrante
       }else if(this.getX() > 0 && this.getY() < 0){
        cuadrante = 4
        return cuadrante}
    }
    
    /*metodo que reciba como parámetro un array de objetos de la clase Punto y
    devuelva una referencia al objeto de dicho array que esté más cercano al punto
    actual. */

    // calcularMasCercano(puntos : Punto[]) :Punto[]{
    //     let distanciaTodas:Punto
    //     for (let i=0 ; i<puntos.length ; i++){
        
    //        if (this.calcularDistancia(puntos[i])<this.calcularDistancia(puntos[i+1])){
    //           distanciaTodas = puntos[i]
    //        }else{distanciaTodas = puntos[i+1]}

    //     }
    //     //return distanciaTodas
    //     //console.log(distanciaTodas) 
    // }

    
}

