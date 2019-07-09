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

    it('removes 0 from array if length is greater then 1', () => {
        const arr = [12, 325, 2, 2, 0, 134, 1];
        const result = largestProduct(arr);
        expect(result).not.toContain(0);
    });
});
