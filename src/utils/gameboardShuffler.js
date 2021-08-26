import {
    durstenfeldShuffle,
    flattenArray,
    unflattenArray,
} from './arrayUtils.js';

/** shuffle gameboard */
const shuffleGameboard = (gameboard) => {
    const rowLength = gameboard.length;
    const colLength = gameboard[0].length;
    const flattenedArray = flattenArray(gameboard);
    durstenfeldShuffle(flattenedArray);
    const unflattenedArray = unflattenArray(flattenedArray, rowLength, colLength);
    return unflattenedArray[0];
};

export default shuffleGameboard;
