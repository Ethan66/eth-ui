<template>
  <div
    :class="createClass({ disabled: Disabled })"
    :style="fontSize"
    @click="onClick"
  >
    <div
      :class="createClass('control', { checked: currentValue === value })"
    >
      <lnzi-icon
        v-show="currentValue === value"
        :style="fontSize"
        name="hook"
      ></lnzi-icon>
    </div>
    <div :class="createClass('value')">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import create from '../utils/create.js'
import findParent from '../mixins/find-parent'

export default create({
  name: 'radio',
  mixins: [findParent],
  props: {
    disabled: Boolean,
    size: {
      type: String,
      default: '18px'
    },
    value: [String, Number]
  },
  computed: {
    fontSize () {
      return { fontSize: this.size }
    },
    currentValue: {
      get () {
        return (this.parent || this).value
      },
      set (val) {
        (this.parent || this).$emit('input', val)
      }
    },
    Disabled () {
      return (this.parent || this).disabled
    }
  },
  created () {
    this.findParent('lnzi-radio-group')
  },
  methods: {
    onClick (event) {
      if (this.Disabled || this.currentValue === this.value) return false;
      (this.parent || this).$emit('click', event);
      (this.parent || this).$emit('change', event)
      this.currentValue = this.value
    }
  }
})
</script>
