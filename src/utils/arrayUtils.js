
/** deep copy an array of arrays */
export const deepCopyArray = (array) => array.map((r) => r.map((c) => Object.assign({}, c)));

/** swap two pixels on an array */
export const swapPixels = (array, [x1, y1], [x2, y2]) => {
    const newArray = deepCopyArray(array);
    newArray[x1][y1] = array[x2][y2];
    newArray[x2][y2] = array[x1][y1];
    return newArray;
};

/** compare two array of arrays */
export const compareMatrices = (matrix1, matrix2) => {
    let isSame = true;
    matrix1.forEach((row, i) => {
        const comp = matrix2[i];
        row.forEach((col, x) => {
            if (comp[x].r !== col.r || comp[x].b !== col.b || comp[x].g !== col.g) isSame = false;
        });
    });
    return isSame;
};

/** generate an array from a number and backfill it with indices */
export const arrayFromNumber = (number) => Array.from(Array(number).keys());

/** apply the durstenfeld shuffle algorithm to an array */
export const durstenfeldShuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        if (!array[i].locked && !array[j].locked) {
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
};

/** flatten a matrix to an array */
export const flattenArray = (array) => {
    const newArray = [];
    for (let a = 0; a < array.length; a += 1) {
        for (let b = 0; b < array[a].length; b += 1) {
            newArray.push(array[a][b]);
        }
    }
    return newArray;
};

/** chunk an array into smaller arrays */
export const chunkArray = (array, chunkSize) => array.reduce((result, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);
    if (!result[chunkIndex]) {
        result[chunkIndex] = [];
    }
    result[chunkIndex].push(item);
    return result;
}, []);

/** unflatten an array to a matrix */
export const unflattenArray = (array, rowLength, colLength) => {
    const newRows = chunkArray(array, colLength);
    const newArray = chunkArray(newRows, rowLength);
    return newArray[0];
};
