const { largestProduct } = require('../lib/largestProduct');

describe('test largest product function', () => {
    it('returns a number', () => {
        const num = 14;
        const result = largestProduct(num);
        expect(result).toEqual(expect.any(Number));
    });
});
