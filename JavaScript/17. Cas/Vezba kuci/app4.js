//  Primer kada imamo u WEB APIs vise funkcija odjednom, gde svakoj
//  treba jednak broj vremena(0 milisekundi) za izvrsavanje.

const myFunction = function () {
    console.log("Poruka pre pocetka izvrsavanja poslova.")
    setTimeout(() => {
        console.log("prvi posao ide da se izvrsava");
    },0);
    setTimeout(() => {
        console.log("drugi posao ide da se izvrsava");
    },0);
    setTimeout(() => {
        console.log("treci posao ide da se izvrsava");
    }, 0);
    return console.log("Kraj glavne funkcije");
};

myFunction();

// Vratice se onim redosledom, kakvim su isle u WEB API!
// Poruka "Kraj glavne funkcije" ce se izvrsiti pre prethodno navedene 3 funkcije,
//  bez obzira sto one uzimaju vreme izvrsavanja 0. One svakako idu do WEB APIs.