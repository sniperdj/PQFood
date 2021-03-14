<template>
  <div>
    <van-nav-bar title="食品" left-arrow @click-left="onClickLeft"></van-nav-bar>
    home detail
    <div class="head"></div>
    <div class="title"></div>
    <div class="info"></div>
    <div class="info"></div>
  </div>
</template>

<script>
  export default {
    methods: {
      onClickLeft() {
        this.$router.go(-1);
      }
    },
  }
</script>

<style scoped>

</style>
