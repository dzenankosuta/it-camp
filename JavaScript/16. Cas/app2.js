//  2. Zadatak
// Complete the code for the squareList function using any combination 
// of map(), filter(), and reduce(). The function should return a new array
//  containing the squares of only the positive integers 
//  (decimal numbers are not integers) when an array of real numbers is passed to it.
//   An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

const squareList = arr => {
    // Only change code below this line
    const newArr = arr.filter((value) => value >= 0 && value % parseInt(value) === 0)
    const new2 = newArr.map((value) => value * value)
    return new2;
    // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);