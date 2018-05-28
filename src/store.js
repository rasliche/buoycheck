import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      zones: {
          sandKeySpa: {
              label: "Sand Key SPA",
              buoys: [{
                  id: "S1",
                  type: 'mooring',
                  present: false,
                  lat: 24.452314,
                  lon: -81.874989
              }, {
                  id: "S2",
                  type: 'mooring',
                  present: false,
                  lat: 24.452353,
                  lon: -81.877551
              },{
                  id: "S3",
                  type: 'mooring',
                  present: true,
                  lat: 24.452398,
                  lon: -81.879716
              }, {
                  id: "S4",
                  type: 'mooring',
                  present: true,
                  lat: 24.451870,
                  lon: -81.878599
              }]
          },
          looeKey: {
              label: "Looe Key SPA",
              buoys: [{
                  id: "L1",
                  type: 'mooring',
                  present: false,
                  lat: 24.452314,
                  lon: -81.874989
              }, {
                  id: "L2",
                  type: 'mooring',
                  present: false,
                  lat: 24.452353,
                  lon: -81.877551
              },{
                  id: "L3",
                  type: 'mooring',
                  present: true,
                  lat: 24.452398,
                  lon: -81.879716
              }, {
                  id: "L4",
                  type: 'mooring',
                  present: true,
                  lat: 24.451870,
                  lon: -81.878599
              }, {
                  id: "L5",
                  type: 'mooring',
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
