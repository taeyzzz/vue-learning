import { post } from '../../utils'
const LOGIN_REQUEST = "LOGIN_REQUEST"
const LOGIN_SUCCESS = "LOGIN_SUCCESS"
const LOGIN_FAILURE = "LOGIN_FAILURE"

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
  }
}

// mutations
const mutations = {
  LOGIN_REQUEST: (state, payload) => {
    loginAPI.fetchStatus = "request"
  }
  LOGIN_SUCCESS: (state, payload) => {
    loginAPI.fetchStatus = "success"
    currentUser = payload.userData
  }
  LOGIN_FAILURE: (state, payload) => {
    loginAPI.fetchStatus = "failure"
    loginAPI.error = payload.error
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
