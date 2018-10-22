import Vue from 'vue'
const Home = () => import('@/components/Home')
const Login = () => import('@/components/Verification/Login.vue')
const PasswordReset = () => import('@/components/Verification/PasswordReset.vue')
const Register = () => import('@/components/Verification/Register.vue')
const PasswordRegenerate = () => import('@/components/Verification/PasswordRegenerate.vue')
const MyIndex = () => import('@/components/My/Index.vue')
const MySubmissions = () => import('@/components/My/Submissions.vue')
const MyUV = () => import('@/components/My/UVIndex.vue')
const MySubmissionsPaper = () => import('@/components/My/Submissions/Paper.vue')
const Reviewer = () => import('@/components/Review/Reviewer.vue')
const Chairman = () => import('@/components/Review/CategoryChair.vue')
const PaperRepo = () => import('@/components/Review/Chairman/PaperRepo.vue')
const Promote = () => import('@/components/Review/Chairman/Promote.vue')
const PagesIndex = () => import('@/components/Pages/Index.vue')
const PagesDetail = () => import('@/components/Pages/Pages.vue')
const AddPaperSubmission = () => import('@/components/My/Submissions/Paper/Add.vue')
const MyProfileEdit = () => import('@/components/My/Account/EditProfile.vue')
const NotFoundError = () => import('@/components/NotFound.vue')
const EditPaperSubmission = () => import('@/components/My/Submissions/Paper/Edit.vue')
const ConferenceRegistration = () => import('@/components/My/Attendee.vue')
const Success = () => import('@/components/Success.vue')
const SuccessRegistration = () => import('@/components/SuccessRegistration.vue')
const Pricing = () => import('@/components/My/Pricing.vue')
const Donation = () => import('@/components/My/Donation.vue')

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Login)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#app > div.header.ant-layout-header > ul > li.disable-activation.ant-menu-item > a > button').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
