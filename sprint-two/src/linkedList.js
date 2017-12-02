var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node (value);
    // if head is not referencing any value, reference head and tail to the new node
    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      // else, have the existing tail node reference new node and reassign tail to the new node
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    // create variable to hold head node value
    // reassign head to the next node
    var headValue = list.head.value;
    list.head = list.head.next;
    return headValue;
  };

  list.contains = function(target) {
    // start at head node for looping
    var currentNode = list.head;

    // do while loop with condition currentNode does not equal null    
    do {
      // return true if currentNode value is equal to target
      if (currentNode.value === target) {
        return true;
      }
      // else reassign currentNode to next
      currentNode = currentNode.next;
    } while (currentNode);

    // target was not found
    return false;
  };
  
  // new function for new test

  list.addToBody = function(valueToAdd, valueToAddOnto) {
    var currentNode = list.head;
    // do while loop with condition as currentNode does not equal null    
    do {
      // check if currentNode value is equal to valuetoadd
        // set the new node to reference the node after the current node
        // update currentnode.next reference the new node
      if (currentNode.value === valueToAddOnto) {
        var newNode = new Node(valueToAdd);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      }
      // else reassign currentNode to next
      currentNode = currentNode.next;
    } while (currentNode);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
  Complexity: What is the time complexity of the above functions? 
    addToTail is O(1)
    removeHead is O(1)
    contains is O(n)
 */