//ejercicio 28
//`calcularFPS(fps, minutos)`

//FPS son _cuadros por segundo_ (_frames per second_). Crear una una función `calcularFPS` que tome como argumentos una cantidad de cuadros por segundo y una cantidad de minutos, y devuelva cuántos cuadros hubo en esa cantidad de minutos

let cuadrosPorSeg;
let minutos;

 const calcularFPS=(cuadrosPorSeg, minutos)=>{
 return (cuadrosPorSeg * minutos*60);

 }
console.log(calcularFPS(1, 1)); // 60
console.log(calcularFPS(10, 2)); // 1200
console.log(calcularFPS(2, 3));// 360