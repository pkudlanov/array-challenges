function largestProduct(arr){
    if(arr.length === 1){
        return arr[0];
    } else {
        arr.forEach(num => {
            if(num === 0){
                const zeroIndex = arr.findIndex(num => num === 0);
                arr.splice(zeroIndex, 1);
            }
        });
    }
    return arr[0];
}

module.exports = { largestProduct };
