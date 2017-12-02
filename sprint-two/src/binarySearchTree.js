var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value < this.value) {
    // check if left exists and run recursion on this.left
    // if left doesn't exist, assign this.left to newNode
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = new BinarySearchTree(value);
    }
  } else {
    // check if right exists and run recursion on this.right
    // if right doesn't exist, assign this.right to newNode
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  // if this.value equals value
  if (value === this.value) {
    return true;
  }

  if (value < this.value) {
    // check if left exists and run recursion on this.left, return true if found
    if (this.left) {
      if (this.left.contains(value)) {
        return true;
      }
    }
  } else {
    // check if right exists and run recursion on this.right, return true if found
    if (this.right) {
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
  // if left exists, run recursion on this.left node
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  // if right exists run recursion on this.right node
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
    insert is O(log n)
    contains is O (log n)
    depthFirstLog is O (n)
 */
