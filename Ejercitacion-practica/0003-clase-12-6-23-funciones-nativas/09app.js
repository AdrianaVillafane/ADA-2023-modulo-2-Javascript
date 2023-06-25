//ejercicio 9

//`aHackerSpeak(str)`

//Crear una función `aHackerSpeak` que tome como argumento un string `str` y el mismo string convertido a H4CK3R 5P3AK, siguiendo las siguientes reglas:


//- Las i se transforman en 1
//- Las e se transforman en 3
//- Las a se transforman en 4
//- Las s se transforman en 5
//- Las 0 se transforman en 0

const  aHackerSpeak=(str)=> {
    let hackerStr = str.replace(/i/g, '1');
    hackerStr = hackerStr.replace(/e/g, '3');
    hackerStr = hackerStr.replace(/a/g, '4');
    hackerStr = hackerStr.replace(/s/g, '5');
    hackerStr = hackerStr.replace(/o/g, '0');
    hackerStr = hackerStr.replace(/A/g, '4');
    hackerStr = hackerStr.replace(/O/g, '0');
    hackerStr = hackerStr.replace(/E/g, '3');
  
    
    return hackerStr;
  }


console.log(aHackerSpeak('javascript')); // 'j4v45cr1pt'
console.log(aHackerSpeak('soy una hacker')); // '50y un4 h4ck3r'
console.log(aHackerSpeak('ADA LOVELACE')); // '4D4 L0V3L4C3'
