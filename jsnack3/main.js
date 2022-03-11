console.log("Ok Js");
alert("Benvenuto:)");
//Crea due array che hanno un numero di elementi diversi.
//Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.

//CREO ARRAY CON DIVERSI ELEMENTI
let arrayOne = [1, 2, 3, 4, 5];
let arrayTwo = [6, 7, 8];
//AGGIUNGO ELEMNTI CASUALI AD "ARRAYTWO"
while (arrayOne.length > arrayTwo.length) {
  //UTILIZZO "PUSH" PER AGGIUNERE ELEMENTI ED INFINE "MATH RANDOM" PER GENERARE NUMERI RANDOM
  arrayTwo.push(arrayOne[Math.floor(Math.random() * arrayTwo.length)]);
}
//CONSOLE LOG RISULTATO
console.log(arrayOne);
console.log(arrayTwo);
