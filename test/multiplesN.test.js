const { multiplesN } = require('../lib/multiplesN');

describe('testint multiples of n function', () => {
    it('returns an array', () => {
        const array = [12, 3, 4, 12];
        const result = multiplesN(array);
        expect(result).toEqual(expect.any(Array));
    });
});
