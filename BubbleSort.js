class BubbleSort {

    /**
     * Bubble Sort is an easy-to-implement, stable sorting algorithm with
     * a time complexity of O(n²) in the average and worst cases
     * and O(n) in the best case.
     * @param {Array} arr 
     * @returns {Array} sorted arr
     */
    static sort(arr){
        let isSorted = false
        while(!isSorted){
            isSorted = true;
            for(let i=0; i < arr.length-1; i++){
                if(arr[i] > arr[i+1]){
                    [arr[i], arr[i+1]]  = this.#swap(arr[i], arr[i+1])
                    isSorted = false
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
console.log('Original: ', [10,5,7,33,6,1])
console.log('Sorted: ', BubbleSort.sort([10,5,7,33,6,1]))