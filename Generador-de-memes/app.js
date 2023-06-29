// Obtengo los elementos del DOM
let colorInput = document.getElementById("colorInput");
let colorGenerador = document.getElementById("generador");

// Agrego un evento de escucha al campo de entrada
colorInput.addEventListener("input", function() {
  let color = colorInput.value;
  colorGenerador.style.backgroundColor = color;
});
//COLOR DE FONDO LISTO