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
          <h1>Reset Password &nbsp; <span style="font-size: 60%;"><router-link to="/login">Login ></router-link></span></h1>
          <a-form @submit="handleSubmit" :autoFormCreate="(form)=>{this.form = form}">
            <div v-if="progress === 0">
              <a-form-item
                label='E-mail'
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 12 }"
                fieldDecoratorId="email"
                :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your E-mail!' }]}"
              >
                <a-input placeholder="E-mail" v-model="email" ref="emailInput">
                  <a-icon slot="prefix" type="user" />
                  <a-icon v-if="email" slot="suffix" type="close-circle" @click="emitEmptyEmail" />
                </a-input>
              </a-form-item>
              <vue-recaptcha :sitekey="this.$store.state.sitekey">
                <a-button type='primary' :loading="loadingStatus" @click="checkMail">
                  Next <a-icon type="right"></a-icon>
                </a-button>
              </vue-recaptcha>
            </div>
            <div v-else-if="progress === 1">
              <a-form-item
                label='Password'
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 12 }"
                fieldDecoratorId="password"
                :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your password!' }]}"
              >
                <a-input placeholder="Password" v-model="password" ref="passwordInput">
                  <a-icon slot="prefix" type="lock" />
                  <a-icon v-if="password" slot="suffix" type="close-circle" @click="emitEmptyPassword" />
                </a-input>
              </a-form-item>
              <a-form-item
                :wrapperCol="{ span: 12, offset: 3 }"
              >
                <vue-recaptcha :sitekey="this.$store.state.sitekey">
                  <a-button type='primary'>
                    Submit
                  </a-button>
                </vue-recaptcha>
              </a-form-item>
            </div>
            <div v-else>
              <a-alert
                message="Invalid Session."
                description="Session Invalid. Please refresh page. If that doesn't help, please contact administrator."
                type="error"
                showIcon
              />
            </div>
          </a-form>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout-content>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'
const shaHash = require('js-sha256')
let sha = shaHash.sha256.create()
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
      loadingStatus: false
    }
  },
  methods: {
    handleSubmit (e) {
      this.loadingStatus = true
      e.preventDefault()
      sha.update(this.password + this.$store.state.authenticate.shaSalt)
      let passwordHash = sha.hex()
      this.$http.post(this.$store.state.endpoint + '/resetPassword', {email: encodeURIComponent(this.email), password: passwordHash}, {emulateJSON: true}).then(response => {
        console.log(response.body.flag)
        this.loadingStatus = false
        if (response.body.flag === true) {
          this.$message.success('Your password has been successfully reset. Please log in.', 4)
          this.$router.push('/login')
        } else {
          this.$message.error('Password reset failed. Please check your input.', 10)
        }
      }, response => {
        this.loadingStatus = false
        this.$message.error('Internal Server Error. Please try again.', 10)
      })
    },
    checkMail () {
      this.loadingStatus = true
      this.$http.post(this.$store.state.endpoint + '/checkMail', {email: encodeURIComponent(this.email)}, {emulateJSON: true}).then(response => {
        console.log(response.body.flag)
        this.loadingStatus = false
        if (response.body.flag === true) {
          this.progress = 1
        } else {
          this.$message.error('E-mail is incorrect. Check your input and try again.', 10)
        }
      }, response => {
        this.loadingStatus = false
        this.$message.error('Internal Server Error. Please try again.', 10)
        this.progress = 1 // DEVFAKE
      })
    }
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
