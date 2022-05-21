const brBrojeva = Number(prompt("Unesite broj koliko brojeva zelite dobiti proizvod:"));

if (isNaN(brBrojeva)) {
    console.log("Morate uneti broj!")
}

console.log(brBrojeva, typeof brBrojeva);

const brojevi = [];
for (let i = 0; i < brBrojeva; i++) {
    let broj = Number(prompt(`Unesite ${i + 1} broj:`));
    if (isNaN(broj)) {
        console.log("Morate uneti broj!")
        break;
    } else {
        brojevi[i] = broj;
    }
}

console.log(brojevi, typeof brojevi);


function vracaProizvod(niz) {
    let proizvod = 1;
    for (let i of niz) {
        proizvod *= i;
    }
    return proizvod;
}

console.log("Proizvod unetih brojeva je: " + vracaProizvod(brojevi));

