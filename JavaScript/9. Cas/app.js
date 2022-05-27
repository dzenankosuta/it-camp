// Zadatak
// Prvi deo. Napraviti pomocni niz koji ce sadrzati elemente od oba niza.
// Drugi deo. Napraviti jos jedan pomocni niz koji ce iz prvog dodatnog niza uzeti parne brojeve.
// Treci deo. U drugom pomocnom nizu umetnuti na prva dva mesta 10 i 20. 
//            Funkcija na kraju treba da vrati dva napravljena pomocna niza. 

const DATA1 = [2, 26, 38, 75, 11, 29];
const DATA2 = ["a", "b", "c", "d", "e"];

const mutateArrays = (arr1, arr2) => {
    const joker1 = arr1.concat(arr2);
    let joker2 = [];
    for (let i of joker1) {
        if (i % 2 === 0) {
            joker2.push(i);
        }
    }
    joker2.unshift(10, 20);
    return "Prvi pomocni niz je: " + joker1 + "\n" + "Drugi pomocni niz je " + joker2;
};

console.log(mutateArrays(DATA1, DATA2));

// Nastavljamo sa metodama u nizovima (metode koje ukljucuju funkciju za argument)

// filter() metoda. Namenjena za pravljenje novog niza gde je ispunjen uslov.


// Napraviti novi niz koji filtrira postojeci i vraca novi sa onim elementima starog niza, 
// gde je drugo slovo e. 
const words = ["televizor", "daljinski", "telefon", "voda", "ranac", "stolica"];

const newArr = words.filter((value) => value[1] === "e");

console.log(newArr);

// Napraviti novi niz koji filtrira postojeci i vraca novi sa onim elementima cija 
// je duzina <= 6
const newArr2 = words.filter((value) => value.length <= 6);

console.log(newArr2);

// Napraviti novi niz koji filtrira postojeci i vraca novi sa parnim elementima.
const numbers = [2, 8, 9, 11, 26, 86, 85, 90, 102, 1003, 1120];

const filteredArray = words.concat(numbers).filter((value) => value % 2 === 0);

console.log(filteredArray);


// Napraviti novi niz koji filtrira postojeci i vraca novi sa onim elementima ciji je tip "boolean".
const booleans = [true, false, true, false];

const newFilteredArray = filteredArray.concat(booleans).filter((value) => typeof value === "boolean");

console.log(newFilteredArray);


// map() metoda. Namenjena za pravljenje novog niza uz dodatne izmene.


// Napraviti novi niz koji sadrzi kvadrate elemenata postojeceg niza:
const numbers2 = [2, 5, 10, 3, 4, 8];

const square = numbers2.map((value) => value * value);

console.log(square);

// Napraviti novi niz koji sadrzi kvadrate korene elemenata postojeceg niza:
const squareRoot = square.map((value) => Math.sqrt(value));

console.log(squareRoot);


// Kakva je to zapravo funkcija:
// const squareRoot2 = square.map((value, index, array) => {
//     console.log("Prvi argument: ", value);  // Vrednost elementa
//     console.log("Drugi argument: ", index); // Index niza
//     console.log("Prvi argument: ", array);  // Ceo niz
// return ...
// });

const numbers3 = [2, 5, 3, 1, 10, 8, 7];

// Kvadrirati one brojeve koje imaju index 0,3,5
const square2 = numbers3.map((value, index) => {
    if (index === 0 || index === 3 || index === 5) {
        return value * value;
    } else {
        return value;
    }
});
console.log(square2);


// Zadatak. Napraviti funkciju koja pravi niz koji ce iz postojeceg napraviti novi uz ispunjenje uslova:
// value > 2 => value * 7
// value >2 and value <8 => (value*4)/2
// Ostale vrednosti da ne uzima u obzir
// I na kraju treba novi niz vratiti sa godinama <10.


const DATA11 = [1, 3, 4, 2, 7, 6];
const dogAgeToHuman = (ages) => {
    let newAge = ages.map((value) => {
        if (value > 2 && value < 8) {
            return (value * 4) / 2;
        } else if (value > 2) {
            return value * 7
        }
    })
    let newAge2 = newAge.filter((value) => value < 10);
    return newAge2;

};

console.log(dogAgeToHuman(DATA11));