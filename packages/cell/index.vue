<template>
  <div
    :class="[
      createClass(
        {
          clickable: clickable || isLink
        }),
        { 'lnzi-hairline': border }
    ]"
    @click="onClick"
    >
    <slot name="icon">
      <lnzi-icon v-if="icon" :name="icon" :class="createClass('left-icon')"></lnzi-icon>
    </slot>

      <div
        v-if="title || $slots.title"
        :class="[
          createClass('title'),
          { 'no-value': !value && !$slots.default }
        ]"
        :style="[{width: titleWidth, flex: `0 0 ${titleWidth}`}]"
        >
        <slot name="title">
          <span>{{title}}</span>
          <div v-if="label" :class="createClass('label')">{{label}}</div>
        </slot>
      </div>

      <div v-if="value || $slots.default" :class="createClass('value', inputAlign)">
        <slot>{{value}}</slot>
      </div>
      <slot name="right-icon">
        <lnzi-icon v-if="isLink" name="arrow" :class="createClass('right-icon')"></lnzi-icon>
      </slot>
    </div>
</template>

<script>
import create from '../utils/create'
import LnziIcon from '../icon/index'

export default create({
  name: 'cell',
  components: {
    LnziIcon
  },
  props: {
    icon: String,
    title: [String, Number],
    label: String,
    value: [Number, String],
    titleWidth: String,
    isLink: Boolean,
    clickable: Boolean,
    border: Boolean,
    inputAlign: {
      type: String,
      default: 'right'
    }
  },
  methods: {
    onClick (event) {
      this.$emit('click', event)
    }
  }
})
</script>
