<template>
  <div class="card">
    <div
        v-if="isChooseEmployee"
        class="wrapper_info empty_info"
    >
        Выберите сотрудника, чтобы посмотреть его профиль
    </div>

    <div v-else class="wrapper_info">
      <div>
        <img src="../assets/img.png" alt="" width="424">
      </div>
      <div class="info">
        <div class="name">{{choosenEmployee.name}}</div>
        <div class="info_item email"><b>email:</b> {{choosenEmployee.email}}</div>
        <div class="info_item phone"><b>phone:</b> {{choosenEmployee.phone}}</div>
        <div class="info_item about">
          <p>О себе:</p>
          <div>
            Lorem ipsum..
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

/** Отображение выбранного пользователя */
export default {
  name: "Card",
  computed: {

    /** Выбран ли пользователь, заполнено ли поле choosenEmployee в state */
    isChooseEmployee() {
      return !this.choosenEmployee.id;
    },

    ...mapState(['choosenEmployee'])
  }
}
</script>

<style scoped lang="scss">

$font_family: Montserrat, sans-serif;

.card {
  width: 80vw;
  display: flex;
  padding: 30px;
}

.card .wrapper_info {
  display: flex;
}

.info {
  margin-left: 60px;
}

.info_item {
  margin: 10px 0px 10px;
  font-size: 16px;
  text-align: start;
}

.info_item p {
  font: normal 700 12px $font_family;
}

.name {
  font: normal 700 20px $font_family;
  text-align: start;
}

.about p {
  font: normal 700 16px $font_family;
}

.empty_info {
  font: normal 400 14px $font_family;
  display: flex;
  margin: auto;
  align-items: center;
}
</style>