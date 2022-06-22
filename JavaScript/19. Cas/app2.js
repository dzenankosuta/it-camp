
function mojaFunc() {
    console.log("Neke komande");
    function drugaFunc() {
        console.log("drugaa");
    };
    return drugaFunc;
};

// 2 nacina pozivanja:
// 1.
mojaFunc()();

// 2.
res = mojaFunc(); // zagrada ovde se odnosi na mojaFunc
res();            // zagrada ovde se odnosi na drugaFunc

