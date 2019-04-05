<template>
  <div class="login-page">
    <div class="login-container">
      <div class="logo-container">
        <img src="../../assets/logo.png" />
      </div>
      <div class="form-container">
        <div class="input-container">
          <input-component
            type="text"
            :value="username"
            :onChange="(e, newValue) => handleInputChanged(newValue, 'username')"
          />
        </div>
        <div class="input-container">
          <input-component
            type="password"
            :value="password"
            :onChange="(e, newValue) => handleInputChanged(newValue, 'password')"
          />
        </div>
        <div class="btn-container">
          <button-component :onClicked="handleLoginClicked" label="Login"/>
        </div>
        <div v-if="isLoginFail" class="error-message">
          {{ loginAPI.error.message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  import Input from '../../components/Input'
  import Button from '../../components/Button'

  export default {
    components: {
      'input-component': Input,
      'button-component': Button
    },
    computed: {
      ...mapState({
        loginAPI: state => Object.assign({}, state.loginPageStore.loginAPI)
      })
    },
    watch: {
      loginAPI: function(newValue, oldValue){
        console.log(newValue, oldValue);
        if(newValue.fetchStatus === 'success'){
          this.$router.push('/home')
        }
        if(newValue.fetchStatus === 'failure'){
          this.isLoginFail = true
        }
      }
    },
    data: () => {
      return {
        username: '',
        password: '',
        isLoginFail: false
      }
    },
    methods: {
      ...mapActions({
        login: 'login'
      }),
      handleInputChanged(newValue, property){
        this[property] = newValue
      },
      handleLoginClicked(){
        const { username, password } = this
        const data = {
          username, password
        }
        this.login(data)
      }
    }
  }
</script>

<style lang="scss" scoped>
 @import './styled.scss';
</style>
