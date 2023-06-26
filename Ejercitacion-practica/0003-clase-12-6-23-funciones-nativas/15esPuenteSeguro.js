//ejercicio 15

// `esPuenteSeguro(puente)`

//Crear una función `esPuenteSeguro` que tome como string un `puente` que consista en caracteres numerales y espacios y devuelva `true` si el `puente` está cortado (tiene espacios) o `false` si está entero y es seguro atravesar

function esPuenteSeguro(puente) {
    if (puente.includes(" ")) {
      // El puente está cortado (contiene espacios)
      return true;
    } else {
      // El puente está entero y es seguro atravesar
      return false;
    }
  }
  
esPuenteSeguro('### ##') // false
esPuenteSeguro('##### ####') // false
esPuenteSeguro('########') // true

