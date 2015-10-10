var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;

};

var setPrototype = {};

setPrototype.add = function(item){
  if (typeof item === 'string') {
    // console.log('this', item);
    this._storage.push(item);
    console.log('this.storage', this._storage);
    
    // console.log('store', this.set, "this", this );
    // return more;
  }
};

setPrototype.contains = function(item){
  //console.log("item", item);
  for (var i = 0; i < this._storage.length; i++) {
    if(this._storage[i] === item){
      return true;
    }

    //console.log("value", value, "this", this, "this.set", this.set);
    
    //console.log('contained', this.set, 'myitems', item);
  }
  return false;
 
};

  
setPrototype.remove = function(item){
   for(var i = 0; i < this._storage.length; i++){
      if(this._storage[i] === item)
        this._storage.splice(i, 1);
   }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
