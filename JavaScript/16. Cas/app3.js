const person = {
    name: "John Doe",
    age: 48,
    job: "Employed",
    address: "USA",
    kids: 4
};

// Object.freeze() cini objekat imutabile(nepromenljivim)!!!
Object.freeze(person);

// Object.keys() vraca niz kljuceva!!!
Object.keys(person);

// Object.values() vraca niz vrednosti objekta!!!
Object.values(person);

console.log(Object.values(person));
