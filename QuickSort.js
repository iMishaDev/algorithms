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
        let pivotIndex = this.#partitioner(arr, start, end);

        this.#sortHelper(arr, start, pivotIndex - 1)
        this.#sortHelper(arr, pivotIndex + 1, end)
    }

}

console.log('Original :', [33,5,7,1,6,10])
console.log('Sorted', QuickSort.sort([33,5,7,1,6,10]))