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


    get_change_iter(amount){
        let change = [];
        let sum = 0;
        
        while(sum !== amount){
            let coin = this.coins.pop();
            if(sum + coin <= amount){
                sum += coin
                change.push(coin)
                this.coins.push(coin)
            }
        }

        return change;
    }


    get_change_rec(sum, amount, coins=this.coins){
        if(sum === amount)
            return [];
        let coin = coins.pop();
        if(coin + sum <= amount){
            coins.push(coin)
            return [coin , ...this.get_change_rec( sum + coin, amount, coins)];
        }
        else return this.get_change_rec(sum, amount, coins);
    }
}
console.log(new Solution([5,2,1]).get_change_iter(18))
console.log(new Solution([5,2,1]).get_change_rec(0, 18))