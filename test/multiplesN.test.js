const { multiplesN } = require('../lib/multiplesN');

describe('test multiples of n function', () => {
    it('returns an array', () => {
        const num = 14;
        const result = multiplesN(num);
        expect(result).toEqual(expect.any(Array));
    });
});
