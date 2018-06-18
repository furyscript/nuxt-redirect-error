import axios from 'axios'
import Vuex from 'vuex'

export const state = () => ({
  auth: {
    logged: false
  }
})

export const getters = {
  logged: state => {
    return state.auth.logged
  }
}

export const mutations = {
  login (state) {
    state.auth.logged = true
  },
  logout (state) {
    state.auth.logged = false
  }
}

export const actions = {
  async testCall ({ route, store }) {
    try {
      const idx = Math.floor(Math.random() * 2 + 1)
      console.log(idx)
      let response = null
      if (idx === 1) {
        response = await axios.get('http://httpstat.us/200')
      } else {
        response = await axios.get('http://httpstat.us/401')
      }
      return response
    } catch (e) {
      throw e
    }
  }
}

const createStore = () => {
  return new Vuex.Store({
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
  })
}

export default createStore
