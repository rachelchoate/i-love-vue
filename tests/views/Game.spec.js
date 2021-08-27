import {
    shallowMount,
    createLocalVue
} from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Game from '@/views/Game.vue';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueRouter);

describe('Game', () => {
    let store;
    let state;
    let mutations;

    beforeEach(() => {
        mutations = {
            initializeGame: jest.fn(),
        };
        state = {
            currentPixels: [],
            gameCompleted: false,
            moves: 0,
        };
        store = new Vuex.Store({
            state,
            mutations,
        });
    });

    test('renders without crashing', () => {
        const wrapper = shallowMount(Game, { store, localVue });
        expect(wrapper.exists()).toBe(true);
    });

    test('calls initializeGame when generate-game-btn is clicked', () => {
        const wrapper = shallowMount(Game, { store, localVue });
        wrapper.find('#generate-game-btn').trigger('click');
        expect(mutations.initializeGame).toHaveBeenCalled();
    });
});
