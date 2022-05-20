// DRY
// Do not repeat yourself

// function imeFunkcije() {
// radnja
// }


// Osnovni nacin pisanja funkcije
function saberiTriIPet() {
    const zbir = 3 + 5;
    return zbir;
}

console.log(saberiTriIPet());


// Dodeljivanje vrednosti varijabli, one vrednosti koju data funkcija vraca:
// iliti drugi nacin pisanja funkcije
const zbirTriIPet = saberiTriIPet();

console.log(zbirTriIPet);


// Treci, najcesci nacin pisanja funkcije

// const arrowFunc = () => {
// radnja
// }


// funkcija za sabiranje dva broja:
// function saberi(a, b) {
//     return a + b;
// }

// console.log(saberi(4, 6));


// Pozdrav korisniku

// function pozdrav(ime) {
//     alert(`Pozdrav, ${ime}`);
// }

// pozdrav("Farise");


// Funkcija koja pretvara inche u cm

// function inchToCm(inch) {
//     return inch * 2.54;
// }

// console.log(inchToCm(10));

// const visina = inchToCm(25);

// console.log(visina);


// Arrow Funkcija koja pretvara inche u cm

const inchToCm = (inch) => inch * 2.54;  // nismo morali viticaste i return jer je cela funkcija samo jedan red

console.log(inchToCm(10));


const saberi = (a, b) => a + b;

console.log(saberi(10, 1));

// Scope - Prostor

const name = 'Faris'       // Global scope

function nekaFunkcija() {
    const name = 'Jusuf';  // Dozvoljeno je zato sto se sada nalazimo u drugom prostoru (scope)
}


function sabiraj(prvi, drugi, treci = false) {  // Defaultna vrednost je false
    if (treci) {
        return prvi + drugi + treci;
    } else {
        return prvi + drugi;
    }

}

console.log(sabiraj(2, 2));

// domaci. Korisnik unosi broj brojeva, zatim te brojeve. Funkcija vraca proizvod data tri broja kao alert.
