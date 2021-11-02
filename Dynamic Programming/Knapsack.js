class Solution {
    get01KNapsack(wt, p, max){
        let table  = new Array(wt.length).fill(0).map(() => new Array(max + 1).fill(0))
        let result = new Array(wt.length).fill(0);
        table[0][0] = 0;
        for(let coming_weight = 1; coming_weight < table.length; coming_weight++){
            for(let w = 1; w < table[coming_weight].length; w++){
                if(wt[coming_weight] <= w){
                    table[coming_weight][w] = Math.max(p[coming_weight] + table[coming_weight - 1][w - wt[coming_weight]], table[coming_weight - 1][w])
                } else table[coming_weight][w] = table[coming_weight - 1][w];
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
console.log(new Solution().get01KNapsack(wt, p, 8))