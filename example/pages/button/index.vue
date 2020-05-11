<template>
  <ul class="section-wrap">
    <li class="s-line">
      <p class="s-title">普通按钮</p>
      <p class="s-line">
        <lnzi-button>default-small</lnzi-button>
      </p>
      <p class="s-line">
        <lnzi-button nativeType="reset" size="normal">default-normal</lnzi-button>
      </p>
      <lnzi-button size="large">default-large</lnzi-button>
    </li>
    <li class="s-line">
      <p class="s-title">朴素按钮</p>
      <p class="s-line">
        <lnzi-button type="plain">default-plain</lnzi-button>
      </p>
      <p class="s-line">
        <lnzi-button disabled size="normal">disabled</lnzi-button>
      </p>
    </li>
    <li class="s-line">
      <p class="s-title">半圆状态</p>
      <p class="s-line">
        <lnzi-button type="semicircle" size="small">{{ '常见问题' }}</lnzi-button>
        <lnzi-button type="semicircle" size="small"><span>hello workd</span></lnzi-button>
      </p>
    </li>
    <li class="s-line">
      <p class="s-title">其他状态</p>
      <p class="s-line">
        <lnzi-button width="80%" height="40px" border-radius="10">width,height,borderRadius</lnzi-button>
      </p>
      <p class="s-line">
        <lnzi-button style="background: #999;">样式属性</lnzi-button>
      </p>
    </li>
  </ul>

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
