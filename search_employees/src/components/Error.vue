<template>
  <div
      class="itemError"
  >
    <div class="img">
      <img src="../assets/error.png" alt="" height="70">
    </div>
    <div>
      <p style="font-weight: 700">Ошибка {{errorStatus}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error",
  props: ['errorStatus']
}
</script>

<style scoped lang="scss">

$background_item: #e0e0e0;
$border_style: #E0E0E0 solid 1px;

.itemError {
  font: normal 400 12px Montserrat, sans-serif;
  height: 70px;
  display: flex;
  border: $border_style;
  margin: 9px 9px;
  border-radius: 10px;
}

</style>