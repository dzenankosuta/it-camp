
fetch("https://jsonplaceholder.typicode.com/users")
    .then((arg) => arg.json())
    .then((res) => console.log(res.map((value) => value.username)))

//  async, await
const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    return posts;
};

getPosts()
    .then((arg) => arg)
    .then((arg2) => console.log(arg2.map((value) => value.title)))
    .catch(() => console.log(`There are no titles.`))

