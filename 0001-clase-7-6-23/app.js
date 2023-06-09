
//SALUDO
//Crear un programa que pida al usuario ingresar un nombre y apellido por separado, y luego muestre un mensaje que diga, "Hola {nombre} {apellido}, bienvenida a Ada".
alert("hola");

let name = prompt('Ingrese su nombre','nombre');
let lastName = prompt('Ingrese su apellido', 'apellido');
let age = prompt('Ingrese su edad', 'edad');

console.log(name, lastName, age);

alert(`Hola ${name} ${lastName} bienvenida a ADA`);

//HELADERIA
//Crear un programa que pida al usuario ingresar, por separado, tres gustos de helado, y luego muestre un mensaje que diga, por ejemplo, "Aquí tiene su helado de chocolate, dulce de leche y menta granizada".

let saborUno = prompt('Digame su primer sabor','sabor');
let saborDos = prompt('Digame otro sabor','sabor');
let saborTres = prompt('Digame otro sabor', 'sabor');

alert(`Aqui tiene su helado de ${saborUno}, ${saborDos} y ${saborTres}`);


//DATOS PERSONALES
//Crear un programa que pida al usuario ingresar, por separado, nombre, apellido, edad, nacionalidad, documento, y muestre luego un mensaje que diga: "Nuevo usuario agregado al sistema:" y liste todos los datos juntos.

let nombre= prompt('Ingrese su nombre', 'nombre');
let apellido= prompt('Ingrese su apellido', 'apellido');
let edad= prompt('Ingrese su edad','edad');
let nacionalidad= prompt('Ingrese su nacionalidad','nacionalidad');
let documento= prompt('Ingrese su numero de documento','numero dni');

alert(`Nuevo usuario agregado al sistema,Nombre:${nombre}, Apellido:${apellido}, Edad:${edad}, Nacionalidad:${nacionalidad}, Documento:${documento}`);

//LISTA DE REPRODUCCION
//Crear un programa que pida al usuario ingresar, por separado, el nombre de una playlist y el título de tres canciones, y al finalizar se muestre un mensaje que diga, p. ej.: "Se ha creado la playlist 'Hits de los 80s' con las canciones 'Africa', 'Maniac', 'Final Countdown'


let playlist= prompt('Ingrese el nombre de su playlist');
let song1= prompt('Ingrese un tema');
let song2 = prompt('Ingrese otro tema');
let song3 = prompt('Ingrese otro tema');

alert(`Se ha creado la playlist ${playlist} con las canciones:${song1}, ${song2}, ${song3}`);


//DIRECCION COMPLETA
//Crear un programa que pida al usuario ingresar, por separado, la calle, el número, el departamento, el código postal, la ciudad y el país, y muestre un mensaje con toda la dirección completa, p.ej.: "La dirección que ha ingresado es: Calle Falsa 123 3C, 1414, CABA, Argentina".

let calle= prompt('Ingrese la calle');
let numeracion= prompt('Ingrese la numeracion');
let departamento= prompt('Ingrese el departamento','D');
let codigoPostal= prompt('Ingrese el codigo postal','1234');
let ciudad= prompt('Ingrese la ciudad','Caba');
let pais= prompt('Ingrese el pais');

alert(`La dirección que ha ingresado es: calle:${calle}, numeracion:${numeracion}, departamento: ${departamento}, codigo postal: ${codigoPostal}, ciudad: ${ciudad}, pais:${pais}`);


//AÑOS PERRO
//Crear un programa que pida ingresar una edad y devuelva el equivalente de esas edad en años perro.

let edadPerro=('Ingrese la eda de su Perrito');
let edadPerruna= edadPerro*8;

alert(`La edad de su perrito es: ${edadPerruna}`);

//MINUTOS A SEGUNDOS
//Crear un programa que pida ingresar una cantidad en minutos mediante un y muestre un mensaje con el resultado de la conversión en segundos.

let minutos = Number(prompt('Ingrese los minutos'));
let conversionSegundos = minutos * 60;

alert(`La conversión de ${minutos} minutos, a segundos es: ${conversionSegundos}`);

//DIAS A SEGUNDOS
//Crear un programa que pida ingresar una cantidad de días y muestre un mensaje con el resultado de la conversión en segundos.

let cantidadDias = Number(prompt('Ingrese los dias'));
let convSegundos = cantidadDias * 86400;

alert(`Su conversión es ${convSegundos} segundos.`);

//KILOMETROS A MILLLAS
//Crear un programa que pida ingresar una cantidad de kilómetros y muestre un mensaje con el resultado de la conversión en millas.

let km = Number(prompt('Ingrese los Kilometros'));
let convMillas = km * 0.6213;

alert(`Su conversión es: ${convMillas} millas.`);


//AREA DE UN TRIANGULO
//Crear un programa que pida al usuario ingresar el valor de la base y el valor de la altura de un triangulo, calcular su área y mostrarlo en un mensaje.

let base = Number(prompt('Ingrese la base de su triángulo'));
let altura = Number(prompt('Ingrese la altura de su triángulo'));
let area = (base * altura) / 2;

alert(`El Área del triángulo es: ${area}`);


//PERIMETRO DE UN RECTANGULO
//Crear un programa que pida al usuario ingresar el valor de la altura y el valor del ancho de un rectángulo, calcular su perímetro y mostrarlo en un mensaje.

let alto = Number (prompt('Ingrese el alto del rectángulo'));
let ancho = Number (prompt('Ingrese el ancho del rectángulo'));
let perimetro = ( 2 * alto) + ( 2 * ancho);

alert(`El perimetro de su rectángulo es: ${perimetro}`);




