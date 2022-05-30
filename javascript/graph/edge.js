'use strict';

class Edge {
    constructor(vertex,weight=0,node){
        
        this.vertex = vertex;
        this.weight = weight
        this.node=node;
    }
}

module.exports = Edge;