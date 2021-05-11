class InsertionSort {

    static sort(arr){
        for(let i = 1; i < arr.length; i++){
            for(let j = i; j > -1; j--){
                if(arr[j] < arr[j-1]){
                    [arr[j], arr[j-1]] = this.#swap(arr[j], arr[j-1])
                }
            }
        }
        return arr
    }

    static #swap(element1, element2){
        let temp = element1
        element1 = element2
        element2 = temp
        return [ element1, element2 ]
    }
}

console.log('Original :', [10,5,7,33,6,1])
console.log('Sorted', InsertionSort.sort([10,5,7,33,6,1]))