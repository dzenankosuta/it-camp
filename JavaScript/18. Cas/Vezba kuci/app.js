//  Cilj ove vezbe je napraviti neki realan primer primene Promise.

// UNUTAR OBJEKTA NALAZI SE FUNKCIJA SA DVA PARAMETRA!
job = new Promise((resolve,reject) => {
    niz = [1,2,3,4,6,5,7,52,12,45,68,45,97,2,5,4,65,45,78,88,99,451,245,645,458,512,1445,551,14];
    if (niz.every((value) => !isNaN(value))) {
        resolve(niz);
    } else {
        reject(err);
    }
});


//  UNUTAR then I UNUTAR catch idu funkcije za izvrsavanje u slucaju 
//  zadovoljavanja uslova, odnosno nezadovoljavanja.
job
    .then((niz) => {
        console.log("Nas niz se sastoji samo od brojeva:", niz);
        sortirani = niz.sort((a,b) => a-b);
        return sortirani;
    })
    .then((arg1) => {
        console.log("Sortirani niz je: ", arg1);
        parni = arg1.filter((value) => value % 2 === 0);
        return parni;
    })
    .then((arg2) => {
        console.log("Niz parnih brojeva je: ", arg2);
    })
    .catch((err) => {
        console.log("Niz se sastoji od podataka razlicitih tipova.");
    })