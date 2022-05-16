// switch naredba

let godine = 20;
switch (godine) {
    case 20:
        console.log("Ima 20 godina.");
        break;
    case 15:
        console.log("Ima 15 godina.");
        break;
    default:
        console.log("Nije upao ni u jedan case.")
}

// ternary operator kroz if,else

const isSunny = true;

if (isSunny) {
    console.log('Ponesi naocare.');
} else {
    console.log('Nemoj da nosis naocare.')
}

// if (isSunny)        je isto sto i        if (isSunny === true)
// if (!isSunny)       je isto sto i        if (isSunny === false)

// ternary operator

// prvi primer
isSunny ? console.log("Ponesi naocare.") : console.log("Nemoj da nosis naocare.")


// drugi primer 
let age = 17;
let isAdult = (age >= 18) ? true : false
console.log("Punoletan " + isAdult)


// All values are truthy except   false,   0,   -0,   0n,   "",   null,   undefined,   and   NaN.
if ('') {
    console.log('Tacna vrednost ili TRUTHY');
} else {
    console.log('Netacna vrednost ili FALSY');
}