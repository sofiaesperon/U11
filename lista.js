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

function logItems(items) {
    items.forEach(function(item, index) {
        console.log(index + ": " + item);
    });
}
logItems(listadeSuper);

let comando = "";

while (comando !== "salir") {
    let entrada = prompt('Ingrese un comando: "nuevo", "listar", "borrar" o "salir"');

    if (entrada === null) {
        break;
    }

    comando = entrada.trim().toLowerCase();

    if (comando === "nuevo") {
        let nuevoItem = prompt("Ingrese el ítem que desea agregar:");

        if (nuevoItem !== null && nuevoItem.trim() !== "") {
            listadeSuper.push(nuevoItem.trim());
            console.log("Ítem agregado: " + nuevoItem.trim());
        }
    } else if (comando === "listar") {
        logItems(listadeSuper);
    } else if (comando === "borrar") {
        let indiceEntrada = prompt("Ingrese el índice del producto que desea borrar:");
        let indice = Number(indiceEntrada);

        if (
            indiceEntrada !== null &&
            indiceEntrada.trim() !== "" &&
            Number.isInteger(indice) &&
            indice >= 0 &&
            indice < listadeSuper.length
        ) {
            let productoEliminado = listadeSuper.splice(indice, 1)[0];
            console.log("Producto eliminado: " + productoEliminado);
        } else if (indiceEntrada !== null) {
            console.log("Índice inválido.");
        }
    } else if (comando !== "salir") {
        console.log("Comando no reconocido.");
    }
}
