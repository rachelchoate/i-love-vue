import { generateRandomColor, generateColorGradient } from './colorUtils.js';
import { arrayFromNumber } from './arrayUtils.js';

/** generate gameboard */
const generateGameboard = (canvasHeight, canvasWidth, pixelHeight, pixelWidth) => {
    const numRows = Math.floor(canvasHeight / pixelHeight);
    const numCols = Math.floor(canvasWidth / pixelWidth);

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
