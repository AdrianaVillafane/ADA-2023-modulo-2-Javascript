//ejercicio 8
//`capitalizar(str)`

//Crear una función `capitalizar` que tome como argumento un string `str` y devuelva el mismo string con la primera letra en mayúscula

const capitalizar=(str)=>{
if(str.length ===0) {
    return str;
}
let primeraLetra = str.charAt(0).toUpperCase();
let resto = str.slice(1);
return primeraLetra + resto;
}

console.log(capitalizar('lovelace')); // 'Lovelace'
console.log(capitalizar('había una vez...')); // 'Había una vez...'
console.log(capitalizar('la hormiguita viajera'));
