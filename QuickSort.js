class QuickSort {

    static sortRecursive(arr){
        this.#sortHelper(arr, 0, arr.length - 1)
        return arr
    }

    static sortIterator(arr){
        let stack = [];

        stack.push(0);
        stack.push(arr.length-1);
        while(stack[stack.length -1 ] >= 0){
            const end = stack.pop();
            const start = stack.pop();


            let pivotIndex = this.#partitioner(arr, start, end);
            
            if(pivotIndex - 1  >  start){
                stack.push(start);
                stack.push(pivotIndex - 1);
            }

            if(pivotIndex + 1  <  end){
                stack.push(pivotIndex + 1);
                stack.push(end);
            }

        }
        return arr;
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
console.log('Sorted', QuickSort.sortIterator([33,5,7,1,6,10]))