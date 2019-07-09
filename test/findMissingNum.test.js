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
        expect(result).toEqual(expect.any(Number));
    });

    it('returns the number thats missing', () => {
        const arr = [2, 5, 1, 4, 9, 6, 3, 7];
        const result = findMissingNum(arr, 9, 1);
        expect(result).toEqual(8);
    });

    it('returns the number thats missing from another array', () => {
        const arr = [5, 4, 9, 10, 6, 8, 3, 7];
        const result = findMissingNum(arr, 11, 3);
        expect(result).toEqual(11);
    });

    it('returns the number thats missing from another array', () => {
        const arr = [5, 4, 9, 10, 6, 11, 8, 7];
        const result = findMissingNum(arr, 11, 3);
        expect(result).toEqual(3);
    });
});
