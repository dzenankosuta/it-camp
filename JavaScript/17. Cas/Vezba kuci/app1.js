//  Vezbanje asinhronog JS. 1. primer:

//  Ako imamo sledecu funkciju (za cije izvrsavanje je potrebno mnogo vremena), 
//  pozeljno je iskoristiti asinhroni JS kako ostale naredbe ne bi cekale na svoje izvrsavanje.

const myFunction = function () {
    console.log("Pocetak posla...")
    for (let i = 0; i<= 999999101; i++) {}
    return "...kraj ovog dugackog posla."
}

console.log(myFunction());
console.log("Prvi posao nakon izvrsenja funkcije.")
console.log("Drugi posao nakon izvrsenja funkcije.")
console.log("Treci posao nakon izvrsenja funkcije.")