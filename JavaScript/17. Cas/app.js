// Asinhrona JavaScript
//  Mnogo vremena nam treba:
function nekiPosao() {
    console.log("Pocetak poosla")
    for (let index = 0; index <= 900000000; index++) { }
    console.log("Kraj poosla")
}

nekiPosao();

function nekaNova() {
    console.log("Pocetak posla");
    setTimeout(() => {
        console.log("Idi do API_ja");
    }, 2000);
    console.log("Kraj posla. Alji ne.");
};

nekaNova();