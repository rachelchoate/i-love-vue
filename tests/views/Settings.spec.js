import {
    shallowMount,
    createLocalVue
} from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Settings from '@/views/Settings.vue';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueRouter);

describe('Settings', () => {
    let store;
    let state;
    let mutations;

    beforeEach(() => {
        mutations = {
            updateGameHeight: jest.fn(),
            updateGameWidth: jest.fn(),
        };
        state = {
            rows: 3,
            cols: 3,
        };
        store = new Vuex.Store({
            state,
            mutations,
        });
    });

    test('renders without crashing', () => {
        const wrapper = shallowMount(Settings, { store, localVue });
        expect(wrapper.exists()).toBe(true);
    });

    test('calls updateGameHeight when #rows-input is updated', () => {
        const wrapper = shallowMount(Settings, { store, localVue });
        const input = wrapper.find('#rows-input');
        input.setValue(4);
        input.trigger('change');
        expect(mutations.updateGameHeight).toHaveBeenCalled();
    });

    test('calls updateGameWidth when #cols-input is updated', () => {
        const wrapper = shallowMount(Settings, { store, localVue });
        const input = wrapper.find('#cols-input');
        input.setValue(4);
        input.trigger('change');
        expect(mutations.updateGameWidth).toHaveBeenCalled();
    });
});
