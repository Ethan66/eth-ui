<template>
  <div
    :class="createClass({
      on: value,
      disabled,
      'lnzi-common--bg': !!value,
      'lnzi-common--nobg': !value
  })"
  :style="[fontSize]"
  @click="onToggle"
  >
    <div :class="createClass('node')"></div>
  </div>
</template>

<script>
import create from '../utils/create'
export default create({
  name: 'switch',
  props: {
    value: Boolean,
    disabled: Boolean,
    size: {
      type: String,
      default: '30px'
    }
  },
  computed: {
    fontSize () {
      return { 'font-size': this.size }
    }
  },
  methods: {
    onToggle (event) {
      if (this.disabled) return true
      this.$emit('input', !this.value)
      this.$emit('change', !this.value)
    }
  }
})
</script>
