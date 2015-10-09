var LinkedList = function(){

  var list = {};
  list.head = null;
  list.tail = null;
  
  list.addToTail = function(value){
    //if new nodes are added to list, then replace tail with new nodes. 
    // node.next === list.tail;
    //at list.tail, node.next should = list.tail
    if(list.head === null){
      list.head=Node();
      list.tail=list.head;
    }else {
      //list.tail.next=Node();
      list.tail=list.head;
    }
    list.tail.value=value;
  
    
  };

  list.removeHead = function(value){
    //should remove the head from the list when the removeHead is called.
    // node.next = node.value;
    //list.head.next = list.head.value;
    //list.removeHead();
    if (list.head.value){
      list.head=Node();
      list.head.value = list.head.value;
    }
  };

  list.contains = function(target){
  };

  return list;
};

var Node = function(value){
  var node = {};
  node.value = value;
  //value is the data held in the node 
  node.next = null;
  //next is a referece to teh next node in the list

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
