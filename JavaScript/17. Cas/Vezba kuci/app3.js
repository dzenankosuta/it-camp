//  Primer kada imamo u WEB APIs vise funkcija odjednom, gde svakoj
//  treba jednak broj vremena za izvrsavanje.

const myFunction = function () {
    console.log("Poruka pre pocetka izvrsavanja poslova.")
    setTimeout(() => {
        console.log("prvi posao ide da se izvrsava");
    },1500);
    setTimeout(() => {
        console.log("drugi posao ide da se izvrsava");
    },1500);
    setTimeout(() => {
        console.log("treci posao ide da se izvrsava");
    }, 1500);
    return console.log("Kraj glavne funkcije");
};

myFunction();

// Vratice se onim redosledom, kakvim su isle u WEB API!