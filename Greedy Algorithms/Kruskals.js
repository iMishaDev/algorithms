class Vertex {
    constructor(value){
        this.value = value;
    }
}

class Edge {
    constructor(cost, source, destination){
        this.source = source;
        this.destination = destination;
        this.cost = cost;
    }
}


class Graph {

    constructor(n){
        this.adjacent = new Map();
        this.numOfVertices = n;
        this.parents = new Array(this.numOfVertices + 1).fill(-1);
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
        return i;
    }

    union(v1, v2){
        const v1_parent = this.find(v1.value);
        const v2_parent = this.find(v2.value);

        if(this.parents[v1_parent] < this.parents[v2_parent]){
            this.parents[v1_parent] -=  -1 * this.parents[v2_parent];
            this.parents[v2_parent] = v1_parent;
        } else if(this.parents[v2_parent] < this.parents[v1_parent]){
            this.parents[v2_parent] -=  -1 * this.parents[v1_parent];
            this.parents[v1_parent] = v2_parent;

        } else {
            this.parents[v1_parent] -= -1 * this.parents[v2_parent];
            this.parents[v2_parent] = v1_parent;
        }
    }

    getMST(){
        let queue = [];
        let cycles = 0;
        for(const vertex of this.adjacent){ 
            vertex[1].map((edge) => queue.push(edge))
        }

        queue.sort((a, b) => b.cost - a.cost)
        while(queue.length){
            let {source, destination}  = queue.pop();
            if(this.find(source.value) === this.find(destination.value)){
                cycles += 1
                
            }
            else this.union(source, destination);
        }
        return this.parents;
    }
}

let vertex1 = new Vertex(1);
let vertex2 = new Vertex(2);
let vertex3 = new Vertex(3);
let vertex4 = new Vertex(4);
let vertex5 = new Vertex(5);
let vertex6 = new Vertex(6);
let vertex7 = new Vertex(7);
let vertex8 = new Vertex(8);

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