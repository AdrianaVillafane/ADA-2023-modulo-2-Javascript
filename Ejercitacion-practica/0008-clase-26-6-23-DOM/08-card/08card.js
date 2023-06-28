
// Obtener los datos del usuario mediante prompts
let titulo = prompt("Ingrese el título:");
let imagenURL = prompt("Ingrese la URL de la imagen:");
let enlaceURL = prompt("Ingrese la URL del artículo:");

// Actualizar los elementos de la card con los datos ingresados
document.getElementById("titulo").textContent = titulo;
document.getElementById("imagen").src = imagenURL;
document.getElementById("enlace").href = enlaceURL;

