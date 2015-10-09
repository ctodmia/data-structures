var Stack = function() {
  this.storage = {};
  this.storage.index = 0;




  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};


Stack.prototype.push = function(value){
  this.storage[this.storage.index] = value;
  this.storage.index++;
}
Stack.prototype.pop = function(){
  if(this.storage.index>0){
  var temp = this.storage[this.storage.index -1];
  delete this.storage[this.storage.index -1];
  this.storage.index--;
  return temp;
}
    
  }
Stack.prototype.size =   function(){
  return this.storage.index;
}

var storage = new Stack();
//new Stack();