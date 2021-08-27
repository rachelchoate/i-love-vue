import * as utils from '@/utils/colorUtils.js';

test('generateRandomColor returns a randomized color with rgb values between 0 and 256', () => {
    const random = utils.generateRandomColor();
    expect(random.r).toBeLessThan(257);
    expect(random.r).toBeGreaterThanOrEqual(0);
    expect(random.g).toBeLessThan(257);
    expect(random.g).toBeGreaterThanOrEqual(0);
    expect(random.b).toBeLessThan(257);
    expect(random.b).toBeGreaterThanOrEqual(0);
});

test('generateColorGradient produces an array of color values that are appropriately spaced', () => {
    const color1 = {
        r: 0,
        g: 0,
        b: 0,
    };
    const color2 = {
        r: 100,
        g: 100,
        b: 100,
    };
    const expectedResult = [
        { r: 0, g: 0, b: 0 },
        { r: 10, g: 10, b: 10 },
        { r: 20, g: 20, b: 20 },
        { r: 30, g: 30, b: 30 },
        { r: 40, g: 40, b: 40 },
        { r: 50, g: 50, b: 50 },
        { r: 60, g: 60, b: 60 },
        { r: 70, g: 70, b: 70 },
        { r: 80, g: 80, b: 80 },
        { r: 90, g: 90, b: 90 },
    ];
    expect(utils.generateColorGradient(color1, color2, 10)).toEqual(expectedResult);
});
