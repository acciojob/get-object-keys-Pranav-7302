const student = {
    name: "John",
    class: "7th",
    city: "baghpat"
};

function getKeys(obj) {
     return Object.keys(obj);
}

// console.log(getKeys(student)); // Output: ["name", "age"]

console.log(getKeys(student)); // Output: ["name", "class", "age"]