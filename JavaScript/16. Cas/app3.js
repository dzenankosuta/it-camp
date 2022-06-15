const person1 = {
    name: "John Doe",
    age: 48,
    job: "Employed",
    address: "USA",
    kids: 4
};

const person2 = person1;

// Object.freeze() cini objekat immutabile(nepromenljivim)!!!
Object.freeze(person1);

// Object.seal() cini objekat promenljivim, ali nije dozvoljeno 
// dodati niti brisati elemente!!!
Object.seal(person1);

// Object.keys() vraca niz kljuceva!!!
Object.keys(person1);

// Object.values() vraca niz vrednosti objekta!!!
Object.values(person1);

// Object.entries() vraca niz nizova. Svaki niz je (key,value) par!!!
Object.entries(person1)

// Object.is(person1, person2) => Identicko poredjenje nizova.
Object.is(person1, person2);

console.log(Object.is(person1, person2));
