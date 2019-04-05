<template>
  <input :type="text" />
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: {
    text: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import './styled.scss';
</style>
