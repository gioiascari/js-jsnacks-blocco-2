console.log("Ok Js");

//Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let somma = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 !== 0) {
    somma = somma + array[i];
  }
}
console.log("La somma dei numeri dispari è " + somma);
