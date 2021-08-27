import gameboardShuffler from '@/utils/gameboardShuffler.js';

const mockColor = (num) => ({ r: num, b: num, g: num });

test('returns a shuffled matrix without affecting the original matrix', () => {
    const original = [
        [mockColor(1), mockColor(2), mockColor(3)],
        [mockColor(4), mockColor(5), mockColor(6)],
        [mockColor(7), mockColor(8), mockColor(9)],
        [mockColor(10), mockColor(11), mockColor(12)],
    ];
    const shuffled = gameboardShuffler(original);
    expect(original).toEqual([
        [mockColor(1), mockColor(2), mockColor(3)],
        [mockColor(4), mockColor(5), mockColor(6)],
        [mockColor(7), mockColor(8), mockColor(9)],
        [mockColor(10), mockColor(11), mockColor(12)],
    ]);
    expect(shuffled).not.toEqual(original);
});
