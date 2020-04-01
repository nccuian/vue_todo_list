import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const filterTodoHelper = {
  all(todos) {
    return todos.sort((a, b) => a.done - b.done)
  },
  active(todos) {
    return todos.filter(todo => !todo.done)
  },
  done(todos) {
    return todos.filter(todo => todo.done)
  }
}

const localStorageHelper = {
  get() {
    return JSON.parse(localStorage.getItem('vue-todos'))
  },
  set(payload) {
    return localStorage.setItem('vue-todos', JSON.stringify(payload))
  }
}

export default new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
    filterTodos(state) {
      return filterTodoHelper[state.route.name](state.todos)
    }
  },
  mutations: {
    INIT_TODOS(state, payload) {
      if(payload) state.todos = payload
    },
    ADD_TODO(state, payload) {
      state.todos.push(payload)
      localStorageHelper.set(state.todos)
    },
    UPDATE_TODO(state, payload) {
      const arr = [...state.todos]
      let foundIndex = arr.findIndex(item => item.id === payload.id)
      arr[foundIndex] = payload
      state.todos = arr
      localStorageHelper.set(state.todos)
    },
    DELETE_TODO(state, id) {
      state.todos = state.todos.filter(item => item.id !== id)
      localStorageHelper.set(state.todos)
    }
  },
  actions: {
    INIT_TODOS({commit}) {
      const localTodos = localStorageHelper.get()
      commit('INIT_TODOS', localTodos)
    }
  }
})