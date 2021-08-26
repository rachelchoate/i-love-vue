import Vuex from 'vuex';

import { createLocalVue } from '@vue/test-utils';

global.localVue = createLocalVue();
global.localVue.use(Vuex);
