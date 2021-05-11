class BucketSort {

    static sort(arr){
        let buckets = [], n = arr.length
        arr.forEach((element) => {
            let index = Math.floor(n*element)
            if(buckets[index])
                buckets[index].push(element)
            else buckets[index] = [element]
        });
        return buckets.flat()
    }
}

console.log('Original :', [ 0.49 , 5.9 , 3.4 , 1.11 , 4.5 , 6.6 , 2.0])
console.log('Sorted', BucketSort.sort([0.49 , 5.9 , 3.4 , 1.11 , 4.5 , 6.6 , 2.0]))