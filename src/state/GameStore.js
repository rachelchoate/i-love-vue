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
    canvasHeight: 400,
    canvasWidth: 400,
    pixelHeight: 100,
    pixelWidth: 100,
    currentPixels: [],
    correctPixels: [],
    lockedPixels: [],
    selectedPixel: null,
    gameCompleted: false,
    lockCorners: true,
    moves: 0,
    rows: 0,
    cols: 0,
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
    const game = generateGameboard(state.canvasHeight, state.canvasWidth, state.pixelHeight, state.pixelWidth);
    const lockedPixels = getFourCorners(game);
    state.lockedPixels = lockedPixels;
    applyLockedPixels(game, lockedPixels);
    state.rows = arrayFromNumber(game.length);
    state.cols = arrayFromNumber(game[0].length);
    state.correctPixels = deepCopyArray(game);
    //state.currentPixels =
    shuffleGameboard(game);
    state.currentPixels = game;
    state.moves = 0;
    state.gameCompleted = false;
};

/** select a pixel */
function selectPixel(state, coords) {
    if (!state.lockedPixels.includes(coords)) {
        switch (state.selectedPixel) {
            case null:
                state.selectedPixel = coords;
                break;
            case coords:
                state.selectedPixel = null;
                break;
            default:
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
    console.log('checked completion');
    console.log(compareMatrices(state.currentPixels, state.correctPixels));
};

/** update the desired height of the gameboard */
const updateCanvasHeight = (state, height) => {
    state.canvasHeight = height;
};

/** update the desired width of the gameboard */
const updateCanvasWidth = (state, width) => {
    state.canvasWidth = width;
};

/** update the desried height of the pixels */
const updatePixelHeight = (state, height) => {
    state.pixelHeight = height;
};

/** update the desired width of the pixels */
const updatePixelWidth = (state, width) => {
    state.pixelWidth = width;
};

const GameStore = {
    state: InitialState,
    mutations: {
        initializeGame,
        selectPixel,
        movePixel,
        checkCompletion,
        updateCanvasHeight,
        updateCanvasWidth,
        updatePixelHeight,
        updatePixelWidth,
    },
};

export default GameStore;
