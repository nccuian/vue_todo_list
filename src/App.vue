<template>
  <div id="app">
    <NavBar />
    <TodoInput />
    <TodoItemList />
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue'
  import TodoInput from './components/TodoInput.vue'
  import TodoItemList from './components/TodoItemList.vue'
  export default {
    name: 'App',
    components: {
      NavBar,
      TodoInput,
      TodoItemList
    },
    mounted() {
      this.$store.dispatch('INIT_TODOS')
    }
  }
</script>

<style lang="scss">
  @import '@/assets/main.scss';
</style>
