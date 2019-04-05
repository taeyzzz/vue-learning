<template>
  <div class="login-page">
    <div class="login-container">
      <div class="logo-container">
        <img src="../../assets/logo.png" />
      </div>
      <div class="form-container">
        <input-component type="text" />
      </div>
    </div>
  </div>
</template>

<script>
  import Input from '../../components/Input'

  export default {
    components: {
      'input-component': Input
    }
  }
</script>

<style lang="scss" scoped>
 @import './styled.scss';
</style>
