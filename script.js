const student = {
    name: "John",
    class: "7th",
    city: "baghpat"
};

function getKeys(obj) {
     const keys =  Object.keys(obj); // Already returns an array, spread operator unnecessary
     return keys;
}

console.log(getKeys(student)); // Output: ["name", "class", "city"]