//PORCENTAJE
//Crear un programa que pida al usuario ingresar un número, y luego el porcentaje que se desea obtener del mismo. Devolver un mensaje muestre el porcentaje de dicho número.

let numeroUno = Number (prompt('Ingrese un número'));
let numeroDos = Number (prompt('Igrese el porcentaje que desea saber'));
let porcentaje = numeroUno * numeroDos / 100;

alert(`Su porcentaje es:${porcentaje}`);



//TIEMPO DE VIAJE
//Crear un programa que pida al usuario la distancia de su recorrido y mostrar en un mensaje cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte, definiendo de antemano distintas velocidades para distintos medios de transporte (p. ej.: a pie: 5 km/hora, bici 10km/hora, etc.).

let velocidadCaminando = 5; 
let velocidadBici = 10;
let velocidadAuto = 60;
let distancia = Number (prompt('Ingrese la distancia a recorrer'));

let tiempoCaminando = distancia * 1 / 5;
let tiempoBici = distancia * 1 / 10;
let tiempoAuto = distancia * 1 / 60;

alert(`Tiempo estimado caminando es: ${tiempoCaminando}hs, en bici es: ${tiempoBici}hs, y en auto es: ${tiempoAuto}hs.`);



//DURACION DE VUELO
//Crear un programa que pida al usuario ingresar, por separado, 3 destinos de las escalas de un vuelo, y la duración de cada uno de ellos. Al final debe mostrar un mensaje que liste todas las escalas con su duración y la duración total del vuelo.

let destinoUno = prompt('Ingrese el destino');
let duracionEscalaUno = Number (prompt('Ingrese tiempo estimado'));
let destinoDos = prompt('Ingrese el siguiente destino');
let duracionEscalaDos = Number (prompt('Ingrese tiempo estimado'));
let destinoTres = prompt('Ingrese el último destino');
let duracionEscalaTres = Number (prompt('Ingrese tiempo estimado'));
let tiempoTotal = duracionEscalaUno + duracionEscalaDos + duracionEscalaTres;

alert(`Escala en ${destinoUno}, tiempo aproximado:${duracionEscalaUno}hs, escala en ${destinoDos}, tiempo aproximado:${duracionEscalaDos}hs, escala en ${destinoTres}, tiempo aproximado:${duracionEscalaTres}hs. Tiempo total aproximado ${tiempoTotal}hs.`);



//INCREMENTO
//Crear un programa que pida ingresar un número de partida y una cantidad a ir incrementando y mostrar cinco mensajes seguidos que muestren el número del mensaje y el total incrementado hasta el momento (p. ej.: comenzando con 5 e incrementando 5, "Incremento 1 ) Total: 10", "Incremento 2) Total: 15", "Incremento 3) Total: 20", etc.).

let num=Number(prompt('Ingrese un numero'));
let incremento= Number(prompt('Ingrese cantidad a ir incrementando'));
let numIncre= Number(num+ incremento);
let numIncre2= Number(numIncre+ incremento);
let numIncre3= Number(numIncre2+ incremento);
let numIncre4= Number(numIncre3+ incremento);
let numIncre5= Number(numIncre4+ incremento);
alert(`Comenzando con ${num} e incrementando ${incremento}, Incremento 1) Total:${numIncre}. Incremento 2) Total:${numIncre2}. Incremento 3) Total:${numIncre3}. Incremento 4) Total:${numIncre4}. Incremento 5) Total:${numIncre5}`
);




//Celsius a Fahrenheit
//Crear un programa que pida ingresar una cantidad de grados Celsius y muestre un mensaje con el resultado de la conversión a grados Fahrenheit.








//Múltiplos
//Crear un programa que pida al usuario un número, luego otro y mostrar en un mensaje si el primer valor es múltiplo del segundo. INVESTIGAR EL OPERADOR MÓDULO O DE RESTO % PARA HACERLO








//Segundos a horas, minutos y segundos
//Crear un programa que pida ingresar una cantidad en segundos y muestre un mensaje con el resultado de la conversión en horas, minutos y segundos que correspondan a esa cantidad (p.ej. 3602 segundos = 1 hora 2 segundos). (Usar módulo operador)






//Cantidad de caracteres
//Crear un programa que pida al usuario ingresar un texto y muestre un mensaje con la cantidad de caracteres que tiene ese texto. INVESTIGAR COMO HACERLO






//Cantidad de huéspedes
//Crear un programa que pida al usuario ingresar, de a uno por vez, tener habitaciones tiene un hotel para 2, 3 y 4 personas, y muestre el máximo de huéspedes que puede albergar.






//Calculadora de gastos
//Crear un programa que pida al usuario cuánto dinero disponible, y vaya preguntando cuánto tiene que pagar por cada servicio, pidiendo el nombre del servicio y el monto a pagar, uno a la vez. Cada vez que solicite ingresar un nuevo servicio, el mensaje debe mostrar cuántos servicios quedan por ingresar, utilizando una variable, y mostrar cuánto dinero queda disponible. Al final debe mostrar una lista con todos los servicios a pagar y el monto de cada uno, además del dinero disponible que le queda. Hacerlo con 3 servicios.





//orden de compras
//Crear un programa que tome la orden de compra de un local. Pedir al usuario que ingrese la cantidad que desea comprar de tres productos distintos, uno por uno, mostrar el valor total de la compra y preguntar en costos cuotas desea realizar el pago. Mostrar un mensaje final con el detalle y el valor total de la compra, cantidad de cuotas y valor de cada una de las cuotas. Los precios de los productos deben estar definidos de antemano en variables.
