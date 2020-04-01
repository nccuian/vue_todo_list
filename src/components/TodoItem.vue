<template>
  <li :class="{done: item.done}">
    <input 
      type="text" 
      class="edit-input" 
      v-if="edit !== null"
      v-focus
      v-model="edit"
      @blur="handleCancelEdit"
      @keyup.esc="handleCancelEdit"
      @keyup.enter="handleSubmit"
    >
    <template v-else>
      <input type="checkbox" :id="item.id" v-model="done">
      <label :for="item.id">{{ item.content }}</label>
      <button @click="handleEdit">編輯</button>
      <button @click="handleDelete(item.id)">刪除</button>
    </template>
  </li>
</template>

<script>
  export default {
    props: ['item'],
    data() {
      return {
        edit: null
      }
    },
    computed: {
      done: {
        get() {
          return this.item.done
        },
        set(value) {
          this.$store.commit('UPDATE_TODO', {
            id: this.item.id,
            content: this.item.content,
            done: value
          })
        }
      }
    },
    methods: {
      handleDelete(id) {
        if(confirm(`確認刪除${this.item.content}?`)) {
          this.$store.commit('DELETE_TODO', id)
        }
      },
      handleEdit() {
        this.edit = this.item.content
      },
      handleCancelEdit() {
        this.edit = null
      },
      handleSubmit() {
        if(!this.edit) return this.handleDelete(this.item.id)
        this.$store.commit('UPDATE_TODO', {
          id: this.item.id,
          content: this.edit,
          done: this.item.done
        })
        this.handleCancelEdit()
      }
    }
  }
</script>
