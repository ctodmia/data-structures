var Stack = function() {
var stackMethods = {};
var index = 0;
var storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,

  stackMethods.push = function (value) {
    storage[index] = value;
    index++;
  }
  stackMethods.pop = function () {
    if (index>0){
      var stored = storage[index-1];
      delete storage[index-1];
      index--;
      return stored;
    }
  }

  stackMethods.size = function () {
    return index;
  };
  return stackMethods;
  // but try not not reference your old code in writing the new style.


};

var NewMethod = {};
NewMethod.push =   function(){
  
}

