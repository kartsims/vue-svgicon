import 'polyfill'
import Vue from 'vue'
import App from './App.vue'
import * as svgicon from 'vue-svgicon'

// register svgicon global
Vue.component('svgicon', svgicon)

new Vue({
  el: '#app',
  render: h => h(App)
})
