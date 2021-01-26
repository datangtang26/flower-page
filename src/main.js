import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import VueExt from '@/utils'

Vue.config.productionTip = false;
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
Vue.use(VueExt);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
