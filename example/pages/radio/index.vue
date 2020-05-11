<template>
  <div>
    <ul class="section">
      <li class="s-line">
        <p class="s-title">基础</p>
        <p class="s-line">
          <lnzi-radio-group v-model="radio" @click="aaa" @change="aaaa">
            <lnzi-radio value="1">hello world</lnzi-radio>
            <lnzi-radio value="2">爱国第三个</lnzi-radio>
            <lnzi-radio value="3" disabled>ate特二套</lnzi-radio>
          </lnzi-radio-group>
        </p>
        <p class="s-line">
          <lnzi-radio-group v-model="radio2" disabled @click="aaa" @change="aaaa">
            <lnzi-radio value="1">hello world2</lnzi-radio>
            <lnzi-radio value="2">爱国第三个2</lnzi-radio>
            <lnzi-radio value="3">ate特二套2</lnzi-radio>
          </lnzi-radio-group>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: '3',
      radio2: '3',
      bb: false,
      bbb: false
    }
  },
  methods: {
    aaa (val) {
      console.log('click', val.target)
    },
    aaaa (val) {
      console.log('change', val.target)
    }
  }
}
</script>
