import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from './App.vue'
import 'babel-polyfill'
import './stylus/main.styl'

window.axios = require('axios');

Vue.use(Vuetify, {
    theme: {
        "primary": "#1a237e",
        "secondary": "#424242",
        "accent": "#82B1FF",
        "error": "#FF5252",
        "info": "#2196F3",
        "success": "#4CAF50",
        "warning": "#FFC107"
    }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
