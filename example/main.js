import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/index.less'
import {
  Button
} from '$pkg/index'

Vue.use(Button)

let vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
Vue.use(vm)