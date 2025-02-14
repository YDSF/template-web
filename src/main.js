import Vue from 'vue'
import App from './App.vue'
import Texts from './component/Texts.vue'
import VueMask from 'v-mask';
import axios from "axios";

Vue.prototype.$axios = axios

Vue.use(VueMask);

Vue.use(Texts);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
