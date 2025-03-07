// Create the student object
const student = {
  name: "John",
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}

// Testing the function
console.log(getKeys(student)); // Output: ["name"]

// Additional test cases
console.log(getKeys({ name: "Alice", age: 22, city: "Delhi" })); // Output: ["name", "age", "city"]
console.log(getKeys({})); // Output: [] (empty object case)
