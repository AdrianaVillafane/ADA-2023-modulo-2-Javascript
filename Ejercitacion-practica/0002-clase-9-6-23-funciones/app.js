//programa gral, el usuario ingresa el numero
let num1= Number(prompt(' Ingrese un numero'));
let num2= Number(prompt('Ingrese otro numero'));

const suma =(num1,num2)=>{
    console.log( Number(num1+num2));
};

suma(num1,num2);

//ejercicio 1

let num3= 2;
let num4= 3;

const suma2 =(num3,num4)=>{
    console.log( Number(num3+num4));

}
suma2(num3,num4);

//ejercicio 2
let num5= 1.2;
let num6= 3.4;

const suma3=(num5,num6)=> {
    console.log( Number(num5+num6));
}
suma3(num5,num6);

//ejercicio 3

let num7= 3;
let num8= -5;

const suma4=(num7, num8)=>{
    console.log(Number(num7, num8));
}
suma4(num7,num8);

//ejercicio 4

let num9= 3;
let num10= 2;

const resta1=(num9,num10)=>{
    console.log(Number(num9 - num10));
}
resta1(num9,num10);

//ejercicio 5

let num11= 10;
let num12= 5.5;

const resta2=(num11, num12)=>{
    console.log(Number(num11-num12));
}
resta2(num11, num12);

//ejercicio 6
let num13= 3;
let num14= 5;

const resta3=(num13, num14)=>{
    console.log(Number(num13-num14));
}
resta3(num13, num14);

//ejercicio 7

let num_1=2;
let num_2=3;

const multiplicar=(num_1, num_2)=>{
    console.log(Number(num_1*num_2));
}
multiplicar(num_1, num_2);

//ejercicio 8

let num_3= 4;
let num_4= 0.5;

const multiplicar2=(num_3, num_4)=>{
    console.log(Number(num_3 * num_4));
}
multiplicar2(num_3, num_4);


//ejercicio 9

let num_5=12;
let num_6= 3;

const dividir=(num_1, num_2)=>{
    console.log(Number(num_5/num_6));
}
dividir(num_5, num_6);

//ejercicio 10

let num_7= 8;
let num_8= 4;

const dividir2=(num_7, num_8)=>{
    console.log(Number(num_7/num_8));
}
dividir2(num_7, num_8);

//ejercicio 11

let num_9= 30;
let num_10= 6;

const dividir3=(num_9, num_10)=>{
    console.log(Number(num_9/num_10));
}
dividir3(num_9, num_10);

//ejercicio 12

let num = 2;

const esPar = (num)=> {
        if ((num % 2) == 0) {
                console.log(`Par true`);
        } else if ((num % 2) == 1) {
                console.log(`Impar, false`);
        }
}
esPar(num);

//ejercicio 13

let numA = 3;

const esPar1 =(numA)=> {
        if ((numA % 2) == 0) {
                console.log(`Par, true`);
        } else if ((numA % 2) == 1) {
                console.log(`Impar, false`);
        }
}
esPar1(numA);

//ejercicio 14


let numB = 2;

const esImpar = (numB)=> {
        if ((numB % 2) == 0) {
                console.log(`Par, false`);
        } else if ((numB % 2) == 1) {
                console.log(`Impar, true`);
        }
}
esImpar(numB);

//ejercicio 15


let numC = 3;

const esImpar2 = (numC)=> {
        if ((numC % 2) == 0) {
                console.log(`Par, false`);
        } else if ((numC % 2) == 1) {
                console.log(`Impar, true`);
        }
}
esImpar2(numC);

//ejercicio 16
let a= 3;
let b= 4;
const calcularAreaTriangulo=(a, b)=>{
    console.log(Number(a*b/2));
}
calcularAreaTriangulo(3,4);

//ejercicio 17
let c= 5;
let d= 6;
const calcularAreaTriangulo2=(c , d)=>{
    console.log(Number(c*d/2));
}
calcularAreaTriangulo2(5, 6);

//ejercicio 18

const gritar = (str) => {
         return `¡${str}!`
     }
    
     console.log(gritar('hola'));
     console.log(gritar('aaaaaaaaaa'));
     console.log(gritar('mierdaaaa'));

