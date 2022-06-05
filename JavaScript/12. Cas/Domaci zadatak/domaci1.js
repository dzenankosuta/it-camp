// U Fibonacijevom nizu, svaki element je napravljen od zbira prethodna dva. Niz pocinje [1,2,...]
//  u Fibonacijevom nizu cije vrednosti ne prelaze 4 miliona, pronaci sumu parnih elemenata.

// Prvo cemo napraviti niz cije vrednosti ne prelaze 4 miliona, a zatim pronaci sumu parnih elemenata:


const makeThisTask = () => {
    const niz = [1, 2];
    let i = 2;
    while (niz[i - 2] + niz[i - 1] <= 4000000) {
        niz.push(niz[i - 2] + niz[i - 1]);
        i++;
    }
    // We can do this:
    // return niz.filter((value) => value % 2 === 0).reduce((total, value) => total + value);
    // But, because of memory safe, we'll do this:
    const sumEven = niz.reduce((prevValue, curValue) => {
        if (curValue % 2 === 0) {
            return prevValue + curValue;
        } else {
            return prevValue;
        }
    }, 0);
    return sumEven;
}

console.log(makeThisTask());