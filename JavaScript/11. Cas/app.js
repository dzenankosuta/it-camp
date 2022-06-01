// 1. Write a function that converts an array of values from miles to kilometres using the map method.
// In the end, add the kilometres up in a new variable called "totalDistanceInKilometers" and 
// return this variable.

const miles = [15, 20, 1, 60, 45, 120]

const firstTask = (arr) => {
    const milesToKilometres = arr.map((value) => value * 1.6);
    const totalDistanceInKilometers = milesToKilometres.reduce((total, value) => total + value);
    return totalDistanceInKilometers;
}

console.log(firstTask(miles));

// 2.From the array of numbers, choose even double even numbers and 
// compute the sum using Array's filter, map and reduce methods.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const secondTask = (arr) => {
    const evenDoubleNumbers = arr.filter((value) => value % 2 === 0).map((value) => value * value);
    const sum = evenDoubleNumbers.reduce((total, value) => total + value);
    return sum;
}

console.log(secondTask(numbers));


// 3.Create a new array whose elements is in uppercase of words present in the original array.

let strings = ["avengers", "captain america", "ironman", "black panther"];

const thirdTask = (arr) => {
    return arr.map((value) => value.toUpperCase());
}

console.log(thirdTask(strings));