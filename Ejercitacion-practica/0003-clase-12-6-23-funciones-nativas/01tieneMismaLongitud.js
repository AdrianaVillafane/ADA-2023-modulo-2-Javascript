//ejercicio 1
`tienenMismaLongitud(a, b)`

//Crear una función `tienenMismaLongitud` que tome como argumentos dos strings `a` y `b` y devuelva `true` si tienen la misma longitud o `false` de lo contrario

const tienenMismaLongitud=(a, b)=> {
    if (a.length === b.length) {
      return true;
    } else {
      return false;
    }
  }


console.log(tienenMismaLongitud('javascript', 'java')); // false
console.log(tienenMismaLongitud('manzana', 'cerveza')); // true

