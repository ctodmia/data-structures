var Queue = function() {
 // Hey! Rewrite in the new style. Your code will wind up looking very similar,
 // but try not not reference your old code in writing the new style.
    
 //var obj = {};
 //storage.value = value;
  
  storage = {};

 storage.index = 0;
 storage.reduce = 0;
 _.extend(storage, queueMethods);

 /*storage.size = queueMethods.size; 
 storage.push = queueMethods.push; 
 storage.pop = queueMethods.pop;*/ 

 return storage;
};


var queueMethods = {

    enqueue : function(value) {

    storage[this.index + this.reduce] = value;
    //console.log(this.value);
   this.index++;
    
    },
    dequeue : function() {
    if(this.index>0) {
    var temp = storage[this.reduce]
   delete storage[this.reduce];
   this.reduce++;
   this.index--; 
   return temp;
        }
    },
    
    size : function () {
        return this.index;
    }
};