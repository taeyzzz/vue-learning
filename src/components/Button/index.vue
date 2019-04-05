<template>
  <v-btn :class="className" @click="handleClicked">
    {{ label }}
  </v-btn>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    props: {
      label: [String, Number],
      onClicked: Function,
    },
    computed: {
      className: function(){
        let name = "button"
        return name
      }
    },
    data: function(){
      return {
        text: 'text'
      }
    },
    methods: {
      handleClicked(){
        this.onClicked ? this.onClicked() : null
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import './styled.scss';
</style>
