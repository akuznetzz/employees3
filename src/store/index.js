import { createStore } from 'vuex'
import gender from './modules/gender'
import type_contract from './modules/type_contract'
import country from './modules/country'
import position from './modules/position'
import employee from './modules/employee'
import stuff_tag from './modules/stuff_tag'
import filter from './modules/filter'


export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    gender,
    type_contract,
    country,
    position,
    employee,
    stuff_tag,
    filter
  }
})
