<template>
  <div class="preloader">
    <img
        src='../assets/loader.gif'
        :width="width"
        alt="preloader"
    >
  </div>
</template>

<script>

export default {
  name: "Preloader",
  props: ['width']
}
</script>

<style scoped lang="scss">
.preloader {
  display: flex;
  justify-content: center;
}
</style>