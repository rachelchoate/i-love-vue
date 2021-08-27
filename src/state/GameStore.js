import generateGameboard from '../utils/gameboardGenerator';
import shuffleGameboard from '../utils/gameboardShuffler';
import {
    swapPixels,
    compareMatrices,
    arrayFromNumber,
    deepCopyArray,
} from '../utils/arrayUtils';

/** Initial game board state */
const InitialState = {
    canvasHeight: 800,
    canvasWidth: 800,
    pixelHeight: 200,
    pixelWidth: 200,
    currentPixels: [],
    correctPixels: [],
    lockedPixels: [],
    selectedPixel: null,
    gameCompleted: false,
    lockCorners: true,
    moves: 0,
    rows: 4,
    cols: 4,
};

/** get four corners of gameboard */
const getFourCorners = (gameboard) => {
    const rows = arrayFromNumber(gameboard.length);
    const cols = arrayFromNumber(gameboard[0].length);
    return [
        [0, 0],
        [0, cols.length - 1],
        [rows.length - 1, 0],
        [rows.length - 1, cols.length - 1],
    ];
};

/** apply locked pixels */
const applyLockedPixels = (array, lockedPixels) => {
    for (let i = 0; i < lockedPixels.length; i += 1) {
        const coords = lockedPixels[i];
        array[coords[0]][coords[1]].locked = true;
    }
}

/** generate a new game */
const initializeGame = (state) => {
    const game = generateGameboard(state.rows, state.cols);
    const lockedPixels = getFourCorners(game);
    state.lockedPixels = lockedPixels;
    applyLockedPixels(game, lockedPixels);
    state.correctPixels = deepCopyArray(game);
    state.currentPixels = shuffleGameboard(game);
    state.moves = 0;
    state.gameCompleted = false;
};

/** select a pixel */
function selectPixel(state, coords) {
    coords = [parseInt(coords[0], 10), parseInt(coords[1], 10)];
    if (!state.lockedPixels.includes(coords)) {
        if (!state.selectedPixel) {
            state.selectedPixel = coords;
        } else if (state.selectedPixel[0] === coords[0] && state.selectedPixel[1] === coords[1]) {
            state.selectedPixel = null;
        } else {
            this.commit('movePixel', coords);
        }
    }
}

/** switch two pixels */
function movePixel(state, coords) {
    state.currentPixels = swapPixels(state.currentPixels, coords, state.selectedPixel);
    state.selectedPixel = null;
    state.moves += 1;
    this.commit('checkCompletion');
}

/** check if gameboard has been completed */
const checkCompletion = (state) => {
    state.gameCompleted = compareMatrices(state.currentPixels, state.correctPixels);
};

/** update the number of rows of pixels to generate */
function updateGameHeight(state, height) {
    if (height >= 3 && height <= 25) {
        state.rows = parseInt(height, 10);
        state.pixelHeight = state.canvasHeight / height;
        this.commit('initializeGame');
    }
}

/** update the number of columns of pixels to generate */
function updateGameWidth(state, width) {
    if (width >= 3 && width <= 25) {
        state.cols = parseInt(width, 10);
        state.pixelWidth = state.canvasWidth / width;
        this.commit('initializeGame');
    }
}

const GameStore = {
    state: InitialState,
    mutations: {
        initializeGame,
        selectPixel,
        movePixel,
        checkCompletion,
        updateGameHeight,
        updateGameWidth,
    },
};

export default GameStore;
