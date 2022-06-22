//  Ponasanje var i let


//  let je block scope promenljiva.
for (let i = 0; i<10; i++) {
    setTimeout(() => {
        console.log(i)
    },0);
}

//  var je global scope promenljiva.
for (var i = 0; i<10; i++) {
    setTimeout(() => {
        console.log(i)
    },0);
}
