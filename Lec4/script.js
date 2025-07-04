let userdata = [
    {
        name: "priyanshu",
        age : "21"
    },
    {
        name: "Swastik",
        age: "21",
    },
    {
        name: "piratu",
        age : "21",
    },
    {
        name: "tatiana",
        age : "2",
    },
    {
        name: "girg",
        age : "2",
    }
]

let filteredUsers = userdata.filter(user => Number(user.age) < 20);
console.log(filteredUsers);