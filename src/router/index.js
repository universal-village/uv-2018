import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import(/* webpackChunkName: "home" */ '@/components/Home')
const Login = () => import(/* webpackChunkName: "user" */ '@/components/Verification/Login.vue')
const PasswordReset = () => import(/* webpackChunkName: "user" */ '@/components/Verification/PasswordReset.vue')
const Register = () => import(/* webpackChunkName: "user" */ '@/components/Verification/Register.vue')
const PasswordRegenerate = () => import(/* webpackChunkName: "user" */ '@/components/Verification/PasswordRegenerate.vue')
const MyIndex = () => import(/* webpackChunkName: "my" */ '@/components/My/Index.vue')
const MySubmissions = () => import(/* webpackChunkName: "my" */ '@/components/My/Submissions.vue')
const MyUV = () => import(/* webpackChunkName: "my" */ '@/components/My/UVIndex.vue')
const MySubmissionsPaper = () => import(/* webpackChunkName: "home" */ '@/components/My/Submissions/Paper.vue')
const Reviewer = () => import(/* webpackChunkName: "review" */ '@/components/Review/Reviewer.vue')
const Chairman = () => import(/* webpackChunckName: "chairman" */ '@/components/Review/CategoryChair.vue')
const PaperRepo = () => import(/* webpackChunckName: "chairman" */ '@/components/Review/Chairman/PaperRepo.vue')
const Promote = () => import(/* webpackChunckName: "chairman" */ '@/components/Review/Chairman/Promote.vue')
const PagesIndex = () => import(/* webpackChunkName: "home" */ '@/components/Pages/Index.vue')
const PagesDetail = () => import(/* webpackChunkName: "home" */ '@/components/Pages/Pages.vue')
const AddPaperSubmission = () => import(/* webpackChunkName: "my" */ '@/components/My/Submissions/Paper/Add.vue')
const MyProfileEdit = () => import(/* webpackChunkName: "my" */ '@/components/My/Account/EditProfile.vue')
const NotFoundError = () => import(/* webpackChunkName: "home" */ '@/components/NotFound.vue')
const EditPaperSubmission = () => import(/* webpackChunkName: "my" */ '@/components/My/Submissions/Paper/Edit.vue')
const ConferenceRegistration = () => import(/* webpackChunkName: "my" */ '@/components/My/Attendee.vue')
const Success = () => import(/* webpackChunkName: "home" */ '@/components/Success')

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
      path: '/regenerate-password',
      name: 'Regenerate Password',
      components: {
        App: PasswordRegenerate
      }
    },
    {
      path: '/reviewer',
      name: 'Reviewer',
      components: {
        App: Reviewer
      }
    },
    {
      path: '/chairman',
      components: {
        App: Chairman
      },
      children: [{
        path: 'paper-repo',
        name: 'Chairman / PaperRepository',
        components: {
          Chairman: PaperRepo
        }
      },
      {
        path: 'promote',
        name: 'Chairman / Promote',
        components: {
          Chairman: Promote
        }
      }]
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
      path: '/uv2013',
      beforeEnter () {
        window.location = 'http://www.universal-village.org/content/welcome-first-universal-village-conference-2013-0'
      }
    },
    {
      path: '/uv2014',
      beforeEnter () {
        window.location = 'https://uv2014.universal-village.org'
      }
    },
    {
      path: '/uv2016',
      beforeEnter () {
        window.location = 'https://uv2016.universal-village.org'
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
