/*Escriba una función que permita combinar colores y muestre en consola el color resultante de dicha combinación. 
La combinación debe recibir como parámetros los valores rojo, verde y azul que sirvan como base para realizar las combinaciones. 

Las posibles commbinaciones:
(rojo, verde, azul)
(0,0,0) Negro
(0,0,1) Azul
(0,1,0) Verde
(0,1,1) Cian
(1,0,0) Rojo 
(1,0,1) Magenta
(1,1,0) Amarillo
(1,1,1) Blanco*/

function Color(o,y,h){
    if (o===1){
      if(y===1){
        if(h===1){
          console.log("rgb(1,1,1)-Color: Blanco")
        }else{
          console.log("rgb(1,1,0)-Color: Amarillo")
        }
      }else{
        if(h===1){
          console.log("rgb(1,0,1)-Color: Magenta")
        }else{
          console.log("rgb(1,0,0)-Color: Rojo")
        }
      }
    }else {
      if(y===1){
        if(h===1){
          console.log("rgb(0,1,1)-Color: Cian")
        }else{
          console.log("rgb(0,1,0)-Color: Verde")
        }
      }else{
        if(h===1){
          console.log("rgb(0,0,1)-Color: Azul")
        }else{
          console.log("rgb(0,0,0)-Color: Negrito")
        }
      }
    }
  }
  
  Color(0,1,0) ///Solo se cambian los digitos entre 1 o 0, si no, no funciona

  /** Hazel Edith Rodríguez López */
