<template>
  <div class="todo-input">
    <input 
      type="text" 
      placeholder="輸入待辦事項" 
      v-model.trim="todo"
      v-focus
      @keyup.enter="handleAddTodo"
      @blur="isEmpty = false"
    >
    <h5 v-show="!todo && isEmpty">待辦事項不能為空</h5>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        todo: '',
        isEmpty: false
      }
    },
    methods: {
      handleAddTodo() {
        if(!this.todo) {
          this.isEmpty = true
        } else {
          const payload = {
            id: Math.random() * 1000,
            content: this.todo,
            done: false
          }
          this.$store.commit('ADD_TODO', payload)
          this.todo = ''
          this.isEmpty = false
        }
      }
    }
  }
</script>