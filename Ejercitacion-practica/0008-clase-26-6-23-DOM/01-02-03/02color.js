//ejercicio 2

//### color

//Hacer un programa que al iniciarse pida mediante un `prompt` ingresar un color en sistema hexadecimal, y una vez ingresado ponga el color de fondo del body con dicho color.

            let color = prompt("Ingrese un color en formato hexadecimal (#000000):");
    
            // Validar que el color sea válido
            let colorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
            if (colorRegex.test(color)) {
                document.body.style.backgroundColor = color;
            } else {
                alert("El color ingresado no es válido.");
            }
        