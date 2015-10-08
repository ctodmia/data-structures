var Stack = function() {
 // Hey! Rewrite in the new style. Your code will wind up looking very similar,
 // but try not not reference your old code in writing the new style.
    
 //var obj = {};
 //storage.value = value;
  
  storage = Object.create(stackMethods);

 storage.index = 0;
 

 /*storage.size = stackMethods.size; 
 storage.push = stackMethods.push; 
 storage.pop = stackMethods.pop;*/ 

 return storage;
};


var stackMethods = {};

    stackMethods.push : function(value) {

    storage[this.index] = value;
    //console.log(this.value);
   this.index++;
    
    },
    stackMethods.pop : function() {
    if(this.index>0) {
    var temp = storage[this.index-1]
   delete storage[this.index-1];
   this.index--; 
   return temp;
        }
    },
    
    stackMethods.size : function () {
        return this.index;
    }






/*var Stack = function() {
  storage = Object.create(stackMethods);
  storage.index = 0;
  return storage;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {}; //Stack.stackMethods{};
  stackMethods.pop = function(){
    if(this.index > 0){
      var temp = storage[this.index -1];
      delete storage[this.index -1];
      this.index--;
      return temp;
    }

    
   
  };
  stackMethods.push = function(value){
    storage[this.index] = value;
    this.index++;    

  }
  stackMethods.size = function(){
    return this.index;
  }
*/



