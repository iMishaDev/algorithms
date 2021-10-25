class MultiStage {
    getShortestPath(graph, stages, vertices){
        let distance = new Array(vertices+1).fill(0);
        let paths = new Array(stages).fill(0);
        let cost = new Array(vertices+1).fill(0);
        let min = Number.MAX_VALUE;

        cost[vertices] = 0;

        for(let i = vertices - 1; i >= 1; i--){
            min = Number.MAX_VALUE;
            for(let k = i + 1 ; k <= vertices; k++){
                if(graph[i][k] !== 0 && graph[i][k] + cost[k] < min){
                    min =  graph[i][k] + cost[k];
                    distance[i] = k;
                }
            }
            cost[i] = min;
        }
        paths[1] = 1;
        paths[stages] = vertices;
        for(let i = 2 ; i < stages; i++){
            paths[i] = distance[paths[i-1]];
        }

        return paths;
    }
}

let graph = [
    [0,0,0,0,0,0,0,0,0], //0
    [0,0,2,1,3,0,0,0,0], //1
    [0,0,0,0,0,2,3,0,0], //2
    [0,0,0,0,0,6,7,0,0], //3
    [0,0,0,0,0,6,8,9,0], //4
    [0,0,0,0,0,0,0,0,6], //5
    [0,0,0,0,0,0,0,0,4], //6
    [0,0,0,0,0,0,0,0,5], //7
    [0,0,0,0,0,0,0,0,0], //8
]

console.log(new MultiStage().getShortestPath(graph, 4, 8))