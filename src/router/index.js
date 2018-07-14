import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Verification/Login.vue'
import Register from '@/components/Verification/Register.vue'
import MyIndex from '@/components/My/Index.vue'
import MySubmissions from '@/components/My/Submissions.vue'
import MyUV from '@/components/My/UVIndex.vue'
import MySubmissionsPaper from '@/components/My/Submissions/Paper.vue'
import PagesIndex from '@/components/Pages/Index.vue'
import PagesDetail from '@/components/Pages/Pages.vue'
import AddPaperSubmission from '@/components/My/Submissions/Paper/Add.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        App: Home
      }
    },
    {
      path: '/login',
      name: 'Login',
      components: {
        App: Login
      }
    },
    {
      path: '/register',
      name: 'Register',
      components: {
        App: Register
      }
    },
    {
      path: '/my',
      name: 'My Base Object',
      components: {
        App: MyIndex
      },
      children: [{
        path: '',
        name: 'My UV / Homepage',
        components: {
          My: MyUV
        }
      }, {
        path: 'submissions',
        components: {
          My: MySubmissions
        },
        children: [{
          path: 'paper',
          components: {
            MySubmissions: MySubmissionsPaper
          }
        }, {
          path: 'add',
          components: {
            MySubmissions: AddPaperSubmission
          }
        }]
      }]
    },
    {
      path: '/pages',
      name: 'Pages',
      components: {
        App: PagesIndex
      }
    },
    {
      path: '/pages/:page',
      name: 'Pages Detail',
      components: {
        App: PagesDetail
      }
    }
  ]
})
