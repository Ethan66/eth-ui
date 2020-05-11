<template>
  <div
    :class="createClass()"
  >
    <slot></slot>
  </div>
</template>

<script>
import create from '../utils/create'
export default create({
  name: 'radio-group',
  props: {
    value: [Number, String],
    disabled: Boolean
  }
})
</script>
