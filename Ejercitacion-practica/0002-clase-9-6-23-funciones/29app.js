//ejercicio 29
// `obtenerCompetencia(a, b)`

//Crear una función `obtenerRivales` que tome como argumentos dos strings `a` y `b` y devuelva un string con el formato `a vs. b`

const obtenerRivales=(a,b)=>{
    return`${a} Vs ${b}`;
}

//javascript
console.log(obtenerRivales('JavaScript', 'Python')); // `JavaScript vs. Python`
console.log(obtenerRivales('Coca', 'Pepsi')); // `Coca vs. Pepsi`
console.log(obtenerRivales('Perros', 'Gatos')); // `Perros vs. Gatos`
