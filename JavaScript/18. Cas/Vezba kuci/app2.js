//  New example of Promise:

myPromise = new Promise((resolve, reject) => {
    const person = {
        firstName:"Dzenan",
        lastName:"Kosuta",
        age:25,
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    };
    if(person.age >= 26 && person.age <= 30) {
        resolve(person.fullName());
    } else {
        reject(person.fullName());
    }
});

myPromise
    .then((arg) => {
        console.log(`Person ${arg} satisfies the conditions.`);
    })
    .catch((arg) => {
        console.log(`Person ${arg} doesn't meet the conditions.`);
    })
