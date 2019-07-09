function findMissingNum(arr, upperBound, lowerBound){
    arr.sort((a, b) => a - b);
    let j = lowerBound;
    for(let i = 0; i < upperBound; i++) {
        const num = arr[i];
        if(!(num === j)){
            return j;
        } j++;
    }
}

module.exports = { findMissingNum };
