//ejercicio 2
//`esUltimoCaracter(palabra, caracter)`

//Crear una función `esUltimoCaracter` que tome como argumentos una `palabra` y un `caracter` y devuelva `true` si la `palabra` termina con el `caracter` o `false` de lo contrario

const esUltimoCaracter=(palabra, caracter) =>{
    let ultimoCaracter = palabra.slice(-1); // Obtener el último carácter de la palabra
    
    if (ultimoCaracter === caracter) {
      return true;
    } else {
      return false;
    }
  }

console.log(esUltimoCaracter('lovelace', 'e')); // true
console.log(esUltimoCaracter('lovelace', 'f')); // false
