//ejercicio 4

//imagen

//Hacer un programa que al iniciarse pregunte mediante un `prompt` por un tamaño de imagen (siendo las opciones posibles `chica`, `mediana` y `grande`) y dependiendo de la opción elegida modifique el tamaño de una imagen (cualquiera) en el documento html. Por ejemplo:

//| Opción elegida | Ancho de imagen |
///| --- | --- | 
//| chica | 200px
//| mediana | 500px
//| grande | 800px


let opcion = prompt("Ingrese el tamaño de la imagen (chica, mediana, grande):");
let imagen = document.getElementById("imagen");

switch (opcion) {
    case "chica":
        imagen.style.width = "200px";
        imagen.style.height = "200px";
        break;
    case "mediana":
        imagen.style.width = "400px";
        imagen.style.height = "400px";
        break;
    case "grande":
        imagen.style.width = "600px";
        imagen.style.height = "600px";
        break;
    default:
        alert("Opción no válida. Se mantendrá el tamaño original.");
        break;
}
