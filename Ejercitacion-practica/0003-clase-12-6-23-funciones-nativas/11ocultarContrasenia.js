//ejercicio 11

//`ocultarContrasenia(contrasenia)`

//Crear una función `ocultarContraseña` que tome como argumento una `contrasenia` de solo numeros y devuelva un string con dicha contraseña ocultada con astericos `*`, es decir, un string con la misma longitud donde todos sus caracteres son astericos

const ocultarContrasenia=(contrasenia)=> {
    return "*".repeat(contrasenia.length);
  }
  
console.log('holis');
console.log(ocultarContrasenia(123456)); // '******'
console.log(ocultarContrasenia(111222333)); // '*********'
console.log('EsTo Es UnA PrUeBa');