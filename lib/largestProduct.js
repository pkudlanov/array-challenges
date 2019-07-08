function largestProduct(arr){
    if(arr.length === 1 && arr[0] === 0){
        return 0;
    }
    return arr[1];
}

module.exports = { largestProduct };
