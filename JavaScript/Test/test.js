// 1.


const firstTask = () => {
number = Number(prompt("Unesite broj: "))

if (isNaN(number)) {
    console.log(`Niste uneli broj.`);
} else {
    console.log(`Stepen broja ${number} je ${Math.pow(number,2)}`);
};
return "-------------------Kraj prvog zadatka-----------------"
};

console.log(firstTask());

// 2.
//2. Shopping Cart.
// There are array of objects with all products that someone bought.
//In product object we got name,
// price per unit, and amount of units. Your job is to loop throught array,
// and make new array of objects
// with two key-value pairs name and total price for that product.
// After you did the job with new array, you need to sum all prices of
// every product and return total sum value, and add a FIXED 320 shipping costs.
// After all of that you should print
// in console following statement: 'You got ${num of products} in cart, 
//shipping cost is ${shipping cost}, your total is ${total}'
 
const CART_DATA = [
    {
      id: 1,
      name: "Hawai Shirt",
      price: 30,
      amount: 2,
      categorty: "summer",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Adidas Slippers",
      price: 35,
      amount: 1,
      categorty: "summer",
      rating: 4.5,
    },
    {
      id: 6,
      name: "White T-Shirt",
      price: 15,
      amount: 4,
      categorty: "summer",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Summer hat",
      price: 7.5,
      amount: 3,
      categorty: "summer",
      rating: 40,
    },
  ];

const secondTask = (arr) => {
    const len = arr.length;
    const shippingCost = 320;
    const namePrice = arr.map((value) => {
        return {
            name: value.name, totalPrice: value.price * value.amount
        }
    });
    const sum = namePrice.map((value) => value.totalPrice).reduce((prevValue, currValue) => prevValue + currValue, 320)
    // return sum;
    return `You got ${len} in cart, shipping cost is ${shippingCost}, your total is ${sum}`
};

console.log(secondTask(CART_DATA));

// 3.
//3. Fetch data with async javascript(fetch or async/await) from this API
//https://reqres.in/api/users, where you need to add QUERY param called page and its value should be 2
//After you successfully fetch data, map that array into array with only data of users

const thirdTask = async () => {
    const response = await fetch("https://reqres.in/api/users?page=2");
    const users = await response.json();
    return users;
};

thirdTask()
    .then((arg1) => arg1)
    .then((arg2) => console.log(arg2.data))
    .catch(() => `There is some problem.`)
