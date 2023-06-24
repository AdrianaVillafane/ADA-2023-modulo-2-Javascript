//ejercicio 5
//### `contarPalabras(str)`

//Crear una función `contarPalabras` que tome como argumento un string `str` y devuelva la cantidad de palabras que posee


const contarPalabras=(str)=> {
    // Eliminar los espacios en blanco al principio y al final de la cadena
    str = str.trim();
  
    // Dividir la cadena en palabras utilizando los espacios en blanco como separador
    let palabras = str.split(" ");
  
    // Filtrar las palabras vacías que puedan quedar debido a múltiples espacios en blanco
    palabras = palabras.filter(function(palabra) {
      return palabra !== "";
    });
  
    // Retornar la cantidad de palabras
    return palabras.length;
  }

console.log(contarPalabras('javascript')); // 1
console.log(contarPalabras('ada lovelace')); // 2
console.log(contarPalabras('si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos')); // 14

