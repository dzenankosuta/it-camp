//  Vezbanje asinhronog JS. 2. primer:

// Resenje problema preko asinhronog JS.

const myFunction = function () {
    console.log("Pocetak posla...")
    setTimeout(function () {
        for (let i = 0; i<= 999999101; i++) {}
        return console.log("...kraj ovog dugackog posla.")
    },1000)
    return "...kraj cele funkcije."
}

console.log(myFunction());
console.log("Prvi posao nakon izvrsenja funkcije.")
console.log("Drugi posao nakon izvrsenja funkcije.")
console.log("Treci posao nakon izvrsenja funkcije.")