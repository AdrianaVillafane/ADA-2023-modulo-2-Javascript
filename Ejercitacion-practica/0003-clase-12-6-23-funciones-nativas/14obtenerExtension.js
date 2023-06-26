//ejercicio 14

//obtenerExtension(archivo)`

//Crear una función `obtenerExtension` que tome como argumento un string `archivo` con el formato 'nombre.extension' y devuelva la extensión del archivo

const obtenerExtension=(archivo)=>{

    let partes= archivo.split(".");
       let extension = partes[partes.length-1];
    return extension;
}
console.log(obtenerExtension('imagen.png')); // 'png'
console.log(obtenerExtension('index.html')); // 'html'
console.log(obtenerExtension('notas.txt')); // 'txt'

