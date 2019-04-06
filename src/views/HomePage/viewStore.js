const ADD_TODO = "ADD_TODO"
const REMOVE_TODO = "REMOVE_TODO"

const state = {
  message: "hello world from homepage",
  todoList: []
}

const getters = {

}

// actions
const actions = {
  addTODO: (context, todoTitle) => {
    context.commit(ADD_TODO, {
      todoTitle
    })
  },
  deleteTODO: (context, todoTitle) => {
    context.commit(REMOVE_TODO, {
      todoTitle
    })
  }
}

// mutations
const mutations = {
  [ADD_TODO]: (state, payload) => {
    state.todoList = [...state.todoList, payload.todoTitle]
  },
  [REMOVE_TODO]: (state, payload) => {
    state.todoList = state.todoList.filter(data => data !== payload.todoTitle)
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
