import Vue from 'vue';
import App from './App.vue';
import store from './state/index.js';
import router from './router/index.js';

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    store,
    router,
}).$mount('#app');
