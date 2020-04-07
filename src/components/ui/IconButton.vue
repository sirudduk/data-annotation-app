<style lang="scss">
  .icon-img {
    width: 25px;
    height: 25px;
  }
</style>

<template>
  <a @click="$emit('click')" class="d-flex flex-column align-items-center">
    <img :src="imgSrc" class="icon-img mb-1">
    <span class="text-white">{{btnText}}</span>
  </a>
</template>

<script>
  export default {
    props: {
      imgSrc: String,
      btnText: String
    }
  }
</script>