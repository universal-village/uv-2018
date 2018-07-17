import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import(/* webpackChunkName: "home" */ '@/components/Home')
const Login = () => import(/* webpackChunkName: "user" */ '@/components/Verification/Login.vue')
const PasswordReset = () => import(/* webpackChunkName: "user" */ '@/components/Verification/PasswordReset.vue')
const Register = () => import(/* webpackChunkName: "user" */ '@/components/Verification/Register.vue')
const MyIndex = () => import(/* webpackChunkName: "my" */ '@/components/My/Index.vue')
const MySubmissions = () => import(/* webpackChunkName: "my" */ '@/components/My/Submissions.vue')
const MyUV = () => import(/* webpackChunkName: "my" */ '@/components/My/UVIndex.vue')
const MySubmissionsPaper = () => import(/* webpackChunkName: "home" */ '@/components/My/Submissions/Paper.vue')
const PagesIndex = () => import(/* webpackChunkName: "home" */ '@/components/Pages/Index.vue')
const PagesDetail = () => import(/* webpackChunkName: "home" */ '@/components/Pages/Pages.vue')
const AddPaperSubmission = () => import(/* webpackChunkName: "my" */ '@/components/My/Submissions/Paper/Add.vue')

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
      path: '/reset-password',
      name: 'Reset Password',
      components: {
        App: PasswordReset
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
