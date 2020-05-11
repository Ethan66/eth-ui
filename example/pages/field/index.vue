<template>
  <ul class="section-wrap">
    <li class="s-line">
      <p class="s-title">基础用法</p>
      <p class="s-line">
        <lnzi-field type="textarea" title="图标" icon="setting" titleAlign="top"></lnzi-field>
        <lnzi-field title="有下划线" border value="sdfsd" clearable></lnzi-field>
        <lnzi-field title="有副标题" border label="我是副标题" clearable></lnzi-field>
        <lnzi-field title="可点击" readonly is-link @click="handleClick" border @focus="handleFocus"></lnzi-field>
        <lnzi-field ref="field5" type="number" title="有下划线" v-model="someValue" @blur="handleBlur" border is-link @keypress="handleKeyPress"></lnzi-field>
      </p>
    </li>
    <li class="s-line">
      <p class="s-title">slot用法</p>
      <p class="s-line">
        <lnzi-field>
          <div slot="title">这是标题</div>
        </lnzi-field>
      </p>
      <p class="s-line">
        <lnzi-field>我是内容</lnzi-field>
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      val: 'ssdfd',
      someValue: 'sdf'
    }
  },
  methods: {
    handleClick (val) {
      console.log(val)
    },
    handleFocus (val) {
      console.log(456, val)
    },
    handleBlur (val) {
      console.log(767, val)
    },
    handleKeyPress (val) {
      console.log('keypress', val)
    }
  }
}
</script>
