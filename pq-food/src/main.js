import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import router from './router/router.js'
import 'vant/lib/index.css'

Vue.config.productionTip = false

Vue.use(Vant);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
