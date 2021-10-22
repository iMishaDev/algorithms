
class TravelingSalesperson {
    constructor(graph){
        this.graph = graph;
        this.min =  Number.MAX_VALUE;
        this.visited = {};
        this.visited[0] = 1;
    }

    get(){
        return this.get_helper(0, 4, 1, 0);
    }


    get_helper(k, n, count, cost){
        if (count == n && this.graph[k][0]) {
            this.min = Math.min(this.min, cost + this.graph[k][0]);
            return;
        }
        
        for (var i = 0; i < n; i++) {
            if (!this.visited[i] && this.graph[k][i]) {
    
                this.visited[i] = 1;
                this.get_helper(i, n, count + 1, cost + this.graph[k][i]);
    
                this.visited[i] = 0;
            }
        }
        return this.min;
    }
}

let graph = [
    [0, 10, 15, 20],
    [5, 0, 9, 10],
    [6, 13, 0, 12],
    [8, 8, 9, 0]
]
console.log(new TravelingSalesperson(graph).get())
