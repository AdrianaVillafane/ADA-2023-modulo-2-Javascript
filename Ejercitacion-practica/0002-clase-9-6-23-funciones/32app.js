//ejercicio 32
// `haceCalor(temperatura)`

//Crear una función `haceCalor` que tome como argumento un número `temperatura` y devuelva `true` si hace calor (22 grados o más) o `false` de lo contrario


const haceCalor=(temperatura)=>{
    if(temperatura>=22){
        return true;
    }else{
        return false;
    }
}

console.log(haceCalor(12)); // false
console.log(haceCalor(22)); // true
console.log(haceCalor(32)); // true
