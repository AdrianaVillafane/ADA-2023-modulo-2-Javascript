//ejercicio 12

//`espaciarCaracteres(str)`

//Crear una función `espaciarCaracteres` que tome como argumento un string `str` y devuelva un string con todos sus caracteres separados por un espacio

const espaciarCaracteres=(str)=> {
    return str.split('').join(' ');
  }
  
console.log(espaciarCaracteres('javascript')); // 'j a v a s c r i p t'
console.log(espaciarCaracteres('ada lovelace')); // 'a d a l o v e l a c e'
console.log(espaciarCaracteres('Hola, buen dia'));