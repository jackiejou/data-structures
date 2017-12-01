var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;

  someInstance.push = function(value) {
    // push the value into the storage with the key as the current index
    storage[index] = value;
    // increment index
    index++;
  };

  someInstance.pop = function() {
    // get the value of the last index in the objects
    var lastKey = Object.keys(storage)[index - 1];
    // save the last variable
    var lastValue = storage[lastKey];
    // delete the property from the object
    delete storage[lastKey];
    // decrement index after deletion
    index--;
    // return that saved variable
    return lastValue;
  };

  someInstance.size = function() {
    // return the length of the object keys
    return Object.keys(storage).length;
  };

  return someInstance;
};