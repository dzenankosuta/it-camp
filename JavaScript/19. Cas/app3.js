//  Closure

function mojaFunc() {
    a = 10;

    b=12;
    console.log(b);

    function drugaFunc(arg1) {
        console.log("drugaa");
        console.log(a + arg1);
    };
    return drugaFunc;
};

res = mojaFunc();
res(5);
// Ako izbrisemo mojaFunc promenljiva a ce ostati jer se ona koristi
//  u potprostor ove funkcije!!!
//  Dok ce se promenljiva b izbrisati prilikom brisanja funkcije mojaFunc,
//  jer se ona NE nalazi u nekom potprostoru te funkcije.
