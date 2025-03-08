const student = {
    name: "John",
    age: 25
};


function getKeys(obj){
    return [...Object.keys(obj)];
}

console.log(typeof getKeys(student)); // ✅ Output: ["name", "age"]
