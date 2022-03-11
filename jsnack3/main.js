console.log("Ok Js");
//Crea due array che hanno un numero di elementi diversi.
//Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.

let arrayOne = [1, 2, 3, 4, 5];

let arrayTwo = [6, 7, 8];

while (arrayOne > arrayTwo) {
  arrayTwo.push(Math.floor(Math.random()));
}

console.log(arrayOne);
console.log(arrayTwo);
