<style lang="scss">
  .bottom-navbar {
    box-shadow: 0 -4px 8px 0 rgba(0, 0, 0, 0.1), inset 0 1px 0 0 rgba(0, 0, 0, 0.5);
  }
</style>

<template>
  <nav class="bottom-navbar navbar fixed-bottom navbar-light bg-dn-darkest text-white pt-3">
    <div class="d-flex align-items-center w-100 justify-content-center">
      <div class="d-flex mr-5">
        <IconButton class="mr-3" :imgSrc="require(`@/assets/ic-24-m-prev-w.png`)" btnText="PREV"/>
        <IconButton :imgSrc="require(`@/assets/ic-24-m-next-w.png`)" btnText="NEXT"/>
      </div>

      <IconButton :imgSrc="require(`@/assets/ic-24-m-finish-w.png`)" btnText="SUBMIT"/>
    </div>
  </nav>
</template>

<script>
  import IconButton from './ui/IconButton.vue'

  export default {
    components: {
      IconButton
    }
  }
</script>