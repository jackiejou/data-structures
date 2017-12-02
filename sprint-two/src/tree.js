var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // create a new instance of a tree and push it into the children array of the current node
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  // check if current node value is equal to the target
  if (this.value === target) {
    return true;
  }
  // check if the children property exists
    // loop through each child and recursively call this function
  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }    
  }
  // return false if not found
  return false;
};

// new function for new test below

treeMethods.removeChild = function(value) {
  // check if children property exists
    // loop through each child and check if values match
        // remove if found
    // else recursively call this function
  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].value === value) {
        this.children.splice(i, 1);
      } else {
        this.children[i].removeChild(value);
      }
    }    
  } 
};

/*
  Complexity: What is the time complexity of the above functions? 
    addChild is O(1)
    contains is O(n)
*/
