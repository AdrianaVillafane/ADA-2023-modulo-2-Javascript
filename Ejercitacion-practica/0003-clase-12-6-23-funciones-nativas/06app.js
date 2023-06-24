//ejercicio6

//### `burlarse(str)`

//Crear una función `burlarse` que tome como argumento un string `str` y devuelva el mismo string con todas las vocales reemplazadas por la letra i


function burlarse(str) {
    // Expresión regular para encontrar las vocales en el string
    let frase = /[aeiou]/gi;
  
    // Reemplazar las vocales por la letra "i"
    let resultado = str.replace(frase, "i");
  
    // Retornar el resultado
    return resultado;
  }

console.log(burlarse('programar es dificil')); // 'prigimir is dificil'
console.log(burlarse('Pienso, luego existo'));