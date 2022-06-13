//  Napraviti novi niz koji ce sadrzati samo ocene. Nakon toga,
//  Naci prosek ocena.

const students = [
    { name: "Faris", grade: 8, year: 2 },
    { name: "Isko", grade: 10, year: 4 },
    { name: "Aldin", grade: 8, year: 2 },
    { name: "Amina", grade: 9, year: 4 },
    { name: "Sabina", grade: 9, year: 3 },
    { name: "Denis", grade: 7, year: 4 },
    { name: "Senad", grade: 6, year: 1 },
]

function getAvgGrade(array) {
    const grades = array.map((value) => value.grade);
    let len = grades.length;
    const avg = grades.reduce((total, value) => total + value) / len;
    return +(avg.toFixed(2));
}

console.log(getAvgGrade(students));