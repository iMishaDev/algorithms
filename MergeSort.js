class MergeSort {
    /**
     * Merge sort repeatedly breaks down a list into several sublists
     * until each sublist consists of a single element and merging those 
     * sublists in a manner that results into a sorted list.
     * @param {Array} arr 
     * @returns {Array} sorted arr
     */

    static sort(arr){
        this.#mergeSortHelper(arr)
        return arr
    }

    static #mergeSortHelper(arr){
        if(arr.length < 2) return;
        let mid = Math.floor((arr.length) /2)
        let leftArr = arr.slice(0, mid)
        let rightArr = arr.slice(mid, arr.length)
        this.#mergeSortHelper(leftArr)
        this.#mergeSortHelper(rightArr)
        this.#mergeHalves(leftArr, rightArr, arr)
    }

    static #mergeHalves(left, right, arr) {
        let leftIterator = 0, rightIterator = 0, k = 0
        while(leftIterator < left.length && rightIterator < right.length){
            if(left[leftIterator] >= right[rightIterator]){
                arr[k] = right[rightIterator]
                rightIterator++;
            } else {
                arr[k] = left[leftIterator]
                leftIterator++;
            }
            k++;
        }

        while(leftIterator < left.length){
            arr[k] = left[leftIterator]
            k++;
            leftIterator++;
        }

        while(rightIterator < right.length){
            arr[k] = right[rightIterator]
            k++;
            rightIterator++;
        }
    }
}
console.log('Original :', [10,5,7,33,6,1])
console.log('Sorted', MergeSort.sort([10,5,7,33,6,1]))