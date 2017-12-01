var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // create a new node and assign value to the paramenter
    // if head is not referencing any value, then reference the new node, and reference  tail to the same node
    // else, have the existing tail node reference new node and then reassign tail to the new node
    var newNode = new Node (value);
    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    // create variable to hold head node value
    // reassign head to head.next node
    // return variable
    var headValue = list.head.value;
    list.head = list.head.next;
    return headValue;
  };

  list.contains = function(target) {
    // create a current node variable and assign to head
    // do while loop with condition as currentNode does not equal null
      // check if currentNode value is equal to target
      // else reassign currentNode to next
    // return false if not found
    var currentNode = list.head;
    
    do {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    } while (currentNode);
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