//ejercicio 19

let name= 'Anna';
let lastName= 'Vila';

const obtenerNombreCompleto=(name, lastName)=>{
    console.log(`${name} ${lastName}`);
}
obtenerNombreCompleto('Anna', 'Vila');

// ejercicio 20
let nombre= 'Anna';
const saludar=(nombre)=>{
    return (`Hola ${nombre}, un gusto conocerte`);
}
saludar('Anna');

//ejercicio 21
//`saludarGritando(nombre, apellido)`

//Usando las funciones anteriores (`obtenerNombreCompleto`, `saludar` y `gritar`), crear una función `saludarGritando` que tome como argumentos un nombre y un apellido y devuelva un saludo con signos de exclamación.
const saludarGritando=(nombre, apellido)=>{
    return ('¡'+ saludar('Anna')+'!');
}


saludarGritando('Ada', 'Lovelace'); // ¡Hola Ada Lovelace, un gusto conocerte!
console.log(saludarGritando());

//**TIP:** recordá que los resultados de funciones se pueden guardar en variables para usarlos más adelante


//ejercicio 22
// obtenerDatosDeCiudad(nombre, poblacion, pais)

//Crear una función `obtenerDatosDeCiudad` que tome como argumentos un string `nombre`, un número `poblacion` y un string `pais` y devuelva string con el siguiente formato: `La ciudad de NOMBRE tiene una población de POBLACION habitantes y está ubicada en PAIS`


let nombreCiudad;
let poblacion;
let pais;

const obtenerDatosDeCiudad=(nombreCiudad, poblacion, pais)=>{
    return (`La ciudad de ${nombreCiudad} tiene una poblacion de ${poblacion} habitantes y esta ubicada en ${pais}`);
}

console.log(obtenerDatosDeCiudad('Santa Fe', 545606, 'Argentina')); // 'La ciudad de Santa Fe tiene una población de 545606 habitantes y está ubicada en Argentina'

//ejercicio 23
//`convertirHorasEnSegundos(horas)`

//Crear una función `convertirHorasEnSegundos` que tome como argumento un número de horas y devuelva la conversión a segundos de dicha cantidad de horas
let horas;


const convertirHorasEnSegundos=(horas)=>{
    return Number(horas*3600);
}

console.log(convertirHorasEnSegundos(1)); // 3600
console.log(convertirHorasEnSegundos(3)) // 10800
console.log(convertirHorasEnSegundos(4.5)); // 16200

//ejercicio 24
//`calcularPerimetroRectangulo(ancho, alto)`

//Crear una función `calcularPerimetroRectangulo` que tome como argumentos el ancho y el alto de un rectángulo y devuelva su perímetro
let lado1=Number();
let lado2=Number();


const calcularPerimetroRectangulo=(lado1, lado2)=>{
    return (lado1*2+lado2*2);
}

console.log(calcularPerimetroRectangulo(3.2, 5)); // 16.4
console.log(calcularPerimetroRectangulo(10, 20)); // 60


//ejercicio 25
//`calcularPorcentaje(numero, porcentaje)`

//Crear una función `calcularPorcentaje` que tome como argumentos un número y un porcentaje y devuelva el valor del porcentaje correspondiente al número

const calcularPorcentajes=(num, porcen)=>{
    return (num*porcen/100);
}
console.log(calcularPorcentajes(100, 15)); // 15
console.log(calcularPorcentajes(10, 50)); // 5
console.log(calcularPorcentajes(200, 10)); // 20

//ejercicio 26
// `sumarPorcentaje(numero, porcentaje)`

//Crear una función `sumarPorcentaje` que tome como argumentos un número y un porcentaje y devuelva la suma de dicho número con la de su porcentaje. Usar la función `calcularPorcentaje` para obtener el porcentaje a sumar

let numD;
let porcen2;

const sumarPorcentaje=(numD, porcen2)=>{
    return ((numD*porcen2/100)+numD);
}
console.log(sumarPorcentaje(100, 15)); // 115
console.log(sumarPorcentaje(10, 50)); // 15
console.log(sumarPorcentaje(200, 10)); // 220
