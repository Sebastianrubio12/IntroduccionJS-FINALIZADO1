// Arreglos o Arrays

const numeros = [10,20,30,40,50];






// Acceder a los valores de un arreglo
// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
// console.log(numeros[4]);

// Conocer la extensión de un arreglo
// console.log(meses.length);

// numeros.forEach( function(numero) {
//     console.log(numeros);
// })


numeros.push(60,70,80);//agrega al final del arreglo
numeros.unshift(-20,-10,-30);//agrega datos al inicio del arreglo
console.table(numeros);


const meses =  ["enero","Febrero","Marzo","Abril", "Mayo"];

// meses.pop();//elimina el ultimo elemento del arreglo
// meses.shift();//elimna el primer elemento del arreglo

// meses.splice(2,1);//recorre el arreglo y elimna el valor determinado

// console.table(meses);

//Rest o Spread operator

const nuevoArreglo = ['Junio', ...meses];
console.log(nuevoArreglo);
