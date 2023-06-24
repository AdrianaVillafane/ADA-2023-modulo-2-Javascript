//35
//`aceptaDeposito(monto)`

//Crear una función `aceptaDeposito` que tome como argumento un número `monto` y devuelva `true` si el `monto` es divisible por 10 o `false` si no lo es


const aceptaDeposito=(monto)=>{

    if( monto % 10 == 0){
        return true;
    } else{
        return false;
    }
}

console.log(aceptaDeposito(440)); // true
console.log(aceptaDeposito(123)); // false
console.log(aceptaDeposito(500.50)); // false
console.log(aceptaDeposito(1000)); // true
