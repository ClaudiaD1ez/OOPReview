import {Punto} from "./punto"

/*
13. Crea la clase Triangulo cuyo constructor reciba tres objetos de la clase Punto
que son sus vértices.
14. Tiene que tener como atributos privados los tres vertices
15. Programa el método calcularLongitudLados() : number[] que debe devolver un
array de tres posiciones, cada una de las cuales debe ser la longitud de uno de
los lados del triángulo.
16. Modificar el fichero main para crear un objeto de la clase triangulo e invocar al
método calcularLongitudLados.
17. Actualizar el GIT con los nuevos desarrollos
*/ 

export class Triangulo {
     
    private punto1:Punto 
    private punto2:Punto
    private punto3:Punto


    constructor(punto1:Punto,punto2:Punto,punto3:Punto){
       
        this.punto1 = punto1
        this.punto2 = punto2
        this.punto3 = punto3

    }

    //setter y getters
      public getPunto1():Punto{
         return this.punto1
      }
      public setNuevoPunto1(NuevoPunto1:Punto){
          return NuevoPunto1
      }

      public getPunto2():Punto{
          return this.punto2
      }
      public setNuevoPunto2(NuevoPunto2:Punto){
          return NuevoPunto2
      }

      public getPunto3():Punto{
          return this.punto3
      }
      public setNuevoPunto3(NuevoPunto3:Punto){
          return NuevoPunto3
      }


    //Metodos

    calcularLongitudLados() :number[]{
        let longitud1:number
        let longitud2:number
        let longitud3:number
        let posiciones:number[] = []

        longitud1 = this.getPunto1().calcularDistancia(this.getPunto2());
        posiciones.push(longitud1)

        longitud2 = this.getPunto2().calcularDistancia(this.getPunto3());
        posiciones.push(longitud2)

        longitud3 = this.getPunto3().calcularDistancia(this.getPunto1());
        posiciones.push(longitud3)

        return posiciones
    }
}