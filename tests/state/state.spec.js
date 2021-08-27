import Store from '@/state/index.js';

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

describe('vuex store', () => {
    it('initializes state', () => {
        expect(Store.state).toEqual(InitialState);
    });
    it('initializes game', () => {
        expect(Store.state.currentPixels.length).toEqual(0);
        Store.commit('initializeGame');
        expect(Store.state.currentPixels.length).toEqual(InitialState.rows);
    })
    it('selects a pixel', () => {
        expect(Store.state.selectedPixel).toEqual(null);
        Store.commit('selectPixel', [1,1]);
        expect(Store.state.selectedPixel).toEqual([1,1]);
    });
    it('moves a pixel', () => {
        const color1 = Object.assign({}, Store.state.currentPixels[1][1]);
        const color2 = Object.assign({}, Store.state.currentPixels[2][2]);
        Store.commit('selectPixel', [2,2]);
        expect(Store.state.currentPixels[2][2]).toEqual(color1);
        expect(Store.state.currentPixels[1][1]).toEqual(color2);
    });
    it('unselects a pixel', () => {
        expect(Store.state.selectedPixel).toEqual(null);
        Store.commit('selectPixel', [1,1]);
        expect(Store.state.selectedPixel).toEqual([1,1]);
        Store.commit('selectPixel', [1,1]);
        expect(Store.state.selectedPixel).toEqual(null);
    });
    it('updates rows', () => {
        expect(Store.state.rows).toEqual(InitialState.rows);
        Store.commit('updateGameHeight', 10);
        expect(Store.state.rows).toEqual(10);
    });
    it('updates cols', () => {
        expect(Store.state.cols).toEqual(InitialState.cols);
        Store.commit('updateGameWidth', 10);
        expect(Store.state.cols).toEqual(10);
    });
});
