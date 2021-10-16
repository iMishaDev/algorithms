/**
 * 
Problem: You have to make a change of an amount using the smallest possible number of coins.
Amount: $18

Available coins are
$5 coin
$2 coin
$1 coin
There is no limit to the number of each coin you can use
 */
class Solution {
    constructor(coins){
        this.coins = coins.sort();
    }


    get_large(i){
        let index = (this.coins.length - 1) - i;
        return this.coins[index]
    }


    get_change_iter(amount){
        let change = [];
        let sum = 0;
        let i = 0;
        while(sum !== amount){
            if(sum + this.get_large(i) <= amount){
                sum += this.get_large(i)
                change.push(this.get_large(i))
            }
            else i += 1;
        }

        return change;
    }


    get_change_rec(i, sum, amount){
        if(sum === amount)
            return [];
        if(this.get_large(i) + sum <= amount)
            return [this.get_large(i) , ...this.get_change_rec(i, sum + this.get_large(i), amount)];
        else return this.get_change_rec(i + 1, sum, amount);
    }
}
console.log(new Solution([5,2,1]).get_change_iter(18))
console.log(new Solution([5,2,1]).get_change_rec(0, 0, 18))