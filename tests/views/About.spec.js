import { shallowMount } from '@vue/test-utils';
import About from '../../src/views/About.vue';

test('About', () => {
  const wrapper = shallowMount(About)
  expect(wrapper.exists()).toBe(true);
});
