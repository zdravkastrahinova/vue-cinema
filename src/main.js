import Vue from 'vue'
import VueBootstrap from 'bootstrap-vue';
import VueToast from 'vue-toast-notification';

import App from './App.vue'
import router from "./router";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-toast-notification/dist/index.css';
import './assets/styles/styles.scss';

Vue.use(VueBootstrap);
Vue.use(VueToast);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
