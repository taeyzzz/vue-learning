<template>
  <input
    :type="type"
    @input="handleChanged"
    @keypress="handleKeyPressed"
    class="input"
  />
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    props: {
      type: String,
      onChange: Function,
      onKeyPress: Function,
      value: {
        type: [Number, String],
        required: true
      }
    },
    data: () => {
      return {
        text: 'text'
      }
    },
    methods: {
      handleChanged(e) {
        this.onChange ? this.onChange(e, e.target.value) : null
      },
      handleKeyPressed(e) {
        this.onKeyPress ? this.onKeyPress(e, e.target.value) : null
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import './styled.scss';
</style>
