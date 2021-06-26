class MergeSort {
    /**
     * Merge sort repeatedly breaks down a list into several sublists
     * until each sublist consists of a single element and merging those 
     * sublists in a manner that results into a sorted list.
     * @param {Array} arr 
     * @returns {Array} sorted arr
     */

    static sort(arr){
        return this.#mergeSortHelper(arr)
    }

    static #mergeSortHelper(arr){
        if(arr.length < 2) return arr;
        let mid = Math.floor((arr.length) /2)
        let leftArr = arr.slice(0, mid)
        let rightArr = arr.slice(mid, arr.length)
        return this.#mergeHalves(this.#mergeSortHelper(leftArr), this.#mergeSortHelper(rightArr))
    }

    static #mergeHalves(left, right) {
        let leftIterator = 0, rightIterator = 0, sorted=[]
        while(leftIterator < left.length && rightIterator < right.length){
            if(left[leftIterator] >= right[rightIterator]){
                sorted.push(right[rightIterator])
                rightIterator++;
            } else {
                sorted.push(left[leftIterator])
                leftIterator++;
            }
        }

        sorted = [...sorted,...left.slice(leftIterator)]
        sorted = [...sorted,...right.slice(rightIterator)]
        
        return sorted;
    }
}
console.log('Original :', [10,5,7,33,6,1])
console.log('Sorted', MergeSort.sort([10,5,7,33,6,1]))