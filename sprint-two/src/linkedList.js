var LinkedList = function(){

  var list = {};
  list.head = null;
  list.tail = null;
  
  list.addToTail = function(value){
    //if new nodes are added to list, then replace tail with new nodes. 
    // node.next === list.tail;
    //at list.tail, node.next should = list.tail
    var newNode = new Node(value);
      
    if(this.head === null){
      this.head = newNode;
      //console.log("this is my head", this.head);
      this.tail = newNode;
    }else {
      var prev = this.tail;
       this.tail = newNode;
      prev.next = this.tail;

       

    
    }
    //list.tail.value=value;
  
    
  };

  list.removeHead = function(){
    //should remove the head from the list when the removeHead is called.
    // node.next = node.value;
    //list.head.next = list.head.value;
    //list.removeHead();
    
     var next = this.head.next;
      //console.log(this.head.value);
     var current = this.head.value;
     var remove = this.head.value;
     //console.log("this is before", this.head.value);
     this.head = next;
    return remove;
    //current = prev;
    
    

    };
 
  list.contains = function(target){
    if(this.head.value === target || this.tail.value === target) {
      return true;
    } else {
      return false;
    }
    //console.log('check this', this.head, 'check tail', this.tail);
        //go through the list and if the value was add, should return true,
    //if the value was removed, should return false. 
    

       

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
 //the time complexity of the above function is constant time. 
