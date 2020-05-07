<template>
  <div>
    <div class="demo-button-row">
      <p>默认按钮:</p>
      <lnzi-button type="default" size="small">{{ 'default-small' }}</lnzi-button>
      <lnzi-button type="default">{{ 'default-normal' }}</lnzi-button>
      <lnzi-button type="default" size="large">{{ 'default-large' }}</lnzi-button>
      <p>朴素按钮:</p>
      <lnzi-button type="plain" size="small">{{ 'plain-small' }}</lnzi-button>
      <p>禁用状态:</p>
      <lnzi-button type="plain" size="small" disabled @click="handleClick(123)">{{ 'plain-small' }}</lnzi-button>
      <p>半圆状态:</p>
      <lnzi-button type="semicircle" size="small">{{ '常见问题' }}</lnzi-button>
      <lnzi-button type="semicircle" size="small"><span>hello workd</span></lnzi-button>
    </div>
  </div>

</template>

<script>
export default {
  methods: {
    handleClick (val) {
      console.log(val, event.target)
    }
  }
}
</script>

<style lang="less">
  .demo-button-row {
    padding: 0 10px;
    p {
      text-align: left;
      padding-left: 20px;
    }
    button {
      margin: 10px 0;
    }
  }
</style>
