//ejercicio 7

//### `esFraccionMayorAUno(fraccion)`

//Crear una función `esFraccionMayorAUno` que tome como argumento un string `fraccion` (en el formato `'numerador/denominador'`) y devuelva `true` si dicha fracción es mayor a 1 o `false` de lo contrario

function esFraccionMayorAUno(fraccion) {
  // Obtener el numerador y el denominador de la fracción
  var partes = fraccion.split("/");
  var numerador = parseInt(partes[0]);
  var denominador = parseInt(partes[1]);

  // Verificar si la fracción es mayor a 1
  if (numerador > denominador) {
    return true;
  } else {
    return false;
  }
}







console.log(esFraccionMayorAUno('1/2') );// false
console.log(esFraccionMayorAUno('2/2')); // false
console.log(esFraccionMayorAUno('4/2')); // true
