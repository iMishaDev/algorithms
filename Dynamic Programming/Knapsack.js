class Knapsack {
    get01KNapsack(wt, p, max){
        let table  = new Array(wt.length).fill(0).map(() => new Array(max + 1).fill(0))
        let result = new Array(wt.length).fill(0);

        for(let i = 0; i < table.length; i++){
            for(let w = 0; w < table[i].length; w++){
                if(i == 0 || w == 0)
                    table[i][w] = 0;
                else if(wt[i] <= w){
                    table[i][w] = Math.max(p[i] + table[i - 1][w - wt[i]], table[i - 1][w])
                } else table[i][w] = table[i - 1][w];
            }
        }

        let w = table.length - 1;
        let i = table[0].length - 1;
        while( w > 0 && i > 0){
            if(table[w][i] !== table[w - 1][i]){
                result[w] = 1;
                i -= wt[w]
            }
            w -= 1;
        }

        return result;
    }
}
let wt = [0, 2, 3, 4, 5];
let p = [0, 1, 2, 5, 6];
console.log(wt)
console.log(new knapsack().get01KNapsack(wt, p, 8))