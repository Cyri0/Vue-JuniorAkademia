import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  router,
  template: '<App/>',
  components: { App }
})
