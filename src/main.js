// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueTitlecase from 'vue-titlecase'
import VueLodash from 'vue-lodash'
import VueRecaptcha from 'vue-recaptcha'
import VueAnalytics from 'vue-analytics'
import Carousel3d from 'vue-carousel-3d'
import VueModal from 'vue-js-modal'
import VueStripeCheckout from 'vue-stripe-checkout'
import * as VueGoogleMaps from 'vue2-google-maps'
import createPersistedState from 'vuex-persistedstate'
import Antd from 'vue-antd-ui'
import 'vue-antd-ui/dist/antd.css'
import App from './App'
import router from './router'
import LogRocket from 'logrocket'
import createPlugin from 'logrocket-vuex'

Vue.config.productionTip = false

const logrocketPlugin = createPlugin(LogRocket)
LogRocket.init('itcl40/uv2018-dev', {
  dom: {
    baseHref: 'https://uv2018-dev-web.s3.amazonaws.com/',
  }
})
Vue.prototype.$LogRocket = LogRocket
Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueTitlecase)
Vue.use(Antd)
Vue.use(VueLodash)
Vue.use(VueModal, { dynamic: true })
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
Vue.use(Carousel3d)
Vue.use(VueStripeCheckout, {
  key: 'pk_test_dOIDtsevAQYhVSDIECOI5fJ5',
  locale: 'auto',
  currency: 'USD',
  billingAddress: true,
  panelLabel: 'Subscribe {{amount}}'
})

const store = new Vuex.Store({
  state: {
    endpoint: {
      // api: 'https://api-beta.universal-village.org/uv-web',
      api: 'http://localhost:8080/uv2018',
      // api: 'https://api-beta.universal-village.org',
      pages: 'https://cdn.universal-village.org/static-pages/v-s2kxYGkg/'
    },
    navPageList: [],
    authenticate: {
      username: '',
      shaSalt: 'universal-village'
    },
    sitekey: '6LeE8GQUAAAAADw5NwLtA6Ge_trrLCvTkJe8yD7d'
  },
  plugins: [
    createPersistedState(),
    logrocketPlugin
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
