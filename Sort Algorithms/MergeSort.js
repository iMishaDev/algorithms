class MergeSort {
    /**
     * Merge sort repeatedly breaks down a list into several sublists
     * until each sublist consists of a single element and merging those 
     * sublists in a manner that results into a sorted list.
     * @param {Array} arr 
     * @returns {Array} sorted arr
     */

    sort(arr){
        return this.#mergeSortHelper(arr)
    }

    #mergeSortHelper(arr){
        let length = arr.length;
        if(length < 2) return arr;
        let mid = Math.floor((length) /2)
        let leftArr = arr.slice(0, mid)
        let rightArr = arr.slice(mid, length)
        return this.#mergeHalves(this.#mergeSortHelper(leftArr), this.#mergeSortHelper(rightArr))
    }

    #mergeHalves(left, right) {
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





/**
 * more optimized solution. 
 * @param {*} arr 
 * @returns 
 */
    sort2(arr){
        return this.#sort_helper(arr, 0, arr.length -1);
    }

    #sort_helper(arr, start, end){
        if(start === end) return [arr[start]];
        let mid = Math.floor((start + end)/2);
        return this.#merge(this.#sort_helper(arr, start, mid), this.#sort_helper(arr, mid + 1, end));
    }

    #merge(arr1, arr2){
        let index = 0;
        let left = 0;
        let right = 0;
        let sorted = [];

        while(left < arr1.length && right < arr2.length){
            if(arr1[left] < arr2[right]){
                sorted[index] = arr1[left];
                left += 1;
            } else {
                sorted[index] = arr2[right];
                right += 1;
            }
            index += 1;
        }

        while(left < arr1.length){
            sorted[index] = arr1[left];
            index += 1;
            left += 1;
        }

        while(right < arr2.length){
            sorted[index] = arr2[right];
            index += 1;
            right += 1;
        }

        return sorted;
    }
}
console.log('Original :', [10,5,7,33,6,1])
console.log('Sorted', MergeSort.sort([10,5,7,33,6,1]))