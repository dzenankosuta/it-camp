//  spread radi na objekte takodje.


const person = {
    name: "John",
    state: "USA"
};

const extendedPerson = {
    ...person,
    phone: 656868348,
    age: 34,
    address: "NY St 9."
};

console.log(person);
console.log(extendedPerson);

const movies = [
    { title: "Movie 1", rating: 8, budget: "230M" },
    { title: "Movie 2", rating: 5, budget: "200M" },
    { title: "Movie 3", rating: 9, budget: "280M" },
    { title: "Movie 4", rating: 4, budget: "300M" },
    { title: "Movie 5", rating: 8, budget: "180M" }
]

const newMoviesArray = movies.map((value) => {
    return {
        title: value.title, budget: value.budget
    }
});

console.log(newMoviesArray);