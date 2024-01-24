/* Escriba una función que reciba como parámetro un número y muestre en la consola su tabla de multiplicación.*/

let i = 0
let multiplicando = ''


function tablas (multiplicando){
    for (i = 1; i<=10; i++){
        console.log(`${multiplicando} x ${i} = ` + multiplicando * i)
    }
}

tablas(4)

/** Hazel Edith Rodríguez López */