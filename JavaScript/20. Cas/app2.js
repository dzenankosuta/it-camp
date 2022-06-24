// fetch(doneti, povuci)

// API je posredniK izmedju frontend_a i backend_a. npr. Konobar u kaficu.

getUsers = fetch("https://jsonplaceholder.typicode.com/users?id=1")
.then((response) => response.json())
.then((res) => console.log(res.map((el) => el.id)))


// async, await

// async pisemo pred funkciju
//  await pisemo pred fetch
const getUserss = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json()
    return posts;
};

getUserss().then((res) => console.log(res));