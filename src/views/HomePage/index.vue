<template>
  <div class="home-page">
    <div class="form-container">
      <input-component type="text":value="todoTitle" :onChange="handleTODOChanged"/>
      <button-component label="ADD" :onClicked="handleAddTODOClicked"/>
    </div>
    <div class="todo-list-container">
      <div class="todo-container" v-for="title in todoList">
        <div class="title">
          {{ title }}
        </div>
        <div @click="handleRemoveTODO(title)">
          X
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import Input from '../../components/Input'
  import Button from '../../components/Button'

  export default {
    components: {
      "input-component": Input,
      "button-component": Button
    },
    computed: {
      ...mapState({
        message: state => state.homepageStore.message,
        todoList: state => state.homepageStore.todoList
      }),
    },
    data: function(){
      return {
        todoTitle: ''
      }
    },
    methods: {
      ...mapActions({
        addTODO: 'addTODO',
        deleteTODO: 'deleteTODO'
      }),
      handleClicked(obj){
        console.log(obj);
      },
      handleAddTODOClicked(){
        console.log(this.todoTitle);
        this.addTODO(this.todoTitle)
        this.todoTitle = ""
      },
      handleTODOChanged(e, newValue){
        this.todoTitle = newValue
      },
      handleRemoveTODO(title){
        console.log(title);
        this.deleteTODO(title)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import './styled.scss';
</style>
