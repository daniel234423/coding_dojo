<<<<<<< HEAD
function siempreHambriento(arr) {
=======
function alwaysHungry(arr) {
>>>>>>> 4a86641f4efbe596c96a16318520a4f3695ef094
    let found = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "comida") {
            console.log(arr[i] + " delicioso");
            found = true;
        }
    }

    if (!found) {
        console.log("Tengo hambre");
    }
}
<<<<<<< HEAD
siempreHambriento(["comida", "agua", "suelo"]); // Debería mostrar "delicioso" en la consola.
siempreHambriento([4, 1, 5, 7, 2]); // Debería mostrar "Tengo hambre" en la consola.
=======
alwaysHungry(["comida", "agua", "suelo"]); // Debería mostrar "delicioso" en la consola.
alwaysHungry([4, 1, 5, 7, 2]); // Debería mostrar "Tengo hambre" en la consola.
>>>>>>> 4a86641f4efbe596c96a16318520a4f3695ef094
