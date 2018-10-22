<template>
  <a-layout-content class="main-content">
    <a-layout style="padding: 0 24px 24px; background: rgba(255, 255, 255, .75);">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item v-for="navPage in this.$store.state.navPageList" :key="navPage">
          {{ navPage | capitalize }}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content :style="{ padding: '24px', margin: 0, minHeight: '280px' }">
        <div class="content">
          <h1>Request Password Regenerate</h1>
          <div v-if="this.$route.query.from !== 'notice'">
            <a-alert
              message="Notice"
              description="Registered users should be regenerate their password due to security considerations."
              type="info"
              showIcon
            />
          </div>
          <br>
          <a-form :autoFormCreate="(form)=>{this.form = form}">
            <a-form-item
              label='E-mail'
              :labelCol="{ span: 5 }"
              :wrapperCol="{ span: 12 }"
              fieldDecoratorId="email"
              :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your E-mail!' }]}"
            >
              <a-input placeholder="E-mail" v-model="email" ref="emailInput">
                <a-icon slot="prefix" type="user"/>
                <a-icon v-if="email" slot="suffix" type="close-circle" @click="emitEmptyField"
                        style="cursor: pointer;"/>
              </a-input>
            </a-form-item>
            <a-form-item
              :wrapperCol="{ sm: { span: 12, offset: 5} }"
            >
              <vue-recaptcha :sitekey="this.$store.state.sitekey" @verify="handleSubmit">
                <a-button type='primary' htmlType='submit' style="width: 100%;" :loading="spinning">
                  Request Password Reset
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
export default {
  name: 'password-regenerate',
  components: {
    VueRecaptcha
  },
  props: [],
  data () {
    return {
      email: '',
      spinning: false
    }
  },
  methods: {
    emitEmptyField: function () {
      this.email = ''
    },
    handleSubmit: function (recaptchaToken) {
      this.$http.post(this.$store.state.endpoint.api + '/regeneratePassword', {
        email: this.email,
        token: recaptchaToken
      }, {emulateJSON: true}).then(response => {
        console.log(response.body.flag)
        this.spinning = false
        if (response.body.flag === true) {
          this.$message.success('Your password has been regenerated. A mail with your new password has been sent to your mailbox.', 4)
          // this.$store.state.authenticate.username = this.email
          this.$router.push('/success')
        } else {
          this.$message.error('Fail to regenerate password, please try later', 4)
        }
      }, response => {
        this.spinning = false
        this.$message.error('Internal Server Error. Please try again.', 4)
      })
    }
  }
}
</script>

<style scoped>
  .password-regenerate {

  }

  @media only screen and (max-width: 960px) {
      .ant-layout-content {
      padding: 0 20px;
    }
  }
  @media only screen and (min-width: 960px){
      .ant-layout-content.main-content {
        padding: 0 10%;
    }
      .ant-layout {
        padding: 0 24px 24px;
    }
      /* .ant-collapse-item  {
        font-size: 1.5em !important;
        font-weight: bolder;
      } */
  }
</style>
