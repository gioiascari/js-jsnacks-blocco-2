console.log("Ok Js");

//Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
//Esegui questo programma in due versioni, con il for e con il while.

//Versione con for
let somma = 0;

for (let i = 0; i < 5; i++) {
  const numero = parseInt(prompt("Inserisci un numero"));
  somma += numero;
}
console.log(somma);
