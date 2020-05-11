import Button from './button/index'
import Cell from './cell/index'
import Radio from './radio/index'
import Switch from './switch/index'
import Field from './field/index'
import Icon from './icon/index'
import CellGroup from './cell-group/index'
import RadioGroup from './radio-group/index'

const components = [
  Button,
  Cell,
  Radio,
  Switch,
  Field,
  CellGroup,
  RadioGroup,
  Icon
]

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  Button,
  Cell,
  Radio,
  Switch,
  Field,
  CellGroup,
  RadioGroup,
  Icon
}