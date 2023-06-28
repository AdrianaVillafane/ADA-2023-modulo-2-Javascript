//reacciones

//En un documento `html` hacer un post de una red social que contenga:
//- un `h3` con la usuaria
//- un `p` con un `lorem ipsum`
//- 3 `spans` de reacciones con un ícono (por ejemplo `Me gusta`, `Me encanta`, `Me asombra`) más un número con la cantidad

//Dar estilos para que
//- la tipografía sea distinta a la default
//- los `spans` estén en línea, separados con márgenes, tengan un color de fondo gris suave y un border radius

//Hacer un programa que al iniciarse pregunte mediante tres `prompt`s por la cantidad de cada una de las reacciones y actualice los valores de los spans correspondientes



    // Obtener las cantidades iniciales de las reacciones mediante prompts
    let cantidadMeGusta = prompt("Ingrese la cantidad de Me gusta:");
    let cantidadMeEncanta = prompt("Ingrese la cantidad de Me encanta:");
    let cantidadMeAsombra = prompt("Ingrese la cantidad de Me asombra:");

    // Actualizar las cantidades de las reacciones en los spans correspondientes
    document.getElementById("me-gusta-cantidad").textContent = cantidadMeGusta;
    document.getElementById("me-encanta-cantidad").textContent = cantidadMeEncanta;
    document.getElementById("me-asombra-cantidad").textContent = cantidadMeAsombra;
  