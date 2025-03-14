// Create the student object
const student = {
  name: "John",
  getKeys: function () {
    return Object.keys(this);  // "this" refers to student object
  }
};

// Function to get all keys from any object
function getKeys(obj) {
  return Object.keys(obj);
}

// Do not change the code below
window.student = student;
window.getKeys = getKeys;
