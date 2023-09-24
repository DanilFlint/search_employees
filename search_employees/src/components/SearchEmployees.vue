<template>
  <div class="search_employees">
    <div>
      <p>Поиск сотрудников</p>
      <div>
        <input
            class="input_employee"
            type="text"
            placeholder="Введите id или имя"
            :value="searchString"
            v-on:input="(v) => this.$store.dispatch('inputSearchAction', v.target.value)"
        >
      </div>
    </div>

    <div>
      <p>Результаты</p>
        <div v-if="getCountFoundEmployees > 0">
          <ItemCard
              v-for="employee in employees"
              :key="employee.id"
              :id="employee.id"
              :username="employee.username"
              :email="employee.email"
          >
          </ItemCard>
        </div>
      <div
          v-else-if="!preloader && !isError"
          class="nothing_found"
      >
        Ничего не найдено
      </div>

      <Error
          v-if="isError"
          :errorStatus="statusQuery"
      />

      <Preloader
          v-if="preloader"
          :width="80"
      />
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions, mapGetters} from "vuex";
import ItemCard from "./ItemCard";
import Preloader from "./Preloader";
import Error from "./Error";

/** Компонент для поиска пользователей */
export default {
  name: "SearchEmployees",
  components: {Error, Preloader, ItemCard},
  data() {
    return {

    }
  },
  methods: {
    showEmployees() {
      console.log(this.employees);
    },
    ...mapMutations(['inputSearch']),
    ...mapActions(['inputSearchAction'])
  },
  computed: {
    getCountFoundEmployees() {
      return this.employees.length;
    },

    ...mapGetters(['isError']),

    ...mapState(['searchString','employees', 'preloader', 'statusQuery'])
  }

}
</script>

<style scoped lang="scss">
  $font_family: Montserrat, sans-serif;

  .search_employees {
    font: normal 600 16px $font_family;
    width: 20vw;
    height: 60vh;
    margin: 10px;
    padding: 10px;
    text-align: start;
  }

  .input_employee {
    width: 240px;
    height: 46px;
    border-radius: 8px;
    border: #E9ECEF solid 1px;
    padding: 16px;
    gap: 16px;
  }

  .nothing_found {
    font: normal 400 14px $font_family;
  }

</style>