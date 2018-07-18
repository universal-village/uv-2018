// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueTitlecase from 'vue-titlecase'
import VueLodash from 'vue-lodash'
import VueRecaptcha from 'vue-recaptcha'
import VueAnalytics from 'vue-analytics'
import * as VueGoogleMaps from 'vue2-google-maps'
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
Vue.use(VueAnalytics, {
  id: 'UA-122336687-1',
  router
})
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAuciiA4rPTALnygCCw1xT0EcHV-Oqh1y0',
    libraries: 'places'
  }
})

const store = new Vuex.Store({
  state: {
    endpoint: {
      api: 'https://api-beta.universal-village.org/uv-web',
      pages: 'https://cdn.universal-village.org/static-pages/'
    },
    navPageList: [],
    authenticate: {
      token: '1',
      role: 0,
      username: 'root',
      permission: 0,
      shaSalt: 'universal-village'
    },
    sitekey: '6LeE8GQUAAAAADw5NwLtA6Ge_trrLCvTkJe8yD7d'
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
