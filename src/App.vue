<template>
  <div id="app">
    <TopNav/>
    <Main/>
    <BottomNav/>
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue'
import Main from './components/Main.vue'
import BottomNav from './components/BottomNav.vue'

export default {
  name: 'App',
  components: {
    TopNav,
    Main,
    BottomNav
  }
}
</script>

<style lang="scss">
$dn-color: #38375b;
$dn-color-darker: #35364e;
$dn-color-dark: #2c2c44;
$dn-color-darkest: #1f1f2f;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: $dn-color-darkest;
  height: 100vh;
  .bg-dn {
    background: #38375b;
  }
  .bg-dn-darker {
    background: #35364e;
  }
  .bg-dn-dark {
    background: #2c2c44;
  }
  .bg-dn-darkest {
    background: #1f1f2f;
  }
}
</style>
