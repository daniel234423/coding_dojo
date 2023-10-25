function alwaysHungry(arr) {
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
alwaysHungry(["comida", "agua", "suelo"]); // Debería mostrar "delicioso" en la consola.
alwaysHungry([4, 1, 5, 7, 2]); // Debería mostrar "Tengo hambre" en la consola.