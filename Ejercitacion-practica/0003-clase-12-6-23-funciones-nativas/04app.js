//ejercicio 4
//`sonIguales(a, b)`

//Crear una función `sonIguales` que tome como argumentos dos strings `a` y `b` y devuelva `true` si ambos strings tienen el mismo contenido independientes del caso y `false` en caso contrario.

const sonIguales=(a,b)=>{
    if(a.toLowerCase()=== b.toLowerCase()){
        return true;
    } else{
        return false;
    }
}

console.log(sonIguales('javascript', 'JavaScript')); // true
console.log(sonIguales('AdA LoVeLaCe', 'Ada Lovelace')); // true
console.log(sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO')); // false
