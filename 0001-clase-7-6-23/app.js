
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


