import Vue from 'vue'
import VueBootstrap from 'bootstrap-vue';

import App from './App.vue'
import './assets/styles/styles.scss';
import router from "./router";

Vue.use(VueBootstrap);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
