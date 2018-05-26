import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      buoyCoordinates: [{
          lat: 24.452314,
          lon: -81.874989
      }, {
          lat: 24.452353,
          lon: -81.877551
      },{
          lat: 24.452398,
          lon: -81.879716
      }, {
          lat: 24.451870,
          lon: -81.878599
      }]
  },
  mutations: {

  },
  actions: {

  }
})
