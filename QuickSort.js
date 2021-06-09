class QuickSort {

    static sort(arr){
        this.#sortHelper(arr, 0, arr.length - 1)
        return arr
    }

    static #sortHelper(arr, start, end){
        if(end <= start) return; 
        let mid = Math.floor((start + end)/2)
        this.#sortHelper(arr, start, mid)
        this.#sortHelper(arr, mid + 1, end)
        this.#sorter(arr, start, end, mid)
    }

    static #sorter(arr, start, end, pivot){
        while (start <= end){
            if(arr[start] >= arr[pivot] && arr[end] >= arr[pivot]){
                end--;
            }
            if(arr[end] <= arr[pivot] && arr[start] <= arr[pivot]){
                start++;
            }
            if(arr[start] > arr[pivot] && arr[end] < arr[pivot]){
                [arr[start], arr[end]] = [arr[end], arr[start]]
                start ++;
                end --;
            }
        }
    }
}

console.log('Original :', [10,5,7,33,6,1])
console.log('Sorted', QuickSort.sort([10,5,7,33,6,1]))