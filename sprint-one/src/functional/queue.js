var Queue = function(){
  var someInstance = {};
  index = 0;
  remove =0; 

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[index + remove] = value;
    index++;
  };

  someInstance.dequeue = function(){
    if (index>0){
      var stored = storage[remove];
      delete storage[remove];
      remove++;
      index--;
      return stored;
    }
  };

  someInstance.size = function(){
    return index;
  };

  return someInstance;
};
