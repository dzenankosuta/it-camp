// Koliko ima razmaka u varijabli rec

// const rec = "Sta ste radili danas";

// let brRazmaka = 0;
// for (let i = 0; i < rec.length; i++) {
//     if (rec[i] === " ") {
//         brRazmaka += 1;
//     }
// }
// console.log("Broj Razmaka je: " + brRazmaka);


// U datom stringu zadnje slovo svake reci prebaciti da bude veliko

// const string = "ovo je string";
// let newString = "";
// let len = string.length;

// for (let i = 0; i < len; i++) {
//     if (i === len - 1) {
//         newString += string[i].toUpperCase();
//     } else if (string[i + 1] === " ") {
//         newString += string[i].toUpperCase();
//     } else {
//         newString += string[i];
//     }
// }

// console.log(newString);



// U datom stringu izbrisati razmake

const string = "ovo je string";
let newString = "";
let len = string.length;

for (let i = 0; i < len; i++) {
    if (string[i] !== " ") {
        newString += string[i];
    }
}
console.log(newString);