
        // Solicitar temperatura mediante prompt
        var temperatura = prompt("Ingrese la temperatura:");

        // Obtener el elemento h1 por su id
        var h1 = document.getElementById("temp");

        // Establecer el contenido del h1 con la temperatura ingresada
        h1.textContent += temperatura + "°";

        // Cambiar el color del h1 según la temperatura ingresada
        if (temperatura < 0) {
            h1.style.color = "blue";
        } else if (temperatura >= 0 && temperatura < 15) {
            h1.style.color = "lightblue";
        } else if (temperatura >= 15 && temperatura < 25) {
            h1.style.color = "green";
        } else if (temperatura >= 25 && temperatura < 30) {
            h1.style.color = "yellow";
        } else if (temperatura >= 30 && temperatura < 35) {
            h1.style.color = "orange";
        } else if (temperatura >= 35) {
            h1.style.color = "red";
        }
    