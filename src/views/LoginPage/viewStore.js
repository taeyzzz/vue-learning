import { post } from '../../utils'
const LOGIN_REQUEST = "LOGIN_REQUEST"
const LOGIN_SUCCESS = "LOGIN_SUCCESS"
const LOGIN_FAILURE = "LOGIN_FAILURE"
const LOGIN_IDLE = "LOGIN_IDLE"

const state = {
  currentUser: undefined,
  loginAPI: {
    fetchStatus: "idle",
    error: undefined
  }
}

const getters = {

}

// actions
const actions = {
  login: async(context, data) => {
    console.log(data);
    context.commit(LOGIN_REQUEST)
    try {
      const response = await post('/login', data)
      context.commit(LOGIN_SUCCESS, {
        userData: response
      })
    }
    catch (error) {
      context.commit(LOGIN_FAILURE, {
        error
      })
    }
    finally{

    }
  }
}

// mutations
const mutations = {
  [LOGIN_REQUEST]: (state, payload) => {
    state.loginAPI.fetchStatus = "request"
  },
  [LOGIN_SUCCESS]: (state, payload) => {
    state.loginAPI.fetchStatus = "success"
    state.currentUser = payload.userData
  },
  [LOGIN_FAILURE]: (state, payload) => {
    state.loginAPI.fetchStatus = "failure"
    state.loginAPI.error = payload.error
  },
  [LOGIN_IDLE]: (state, payload) => {
    state.loginAPI.fetchStatus = "idle"
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
