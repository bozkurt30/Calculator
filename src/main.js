import Vue from 'vue'
import App from './App.vue'
import 'vue-awesome'
import VueRouter from 'vue-router'

export const eventBus = new Vue();

Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(App)
})
