class QuickSort {

    static sort(arr){
        this.#sortHelper(arr, 0, arr.length - 1)
        return arr
    }

    static #partitioner(arr, start, end) {
        const pivotValue = arr[end];
        let pivotIndex = start;

        while(start < end){
            if(arr[start] < pivotValue){
                [arr[pivotIndex], arr[start]] = [arr[start], arr[pivotIndex]];
                pivotIndex ++;
            }
            start ++;
        }
        [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];

        return pivotIndex;
    }


    static #sortHelper(arr, start, end){
        if(end <= start ) return; 
        let i = this.#partitioner(arr, start, end);
        console.log(i)
        this.#sortHelper(arr, start, i - 1)
        this.#sortHelper(arr, i + 1, end)
    }

    // static #sorter(arr, start, end, pivot){
    //     console.log(arr.slice(start, end+1), pivot)

    //     while (start <= end){
            
    //         if(arr[end] > arr[pivot]){
    //             end--;
    //         }
    //         if(arr[start] < arr[pivot]){
    //             start++;
    //         }
    //         if(arr[start] >= arr[pivot] && arr[end] <= arr[pivot]){
    //             [arr[start], arr[end]] = [arr[end], arr[start]]
    //             start ++;
    //             end --;
    //         }
            
    //     }

    // }
}

console.log('Original :', [10,5,7,33,6,1])
console.log('Sorted', QuickSort.sort([10,5,7,33,6,1]))