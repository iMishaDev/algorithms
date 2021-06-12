class BucketSort {

    static sort(arr){

        let buckets = new Map()
        arr.forEach((element) => {
            let index = Math.floor(element)
            if(!buckets.get(index))
                buckets.set(index, [element])
            else buckets.set(index, [...buckets.get(index),element])
        });
        return [...buckets.values()].sort().flat()
    }
}

console.log('Original :', [ 0.49 , 5.9 , 3.4 , 1.11 , 4.5 , 6.6 , 2.0])
console.log('Sorted', BucketSort.sort([0.49 ,  0.5, 5.9 , 3.4 , 1.11 , 4.5 , 6.6 , 2.0]))