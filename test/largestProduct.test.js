const { largestProduct } = require('../lib/largestProduct');

describe('test largest product function', () => {
    it('returns a number', () => {
        const arr = [14, 213, 124];
        const result = largestProduct(arr);
        expect(result).toEqual(expect.any(Number));
    });
});
