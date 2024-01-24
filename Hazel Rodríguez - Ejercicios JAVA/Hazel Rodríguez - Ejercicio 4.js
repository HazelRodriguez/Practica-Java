/*Escriba una función que muestre en consola un triángulo equilátero, solicitando como 
parámetro la base de dicho triangulo y que vaya alternando los símbolos que conforman al mismo.*/

function triangulo(a) {
    var a;
    var t, o, s, tr;

    if (Number(a) == a) {
        if (a > 0 && a % 2 == 1) {

            var tr = "";

            for (t = 1; t <= a; t += 2) {
                for (o = 0; o <= a - t; o++)
                    tr = tr + " "; {

                    for (o = 1; o <= t; o++)
                        tr = tr + "# ";
                    tr = tr + "\n"

                    for (s = 1; s <= a - t; s++)
                        tr = tr + " ";

                    for (s = 1; s <= o; s += 2)
                        tr = tr + "* " + "* ";
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


console.log(triangulo(2))

/** Hazel Edith Rodríguez López */