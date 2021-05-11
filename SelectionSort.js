class SelectionSort {

    static sort(arr){
        let currentMin = 1000, sortInedx = 0

        for(let outerIterator = 0; outerIterator < arr.length; outerIterator++){
            for (let innerIterator = outerIterator; innerIterator < arr.length; innerIterator ++){
                if (arr[innerIterator] < currentMin) currentMin = innerIterator
            }
            [arr[sortInedx],arr[currentMin]] =  this.#swap(arr[sortInedx], arr[currentMin])
            sortInedx ++;
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

console.log('Original :', [10,5,7,33,6,1])
console.log('Sorted', SelectionSort.sort([10,5,7,33,6,1]))