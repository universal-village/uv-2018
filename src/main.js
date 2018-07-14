// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueTitlecase from 'vue-titlecase'
import VueLodash from 'vue-lodash'
import VueRecaptcha from 'vue-recaptcha'
import createPersistedState from 'vuex-persistedstate'
import Antd from 'vue-antd-ui'
import 'vue-antd-ui/dist/antd.css'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueTitlecase)
Vue.use(Antd)
Vue.use(VueLodash)

const store = new Vuex.Store({
  state: {
    endpoint: 'http://128.31.37.81:8080/uv2018',
    navPageList: [],
    authenticate: {
      category: [],
      token: '1',
      role: 0,
      username: 'root',
      permission: 0
    },
    sitekey: '6Ldn5WMUAAAAAAbUaPRaIVkp2C8HrpIVvjM2vf0U'
  },
  plugins: [
    createPersistedState()
  ]
})

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App, VueRecaptcha },
  template: '<App />'
})
