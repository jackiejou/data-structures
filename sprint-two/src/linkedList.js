var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // create a new node and assign value to the paramenter
    var newNode = new Node (value);
    // if head is not referencing any value,
    if (!list.head) {
      // then reference the new node
      list.head = newNode;
      // reference tail to the same node
      list.tail = newNode;
    } else {
      // else, have the existing tail node reference new node 
      list.tail.next = newNode;
      // and reassign tail to the new node
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    // create variable to hold head node value
    var headValue = list.head.value;
    // reassign head to head.next node
    list.head = list.head.next;
    // return variable
    return headValue;
  };

  list.contains = function(target) {
    // create a current node variable and assign to head
    var currentNode = list.head;
    // do while loop with condition as currentNode does not equal null    
    do {
      // check if currentNode value is equal to target
      if (currentNode.value === target) {
        return true;
      }
      // else reassign currentNode to next
      currentNode = currentNode.next;
    } while (currentNode);
    // return false if not found
    return false;
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