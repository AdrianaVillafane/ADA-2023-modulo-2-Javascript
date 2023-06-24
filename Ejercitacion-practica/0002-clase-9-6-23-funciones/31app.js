//ejercicio 31
// `esMayorDeEdad(edad)`

//Crear una función `esMayorDeEdad` que tome como argumento un número `edad` y devuelva `true` si es mayor de edad (18 o más) o `false` de lo contrario
const esMayorDeEdad=(edad)=>{
    if(edad>= 18){
        return true;
    }else{
        return false;
    }
}



console.log(esMayorDeEdad(15)); // false
console.log(esMayorDeEdad(18)); // true
console.log(esMayorDeEdad(27)); // true
