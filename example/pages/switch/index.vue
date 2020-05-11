<template>
  <ul class="section-wrap">
    <li class="s-line">
      <p class="s-title">打开</p>
      <p class="s-line">
        <lnzi-switch v-model="checked" @change="handleChange"></lnzi-switch>
      </p>
    </li>
    <li class="s-line">
      <p class="s-title">禁止</p>
      <p class="s-line">
        <lnzi-switch v-model="checked2" disabled></lnzi-switch>
      </p>
    </li>
    <li class="s-line">
      <p class="s-title">关闭</p>
      <p class="s-line">
        <lnzi-switch v-model="checked3" @change="handleChange"></lnzi-switch>
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      checked: true,
      checked2: true,
      checked3: false
    }
  },
  methods: {
    handleChange () {
      alert('切换成功了')
    }
  }
}
</script>
