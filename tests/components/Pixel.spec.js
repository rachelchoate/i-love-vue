import {
    shallowMount,
    createLocalVue
} from '@vue/test-utils';
import Vuex from 'vuex';
import Pixel from '@/components/Pixel.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Pixel', () => {
    let store;
    let state;
    let mutations;

    beforeEach(() => {
        mutations = {
            selectPixel: jest.fn(),
        };
        state = {
            canvasHeight: 100,
            canvasWidth: 100,
            pixelHeight: 10,
            pixelWidth: 10,
            currentPixels: [[{
                r: 1,
                b: 2,
                g: 3,
            }]],
            selectedPixel: null,
            rows: 10,
            cols: 10,
            gameCompleted: false,
        };
        store = new Vuex.Store({
            state,
            mutations,
        });
    });

    let propsData = { x: 0, y: 0 };

    test('renders without crashing', () => {
        const wrapper = shallowMount(Pixel, { store, localVue, propsData });
        expect(wrapper.exists()).toBe(true);
    });

    test('calls selectPixel when pixel is clicked', () => {
        const wrapper = shallowMount(Pixel, { store, localVue, propsData });
        wrapper.find('.pixel').trigger('click');
        expect(mutations.selectPixel).toHaveBeenCalled();
    });

    test('renders active class when pixel is selected', () => {
        store.state.selectedPixel = [0,0];
        const wrapper = shallowMount(Pixel, { store, localVue, propsData });
        expect(wrapper.find('.active').exists()).toBe(true);
    });
});
