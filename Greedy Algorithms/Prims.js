class Vertex {
    constructor(value){
        this.value = value;
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
        this.adjacent.get(v2).push(new Edge(cost, v1));
    }

    getMST(v){
        let mst = new Graph();
        let queue = [];
        let visited = new Set();

        mst.addVertex(v);
        visited.add(v)

        for (const edge of this.adjacent.get(v)){
            queue.push([v, edge]);

            queue.sort((a, b) => a[1].cost - b[1].cost)
        }

        let [source, minEdge] = queue.shift();


        while(queue.length){
            
            while(queue.length && visited.has(minEdge.vertex)){
                [source, minEdge] = queue.shift();
            }

            let next  = minEdge.vertex;

            if(!visited.has(next)){
                mst.addVertex(next);
                mst.addEdge(source, next, minEdge.cost)
                visited.add(next)
                
                for (const edge of this.adjacent.get(next)){
                    queue.push([next, edge]);

                    queue.sort((a, b) => a[1].cost - b[1].cost)
                }
            }
            source = next;
        }

        return mst;
        
    }

    show(){
        for(const vertex of this.adjacent){ 
            console.log(`${vertex[0].value}: ${vertex[1].map((em) => em.vertex.value)} `)
            
        }
    }
}

let a = new Vertex('A');
let b = new Vertex('B');
let c = new Vertex('C');
let d = new Vertex('D');
let e = new Vertex('E');
let f = new Vertex('F');
let g = new Vertex('G');


let graph = new Graph();

graph.addVertex(a)
graph.addVertex(b)
graph.addVertex(c)
graph.addVertex(d)
graph.addVertex(e)
graph.addVertex(f)
graph.addVertex(g)

graph.addEdge(a, c, 100)
graph.addEdge(a, b, 3)
graph.addEdge(a, d, 4)

graph.addEdge(c, d, 3)

graph.addEdge(d, e, 8)


graph.addEdge(e, f, 10)
graph.addEdge(b, g, 9)

console.log(graph.getMST(a).show())