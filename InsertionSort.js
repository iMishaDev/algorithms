class InsertionSort {

    static sort(arr){
        for(let i = 1; i < arr.length; i++){
            for(let j = i; j > -1; j--){
                if(arr[j] < arr[j-1]){
                    [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
                }
            }
        }
        return arr
    }
}

console.log('Original :', [10,5,7,33,6,1])
console.log('Sorted', InsertionSort.sort([10,5,7,33,6,1]))