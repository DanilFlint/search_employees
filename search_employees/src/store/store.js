import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state () {
        return {
            searchString: '',
            employees: [],
            preloader: false,
            choosenEmployee: {},
            statusQuery: null
        }
    },
    mutations: {
        inputSearch (state, newValue) {
            state.searchString = newValue;
        },

        chooseEmployee(state, id) {
            state.choosenEmployee = id > 0 ? state.employees.find(emp => emp.id === id) : {};
        },

        setEmployees(state, employees) {
            state.employees = [...employees];
        },

        setPreloader(state, isLoad) {
            state.preloader = isLoad;
        },

        setStatusQuery(state, statusQuery) {
            state.statusQuery = statusQuery
        }
    },
    getters: {
        getEmployees (state) {
            return state.employees;
        },

        getCountFoundEmployees(state, getters) {
            return getters.getEmployees.length;
        },

        isError(state) {
            return parseInt(state.statusQuery) > 399;
        }
    },
    actions: {
        inputSearchAction: async ({commit, dispatch}, newValue) => {
            commit('inputSearch', newValue);
            await dispatch('fetchEmployees');
        },

        fetchEmployees: async context => {
            let filterTemplate = context.state.searchString
                .split(',')
                .map(el => el.trim())
                .join('&username=');

            context.commit('setPreloader', true);

            fetch(`https://jsonplaceholder.typicode.com/users?username=${filterTemplate}`)
                .then(response => {
                    context.commit('setStatusQuery', response.status);
                    return response.json()
                })
                .then((data) => {
                    context.commit('setEmployees', data);
                })
                .catch((data) => {
                    console.log(data);
                })
                .finally(() => {
                    context.commit('setPreloader', false);
                })
        }
    }
})

export default store;