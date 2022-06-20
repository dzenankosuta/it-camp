//  Promise

posao = new Promise((resolve, reject) => {
    response = 200;

    for (let i =0; i < 90000000; i++) {}
    if (response === 200) {
        resolve();
    } else {
        reject();
    }
});

posao
    .then(() => {
        console.log("uspesno povukao podatke")
    })
    .catch((err) => {
        console.log("neuspesno povukao podatke")
    });

    // Moze takodje
    Promise.resolve("Podaci").then(() => {console.log("Dobroe")})

    // Novi primer. chain resolve (then)

    posao2 = new Promise((resolve, reject) => {
        response = 200;

        if (response === 200) {
            resolve([1,2,3,4,5]);
        } else {
            reject();
        }
    });

    posao2
        .then((data) => {
            console.log("uspesno povukao podatke", data);
            arr=data.filter((value) => value % 2 === 0);
            return arr
        })
        .then((arg1) => {
            console.log("druga func", arg1)
        })
        .catch((err) => {
            console.log("neuspesno povukao podatke")
        });

