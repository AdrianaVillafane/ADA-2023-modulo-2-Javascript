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
