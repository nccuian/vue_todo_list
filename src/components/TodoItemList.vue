<template>
  <div class="todo-item-list">
    <ul v-if="todos.length > 0">
      <TodoItem v-for="item in todos" :key="item.id" :item="item"/>
    </ul>
    <h3 v-else>
      尚無代辦事項
    </h3>
  </div>
</template>

<script>
  import TodoItem from './TodoItem';
  export default {
   components: {
     TodoItem
   },
   computed: {
     todos() {
       return this.$store.getters.filterTodos
     }
   }
  }
</script>
