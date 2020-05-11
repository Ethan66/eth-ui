<template>
  <component
    :is="tag"
    :type="nativeType"
    :disabled="disabled"
    :class="createClass([
      type,
      size,
      {
        block,
        'lnzi-common--bg': type === 'default',
        'lnzi-common--cr': type === 'plain',
        'lnzi-common--br': type === 'plain'
      }
    ])"
    :style="[
      {width},
      {height},
      {borderRadius}
    ]"
    @click="onClick"
  >
    <span :class="createClass('text')">
      <slot>{{ text }}</slot>
    </span>
  </component>
</template>

<script>
import create from '../utils/create'

export default create({
  name: 'button',
  props: {
    text: String,
    nativeType: String,
    disabled: Boolean,
    block: Boolean,
    width: String,
    height: String,
    borderRadius: String,
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'small'
    }
  },
  methods: {
    onClick (event) {
      this.$emit('click', event)
    }
  }
})
</script>
