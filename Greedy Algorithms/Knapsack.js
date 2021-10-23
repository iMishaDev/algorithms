/**
 * The knapsack problem is a problem in combinatorial optimization: 
 * Given a set of items, each with a weight and a value, 
 * determine the number of each item to include in a collection so that the total weight is 
 * less than or equal to a given limit and the total value is as large as possible.
 */

class CObject {
    constructor(weight, profit){
        this.weight = weight;
        this.profit = profit;
    }
}
class knapsack {

    /**
     * Greedy Approach (divisible objects)
     * @param {Integer} max 
     * @param {ARRat} objects 
     * @returns 
     */
    getDivisibleKnapsack(max, objects){
        let profits = [];
        let bag = [];
        let bagWeight = 0;
        let totalProfit = 0;

        for(let i = 0; i < objects.length; i++){
            profits[i] = [objects[i], objects[i].profit / objects[i].weight]
        }

        profits = profits.sort((a, b) => a[1] - b[1]);
        while(bagWeight !== max){
            let [obj, profit] = profits.pop()
            if(bagWeight + obj.weight <= max){
                bagWeight += obj.weight;
                totalProfit += obj.profit;
                bag.push(obj)
            } else {
                if(bagWeight < max){
                    let left = max - bagWeight;

                    bagWeight += obj.weight / left;
                    totalProfit += obj.profit / left;
                }
                break;
            }
        }
        return  totalProfit
    }

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
let objects = [
    new CObject(4, 18),
    new CObject(2, 10),
    new CObject(3, 5),
    new CObject(5, 15),
    new CObject(7, 7),
    new CObject(1, 6),
    new CObject(1, 3),
]

let wt = [0, 2, 3, 4, 5];
let p = [0, 1, 2, 5, 6];
console.log(new knapsack().getDivisibleKnapsack(15, objects))
console.log(wt)
console.log(new knapsack().get01KNapsack(wt, p, 8))