const { multiplesN } = require('../lib/multiplesN');

describe('test multiples of n function', () => {
    it('returns an array', () => {
        const num = 14;
        const result = multiplesN(num);
        expect(result).toEqual(expect.any(Array));
    });

    it('returns array with the numbers multiples', () => {
        const num = 25;
        const result = multiplesN(num);
        expect(result).toEqual([25, 50, 75, 100]);
    });

    it('array is empty if number passed is greater then 100', () => {
        const num = 1111;
        const result = multiplesN(num);
        expect(result.length).toEqual(0);
    });
});
