//filter() metoda

const DATA = [100, 65, 76, 80, 99, 53, 1, 2];
//  Preko funkcije napraviti niz koji se sastoji iz parnih brojeva manjih ili jednakih 50 postojeceg niza

const returnEven = (arr) => {
    const evenNumbersLessThan50 = arr.filter((value) => value % 2 === 0 && value <= 50);
    return evenNumbersLessThan50;
}

console.log(returnEven(DATA));

//map() metoda
//  Napraviti novi niz koji ce na kvadrat svakog elementa dodati broj 10

const DATA2 = [5, 3, 2, 8, 7, 9];
const returnPow = (numbers) => {
    const pow = numbers.map((value) => value * value + 10);
    return pow;
}

console.log(returnPow(DATA2));


// reduce() metoda
// reduce() metoda ne vraca niz vec samo jednu vrednost

// const cardTotal = DATA.reduce(
//     (previousValue, currentValue) => previousValue + currentValue
// );



// Funkcija koja sabira sve elemente niza

const DATA3 = [100, 200, 250, 400, 520];

const cardTotal = DATA3.reduce((total, value) => total += value);
console.log(cardTotal);

//  Ako zelimo inicijalnu(pocetnu vrednost) 30:

const cardTotal30 = DATA3.reduce((total, value) => total += value, 30);
console.log(cardTotal30);

// Zadatak. Sabrati sve godine tj. elemente niza a nakon toga podeliti sa brojem elemenata. 
//  Tj. vratiti prosecnu starost godina.


const DATA4 = [26, 18, 16, 22, 30, 28];

const sumAvgAge = (ages) => {
    let len = ages.length;
    const sum = ages.reduce((total, value) => total += value);
    return Number((sum / len).toFixed(2));
}

console.log(sumAvgAge(DATA4));

//  every() metoda. Da li svaki element niza ispunjava odredjeni uslov?!

const DATA5 = [51, 30, 39, 29, 10, 13];

const every = DATA5.every((value) => value >= 30);
console.log(every);


//  some() metoda. Da li je bar neki element niza ispunio odredjeni uslov?!

const DATA6 = [51, 30, 39, 29, 10, 13];

const some = DATA6.some((value) => value >= 30);
console.log(some);


//  includes() metoda. Da li dati niz sadrzi odredjeni element?!

const DATA7 = ["Bostan", "bostan", 39, 29, 10, 13];

const includ = DATA7.includes("bostaN");
console.log(includ);

//  join() metoda. Uzima sve clanove niza i spaja ih u jedan string.


const DATA8 = ["Bostan", "bostan", 39, "grozdje", 10, "borovnica"];

const toString = DATA8.join();
console.log(toString);

//  Moze spojiti elemente bez stavljanja zareza:

const DATA9 = ["Bostan", "bostan", 39, "grozdje", 10, "borovnica"];

const toString2 = DATA8.join("");
console.log(toString2);

//  Moze takodje staviti neki karakter izmedju elemenata:

const DATA10 = ["Bostan", "bostan", 39, "grozdje", 10, "borovnica"];

const toString3 = DATA8.join("*");
console.log(toString3);