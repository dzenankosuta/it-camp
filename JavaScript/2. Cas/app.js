var ime = "Max";

// ime = 30;
// ime = false;

// LET i CONST

// const ime = "Max";
// ime = "Isko"; nije dozvoljeno izvrsiti reinicijalizaciju kod const varijable

let godine = 30;

console.log(ime + " " + godine);

godine = 25;

console.log(ime + " " + godine);


// Koristicemo samo const i let. var se nece koristiti!

console.log(5 === 5);
console.log(5 !== 6);
console.log(5 > 6);
console.log(5 <= 6);
console.log(5 < 6);

// godina * 12 = broj meseci 
// const imee = "Max";
// const godinee = 40;

// let meseci = godinee * 12;

// console.log("40 godina ima " + meseci + " meseci.")


// ko input u python
// const nesto = prompt("Unesi tvoje ime:");
// const godina = prompt("Unesi tvoje godine:");

// alert("Ziveo si " + godina * 12 + " meseci.")

// prefiksni i postfiksni Operatori

let age = 20;
console.log(++age) // prefiksni operator prvo izmeni vrednost pa posle printa
console.log(--age) // prefiksni operator

console.log(age++) // postfiksni operator prvo printa pa posle menja vrednost
console.log(age--) // postfiksni operator

// age++        je isto kao      age = age +1


// KONDICIONALI

const starost = 17;

if (starost >= 18) {
    console.log("Punoletan si.");
}
else if (starost < 18) {
    console.log("Nisi punoletan.");
} else {
    console.log("Izvrsava se samo u slucaju da nijedan prethodni uslov nije zadovoljen.")
}




// const brGodina = prompt("Unesite svoje godine:");

// +nekaPromenljiva konvertuje promenljivu u number

// if (+brGodina === 18) {
//     console.log("Tek si postao punoletan.")
// }
// else if (brGodina > 18) {
//     console.log("Ti si odrastao.")
// }
// else if (brGodina > 12) {
//     console.log("Ti si tinejdzer.")
// }
// else {
//     console.log("Ti si dete.")
// }


// LOGICKI OPERATORI

const a = 4;
const b = false;

console.log(Boolean(a && b)); // AND OPERATOR
console.log(Boolean(a || b)); // OR OPERATOR
console.log(Boolean(! true)); // ! OPERATOR
console.log(Boolean(""));

// FIZZ BUZZ CHALLENGE -> NEXT TIME