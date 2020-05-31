import state from './moduleDepartementState.js'
import mutations from './moduleDepartementMutations.js'
import actions from './moduleDepartementActions.js'
import getters from './moduleDepartementGetters.js'

export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}
