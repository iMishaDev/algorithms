class RadixSort {

    sort(arr){
        let buckets = new Map();
        let digitsCount = Math.max(...arr).toString().length;
        let divide = 1;
        let divide2 = 10;
        let iterator = 0;

        for(let i = 0; i < arr.length; i++){
            arr[i] = String(arr[i]).padStart(digitsCount, 0)
        }

        
        while(iterator < digitsCount){
            for(let i = 0; i < 10; i++){
                buckets.set(i, [])
            }
            
            for(let i = 0; i < arr.length; i++){
                let bktI = Math.floor((arr[i] % divide2) / divide);
                buckets.get(bktI).push(arr[i])
            }
            
            let temp = [];
            for(let i = 0; i<buckets.size; i++){
                temp = [...temp, ...buckets.get(i)];
            }
            
            buckets = new Map();
            divide2 *= 10
            divide *= 10;
            arr = temp;
            iterator += 1;
        }

        arr = arr.map((num) => Number(num));
        return arr;
    }
}

console.log('Original :', [ 15, 1, 321, 10, 802, 2, 123, 090, 109, 11])
console.log('Sorted', new RadixSort().sort([15, 1, 321, 10, 802, 2, 123, 090, 109, 11]))