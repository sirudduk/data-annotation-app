<style lang="scss">
  .top-nav {
    background: #38375b;

    .credit-wrap {
        width: 116px;
        height: 40px;
        border-radius: 20px;
        background-color: #ffffff;
    }
  }
</style>

<template>
  <nav class="navbar top-nav">
    <a class="navbar-brand" href="#">
      <img src="../assets/logo-white.png" alt="brand-logo">
    </a>
    <div class="d-flex">
      <div class="credit-wrap d-flex align-items-center mr-2">
        <img class="mx-1" src="../assets/ic-24-coin.png" alt="coin">
        <span>20,000</span>
      </div>
      <img src="../assets/avatar.png">
    </div>
  </nav>
</template>

<script>
  export default {
    
  }
</script>