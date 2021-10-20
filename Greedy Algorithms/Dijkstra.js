class Vertex {
    constructor(value, distance=Number.POSITIVE_INFINITY){
        this.value = value;
        this.distance = distance;
    }
}

class Edge {
    constructor(cost, vertex){
        this.cost = cost;
        this.vertex = vertex;
    }
}


class Graph {

    constructor(){
        this.adjacent = new Map();
    }


    addVertex(v){
        this.adjacent.set(v, []);
    }

    addEdge(v1, v2, cost){ 
        this.adjacent.get(v1).push(new Edge(cost, v2));
    }

    getShortestPath(source, destination){
        source.distance = 0;
        let stack = [source];

        while(stack.length){
            let vertex = stack.pop();
            console.log(vertex)

            let min = null;
            for (const edge of this.adjacent.get(vertex)){
                edge.vertex.distance = vertex.distance + edge.cost;
                if((min && min.vertex.distance > edge.vertex.distance) || !min){
                    min = edge;
                }
            }
            min && stack.push(min.vertex)
        }
    }
}

let vertex1 = new Vertex(1);
let vertex2 = new Vertex(2);
let vertex3 = new Vertex(3);
let vertex4 = new Vertex(4);
let vertex5 = new Vertex(5);
let vertex6 = new Vertex(6);

let graph = new Graph();

graph.addVertex(vertex1)
graph.addVertex(vertex2)
graph.addVertex(vertex3)
graph.addVertex(vertex4)
graph.addVertex(vertex5)
graph.addVertex(vertex6)

graph.addEdge(vertex1, vertex2, 2)
graph.addEdge(vertex1, vertex3, 4)
graph.addEdge(vertex2, vertex3, 1)
graph.addEdge(vertex2, vertex4, 7)
graph.addEdge(vertex3, vertex5, 3)
graph.addEdge(vertex5, vertex4, 2)
graph.addEdge(vertex5, vertex6, 5)
graph.addEdge(vertex4, vertex6, 1)

console.log(graph.getShortestPath(vertex1, vertex6 ))