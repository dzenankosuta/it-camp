// FIZZ BUZZ CHALLENGE

for (let i = 0; i <= 100; i++) {
    if (i === 0) {
        console.log(i)
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FIZZ BUZZ");
    } else if (i % 3 === 0) {
        console.log("FIZZ");
    } else if (i % 5 === 0) {
        console.log("BUZZ")
    } else {
        console.log(i);
    }
}