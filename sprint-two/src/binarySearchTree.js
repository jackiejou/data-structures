var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  // check if value of first node in tree is less or greater than the value of new node
  // if new value is less than this.value
  if (value < this.value) {
    // check if left exists
    if (this.left) {
      // run recursion on this.left
      this.left.insert(value);
    // left doesn't exist
    } else {
      // assign this.left to newNode
      this.left = new BinarySearchTree(value);
    }
  } else {
    // check if right exists
    if (this.right) {
      // run recursion on this.right
      this.right.insert(value);
    // right doesn't exist
    } else {
      // assign this.right to newNode
      this.right = new BinarySearchTree(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  // if this.value equals value
  if (value === this.value) {
    // if yes, return true
    return true;
  }
  // check if value of first node is less or greater than the value of new node
  // new value is less than this.value
  if (value < this.value) {
    // check if left exists
    if (this.left) {
      // run recursion on this.left, return true if found
      if (this.left.contains(value)) {
        return true;
      }
    }
  } else {
    // check if right exists
    if (this.right) {
      // run recursion on this.right, return true if found
      if (this.right.contains(value)) {
        return true;
      }
    }
  }
  // return false if we cannot find it after this.left and this.right recursions
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  // run callback on this value
  this.value = callback(this.value);
  // if left exists
  if (this.left) {
    // run recursion on this.left node
    this.left.depthFirstLog(callback);
  }
  // if right exists
  if (this.right) {
    // run recursion on this.right node
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
    insert is O(log n)
    contains is O (log n)
    depthFirstLog is O (n)
 */
