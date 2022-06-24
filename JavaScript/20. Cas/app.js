//  Neki primer sto je bio na intervju

prom = new Promise((res,rej) => {
    res();
});

prom.then(()=>{
    prom.then(()=>{
        console.log("B");
    });
    console.log("A");
});

prom.then(()=>{
    console.log("C");
});

// Izvrsavanje:
//  A
//  C
//  B
//  Prvo se izvrsavaju spoljasnji Promise pa onda oni unutar njih!!!