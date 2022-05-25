// Array methods

const cars = ['BMW', "Audi", "Smart"];

console.log(cars);

// cars[3] = "MB" Dodavanje elementa, ali ne preporucuje se ovaj metod

// Dodavanje elementa na kraju niza:

cars.push("Mercedes");     // Vraca duzinu niza sa dodatim "Mercedesom"
console.log(cars);

cars.push("Mini", "VW", "Skoda");
console.log(cars);


// Brisanje poslednjeg elementa niza:

cars.pop();
console.log(cars);

const passat = cars.pop();
console.log(passat);       // Vraca izbrisani element




// Napraviti funkciju koja vraca iz unetog niza samo brojeve >= 18:

const godine = [12, 76, 26, 6, 23, 21, 29, 16];

function dajMiPunoletne(ages) {
    let punoletni = [];
    for (let i of ages) {
        if (i >= 18) {
            punoletni.push(i);
        }
    }
    return punoletni;
}

console.log(dajMiPunoletne(godine));

// Napraviti funkciju koja vraca iz unetog niza samo brojeve < 18:

const druge_godine = [12, 76, 26, 6, 23, 21, 29, 16];

function dajMiMaloletne(ages) {
    let maloletni = [];
    for (let i of ages) {
        if (i < 18) {
            maloletni.push(i);
        }
    }
    return maloletni;
}

console.log(dajMiMaloletne(druge_godine));


const motors = ['BMW', "Mercedes", "VW"];
console.log(motors);

// Dodavanje elementa na pocetku niza:

motors.unshift("Peugeot");  // Vraca duzinu niza sa dodatim "Peugeotom"
console.log(motors);

motors.unshift("Piago", "Ford");
console.log(motors);


// Brisanje prvog elementa niza:

motors.shift();            // Vraca izbrisani element
console.log(motors);


// Vracanje niza u obrnutom redosledu:

motors.reverse();
console.log(motors);

// Spajanje nizova:

const vehicles = cars.concat(motors);
console.log(vehicles);

// find() method Vraca vrednost prvog elementa koji je zadovoljio dati uslov

// Koji je prvi element niza godine koji je >= 18 ?

const prviPunoletni = godine.find(myFunction);
console.log(prviPunoletni);

function myFunction(value, index, array) {
    return value >= 18;
}

// Laksa metoda. Preko skracene funkcije. Nije potrebno dodatno je praviti.
// Koji je prvi element niza godine koji je >= 18 i manji od ? 
const trazenaVrednost = godine.find((value) => value > 50 && value < 100);
console.log(trazenaVrednost);


// findIndex() method Vraca index prvog elementa koji je zadovoljio dati uslov

// Koji je index prvog elementa niza godine koji je >= 18 i manji od ? 
const trazenaVrednost2 = godine.findIndex((value) => value > 50 && value < 100);
console.log(trazenaVrednost2);