<template>
  <div>
    <div>
      {{ message }}
    </div>
    <div>
      {{ text }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      message: state => state.homepageStore.message
    })
  },
  data: () => {
    return {
      text: "home page text"
    }
  },
  // methods: mapActions('cart', [
  //   'addProductToCart'
  // ]),
  created () {
    console.log('created');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
