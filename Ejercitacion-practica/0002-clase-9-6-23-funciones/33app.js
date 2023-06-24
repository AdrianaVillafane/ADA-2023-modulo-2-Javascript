//ejercicio 33`haceFrio(temperatura)`

//Crear una función `haceCalor` que tome como argumento un número `temperatura` y devuelva `true` si hace frio (12 grados o menos) o `false` de lo contrario

const haceFrio=(temperatura)=>{
    if( temperatura<= 12){
        return true;
    }else{
        return false;
    }
}

console.log(haceFrio(12)); // true
console.log(haceFrio(22)); // false
console.log(haceFrio(3));console // true
console.log(haceFrio(-2)); // true
