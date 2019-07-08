function multiplesN(num){
    const arr = [];
    for(let i = 1; i * num <= 100; i++) {
        arr.push(i * num);
    }
    return arr;
}

module.exports = { multiplesN };
