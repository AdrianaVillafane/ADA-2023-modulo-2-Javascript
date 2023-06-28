//ejercicio 3
//### rgb

//Hacer un programa que al iniciarse pida mediante tres `prompt`s ingresar los valores correspondientes a un color en sistema `rgb`, y una vez ingresado ponga el color de fondo del body con dicho color. Los valores van del 0 al 255 y corresponden a `rojo`, `verde` y `azul`.


        let red = prompt("Ingrese el valor de rojo (0-255):");
        let green = prompt("Ingrese el valor de verde (0-255):");
        let blue = prompt("Ingrese el valor de azul (0-255):");

        // Validar que los valores sean válidos
        let isValid = red >= 0 && red <= 255 && green >= 0 && green <= 255 && blue >= 0 && blue <= 255;
        if (isValid) {
            let color = "rgb(" + red + ", " + green + ", " + blue + ")";
            document.body.style.backgroundColor = color;
        } else {
            alert("Los valores ingresados no son válidos.");
        }
    