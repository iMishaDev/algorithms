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


console.log(new knapsack().getDivisibleKnapsack(15, objects))
