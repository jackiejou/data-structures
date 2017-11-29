var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    // push the value into the storage with the key as the current index
    // increment index
    storage[index] = value;
    index++;
  };

  someInstance.pop = function() {
    // get the value of the last index in the objects
    // delete the property from the object
    // return that property value
    var lastKey = Object.keys(storage)[index - 1];
    var lastValue = storage[lastKey];
    delete storage[lastKey];
    index--;
    return lastValue;
  };

  someInstance.size = function() {
    // return the length of the object keys
    return Object.keys(storage).length;
  };

  return someInstance;
};
