/* Escriba una función que permita encontrar el mayor de tres números. La función debe recibir los tres 
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

/** Hazel Edith Rodríguez López */



