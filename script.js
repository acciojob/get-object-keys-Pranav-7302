const student = {
    name: "John",
    class: "7th",
    age: 12
};

function getKeys(obj) {
     console.log(Object.keys(obj))
}

// console.log(getKeys(student)); // Output: ["name", "age"]

getKeys(student)