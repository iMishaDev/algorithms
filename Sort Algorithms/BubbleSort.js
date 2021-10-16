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
                    [arr[i], arr[i+1]]  = [arr[i+1], arr[i]]
                    isSorted = false
                }
        }
        }
        return arr
    }
}
console.log('Original: ', [10,5,7,33,6,1])
console.log('Sorted: ', BubbleSort.sort([10,5,7,33,6,1]))