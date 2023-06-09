//### `calcularPuntaje(facil, normal, dificil)`

//Crear una función `calcularPuntaje` que calcule el puntaje de un examen que consiste en ejercicios de distinto nivel. Debe tomar como argumento tres que consisten en la cantidad de ejercicios resueltos en cada nivel y devolver un número con el puntaje correspondiente. El puntaje se calcula de la siguiente forma:


//facil: 3 puntos
//normal: 5 puntos
//dificil: 10 puntos

const calcularPuntaje=(f,n,d)=>{
    return (f*3+n*5+d*10);
}

console.log(calcularPuntaje(3, 0, 0)); // 9
console.log(calcularPuntaje(0, 2, 1)); // 20
console.log(calcularPuntaje(5, 1, 2)); // 40

