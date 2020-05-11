<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
/* @import "~@@/lnzi-style/index.css"; */
#app {
  padding: 0 .24rem;
  font-size: .32rem;
}
</style>
