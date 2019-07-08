const { largestProduct } = require('../lib/largestProduct');

describe('test largest product function', () => {
    it('returns a number', () => {
        const arr = [14, 213, 124];
        const result = largestProduct(arr);
        expect(result).toEqual(expect.any(Number));
    });

    it('returns 0 if it is the only number', () => {
        const arr = [0];
        const result = largestProduct(arr);
        expect(result).toEqual(0);
    });

    it('returns thee number if its the only one', () => {
        const arr = [14];
        const result = largestProduct(arr);
        expect(result).toEqual(arr[0]);
    });
});
