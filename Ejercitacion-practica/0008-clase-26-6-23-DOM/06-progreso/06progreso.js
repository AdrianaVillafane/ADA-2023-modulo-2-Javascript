
    // Solicitar porcentaje de progreso mediante prompt
    let porcentaje = prompt("Ingrese el porcentaje de progreso:");

    // Obtener el elemento de la barra de progreso
    let barraProgreso = document.getElementById("barra-progreso");

    // Establecer el ancho de la barra de progreso en función del porcentaje ingresado
    barraProgreso.style.width = porcentaje + "%";
  