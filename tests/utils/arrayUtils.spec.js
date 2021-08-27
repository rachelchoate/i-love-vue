import * as utils from '@/utils/arrayUtils.js';

const mockColor = (num) => ({ r: num, b: num, g: num });

test('swapPixels swaps the values of two elements in a matrix without altering the original matrix', () => {
    const original = [
        [mockColor(1), mockColor(2), mockColor(3)],
        [mockColor(4), mockColor(5), mockColor(6)],
        [mockColor(7), mockColor(8), mockColor(9)],
    ];
    const result = utils.swapPixels(original, [0, 0], [2, 2]);
    expect(result).toEqual([
        [mockColor(9), mockColor(2), mockColor(3)],
        [mockColor(4), mockColor(5), mockColor(6)],
        [mockColor(7), mockColor(8), mockColor(1)],
    ]);
    expect(original).toEqual([
        [mockColor(1), mockColor(2), mockColor(3)],
        [mockColor(4), mockColor(5), mockColor(6)],
        [mockColor(7), mockColor(8), mockColor(9)],
    ]);
});

test('compareMatrices returns true if two matrices are the same', () => {
    const matrix1 = [
        [mockColor(1), mockColor(2), mockColor(3)],
        [mockColor(4), mockColor(5), mockColor(6)],
        [mockColor(7), mockColor(8), mockColor(9)],
    ];
    const matrix2 = [
        [mockColor(1), mockColor(2), mockColor(3)],
        [mockColor(4), mockColor(5), mockColor(6)],
        [mockColor(7), mockColor(8), mockColor(9)],
    ];
    expect(utils.compareMatrices(matrix1, matrix2)).toEqual(true);
});

test('compareMatrices returns false if two matrices differ', () => {
    const matrix1 = [
        [mockColor(9), mockColor(2), mockColor(3)],
        [mockColor(4), mockColor(5), mockColor(6)],
        [mockColor(7), mockColor(8), mockColor(9)],
    ];
    const matrix2 = [
        [mockColor(1), mockColor(2), mockColor(3)],
        [mockColor(4), mockColor(5), mockColor(6)],
        [mockColor(7), mockColor(8), mockColor(9)],
    ];
    expect(utils.compareMatrices(matrix1, matrix2)).toEqual(false);
});

test('arrayFromNumber returns an array populated with indexes', () => {
    expect(utils.arrayFromNumber(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('durstenfeldShuffle does not impact locked pixels', () => {
    const array = [mockColor(1), mockColor(2), mockColor(3), mockColor(4), mockColor(5), mockColor(6), mockColor(7), mockColor(8), mockColor(9)];
    array[0].locked = true;
    const original = array.map(r => Object.assign(r, {}));
    utils.durstenfeldShuffle(array);
    expect(array[0]).toEqual(original[0]);
    expect(array).not.toEqual(original);
});

test('flattenArray takes a matrix and returns a flat array', () => {
    const matrix = [
        [mockColor(1), mockColor(2), mockColor(3)],
        [mockColor(4), mockColor(5), mockColor(6)],
        [mockColor(7), mockColor(8), mockColor(9)],
    ];
    const expectedResult = [
        mockColor(1),
        mockColor(2),
        mockColor(3),
        mockColor(4),
        mockColor(5),
        mockColor(6),
        mockColor(7),
        mockColor(8),
        mockColor(9),
    ];
    expect(utils.flattenArray(matrix)).toEqual(expectedResult);
});

test('unflattenArray takes a flat array and returns a matrix', () => {
    const expectedResult = [
        [mockColor(1), mockColor(2), mockColor(3)],
        [mockColor(4), mockColor(5), mockColor(6)],
        [mockColor(7), mockColor(8), mockColor(9)],
    ];
    const array = [
        mockColor(1),
        mockColor(2),
        mockColor(3),
        mockColor(4),
        mockColor(5),
        mockColor(6),
        mockColor(7),
        mockColor(8),
        mockColor(9),
    ];
    expect(utils.unflattenArray(array, 3, 3)).toEqual(expectedResult);
});
