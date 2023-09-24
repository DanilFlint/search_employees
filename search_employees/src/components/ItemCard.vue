<template>
<div
    :class="'itemCard ' + active"
    v-on:click="() => chooseEmployee(id)"
>
  <div class="img">
    <img src="../assets/img.png" alt="" height="70">
  </div>
  <div class="about">
    <p>{{username}}</p>
    <p>{{email}}</p>
  </div>
</div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

/** Строка найденного в поиске пользователя
 *
 * props:
 * username - сокращенное имя пользователя
 *
 * */
export default {
  props: ['username', 'email', 'id'],
  name: "ItemCard",
  data() {
    return {

    }
  },

  methods: {
    ...mapMutations(['chooseEmployee'])
  },

  computed: {
    isActive() {
      return this.choosenEmployee.id === this.id;
    },

    active() {
      return this.isActive ? 'active' : '';
    },

    ...mapState(['choosenEmployee'])
  },

  unmounted() {
    if (this.isActive) {
      this.chooseEmployee(0);
    }
  }

}
</script>

<style scoped lang="scss">
$background_item: #e0e0e0;
$border_style: #E0E0E0 solid 1px;

.itemCard {
  font: normal 400 12px Montserrat, sans-serif;
  height: 70px;
  display: flex;
  border: $border_style;
  margin: 9px 9px;
  border-radius: 10px;

  .about p:first-child{
    font-weight: 700;
  }
}

.itemCard:hover {
  background: $background_item;
}

.itemCard.active{
  background: $background_item;
}

.itemCard .img {
  border-right: $border_style;
  margin-right: 10px;
}
</style>