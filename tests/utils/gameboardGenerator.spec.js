import generateGameboard from '@/utils/gameboardGenerator.js';

test('returns a matrix of color values', () => {
    const result = generateGameboard(3, 3);
    expect(result.length).toEqual(3);
    expect(result[0].length).toEqual(3);
});
