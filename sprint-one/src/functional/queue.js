var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // {0: 'a', 1 : 'b', 2: 'c'}
  // Implement the methods below
  var index = 0;
  someInstance.enqueue = function(value) {
    // add new element of object into storage,
    // increment index after new item is added
    storage[index] = value;
    index++;
  };

  someInstance.dequeue = function() {
    // get the positions of the items of the storage
    // get the 0th position key
    // delete that key value pair
    // return that key value pair
    var firstKey = Object.keys(storage)[0];
    var firstValue = storage[firstKey];
    delete storage[firstKey];
    return firstValue;
  };

  someInstance.size = function() {
    // return the length of the keys of storage
    return Object.keys(storage).length;
  };

  return someInstance;
};
