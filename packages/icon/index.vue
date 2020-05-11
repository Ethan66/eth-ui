<template>
  <i
    :class="[
      classPrefix,
      `i-${name}`
    , createClass()]"
    :style="style"
    v-on="$listeners"
  >
    <slot></slot>
  </i>
</template>

<script>
import create from '../utils/create'

export default create({
  name: 'icon',
  props: {
    name: String,
    size: String,
    color: String,
    classPrefix: {
      type: String,
      default: 'iconfont'
    }
  },
  computed: {
    style () {
      return {
        fontSize: this.size,
        color: this.color
      }
    }
  }
})
</script>
