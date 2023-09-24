<template>
  <div class="navbar">
    <div class="navbar__nameCompany">
      <p>Жилфонд</p>
    </div>
    <div class="navbar__user">
      <p>Пользователь</p>
    </div>
  </div>

</template>

<script>

/** Компонент навигации по приложению */
export default {
  name: "NavBar"
}
</script>

<style scoped lang="scss">
  $font_family: Montserrat, sans-serif;

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .navbar__nameCompany p{
      font: normal 700 32px $font_family;
      color: #E31F24;
    }

    .navbar__user {
      font: normal 400 16px $font_family;
    }
  }


</style>