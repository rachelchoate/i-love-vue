import {
    shallowMount,
    createLocalVue
} from '@vue/test-utils';
import Vuex from 'vuex';
import Gameboard from '@/components/Gameboard.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Gameboard', () => {
    let store;

    beforeEach(() => {
        store = new Vuex.Store({
            state: {
                canvasHeight: 100,
                canvasWidth: 100,
                rows: 10,
                cols: 10,
                gameCompleted: false,
            },
        });
    });

    test('renders without crashing', () => {
        const wrapper = shallowMount(Gameboard, { store, localVue });
        expect(wrapper.exists()).toBe(true);
    });

    test('renders appropriate amount of Pixels', () => {
        const wrapper = shallowMount(Gameboard, { store, localVue });
        expect(wrapper.findAll('pixel-stub')).toHaveLength(10 * 10);
    });
});
