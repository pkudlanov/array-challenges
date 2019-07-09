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

    const negatives = arr.filter(num => num < 0);
    if(negatives.length % 2){
        negatives.sort((a, b) => b - a);
        const negativeRemoveIndex = arr.findIndex(num => num === negatives[0]);
        arr.splice(negativeRemoveIndex, 1);
    }

    let product = 1;
    for(let i = 0; i < arr.length; i++) {
        const num = arr[i];
        product = num * product;
        // console.log(product);
    }
    return product;

    // return arr[0];
}

module.exports = { largestProduct };
