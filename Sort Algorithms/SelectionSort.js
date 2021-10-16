class SelectionSort {

    static sort(arr){
        let currentMin = 0, sortInedx = 0

        while(sortInedx < arr.length){
            currentMin = sortInedx 
            for (let innerIterator = sortInedx; innerIterator < arr.length; innerIterator ++){
                if (arr[innerIterator] < arr[currentMin]) currentMin = innerIterator
            }
            
            [arr[sortInedx], arr[currentMin]] = [arr[currentMin], arr[sortInedx]] 
            sortInedx ++;
        }
        return arr
    }
}

console.log('Original :', [10,5,7,33,6,1])
console.log('Sorted', SelectionSort.sort([10,5,7,33,6,1]))