//ejercicio 13

// `removerVocales(str)`

//Crear una función `removerVocales` que tome como argumento un string `str` y devuelva un string con todas sus vocales removidas

const removerVocales=(str)=> {
    return str.replace(/[aeiou]/gi, '');
  }

console.log(removerVocales('javascript')); // 'jvscrpt'
console.log(removerVocales('ada lovelace')); // 'd lvlc'
