var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var test;
  storage = Object.create(queueMethods);
  storage.index = 0;
  storage.reduce = 0;
  return storage;
};

var queueMethods = {};
console.log('hi');

queueMethods.size = function(){
  return this.index;
}
queueMethods.dequeue = function(){
  if(this.index>0){
    var temp = storage[this.reduce];
    delete storage[this.reduce];
    this.reduce++;
    this.index--;
    return temp;
  }

}
queueMethods.enqueue = function(value){
  storage[this.index + this.reduce] = value;
  this.index++;
}
