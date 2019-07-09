const { findMissingNum } = require('../lib/findMissingNum');

describe('test findMissingNum function', () => {
    it('returns number', () => {
        const arr = [2, 5, 1, 4, 9, 6, 3, 7];
        const result = findMissingNum(arr, 9, 1);
        expect(result).toEqual(expect.any(Number));
    });

    it('sorts the passed array from smallest to largest', () => {
        const arr = [2, 5, 1, 4, 9, 6, 3, 7];
        const result = findMissingNum(arr, 9, 1);
        expect(result).toEqual(1);
    });
});
