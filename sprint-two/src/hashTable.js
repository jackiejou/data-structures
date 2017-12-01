

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // create an array variable, and store it inside this._storage at that index, and push into that array
  if (this._storage[index]) {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        this._storage[index][i][1] = v;
        break;
      }
      // only run this if the loop reaches the end and can't find k inside the bucket
      if (i === this._storage[index].length - 1) {
        this._storage[index].push([k, v]); 
      }
    }    
  } else {
    var arr = [];
    arr.push([k, v]);
    this._storage[index] = arr;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // check if the storage[index] exists
    // if yes, then loop through bucket to find k at 0th index
    // if there is a match, then return the value 
  // return undefined if nothing is found
  if (this._storage[index]) {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        return this._storage[index][i][1];
      }
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // check if the storage[index] exists
    // if yes, then loop through bucket to find k at 0th index
    // if there is a match, then delete it 
  if (this._storage[index]) {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        this._storage[index].splice(i, 1);
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
    insert runs in O(n) in respect to the number of tuples in the hash table
    retrieve runs in O(n) in respect to the number of tuples in the hash table
    remove runs in O(n) in respect to the number of tuples in the hash table
 */


