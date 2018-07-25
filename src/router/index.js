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
const MyProfileEdit = () => import(/* webpackChunkName: "my" */ '@/components/My/Account/EditProfile.vue')
const NotFoundError = () => import(/* webpackChunkName: "home" */ '@/components/NotFound.vue')
const EditPaperSubmission = () => import(/* webpackChunkName: "my" */ '@/components/My/Submissions/Paper/Edit.vue')
const ConferenceRegistration = () => import(/* webpackChunckName: "my" */ '@/components/My/Attendee.vue')
const Success = () => import(/* webpackChunkName: "sucess" */ '@/components/Success')

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        App: Home
      }
    },
    {
      path: '/success',
      name: 'Success',
      components: {
        App: Success
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
        name: 'My UV / Submissions',
        components: {
          My: MySubmissions
        },
        children: [{
          path: 'paper',
          name: 'My UV / Submissions / Paper',
          components: {
            MySubmissions: MySubmissionsPaper
          }
        }, {
          path: 'add',
          name: 'My UV / Submissions / Add',
          components: {
            MySubmissions: AddPaperSubmission
          }
        }, {
          path: 'edit/:paperId',
          name: 'My UV / Submissions / Edit',
          components: {
            MySubmissions: EditPaperSubmission
          }
        }]
      }, {
        path: 'profile',
        name: 'My Profile',
        components: {
          My: MyProfileEdit
        }
      }]
    },
    {
      path: '/pages',
      name: 'Static Pages Index',
      components: {
        App: PagesIndex
      }
    },
    {
      path: '/pages/:page',
      name: 'Static Pages Detail',
      components: {
        App: PagesDetail
      }
    },
    {
      path: '/conference-registration',
      name: 'My Conference Attendee',
      components: {
        App: ConferenceRegistration
      }
    },
    {
      path: '*',
      name: 'Not Found',
      components: {
        App: NotFoundError
      }
    }
  ]
})
