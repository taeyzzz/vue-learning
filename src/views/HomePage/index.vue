<template>
  <div>
    <div class="store">
      {{ message }}
    </div>
    <div class="list-book-container" v-for="data in listBooks" @click="() => handleClicked(data)">
      <div>
        {{ data.name}}
      </div>
      <div>
        {{ data.price}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      message: state => state.homepageStore.message
    }),
  },
  data: () => {
    return {
      listBooks: [
        {name: "a", price: 1},
        {name: "b", price: 2},
        {name: "c", price: 3},
        {name: "d", price: 4},
        {name: "e", price: 5},
      ]
    }
  },
  methods: {
    handleClicked(obj){
      console.log(obj);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import './styled.scss';
</style>
