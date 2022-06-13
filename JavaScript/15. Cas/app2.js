//  call(), bind(), apply()

const person = {
    name: "John Doe",
    age: 22,
    getFirstname: function () {
        console.log(this.name);
    }
};

function sayHello() {
    console.log(`Hello ${this.name}.`)
}

const car = {
    name: "Audi"
}

//  Funkcija i unutar nje objekat!!!

sayHello.call(person);

//  Sledeci primer:

const hrana = {
    food: "Pizza"
};

function favFood(text, rating) {
    return `${this.food} ${text} ${rating}`;
}

//  Kod call sve argumente stavljamo jedan do drugog
console.log(favFood.call(hrana, "je ukusna", 9));
//  Kod apply stavimo objekat kao prvi argument, a onda u niz ostale argumente.
console.log(favFood.apply(hrana, ["je ukusna", 9]));

//  bind()
const bindFunc = favFood.bind(hrana);
console.log(bindFunc("je osrednje ukusna", 7));