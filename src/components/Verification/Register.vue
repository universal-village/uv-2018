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
          <a-spin :spinning="spinning">
            <h1>Register &nbsp; <span style="font-size: 60%;">Already a member? <router-link
              to="/login">Login ></router-link></span></h1>

            <div class="stepShow">
              <a-steps direction="vertical" size="small" :current="current">
                <a-step v-for="item in steps" :key="item.name" :title="item.name">
                  <a-icon v-if="item.index === current" type="loading" slot="icon"/>
                  <a-icon v-else-if="item.index > current" :type="item.icon" slot="icon"/>
                  <a-icon v-else type="check" slot="icon"/>
                </a-step>
              </a-steps>
            </div>
            <!--<a-button @click="dev">dev!</a-button>-->

            <a-form :autoFormCreate="(form)=>{this.form = form}">
              <div v-show="current === 0">

                <a-form-item
                  label='Title'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="title"
                  :fieldDecoratorOptions="{rules: [{ required: false, message: 'How should we call you?' }]}"
                >
                  <a-input placeholder="Title" v-model="title">
                    <a-icon slot="prefix" type="user"/>
                    <a-icon v-if="title" slot="suffix" type="close-circle" class="emit-closer" @click="emitEmptyField"/>
                  </a-input>
                </a-form-item>

                <a-form-item
                  label='First Name'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="firstname"
                  :fieldDecoratorOptions="{rules: [{max: 45, min: 1, message: 'Field \'First Name\' must be shorter than 45 characters.'}, { required: true, message: 'Please input your First Name!' }]}"
                >
                  <a-input placeholder="First Name" v-model="firstname" ref="firstnameInput">
                    <a-icon slot="prefix" type="user"/>
                    <a-icon v-if="firstname" slot="suffix" type="close-circle" class="emit-closer" @click="emitEmptyField"/>
                  </a-input>
                </a-form-item>

                <a-form-item
                  label='Middle Name'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="middlename"
                  :fieldDecoratorOptions="{rules: [{max: 45, min: 0, message: 'Field \'Middle Name\' must be shorter than 45 characters.'}]}"
                >
                  <a-input placeholder="Middle Name" v-model="middlename" ref="middlenameInput">
                    <a-icon slot="prefix" type="user"/>
                    <a-icon v-if="middlename" slot="suffix" type="close-circle" class="emit-closer" @click="emitEmptyField"/>
                  </a-input>
                </a-form-item>

                <a-form-item
                  label='Last Name'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="lastname"
                  :fieldDecoratorOptions="{rules: [{max: 45, min: 1, message: 'Field \'Last Name\' must be shorter than 45 characters.'}, { required: true, message: 'Please input your Last Name!' }]}"
                >
                  <a-input placeholder="Last Name" v-model="lastname" ref="lastnameInput">
                    <a-icon slot="prefix" type="user"/>
                    <a-icon v-if="lastname" slot="suffix" type="close-circle" class="emit-closer" @click="emitEmptyField"/>
                  </a-input>
                </a-form-item>

                <a-form-item
                  label='Name in own Language'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="nameInOwnLanguage"
                  :fieldDecoratorOptions="{rules: [{max: 200, min: 1, message: 'Field \'Name in own Language\' must be shorter than 200 characters.'}, { required: true, message: 'Please input your Name in own Language!' }]}"
                >
                  <a-input placeholder="Name in own Language" v-model="nameInOwnLanguage" ref="nameInOwnLanguageInput">
                    <a-icon slot="prefix" type="contacts"/>
                    <a-icon v-if="nameInOwnLanguage" slot="suffix" type="close-circle" class="emit-closer" @click="emitEmptyField"/>
                  </a-input>
                </a-form-item>

                <a-form-item
                  label='E-mail'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="email"
                  :fieldDecoratorOptions="{rules: [
                  { message: 'The input must be an E-mail.', type: 'email' },
                  { max: 100, min: 1, message: 'Field \'E-mail\' must be shorter than 100 characters.' },
                  { required: true, message: 'Please input your E-mail!' }
                  ]}"
                >
                  <a-input placeholder="example@example.com" v-model="email" ref="emailInput">
                    <a-icon slot="prefix" type="mail"/>
                    <a-icon v-if="email" slot="suffix" type="close-circle" class="emit-closer" @click="emitEmptyField"/>
                  </a-input>
                </a-form-item>

                <a-form-item
                  label='Password'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="password"
                  :fieldDecoratorOptions="{rules: [{ max: 32, min: 1, message: '\'Password\' must be shorter than 100 characters.' }, { required: true, message: 'Please input your Password!' }]}"
                >
                  <a-input type="password" placeholder="Password" v-model="password" ref="passwordInput">
                    <a-icon slot="prefix" type="lock"/>
                    <a-icon v-if="password" slot="suffix" type="close-circle" class="emit-closer" @click="emitEmptyField"/>
                  </a-input>
                </a-form-item>

                <a-form-item
                  label='Confirm Password'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="confirmPassword"
                  :fieldDecoratorOptions="{rules: [{ max: 32, min: 1, message: '\'Password\' must be shorter than 100 characters.' }, { required: true, message: 'Please confirm your password!' }]}"
                >
                  <a-input type="password" placeholder="Your password again" v-model="confirmPassword"
                           ref="confirmPasswordInput">
                    <a-icon slot="prefix" type="lock"/>
                    <a-icon v-if="confirmPassword" slot="suffix" type="close-circle" class="emit-closer" @click="emitEmptyField"/>
                  </a-input>
                </a-form-item>

                <a-form-item
                  label='Birthday'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="birthdayDate"
                  :fieldDecoratorOptions="{rules: [{ required: true, message: 'What\'s your Birthday?' }]}"
                >
                  <a-date-picker @change="onChange"/>
                </a-form-item>

              </div>

              <div v-show="current === 1">

                <a-form-item
                  label='Biography'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="bios"
                  :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your Biography!' }]}"
                >
                  <a-textarea placeholder="Short summary about yourself" v-model="bios" ref="biosInput"
                              :autosize="{ minRows: 3 }">
                    <a-icon slot="prefix" type="smile"/>
                    <a-icon v-if="bios" slot="suffix" type="close-circle" class="emit-closer" @click="emitEmptyField"/>
                  </a-textarea>
                </a-form-item>

                <a-form-item
                  label='Organization'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="organization"
                  :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your Organization!' }]}"
                >
                  <a-input placeholder="Organization" v-model="organization" ref="organizationInput">
                    <a-icon slot="prefix" type="team"/>
                    <a-icon v-if="organization" slot="suffix" type="close-circle" class="emit-closer" @click="emitEmptyField"/>
                  </a-input>
                </a-form-item>

              </div>

              <div v-show="current === 2">

                <a-form-item
                  label='Address'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="address"
                  :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your Address!' }]}"
                >
                  <a-input placeholder="Address" v-model="address" ref="addressInput">
                    <a-icon slot="prefix" type="car"/>
                    <a-icon v-if="address" slot="suffix" type="close-circle" class="emit-closer" @click="emitEmptyField"/>
                  </a-input>
                </a-form-item>

                <a-form-item
                  label='City'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="city"
                  :fieldDecoratorOptions="{rules: [{ required: false, message: 'Please input your City!' }]}"
                >
                  <a-input placeholder="City" v-model="city" ref="cityInput">
                    <a-icon slot="prefix" type="car"/>
                    <a-icon v-if="city" slot="suffix" type="close-circle" class="emit-closer" @click="emitEmptyField"/>
                  </a-input>
                </a-form-item>

                <a-form-item
                  label='Zip Postal Code'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="zipcode"
                  :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your Zip Postal Code!' }]}"
                >
                  <a-input placeholder="02049" v-model="zipcode" ref="zipcodeInput">
                    <a-icon slot="prefix" type="mail"/>
                    <a-icon v-if="zipcode" slot="suffix" type="close-circle" class="emit-closer" @click="emitEmptyField"/>
                  </a-input>
                </a-form-item>

                <a-form-item
                  label='State'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="state"
                  :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your State!' }]}"
                >
                  <a-input placeholder="State" v-model="state" ref="stateInput">
                    <a-icon slot="prefix" type="car"/>
                    <a-icon v-if="state" slot="suffix" type="close-circle" class="emit-closer" @click="emitEmptyField"/>
                  </a-input>
                </a-form-item>

                <a-form-item
                  label='Country'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="country"
                  :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your Country!' }]}"
                >
                  <a-input placeholder="Country" v-model="country" ref="countryInput">
                    <a-icon slot="prefix" type="car"/>
                    <a-icon v-if="country" slot="suffix" type="close-circle" class="emit-closer" @click="emitEmptyField"/>
                  </a-input>
                </a-form-item>

                <a-form-item
                  label='Telephone'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="telephone"
                  :fieldDecoratorOptions="{rules: [{ required: false, message: 'Please input your Telephone!' }]}"
                >
                  <a-input placeholder="Telephone" v-model="telephone" ref="telephoneInput">
                    <a-icon slot="prefix" type="phone"/>
                    <a-icon v-if="telephone" slot="suffix" type="close-circle" class="emit-closer" @click="emitEmptyField"/>
                  </a-input>
                </a-form-item>

                <a-form-item
                  label='Fax'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="fax"
                  :fieldDecoratorOptions="{rules: [{ required: false, message: 'Please input your Fax!' }]}"
                >
                  <a-input placeholder="Fax" v-model="fax" ref="faxInput">
                    <a-icon slot="prefix" type="phone"/>
                    <a-icon v-if="fax" slot="suffix" type="close-circle" class="emit-closer" @click="emitEmptyField"/>
                  </a-input>
                </a-form-item>

                <a-form-item
                  label='Cellphone'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="cellphone"
                  :fieldDecoratorOptions="{rules: [{ required: false, message: 'Please input your Cellphone!' }]}"
                >
                  <a-input placeholder="Cellphone" v-model="cellphone" ref="cellphoneInput">
                    <a-icon slot="prefix" type="phone"/>
                    <a-icon v-if="cellphone" slot="suffix" type="close-circle" class="emit-closer" @click="emitEmptyField"/>
                  </a-input>
                </a-form-item>

              </div>

              <div v-show="current === 3">

                <a-form-item
                  label='I Need a Support Letter for US Visa'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="needSupport"
                  :fieldDecoratorOptions="{rules: [{ required: true, message: 'Do you need Support?' }]}"
                >
                  <a-switch v-model="needSupport" checkedChildren="Yes" unCheckedChildren="No"/>
                </a-form-item>

                <a-form-item
                  label='Passport Number'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="passport"
                  :fieldDecoratorOptions="{rules: [{ required: false, message: 'Please input your Passport Number!' }]}"
                  v-if="needSupport"
                >
                  <a-input placeholder="A12345678" v-model="passport" ref="passportInput">
                    <a-icon slot="prefix" type="idcard"/>
                    <a-icon v-if="passport" slot="suffix" type="close-circle" class="emit-closer" @click="emitEmptyField"/>
                  </a-input>
                </a-form-item>
                <vue-recaptcha :sitekey="this.$store.state.sitekey" @verify="handleSubmit">
                  <a-button type='primary' htmlType='submit' style="float: right;">
                    Submit &nbsp;
                    <a-icon type="forward"/>
                  </a-button>
                </vue-recaptcha>

              </div>

              <div v-show="current > 3">
                App Error. Please contact administrator.
              </div>

              <a-button-group style="float: right;">
                <a-button type="primary" @click="prev" v-if="current > 0 && current <= 3">
                  <a-icon type="left"/>
                  Previous
                </a-button>
                <a-button type="primary" @click="next" v-if="current >= 0 && current < 3">
                  Next
                  <a-icon type="right"/>
                </a-button>
              </a-button-group>

            </a-form>
          </a-spin>
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
      spinning: false,
      showOthers: false,
      email: '',
      password: '',
      confirmPassword: '',
      zipcode: '',
      bios: '',
      firstname: '',
      middlename: '',
      lastname: '',
      nameInOwnLanguage: '',
      organization: '',
      address: '',
      city: '',
      state: '',
      country: '',
      telephone: '',
      fax: '',
      cellphone: '',
      passport: '',
      needSupport: true,
      birthdayDate: '',
      title: '',
      current: 0,
      steps: [{
        index: 0,
        name: 'Personal Information',
        icon: 'user'
      }, {
        index: 1,
        name: 'Academic Information',
        icon: 'book'
      }, {
        index: 2,
        name: 'Contact Information',
        icon: 'phone'
      }, {
        index: 3,
        name: 'Personification',
        icon: 'skin'
      }]
    }
  },
  watch: {
    '$route': 'checkLoginStatus'
  },
  created () {
    this.checkLoginStatus()
  },
  methods: {
    next () {
      this.current++
    },
    prev () {
      this.current--
    },
    emitEmptyField (event) {
      // eslint-disable-next-line
      eval('this.form.setFieldsValue({' + event.path[2].childNodes[1].attributes.id.value + ': ""})')
      // eslint-disable-next-line
      eval('this.' + event.path[2].childNodes[1].attributes.id.value + ' = ""')
    },
    birthdayDateStringHandler (date, dateString) {
      console.log(date, dateString)
    },
    handleSubmit (recaptchaToken) {
      // if (formError()) return this.$message.error('There\'s one or more errors with your input with our registration form. Please check again.')
      this.spinning = true
      sha.update(this.password + this.$store.state.authenticate.shaSalt)
      let passwordHash = sha.hex()
      console.log('birthdayDate [%o]', this.form.getFieldValue('birthdayDate'))
      console.log(this.birthdayDate, typeof this.birthdayDate, this.birthdayDate.toString(), typeof this.birthdayDate.toString())
      this.$http.post(this.$store.state.endpoint.api + '/register', {
        email: this.email,
        password: passwordHash,
        zipcode: encodeURIComponent(this.zipcode),
        bios: encodeURIComponent(this.bios),
        firstname: encodeURIComponent(this.firstname),
        middlename: encodeURIComponent(this.middlename),
        lastname: encodeURIComponent(this.lastname),
        nameInOwnLanguage: encodeURIComponent(this.nameInOwnLanguage),
        organization: encodeURIComponent(this.organization),
        address: encodeURIComponent(this.address),
        city: encodeURIComponent(this.city),
        state: encodeURIComponent(this.state),
        country: encodeURIComponent(this.country),
        telephone: encodeURIComponent(this.telephone),
        fax: encodeURIComponent(this.fax),
        cellphone: encodeURIComponent(this.cellphone),
        passport: encodeURIComponent(this.passport),
        needSupport: encodeURIComponent(this.needSupport),
        birthyear: encodeURIComponent(this.form.getFieldValue('birthdayDate').years()),
        birthmonth: encodeURIComponent(this.form.getFieldValue('birthdayDate').months() + 1),
        birthday: encodeURIComponent(this.form.getFieldValue('birthdayDate').dates()),
        title: encodeURIComponent(this.title),
        token: recaptchaToken
      }, {emulateJSON: true}).then(response => {
        console.log(response.body.flag)
        this.spinning = false
        if (response.body.flag === true) {
          this.$message.success('Successfully registered. Please use your E-mail to log in', 3)
          this.$router.push('/login')
        } else {
          this.$message.error('Registration failed. Check your form and try again.', 4)
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
      console.log(this.birthdayDate)
      if (this.$store.state.authenticate.username.length > 0) {
        this.$router.go(-1)
      }
    },
    titleChange (e) {
      if (e === 'other') {
        this.showOthers = true
      } else {
        this.showOthers = false
      }
    },
    dev () {
      console.log(this.form.getFieldValue('birthdayDate').dates())
    }
  }
}
</script>

<style scoped>
  .content {
    padding: 2em 4em;
    min-height: 50vh;
  }

  h1 {
    /*margin-top: .25em;*/
    margin-left: -.5em;
    /*font-size: 2.75em;*/
    margin-bottom: 1em;
  }

  @media only screen and (min-width: 1100px) {
    .stepShow {
      float: left;
      position: absolute;
      top: 7.5em;
    }
  }

  @media only screen and (max-width: 1100px) {
    .stepShow {
      float: left;
      margin: 2em;
      display: block;
      width: 100%;
    }
  }

  .emit-closer {
    cursor: pointer;
  }
</style>
