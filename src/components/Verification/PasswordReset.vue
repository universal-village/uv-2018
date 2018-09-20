<template>
  <a-layout-content style="padding: 0 50px">
    <a-layout style="padding: 0 24px 24px; background: rgba(255, 255, 255, .75);">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item v-for="navPage in this.$store.state.navPageList" :key="navPage">
          {{ navPage | capitalize }}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content :style="{ padding: '24px', margin: 0, minHeight: '280px' }">
        <div class="content">
          <h1>Reset Password &nbsp; <a-divider type="vertical" /><span style="font-size: 60%;">or <router-link to="/login" class="account-link">Login ></router-link></span></h1>
          <a-form @submit="handleSubmit" :autoFormCreate="(form)=>{this.form = form}">
            <a-form-item
              label='E-mail'
              :labelCol="{ span: 5 }"
              :wrapperCol="{ span: 12 }"
              fieldDecoratorId="email"
              :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your E-mail!' }]}"
            >
              <a-input placeholder="E-mail" v-model="binding.email" ref="emailInput">
                <a-icon slot="prefix" type="user" />
                <a-icon v-if="binding.email" slot="suffix" type="close-circle" @click="emitEmptyField" />
              </a-input>
            </a-form-item>
            <a-form-item
              label='Old Password'
              :labelCol="{ span: 5 }"
              :wrapperCol="{ span: 12 }"
              fieldDecoratorId="oldPassword"
              :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your old password!' }]}"
            >
              <a-input placeholder="Old Password" v-model="binding.oldPassword">
                <a-icon slot="prefix" type="lock" />
                <a-icon v-if="binding.oldPassword" slot="suffix" type="close-circle" @click="emitEmptyField" />
              </a-input>
            </a-form-item>
            <a-form-item
              label='New Password'
              :labelCol="{ span: 5 }"
              :wrapperCol="{ span: 12 }"
              fieldDecoratorId="newPassword"
              :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your new password!' }]}"
            >
              <a-input placeholder="New Password" v-model="binding.newPassword">
                <a-icon slot="prefix" type="lock" />
                <a-icon v-if="binding.newPassword" slot="suffix" type="close-circle" @click="emitEmptyField" />
              </a-input>
            </a-form-item>
            <a-form-item
              :wrapperCol="{ span: 12, offset: 3 }"
            >
              <vue-recaptcha :sitekey="this.$store.state.sitekey" @verify="handleSubmit">
                <a-button type='primary' :loading="loadingStatus">
                  Submit <a-icon type="right"></a-icon>
                </a-button>
              </vue-recaptcha>
            </a-form-item>
          </a-form>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout-content>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'
const shaHash = require('js-sha256')
let shaOld = shaHash.sha256.create()
let shaNew = shaHash.sha256.create()
export default {
  name: 'PasswordReset',
  components: {
    VueRecaptcha
  },
  data () {
    return {
      email: '',
      password: '',
      spinning: false,
      progress: 0,
      loadingStatus: false,
      binding: {
        email: '',
        oldPassword: '',
        newPassword: ''
      }
    }
  },
  methods: {
    handleSubmit (recaptchaToken) {
      this.loadingStatus = true
      shaOld.update(this.form.getFieldsValue().oldPassword + this.$store.state.authenticate.shaSalt)
      let oldPasswordHash = shaOld.hex()
      shaNew.update(this.form.getFieldsValue().newPassword + this.$store.state.authenticate.shaSalt)
      let newPasswordHash = shaNew.hex()
      this.$http.post(this.$store.state.endpoint.api + '/resetPassword', {email: this.form.getFieldsValue().email, password: oldPasswordHash, password2: newPasswordHash, token: recaptchaToken}, {emulateJSON: true}).then(response => {
        console.log(response.body.flag)
        this.loadingStatus = false
        if (response.body.flag === true) {
          this.$message.success('Your password has been successfully reset. Please log in.', 4)
          this.$router.push('/login')
        } else {
          this.$message.error('Password reset failed. Please check your input.', 4)
        }
      }, response => {
        this.loadingStatus = false
        this.$message.error('Internal Server Error. Please try again.', 4)
      })
      window.grecaptcha.reset()
    },
    emitEmptyField (e) {
      // eslint-disable-next-line
      eval('this.form.setFieldsValue({' + e.path[2].childNodes[1].attributes.id.value + ': ""})')
    }
    // checkMail (recaptchaToken) {
    //   this.loadingStatus = true
    //   console.log('checkMail Response from recaptcha ' + recaptchaToken)
    //   this.$http.post(this.$store.state.endpoint.api + '/checkMail', {email: this.email, captcha: recaptchaToken}, {emulateJSON: true}).then(response => {
    //     console.log(response.body.flag)
    //     this.loadingStatus = false
    //     if (response.body.flag === true) {
    //       this.progress = 1
    //     } else {
    //       this.$message.error('E-mail is incorrect. Check your input and try again.', 4)
    //     }
    //   }, response => {
    //     this.loadingStatus = false
    //     this.$message.error('Internal Server Error. Please try again.', 4)
    //   })
    // },
    // onVerify (e) {
    //   console.log('recaptcha Verified. Response: ' + e)
    // }
  }
}
</script>

<style scoped>
  .content {
    padding: 2em 4em;
  }

  h1 {
    /*margin-top: .25em;*/
    margin-left: -.5em;
    /*font-size: 2.75em;*/
    margin-bottom: 1em;
  }
</style>
