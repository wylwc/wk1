<template>
  <div id="app">
    <router-view></router-view>
    <router-link :to="{name:'main'}" tag = "span"></router-link>
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
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
html,body{
  width: 100%;
  height: 100%;
}
#app{
  width: 100%;
  height: 100%;
}
.message{
  width: 100%;
  height: 100%;
}

</style>
