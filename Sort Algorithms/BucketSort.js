class BucketSort {

    sortDecimals(arr){
        let buckets = new Map()
        let index = 0;
        let sorted = [];

        for(let i = 0; i < 10; i++){
            buckets.set(i, [])
        }
        
        for(let i = 0; i < arr.length; i++){
            index = Math.floor(arr[i] * 10);
            buckets.get(index).push(arr[i])
        }

        for(let i = 0; i < buckets.size; i++){
            buckets.get(index).sort()
        }
        
        for(let i = 0; i < buckets.size; i++){
            sorted = [...sorted, ...buckets.get(i)]
        }

        return sorted;
    }

    sortIntegers(arr){
        let buckets = new Map()
        let index = 0;
        let sorted = [];

        for(let i = 0; i < 10; i++){
            buckets.set(i, [])
        }
        
        for(let i = 0; i < arr.length; i++){
            index = Math.floor(arr[i] / 10);
            buckets.get(index).push(arr[i])
        }

        for(let i = 0; i < buckets.size; i++){
            buckets.get(index).sort()
        }
        
        for(let i = 0; i < buckets.size; i++){
            sorted = [...sorted, ...buckets.get(i)]
        }

        return sorted;
    }
}

console.log('Original :', [.42, .32, .33, .52, .37, .47, .51])
console.log('Sorted', new BucketSort().sortDecimals([.42, .32, .33, .52, .37, .47, .51]))


console.log('Original :', [ 15, 1, 32, 10, 80, 2, 12, 90, 99, 11])
console.log('Sorted', new BucketSort().sortIntegers([  15, 1, 32, 10, 80, 2, 12, 90, 99, 11]))