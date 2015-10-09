var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.storage.index = 0;
  this.storage.reduce = 0;

};


Queue.prototype.enqueue = function(value){
  this.storage[this.storage.index + this.storage.reduce] = value;
  this.storage.index++;
}
Queue.prototype.dequeue = function(){
  if(this.storage.index>0){
  var temp = this.storage[this.storage.reduce];
  delete this.storage[this.storage.reduce];
  this.storage.reduce++;
  this.storage.index--;
  return temp;
}
    
  }
Queue.prototype.size =   function(){
  return this.storage.index;
}

var queue = new Queue();