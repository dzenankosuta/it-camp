// Nizovi (Arrays)

const cars = ['BMW', 'Audi', 'VW', 'MB', 'Skoda'];
//              0,      1,     2,    3,     4
console.log(cars);

console.log(cars.length);  // Duzina niza (koliko ima elemenata niz)

console.log(cars[1]);      // Da vrati Audi

// const cars = ['BMW', 5, false, ['Audi', 2, 'Sharan'], 'Skoda'];  Niz moze sadrzati razlicite tipove podataka

cars[0] = 3;            // Zamenili smo prvi element
console.log(cars);

//  cars.length = 0;       Ispraznili smo niz
//  console.log(cars);


let len = cars.length;
for (let i = 0; i < len; i++) {
    console.log(cars[i]);
}

// Izlistati sve truthy vrednosti sledeceg niza: 

const arr = ['BMW', 'Audi', 4, 10, NaN, undefined, null, false, true, 5];

let duzina = arr.length;
for (let i = 0; i < duzina; i++) {
    if (arr[i]) {
        console.log(arr[i]);
    }
}

// for petlja namenjena za nizove:

for (let item of arr) {
    console.log(item);
}

const studenti = ['Marko', 'Janko', 'Sasa'];

studenti[8] = 'Zika'; // Napravili smo rupe u nizu (Array holes) -> Izbegavati ovakvu sintaksu

console.log(studenti);

// Jos jedan nacin pravljenja niza:

const niz = new Array("clan1", 'clan2', 'clan3');

console.log(niz);