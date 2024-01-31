
import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'
import './config/msgs'

Vue.config.productionTip = false


// Temporário
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlJhZmFlbCBMaW1hIERhbG1hZ3JvIiwiZW1haWwiOiJyYWZhLmxpbWFkYWxtYWdyb0BnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNzA2NDYzMDExLCJleHAiOjE3MDY3MjIyMTF9.UXuxJdoaV6yUVsw5MEMCG3mPaYrLoG_wA7MjvF1CN6Q'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')