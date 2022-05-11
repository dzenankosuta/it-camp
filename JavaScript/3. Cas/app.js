// const brGodina = prompt("Unesite svoje godine:");

// +nekaPromenljiva konvertuje promenljivu u number

// if (brGodina >= 18 && +brGodina < 40) {
//     console.log("Ti si odrastao.")
// }
// else if (brGodina > 11 && +brGodina < 18) {
//     console.log("Ti si tinejdzer.")
// }
// else if (brGodina >= 40) {
//     console.log("Ti si zreo covek.")
// }
// else {
//     console.log("Ti si dete.")
// }

// PETLJE

// U JS POSTOJE 3 PETLJE:
// for          petlja
// while        petlja
// do while     petlja


// for (prvi deo; drugi deo; treci deo) {  prvi deo je promenljiva, drugi deo je uslov, treci deo je menjanje promenljive
// radi nesto
// }


// ispisuje sve brojeve od 0 do 9
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// sumu svih neparnih do 15
let suma = 0;
for (let i = 0; i <= 15; i++) {
    if (i % 2 !== 0) {
        suma += i;
    }
}
console.log(suma);

// i % 2 !== 0   -> neparan broj
// i % 2 === 0   -> paran broj




// while (uslov) {
//     radi nesto
// }


let n = 0;
while (n < 20) {
    console.log(n + " zadovoljava uslov while petlje!");
    break; // bataljuj
    n += 1;
}



// do {
//     radi nesto
// } while ()


// DOMACI ZADATAK:

// FIZZ BUZZ CHALLENGE

// iteracija se vrsi od 0 do 100.
// Ispisujemo FIZZ ako je broj deljiv sa 3
// Ispisujemo BUZZ ako je broj deljiv sa 5
// Ispisujemo FIZZ BUZZ ako je broj deljiv i sa 3 i sa 5
// 0
// 1
// 2
// FIZZ
// 4
// BUZZ
// FIZZ

