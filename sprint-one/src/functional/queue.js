var Queue = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;

  someInstance.enqueue = function(value) {
    // add new element of object into storage,
    storage[index] = value;
    // increment index after new item is added
    index++;
  };

  someInstance.dequeue = function() {
    // get the positions of the items of the storage and get the 0th position key
    var firstKey = Object.keys(storage)[0];
    // store the value in a variable
    var firstValue = storage[firstKey];
    // delete that key value pair
    delete storage[firstKey];
    // return the saved variable
    return firstValue;
  };

  someInstance.size = function() {
    // return the length of the keys of storage
    return Object.keys(storage).length;
  };

  return someInstance;
};