let listadeSuper = []; 
listadeSuper[0] = "Leche";
listadeSuper[1] = "Huevos";
listadeSuper[2] = "Pan";

console.log("Primer elemento: " + listadeSuper[0]);

let ultimoElemento = listadeSuper.length - 1;
console.log("Último elemento: " + listadeSuper[ultimoElemento]);

listadeSuper.push("Mantequa");
listadeSuper.push("Queso");

listadeSuper.unshift("Azúcar");
listadeSuper.unshift("Sal");

console.log("Cantidad de elementos totales: " + listadeSuper.length);

let noHabia = listadeSuper.pop();
console.log("Elemento eliminado: " + noHabia);

let comprado = listadeSuper.shift();
console.log("Elemento comprado: " + comprado);

console.log("Tamaño final: " + listadeSuper.length);
