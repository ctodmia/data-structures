var Graph = function(){
    
   this.myGraph = [];
   this.edgesConnection = [];

};

Graph.prototype.addNode = function(node){
   this.myGraph.push(node);
};

Graph.prototype.contains = function(node){
    for(var i = 0; i < this.myGraph.length; i++){
        if(this.myGraph[i] === node){
            return true;
        }
    }
    return false;
};

Graph.prototype.removeNode = function(node){
    for(var i = 0; i < this.myGraph.length; i++){
        if(this.myGraph[i] === node){
            this.myGraph.splice(i, 1)
        }
    }
    return false;
};

Graph.prototype.hasEdge = function(fromNode, toNode){
    var edgeArray = [fromNode, toNode];
    for(var i = 0; i < this.edgesConnection.length; i++){
        if(this.edgesConnection[i][0] === edgeArray[0] && this.edgesConnection[i][1] === edgeArray[1]){
                
            return true;
            }
            if(this.edgesConnection[i][0] === edgeArray[1] && this.edgesConnection[i][1] === edgeArray[0]){
                return true;
            }
        }
    
   return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
    this.edgesConnection.push([fromNode, toNode]);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
    for(var i = 0; i < this.edgesConnection.length; i++){
        if(this.edgesConnection[i][0] === toNode && this.edgesConnection[i][1] === fromNode)
        this.edgesConnection.splice(i, 2);
    }
    return false;
};

Graph.prototype.forEachNode = function(cb){
    for(var i = 0; i < this.myGraph.length; i++){
        cb(this.myGraph[i]);
    }
};



/*
* Complexity: What is the time complexity of the above functions?
*/