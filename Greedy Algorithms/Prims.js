class Vertex {
    constructor(value){
        this.value = value;
    }
}

class Edge {
    constructor(source, dest, cost){
        this.source = source;
        this.dest = dest;
        this.cost = cost;

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
        this.adjacent.get(v1).push(new Edge(v1, v2, cost));
        this.adjacent.get(v2).push(new Edge(v2, v1, cost));
    }

    getMST(v){
        let mst = new Graph();
        let queue = [];
        let visited = new Set();

        mst.addVertex(v);
        visited.add(v)

        for (const edge of this.adjacent.get(v)){
            queue.push(edge);

            queue.sort((a, b) => a.cost - b.cost)
        }

        let minEdge = queue.shift();


        while(queue.length){
            
            while(queue.length && visited.has(minEdge.dest)){
                minEdge = queue.shift();
            }

            let next  = minEdge.dest;

            if(!visited.has(next)){
                mst.addVertex(next);
                mst.addEdge(minEdge.source, next, minEdge.cost)
                visited.add(next)
                
                for (const edge of this.adjacent.get(next)){
                    queue.push(edge);

                    queue.sort((a, b) => a.cost - b.cost)
                }
            }
        }

        return mst;
        
    }

    show(){
        for(const vertex of this.adjacent){ 
            console.log(`${vertex[0].value}: ${vertex[1].map((em) => em.dest.value)} `)
            
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