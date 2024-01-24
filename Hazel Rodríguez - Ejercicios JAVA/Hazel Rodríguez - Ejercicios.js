/* 1- Escriba una función que permita encontrar el mayor de tres números. La función debe recibir los tres 
numeros como parametros y mostrar en la consola cual es el mayor de los tres*/


function NumeroMayor(h, o, s) {
  let mayor = 0;

  if (h > o) {
    mayor = h;
  } else {
    mayor = o;
  }
  if (s > mayor) {
    mayor = s;
  }
  return mayor;
}

console.log(NumeroMayor(250, 1989, 1994));

/**################################################################################################# ############*/

/* 2- Escriba una función que permita combinar colores y muestre en consola el color resultante 
de dicha combinación. La combinación debe recibir como parámetros los valores rojo, verde y azul 
que sirvan como base para realizar las combinaciones. 

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

function Color(o, y, h) {
  if (o === 1) {
    if (y === 1) {
      if (h === 1) {
        console.log("rgb(1,1,1)-Color: Blanco")
      } else {
        console.log("rgb(1,1,0)-Color: Amarillo")
      }
    } else {
      if (h === 1) {
        console.log("rgb(1,0,1)-Color: Magenta")
      } else {
        console.log("rgb(1,0,0)-Color: Rojo")
      }
    }
  } else {
    if (y === 1) {
      if (h === 1) {
        console.log("rgb(0,1,1)-Color: Cian")
      } else {
        console.log("rgb(0,1,0)-Color: Verde")
      }
    } else {
      if (h === 1) {
        console.log("rgb(0,0,1)-Color: Azul")
      } else {
        console.log("rgb(0,0,0)-Color: Negrito")
      }
    }
  }
}

Color(0, 0, 0) ///Solo se cambian los digitos entre 1 o 0, si no, no funciona

/**################################################################################################################ */

/* 3- Escriba una función que reciba como parámetro un número y muestre en la consola su tabla de multiplicación.*/

let i = 0
let multiplicando = ''


function tablas(multiplicando) {
  for (i = 1; i <= 10; i++) {
    console.log(`${multiplicando} x ${i} = ` + multiplicando * i)
  }
}

tablas(4)
/**#################################################################################################################### */

/* 4- Escriba una función que muestre en consola un triángulo equilátero, solicitando como 
parámetro la base de dicho triangulo y que vaya alternando los símbolos que conforman al mismo.*/

function triangulo(a) {
  var a;
  var h, o, s, tr;

  if (Number(a) == a) {
    if (a > 0 && a % 2 == 1) {

      var tr = "";

      for (h = 0; h <= a; h += 2) {
        for (o = 0; o <= a - h; o++)
          tr = tr + " "; {

          for (o = 1; o <= h; o++)
            tr = tr + "# ";
          tr = tr + "\n"

          for (s = 1; s <= a - h; s++)
            tr = tr + " ";

          for (s = 0; s <= h; s++)
            tr = tr + "* ";
          tr = tr + "\n"
        }


      }

      console.log(tr)

    }
    else {
      console.log("Debe de ingresar un número impar !")
    }
  }


}


console.log(triangulo(9))
/**############################################################################################################ */
/** Hazel Rodríguez */