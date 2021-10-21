class Vertex {
    constructor(value){
        this.value = value;
    }
}

class Edge {
    constructor(cost, source, destination){
        this.cost = cost;
        this.source = source;
        this.destination = destination;
    }
}


class Graph {

    constructor(n){
        this.adjacent = new Map();
        this.numOfVertices = n;
    }


    addVertex(v){
        this.adjacent.set(v, []);
    }

    addEdge(v1, v2, cost){ 
        this.adjacent.get(v1).push(new Edge(cost, v1, v2));
    }

    find(i){
        if(this.parents[i] > 0)
            return this.find(this.parents[i])
        return this.parents[i];
    }

    union(edge1, edge2){
        this.find(edge1)
    }

    getMST(){
        let parents = new Array(this.numOfVertices).fill(-1);
        let queue = [];

        for(const vertex of this.adjacent){ 
            vertex[1].map((edge) => queue.push(edge))
        }

        queue.sort((a, b) => b.cost - a.cost)
        while(queue.length){
            let edge = queue.pop();
            console.log(edge)
        }
    }
}

let vertex1 = new Vertex('1');
let vertex2 = new Vertex('2');
let vertex3 = new Vertex('3');
let vertex4 = new Vertex('4');
let vertex5 = new Vertex('5');
let vertex6 = new Vertex('6');
let vertex7 = new Vertex('7');
let vertex8 = new Vertex('8');

let graph = new Graph(8);

graph.addVertex(vertex1)
graph.addVertex(vertex2)
graph.addVertex(vertex3)
graph.addVertex(vertex4)
graph.addVertex(vertex5)
graph.addVertex(vertex6)
graph.addVertex(vertex7)
graph.addVertex(vertex8)

graph.addEdge(vertex1, vertex2, 1)
graph.addEdge(vertex3, vertex4, 2)
graph.addEdge(vertex5, vertex6, 3)
graph.addEdge(vertex7, vertex8, 4)
graph.addEdge(vertex2, vertex4, 5)
graph.addEdge(vertex2, vertex5, 6)
graph.addEdge(vertex1, vertex3, 7)
graph.addEdge(vertex6, vertex8, 8)
graph.addEdge(vertex7, vertex5, 9)

console.log(graph.getMST())