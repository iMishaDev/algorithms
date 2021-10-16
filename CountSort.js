class CountSort {
    sort(arr){
        let count = new Array(Math.max(...arr) + 1).fill(0);
        let sorted = new Array(arr.length);
        let position = -1;
        for(const number of arr){
            count[number] += 1;
        }

        for(let i = 1; i < count.length; i++){
            count[i] = count[i] + count[i-1]
        }

        for(let i = arr.length - 1; i >= 0; i--){
            count[arr[i]] -= 1;
            position = count[arr[i]];
            sorted[position] = arr[i];
        }
        console.log(sorted)
    }
}

console.log('Original :', [2,1,1,0,2,5,4,0,2,8,7,7,9,2,0,1,9])
console.log('Sorted', new CountSort().sort([2,1,1,0,2,5,4,0,2,8,7,7,9,2,0,1,9]))