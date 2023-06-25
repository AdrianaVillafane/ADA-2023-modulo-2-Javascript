//ejercicio 10
//### `obtenerPrimeraOracion(str)`

//Crear una función `obtenerPrimeraOracion` que tome como argumento un string `str` y la primera oración de dicho string


const obtenerPrimeraOracion=(str)=> {
    let primeraOracion = str.split(/[.!?]/)[0];
    return primeraOracion.trim();
  }

console.log(obtenerPrimeraOracion('A mí no me preguntes. Sólo soy una oración')); // 'A mí no me preguntes.'
console.log(obtenerPrimeraOracion('Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.')); // 'Tengo varias oraciones.'
