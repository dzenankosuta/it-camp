// 1. Zadatak: Iz niza od 10 elemenata izracunati sumu parnih brojeva niza.

const niz = [41, 26, 58, 5, 56, 94525, 65, 656, 25, 10];

const sumaParnih = niz.filter((value) => value % 2 === 0).reduce((total, value) => total += value);

console.log(sumaParnih);

//  2. nacin

const suma = niz.reduce((prevValue, currentValue) => {
    if (currentValue % 2 === 0) {
        return prevValue + currentValue;
    } else {
        return prevValue;
    }
}, 0);

console.log(suma);