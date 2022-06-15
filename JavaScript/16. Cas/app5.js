const numbers = [1, 2, 3, 1, 5, 2, 7, 10];

// Preko new Set() gubimo duplikate, ali je potrebno opet vratiti u niz.

const nemaDuplih = new Set(numbers);
const nemaDuplihArr = [...nemaDuplih];
console.log(nemaDuplihArr);

// spread moze takodje spajati nizove

const names = ["faris", "aldin", "senad", "dzenan", "sabina"];

const spojeni = [...numbers, ...names];

console.log(spojeni);