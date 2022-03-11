console.log("Ok Js");

//Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
//Esegui questo programma in due versioni, con il for e con il while.
let somma = 0;

let i = 0;
//UTILITIES -----------------------------------------------

//Versione con For-----------------------------------------

/*

for (let i = 0; i < 5; i++) {
  const numero = parseInt(prompt("Inserisci un numero"));
  somma += numero;
}
console.log(somma);
*/

//Versione con While---------------------------------------
/*
let somma = 0; // Già specificata sopra

let i = 0;

while (i < 5) {
  let numero = parseInt(prompt("Inserisci un numero"));
  somma += numero;
  i++;
}
console.log(somma);

*/
//BONUS Versione con do while-------------------------------
do {
  let numero = parseInt(prompt("Inserisci un numero"));
  somma += numero;
  i++;
} while (i < 5);

console.log(somma);
