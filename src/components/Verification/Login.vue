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
          <h1>Login &nbsp; <span style="font-size: 60%;">Not a member? <router-link to="/register">Register ></router-link></span></h1>
          <a-form @submit="handleSubmit" :autoFormCreate="(form)=>{this.form = form}">
            <a-form-item
              label='E-mail'
              :labelCol="{ span: 5 }"
              :wrapperCol="{ span: 12 }"
              fieldDecoratorId="email"
              :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your E-mail!' }]}"
            >
              <a-input placeholder="E-mail" v-model="email" ref="emailInput">
                <a-icon slot="prefix" type="user" />
                <a-icon v-if="email" slot="suffix" type="close-circle" @click="emitEmptyEmail" style="cursor: pointer;" />
              </a-input>
            </a-form-item>
            <a-form-item
              label='Password'
              :labelCol="{ span: 5 }"
              :wrapperCol="{ span: 12 }"
              fieldDecoratorId="password"
              :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your password!' }]}"
            >
              <a-input placeholder="Password" v-model="password" ref="passwordInput">
                <a-icon slot="prefix" type="lock" />
                <a-icon v-if="password" slot="suffix" type="close-circle" @click="emitEmptyPassword" style="cursor: pointer;"/>
                <a-icon v-if="!password" slot="suffix" type="question-circle" @click="forgotPassword" style="cursor: pointer;" />
              </a-input>
            </a-form-item>
            <a-form-item
              :wrapperCol="{ span: 12, offset: 5 }"
            >
              <!--<vue-recaptcha :sitekey="this.$store.state.sitekey">-->
                <a-button type='primary' htmlType='submit' style="width: 100%;" :loading="spinning">
                  Log In
                </a-button>
              <!--</vue-recaptcha>-->
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
let sha = shaHash.sha256.create()
export default {
  name: 'Login',
  components: {
    VueRecaptcha
  },
  data () {
    return {
      email: '',
      password: '',
      spinning: false
    }
  },
  watch: {
    '$route': 'checkLoginStatus'
  },
  created () {
    this.checkLoginStatus()
  },
  methods: {
    emitEmptyEmail () {
      this.$refs.emailInput.focus()
      this.email = ''
      this.form.setFieldsValue({email: ''})
    },
    emitEmptyPassword () {
      this.$refs.passwordInput.focus()
      this.password = ''
      this.form.setFieldsValue({password: ''})
    },
    handleSubmit (e) {
      this.spinning = true
      e.preventDefault()
      sha.update(this.form.getFieldsValue().password + this.$store.state.authenticate.shaSalt)
      let passwordHash = sha.hex()
      this.$http.post(this.$store.state.endpoint.api + '/login', {email: this.email, password: passwordHash}, {emulateJSON: true}).then(response => {
        console.log(response.body.flag)
        this.spinning = false
        if (response.body.flag === true) {
          this.$message.success('Successfully logged in. Redirecting you to the homepage in 3s.', 4)
          this.$store.state.authenticate.username = this.email
          this.$store.state.authenticate.token = this.email
          setTimeout(() => {
            this.$router.push('/')
          }, 3000)
        } else {
          this.$message.error('Username or Password is incorrect. Check your credentials and try again.', 4)
        }
      }, response => {
        this.spinning = false
        this.$message.error('Internal Server Error. Please try again.', 4)
      })
    },
    checkStatus (statusCode) {
      if (statusCode === 403) {
        this.$router.push('/login')
      } else if (statusCode > 500) {
        this.$router.push('/error/server-error')
      } else if (statusCode === 404) {
        this.$router.push('/error/not-found')
      } else {
        this.$router.push('/error/unknown-error')
      }
    },
    checkLoginStatus () {
      if (this.$store.state.authenticate.token.length > 0) {
        this.$router.go(-1)
      } else if (this.$store.state.authenticate.username.length > 0) {
        this.$router.go(-1)
      }
    },
    forgotPassword () {
      this.$router.push('/reset-password')
    }
  }
}
</script>

<style scoped>
  .content {
    padding: 2em 4em;
    max-width: 50vw;
  }

  h1 {
    /*margin-top: .25em;*/
    margin-left: -.5em;
    /*font-size: 2.75em;*/
    margin-bottom: 1em;
  }
</style>
