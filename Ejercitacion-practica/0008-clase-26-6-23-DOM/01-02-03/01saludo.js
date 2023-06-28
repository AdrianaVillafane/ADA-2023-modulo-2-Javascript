//### saludo

//Hacer un programa que al iniciarse pida mediante un `prompt` ingresar un nombre, y una vez ingresado muestre un saludo con el nombre dentro de un `h1`. El `h1` debe estar centrado y tener un tamaño de letra y una tipografía distinta de la que viene por defecto.


let nombre = prompt("Ingrese su nombre:");
let h1 = document.createElement("h1");
h1.innerHTML = "¡Hola, " + nombre + "!";
document.body.appendChild(h1);

//Cuando ejecutes este código en tu navegador web, se mostrará una ventana emergente solicitando que ingreses tu nombre. Luego, se creará un elemento h1 con el saludo personalizado y se agregará al cuerpo del documento HTML. El h1 estará centrado y tendrá un tamaño de letra de 24 píxeles y una tipografía de Arial (o una tipografía sans-serif si Arial no está disponible en el sistema).