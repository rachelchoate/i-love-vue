import { generateRandomColor, generateColorGradient } from './colorUtils.js';
import { arrayFromNumber } from './arrayUtils.js';

/** generate gameboard */
const generateGameboard = (numRows, numCols) => {
    const rows = arrayFromNumber(numRows);

    const colorTopLeft = generateRandomColor();
    const colorBottomLeft = generateRandomColor();
    const colorTopRight = generateRandomColor();
    const colorBottomRight = generateRandomColor();

    const colorGradientLeft = generateColorGradient(colorTopLeft, colorBottomLeft, numRows);
    const colorGradientRight = generateColorGradient(colorTopRight, colorBottomRight, numRows);

    return rows.map((row) => generateColorGradient(colorGradientLeft[row], colorGradientRight[row], numCols));
};

export default generateGameboard;
