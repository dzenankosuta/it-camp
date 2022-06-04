// Broj palindrom se cita isto sa obe strane. Najveci palindrom napravljen od proizvoda dva 
//  dvocifrena broja je 9009 = 91 x 99.
//  Pronaci najveci palindrom napravljen od proizvoda dva trocifrena broja.


//  Prvo pravimo funkciju za ispitivanje da li je dati broj palindrom:
const isPalindrom = (broj) => {
    const string = broj.toString()
    let prazan = [];
    for (let i = string.length - 1; i >= 0; i--) {
        prazan.push(string[i]);
    }
    const obrnutiBroj = +(prazan.join(""));
    return (broj === obrnutiBroj);
}
console.log(isPalindrom(55055));

//  Sada pravimo funkciju koja nam vraca najveci palindrom dobijen proizvodom dva trocifrena broja.
//  Tacno je da se pravi niz od mnogo elemenata i to nije pozeljno zbog zauzimanja mnogo memorije,
//  ali je zadatak korektno odradjen.
const highestPalindrom = () => {
    const palindroms = [];
    for (let i = 999; i >= 100; i--) {
        for (let j = 999; j >= 100; j--) {
            if (isPalindrom(i * j) && !palindroms.includes(i * j)) {
                palindroms.push(i * j);
            }
        }
    }
    return Math.max.apply(null, palindroms);
    // return palindroms;
}

console.log(highestPalindrom());