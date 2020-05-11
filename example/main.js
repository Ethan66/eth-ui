import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/index.less'
import './assets/rem'
import {
  Button,
  Cell,
  Radio,
  Field,
  Switch,
  CellGroup,
  RadioGroup,
  Icon
} from '$pkg/index'

Vue.use(Button)
  .use(Cell)
  .use(Radio)
  .use(Field)
  .use(Switch)
  .use(CellGroup)
  .use(RadioGroup)
  .use(Icon)

let vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
Vue.use(vm)