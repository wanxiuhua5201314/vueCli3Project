import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import 'components-wxh/lib/vcolorpicker.css';
import componentsWxh from 'components-wxh';
Vue.use(ElementUI);
Vue.use(componentsWxh)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
