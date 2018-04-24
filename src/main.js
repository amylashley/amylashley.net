import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from './App.vue'
import 'babel-polyfill'
window.axios = require('axios');



Vue.use(Vuetify)

new Vue({
  el: '#app',
  render: h => h(App)
})
