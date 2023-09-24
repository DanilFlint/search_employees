<template>
  <NavBar/>
  <Body/>
</template>

<script>
import NavBar from "./components/NavBar";
import Body from "./components/Body";

export default {
  name: 'App',
  components: {
    Body,
    NavBar
  }
}
</script>

<style scoped>

</style>
