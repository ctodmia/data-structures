var Stack = function() {
 // Hey! Rewrite in the new style. Your code will wind up looking very similar,
 // but try not not reference your old code in writing the new style.
    
 //var obj = {};
 //storage.value = value;
  
  storage = {};

 storage.index = 0;
 _.extend(storage, stackMethods);

 /*storage.size = stackMethods.size; 
 storage.push = stackMethods.push; 
 storage.pop = stackMethods.pop;*/ 

 return storage;
};


var stackMethods = {

    push : function(value) {

    storage[this.index] = value;
    //console.log(this.value);
   this.index++;
    
    },
    pop : function() {
    if(this.index>0) {
    var temp = storage[this.index-1]
   delete storage[this.index-1];
   this.index--; 
   return temp;
        }
    },
    
    size : function () {
        return this.index;
    }
};