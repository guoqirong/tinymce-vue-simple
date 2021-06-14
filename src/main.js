import Vue from 'vue'
import App from './App.vue'
import TinymceSimple from './index'

Vue.use(TinymceSimple);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
