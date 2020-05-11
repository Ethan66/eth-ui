<template>
  <ul class="section-wrap">
    <li class="s-line">
      <p class="s-title">基础用法</p>
      <p class="s-line">
        <lnzi-cell-group>
          <lnzi-cell title="图标" icon="setting"></lnzi-cell>
          <lnzi-cell title="有下划线" border inputAlign="center" value="我是value"></lnzi-cell>
          <lnzi-cell title="有副标题" border label="我是副标题"></lnzi-cell>
          <lnzi-cell title="可点击" is-link @click="handleClick" border></lnzi-cell>
          <lnzi-cell title="有下划线" value="有值" border is-link></lnzi-cell>
        </lnzi-cell-group>
      </p>
    </li>
    <li class="s-line">
      <p class="s-title">slot用法</p>
      <p class="s-line">
        <lnzi-cell>
          <div slot="title">这是标题</div>
        </lnzi-cell>
      </p>
      <p class="s-line">
        <lnzi-cell>我是内容</lnzi-cell>
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      val: 'ssdfd'
    }
  },
  methods: {
    handleClick (val) {
      console.log(val)
    }
  }
}
</script>
