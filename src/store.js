import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      zones: {
          sandKeySpa: {
              label: "Sand Key SPA",
              buoys: [{
                  id: "A",
                  type: 'spa',
                  present: true,
                  lat: 24.452314,
                  lon: -81.874989
              }, {
                  id: "B",
                  type: 'spa',
                  present: false,
                  lat: 24.452353,
                  lon: -81.877551
              },{
                  id: "C",
                  type: 'spa',
                  present: true,
                  lat: 24.452398,
                  lon: -81.879716
              }, {
                  id: "D",
                  type: 'spa',
                  present: true,
                  lat: 24.451870,
                  lon: -81.878599
              }]
          },
          looeKey: {
              label: "Looe Key SPA",
              buoys: [{
                  id: "A",
                  type: 'spa',
                  present: false,
                  lat: 24.452314,
                  lon: -81.874989
              }, {
                  id: "B",
                  type: 'spa',
                  present: false,
                  lat: 24.452353,
                  lon: -81.877551
              },{
                  id: "C",
                  type: 'spa',
                  present: true,
                  lat: 24.452398,
                  lon: -81.879716
              }, {
                  id: "D",
                  type: 'spa',
                  present: true,
                  lat: 24.451870,
                  lon: -81.878599
              }]
          }
      }
  },
  // synchronous changes
  mutations: {

  },
  // asynchronous logic
  actions: {

  }
})
