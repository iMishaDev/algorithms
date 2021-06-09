class HeapSort {

    constructor(arr=[]){
        this.heap = arr;
        this.tracker = this.heap.length - 1
    }

    sort(){
        let index = this.heap.length
        while(index){
            this.poll()
            index -= 1
        }
        return this.heap
    }

    hasLeftChild(index){
        return this.heap[(index * 2) + 1]
    }

    hasRightChild(index){
        return this.heap[(index * 2) + 2]
    }

    getLeftChildIndex(index){
        return (index * 2) + 1
    }

    getRightChildIndex(index){
        return (index * 2) + 2
    }


    getLeftChild(index){
        return this.heap[(index * 2) + 1]
    }

    getRightChild(index){
        return this.heap[(index * 2) + 2]
    }



    poll(){
        [this.heap[0], this.heap[this.tracker]] =
                [this.heap[this.tracker], this.heap[0]]
        this.tracker -= 1
        this.#heapifyDown()

    }

    #heapifyDown(){
        let index = 0, largest = 0

        while(this.hasLeftChild(index) && index < this.tracker ){
            largest = this.getLeftChildIndex(index);
            if(this.hasRightChild(index) && this.getRightChild(index) > this.getLeftChild(index)){
                largest = this.getRightChildIndex(index)
            }
            if(largest > this.tracker) return
            if(this.heap[index] > this.heap[largest]) return
            else {
                
                [this.heap[largest], this.heap[index]] =
                [this.heap[index], this.heap[largest]]
                index = largest
            }
        }

    }
}


let heapSort  = new HeapSort([22,17,19,12,15,11,7,6,9,10,5]);

console.log('Original :', [22,17,19,12,15,11,7,6,9,10,5])
console.log('Sorted', heapSort.sort())