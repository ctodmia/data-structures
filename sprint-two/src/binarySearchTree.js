var BinarySearchTree = function(value){
    Tree = Object.create(searchMethod);
    Tree.left = null
    Tree.right = null
    Tree.value = value;
    return Tree;

};
//insert , contains, depthLog
var searchMethod = {};

searchMethod.insert = function(value){
    var decide = function(node){
     if(value > node.value){
         if(node.right === null){
             node.right = BinarySearchTree(value);

     }else{
         decide(node.right);
     }

     }else{
         if(node.left === null){
             node.left = BinarySearchTree(value);
         }else{
            decide(node.left);
             
         }
     }
    }
    
    decide(this);
};

searchMethod.contains = function(val){
    var test = false;
    var find = function(node){
        if(node.value === val){
            test = true;
        }else{
            if(val > node.value){
                if(node.right !== null){
                    find(node.right);
                }
            }else{
                if(val < node.value){
                    if(node.left !== null){
                        find(node.left);
                    }
                }
            }
        }
    }
   find(this);



    return test;


};
searchMethod.depthFirstLog = function(cb){
    var nodeFunc = function(node){
        cb(node.value);
        if(node.left !== null){
            nodeFunc(node.left);
            
        };
        if(node.right !== null){
            nodeFunc(node.right);
            
        }
    }
    nodeFunc(this);
  
};


/*
* Complexity: What is the time complexity of the above functions?
*/