<template>
  <div class="body">
    <SearchEmployees/>
    <Card/>
  </div>
</template>

<script>
import SearchEmployees from "./SearchEmployees";
import Card from "./Card";

/** Компонент для содержимого приложения */
export default {
  name: "Body",
  components: {Card, SearchEmployees}
}
</script>

<style scoped lang="scss">
.body {
  box-shadow: 0px 0px 10px #eeeeee;
  border: #fdfdfd solid 1px;
  border-radius: 10px;
  display: flex;
  background: #fdfdfd;
}
</style>