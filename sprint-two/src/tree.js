var Tree = function(value){
 var newTree = {};
  newTree.value = value;
 // newTree.addChild = treeMethods.addChild;
 // newTree.contains = treeMethods.contains;
 _.extend(newTree, treeMethods);
 // your code here
 newTree.children = [];  // fix me

 return newTree;
};



var treeMethods = {};

treeMethods.addChild = function(value){
    this.value = value // Update the value 
    this.children.push(Tree(value));
};
 
treeMethods.contains = function(target){
    for(var i = 0; i < this.children.length; i++){
      for(var key in this.children[i]){
        if(this.children[i][key]=== target){
      return true;
        } 

      }
    }

    return false;
};




       
    

/*
* Complexity: What is the time complexity of the above functions?
*/