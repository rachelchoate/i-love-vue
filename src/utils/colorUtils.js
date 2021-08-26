import { randomNumberFromMax } from './index.js';
import { arrayFromNumber } from './arrayUtils.js';

/** generate a random rgb() color */
export const generateRandomColor = () => ({
    r: randomNumberFromMax(257),
    g: randomNumberFromMax(257),
    b: randomNumberFromMax(257),
});

/** generate a color gradient between two colors, given a number of color stops to populate */
export const generateColorGradient = (startColor, endColor, numStops) => {
    const rStep = (endColor.r - startColor.r) / numStops;
    const bStep = (endColor.b - startColor.b) / numStops;
    const gStep = (endColor.g - startColor.g) / numStops;
    return arrayFromNumber(numStops).map((i) => ({
        r: startColor.r + (i * rStep),
        b: startColor.b + (i * bStep),
        g: startColor.g + (i * gStep),
    }));
};
