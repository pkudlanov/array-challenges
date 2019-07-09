function findMissingNum(arr, upperBound, lowerBound){
    arr.sort((a, b) => a - b);
    return arr[0];
}

module.exports = { findMissingNum };
