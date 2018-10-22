<template>
  <a-layout-content class="main-content">
    <a-layout style="padding: 0 24px 24px; background: rgba(255, 255, 255, .75);">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item v-for="navPage in this.$store.state.navPageList" :key="navPage">
          {{ navPage | capitalize }}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content :style="{ margin: 0, minHeight: '280px' }" class="conference-reg-content">
        <a-row :gutter="0">
          <a-col :lg="8" id="registration-left-banner">
            <img src="https://cdn.universal-village.org/images/registration-left-banner.jpg" style="width: 100%">
          </a-col>
          <a-col :lg="16" v-if="!registered">
            <h1 style="margin-left: 20%; display: block; font-weight: bolder; padding-top: 20px; padding-bottom: 40px;">Register for IEEE Intl. Conference on Universal Village 2018</h1>
            <a-form :autoFormCreate="(form)=>{this.form = form}">
              <div class="registration-form-0" v-show="paging === 0">
                <div class="registration-basic-info">
                  <a-divider orientation="right">Basic Info</a-divider>
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
                </div>
                <div class="registration-attending-info">
                  <a-divider orientation="right">Attending Info</a-divider>
                  <a-form-item
                    label='Phone'
                    :labelCol="{ span: 9 }"
                    :wrapperCol="{ span: 12 }"
                    fieldDecoratorId="phone"
                    :fieldDecoratorOptions="{rules: [{ required: true, message: 'How could we contact you?' }]}"
                  >
                    <a-input placeholder="Phone Number" v-model="phone">
                      <a-icon slot="prefix" type="mobile"/>
                      <a-icon v-if="phone" slot="suffix" type="close-circle" class="emit-closer" @click="emitEmptyField"/>
                    </a-input>
                  </a-form-item>

                  <a-form-item
                    label='E-mail'
                    :labelCol="{ span: 9 }"
                    :wrapperCol="{ span: 12 }"
                    fieldDecoratorId="email"
                    :fieldDecoratorOptions="{rules: [{ required: true, message: 'How could we contact you?' }]}"
                  >
                    <a-input placeholder="E-mail" v-model="email" ref="emailInput">
                      <a-icon slot="prefix" type="mail"/>
                      <a-icon v-if="email" slot="suffix" type="close-circle" @click="emitEmptyField"
                              style="cursor: pointer;"/>
                    </a-input>
                  </a-form-item>

                  <a-form-item
                    label='Food Alergy'
                    :labelCol="{ span: 9 }"
                    :wrapperCol="{ span: 12 }"
                    fieldDecoratorId="food"
                    :fieldDecoratorOptions="{rules: [{max: 45, min: 0, message: 'This Field should be shorter than 45 characters.'}]}"
                  >
                    <a-input placeholder="Food Alergy" v-model="alergy" ref="alergyInput">
                      <a-icon slot="prefix" type="user"/>
                      <a-icon v-if="alergy" slot="suffix" type="close-circle" class="emit-closer" @click="emitEmptyField"/>
                    </a-input>
                  </a-form-item>
                </div>
                <a-button type="primary" shape="circle" icon="right" style="float: right; margin-top: 20px; margin-right: 20px;" @click="goto(0, 1)"></a-button>
              </div>
              <div v-show="paging === 1">
                <div class="registration-special-info">
                  <a-divider orientation="right">Special Info</a-divider>
                  <a-form-item
                  label='I am a Student'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="student"
                  :fieldDecoratorOptions="{rules: [{ required: false, message: 'Are you a student?' }]}"
                  >
                    <a-switch v-model="student" checkedChildren="Yes" unCheckedChildren="No" :defaultChecked="false"/>
                    <a-tag color="#87d068" style="margin-left: 20px;" v-if="student">students enjoy a discount</a-tag>
                  </a-form-item>

                  <a-form-item
                  label='I am a Senior'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="senior"
                  :fieldDecoratorOptions="{rules: [{ required: false, message: 'Are you a senior?' }]}"
                  >
                    <a-switch v-model="senior" checkedChildren="Yes" unCheckedChildren="No" :defaultChecked="false"/>
                    <a-tag color="#87d068" style="margin-left: 20px;" v-if="senior">seniors over 65 years old enjoy a discount</a-tag>
                  </a-form-item>

                  <a-form-item
                  label='I am an IEEE Member'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="ieeeMember"
                  :fieldDecoratorOptions="{rules: [{ required: false, message: 'Are you an IEEE Member' }]}"
                  >
                    <a-switch v-model="ieeeMember" checkedChildren="Yes" unCheckedChildren="No" :defaultChecked="false"/>
                    <a-tag color="#87d068" style="margin-left: 20px;" v-if="ieeeMember">IEEE Member enjoys discount</a-tag>
                    <a-input placeholder="IEEE No." v-model="ieeeNo" ref="ieeeNoInput" v-if="ieeeMember" style="margin-top: 20px;">
                      <a-icon slot="prefix" type="user"/>
                      <a-icon v-if="ieeeNo" slot="suffix" type="close-circle" class="emit-closer" @click="emitEmptyField"/>
                    </a-input>
                  </a-form-item>

                </div>
                <div class="registration-activity-info" v-if="papers.length === 0">
                  <a-divider orientation="right">Activity info</a-divider>
                  <a-form-item
                  label='Full Registration'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="fullRegistration"
                  :fieldDecoratorOptions="{rules: [{ required: true, message: 'All activities.' }]}"
                  >
                    <a-switch v-model="fullRegistration" checkedChildren="Yes" unCheckedChildren="No" defaultChecked/>
                    <a-tag color="#87d068" style="margin-left: 20px;" v-if="fullRegistration">Attend 4 days conference including UV day and UV workshop.</a-tag>
                  </a-form-item>

                  <a-form-item
                  label='Register for UV Day'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="uvDay"
                  :fieldDecoratorOptions="{rules: [{ required: false, message: 'UV day.' }]}"
                  >
                    <a-switch v-model="uvDay" checkedChildren="Yes" unCheckedChildren="No" defaultChecked :disabled="fullRegistration"/>
                    <a-tag color="#87d068" style="margin-left: 20px;" v-if="uvDay">UV Day is an open event free from registration fee</a-tag>
                  </a-form-item>

                  <a-form-item
                  label='Register for UV Workshop'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="uvWorkshop"
                  :fieldDecoratorOptions="{rules: [{ required: false, message: 'UV Workshop.' }]}"
                  >
                    <a-switch v-model="uvWorkshop" checkedChildren="Yes" unCheckedChildren="No" defaultChecked :disabled="fullRegistration"/>
                  </a-form-item>
                </div>

                <div class="registration-paper-info" v-else>
                  <a-divider orientation="right">Paper Fee</a-divider>

                  <a-form-item
                  label='Paper Amount'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="Paper"
                  :fieldDecoratorOptions="{rules: [{ required: false, message: 'Paper Amount.' }]}"
                  v-if="paperCnts !== 0">
                    <span>{{paperCnts}}</span>
                  </a-form-item>

                  <a-form-item
                  label='Abstract Only Paper Amount'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="abstractOnly"
                  :fieldDecoratorOptions="{rules: [{ required: false, message: 'Abstract Only Paper Amount.' }]}"
                  v-if="abstractOnly !== 0">
                    <span>{{abstractOnly}}</span>
                  </a-form-item>

                  <a-form-item
                  label='Extra Pages'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="uvWorkshop"
                  :fieldDecoratorOptions="{rules: [{ required: false, message: 'UV Workshop.' }]}"
                  >
                    <a-input-number
                    :defaultValue="0"
                    :min="0"
                    :max="20"
                    v-model="extraPages"
                    />
                  </a-form-item>

                </div>
                <a-button type="primary" shape="circle" icon="left" style="float: left; margin-top: 20px; margin-left: 20%;" @click="goto(1, 0)"></a-button>
                <a-button type="primary" shape="circle" icon="right" style="float: right; margin-top: 20px; margin-right: 20px;" @click="goto(1, 2)"></a-button>

              </div>
              <div v-show="paging === 2">
                <div class="registration-checkout">
                  <a-divider orientation="right">Total</a-divider>
                  <a-form-item
                  label='Full Registration'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="fullRegistration"
                  :fieldDecoratorOptions="{rules: [{ required: false, message: 'Full Registration.' }]}"
                  v-if="fullRegistration">
                    <span>$445.00</span>
                  </a-form-item>

                  <a-form-item
                  label='UV Day'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="uvDay"
                  :fieldDecoratorOptions="{rules: [{ required: false, message: 'UV Day Registration.' }]}"
                  v-if="uvDay && !fullRegistration">
                    <span>$0.00</span>
                  </a-form-item>

                  <a-form-item
                  label='UV Workshop'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="uvWorkshop"
                  :fieldDecoratorOptions="{rules: [{ required: false, message: 'UV Workshop Registration.' }]}"
                  v-if="uvWorkshop && !fullRegistration">
                    <span>$50.00</span>
                  </a-form-item>

                  <a-form-item
                  label='Paper'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="paperFee"
                  :fieldDecoratorOptions="{rules: [{ required: false, message: ' Paper Fee' }]}"
                  v-if="paperFee">
                    <span>${{ parseFloat(paperFee / 100).toFixed(2) }}</span>
                  </a-form-item>

                  <a-form-item
                  label='Discount'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="uvWorkshop"
                  :fieldDecoratorOptions="{rules: [{ required: false, message: ' Discount Amount' }]}"
                  v-if="discount">
                    <span>-${{ parseFloat(discountAmt / 100).toFixed(2) }}</span>
                  </a-form-item>

                  <a-form-item
                  label='Total'
                  :labelCol="{ span: 9 }"
                  :wrapperCol="{ span: 12 }"
                  fieldDecoratorId="total"
                  :fieldDecoratorOptions="{rules: [{ required: false, message: ' Total Amount' }]}"
                  >
                    <span>${{ parseFloat(amt / 100).toFixed(2) }}</span>
                  </a-form-item>

                </div>
                <a-button type="primary" shape="circle" icon="left" style="float: left; margin-top: 20px; margin-left: 20%;" @click="goto(2, 1)"></a-button>
                <a-button type='primary' htmlType='submit' style="float: right; margin-top: 20px; margin-right: 20px;" @click="cardCheckout()">
                  Checkout
                </a-button>
              </div>

            </a-form>
          </a-col>
          <a-col :lg="16" v-else>
            <a-form>
              <div class="registration-greeting-info">
                <h3 style="display: block; margin-left: 20%; margin-bottom: 100px; font-weight: bold; font-family: Verdana;">IEEE UV2018</h3>
                <h1 style="display: block; margin-left: 20%; margin-bottom: 60px; font-weight: bolder; font-family: Verdana;">Thank you for your support to IEEE UV2018!</h1>
                <p style="display: block; margin-left: 20%; font-family: Verdana; margin-right: 10%;">You has successfully registered for IEEE International Conference on Universal Village 2018. Here below is your payment and receipt information.</p>
                <span style="display: inline-block; margin-left: 20%; margin-top: 20px; font-family: Verdana; font-weight: bolder; width: 20%">Date</span>
                <span style="display: inline-block; margin-top: 20px; font-family: Verdana; width: 40%">{{ receipt.time }}</span>
                <span style="display: inline-block; margin-left: 20%; margin-top: 20px; font-family: Verdana; font-weight: bolder; width: 20%">Event</span>
                <span style="display: inline-block; margin-top: 20px; font-family: Verdana; width: 40%">{{ receipt.description }}</span>
                <span style="display: inline-block; margin-left: 20%; margin-top: 20px; font-family: Verdana; font-weight: bolder; width: 20%">Payment</span>
                <span style="display: inline-block; margin-top: 20px; font-family: Verdana; width: 40%">${{ parseFloat(receipt.amount / 100).toFixed(2) }}</span>
                <div style="text-align: right; float: right; margin-top: 20px; margin-right: 10%;">
                  <p style="margin-top: 20px; font-family: Verdana;">Welcome and Thanks!</p>
                  <p style="font-family: Verdana; font-weight: bold;">UV2018 Committee</p>
                </div>
              </div>
              <a-form-item></a-form-item>
            </a-form>
            <a-button type="primary" style="float: left; margin-top: 20px; margin-left: 20%;" :disabled="receiptIndex === 0" @click="jump(-1)">
              <a-icon type="left" />Previous
            </a-button>
            <a-button type="primary" style="float: right; margin-top: 20px; margin-right: 10%;" :disabled="receiptIndex === (receipts.length - 1)" @click="jump(1)">
              Next<a-icon type="right" />
            </a-button>
          </a-col>
        </a-row>
      </a-layout-content>
    </a-layout>
    <modal
      name="card-modal"
      draggable="true"
      height="auto"
      width="500"
      :clickToClose="false"
      :scrollable="true"
    >
      <a-spin :spinning="spinning">
        <a-icon type="close-circle-o" style="margin-left: 95%; margin-top: 2%; margin-bottom: 2%;" @click="$modal.hide('card-modal')"/>
        <div style="margin-top: -8%">
          <img src="https://cdn.universal-village.org/images/logo-new.png" style="border-radius: 50%; width: 125px; margin-right: -50px">
          <h2 style="font-weight: bolder; font-family: sans-serif; margin-left: 10%; margin-right: auto; display: inline-block;">Universal Village Society Inc.</h2>
        </div>
        <credit-card v-model="creditCard"></credit-card>
        <vue-recaptcha :sitekey="this.$store.state.sitekey" @verify="handleSubmit">
          <a-button type='primary' htmlType='submit' style="float: right; margin-top: 20px; margin-right: 20px; margin-bottom: 20px;" @click="cardCheckout()">
            Pay ${{ parseFloat(amt / 100).toFixed(2) }}
          </a-button>
        </vue-recaptcha>
      </a-spin>
    </modal>
  </a-layout-content>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'
import CreditCard from '@/components/Helper/CreditCard.vue'
Stripe.setPublishableKey('pk_live_pKhzzxn3bjKaSG2Rs3kTsKxP')
export default {
  name: 'attendee',
  props: [],
  components: {
    VueRecaptcha,
    CreditCard
  },
  mounted () {
    this.checkRegistrationStatus()
  },
  data () {
    return {
      paging: 0,
      firstname: '',
      lastname: '',
      middlename: '',
      title: '',
      phone: '',
      email: '',
      alergy: '',
      student: false,
      senior: false,
      ieeeMember: false,
      ieeeNo: '',
      fullRegistration: true,
      uvDay: true,
      uvWorkshop: true,
      extraPages: 0,
      spinning: false,
      user: undefined,
      papers: /* [{"paperid":25,"title":"Test Paper of Guanghua wobushi SB le","authors":"Guanghua","categoryId":1,"keywords":["daafsdadad","b vnvv"],"link":null,"phase":"Accept","_abstract":"https://s3.us-east-2.amazonaws.com/uv2018-paper/1532117106595-Hidden_Markov_Model.pdf"}] */[],
      attendee: undefined,
      isVolunteer: false,
      isVIP: false,
      product: {
        name: 'Test',
        description: 'Ticket to UV2018'
      },
      payload: {
        stripeToken: 'token.id',
        amount: 49999,
        currency: 'USD',
        description: 'Ticket to IEEE Intl. UV2018',
        token: '',
        ieeeNo: '',
        isSenior: false,
        isStudent: false,
        foodAlergy: '',
        title: '',
        firstname: '',
        middlename: '',
        lastname: '',
        email: '',
        phone: '',
        fullRegistration: false,
        uvDay: false,
        uvWorkshop: false,
        extraPages: 0
      },
      creditCard: {
        cardNum: '',
        name: '',
        expiration: '',
        cvv: ''
      },
      stripeResp: undefined,
      receipt: {
        amount: -1,
        description: '',
        receiptId: -1,
        time: '',
        ieeeNo: '',
        isSenior: false,
        isStudent: false,
        foodAlergy: ''
      },
      receipts: [],
      receiptIndex: 0
    }
  },
  watch: {
    fullRegistration (newFR) {
      if (newFR) {
        this.uvDay = true
        this.uvWorkshop = true
      }
    },
    senior (newSenior) {
      if (newSenior) {
        this.student = false
      }
    },
    student (newStudent) {
      if (newStudent) {
        this.senior = false
      }
    }
  },
  methods: {
    checkRegistrationStatus: function () {
      this.$http.get(this.$store.state.endpoint.api + '/checkConferenceRegistrationStatus', {emulateJSON: true}).then(
        response => {
          console.log(response.body)
          if (response.body.flag !== true) {
            this.$message.error(response.body.info)
          } else {
            this.user = response.body.user
            this.attendee = response.body.attendee
            this.papers = response.body.papers
            this.isVolunteer = response.body.isVolunteer
            this.isVIP = response.body.isVIP
            if (this.user !== null && this.user !== undefined) {
              this.title = this.user.title
              this.firstname = this.user.firstname
              this.lastname = this.user.lastname
              this.middlename = this.user.middlename
              this.phone = this.user.cellphone
              this.email = this.user.email
              this.form.setFieldsValue({
                title: this.title,
                firstname: this.firstname,
                middlename: this.middlename,
                lastname: this.lastname,
                email: this.email,
                phone: this.phone
              })
            }
            this.receipts = response.body.receipts
            if (this.receipts !== []) {
              this.receipt = response.body.receipts[this.receiptIndex]
            }
          }
        }, response => {
          this.$message.error('Cannot load conference registration information. status-' + response.status, 3)
        })
    },
    goto: function (cur, next) {
      if (cur === 0 && this.checkForm1()) {
        this.paging = next
      } else if (cur === 1 && this.checkForm2()) {
        this.paging = next
      } else if (cur === 2) {
        this.paging = next
      }
      // console.log(this.paging)
    },
    jump: function (next) {
      this.receiptIndex += next
      this.receipt = this.receipts[this.receiptIndex]
    },
    emitEmptyField: function (event) {
      // eslint-disable-next-line
      eval('this.form.setFieldsValue({' + event.path[2].childNodes[1].attributes.id.value + ': ""})')
      // eslint-disable-next-line
      eval('this.' + event.path[2].childNodes[1].attributes.id.value + ' = ""')
    },
    checkForm1 () {
      if (this.firstname === '' || this.lastname === '' || this.phone === '' || this.email === '') {
        this.$notification['error']({
          message: 'Cannot proceed to next step',
          description: 'You cannot leave required fields empty.'
        })
        return false
      }
      if (!this.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        this.$notification['error']({
          message: 'Cannot proceed to next step',
          description: 'You must enter a valid email address.'
        })
        return false
      }
      return true
    },
    checkForm2 () {
      if (!this.fullRegistration && !this.uvDay && !this.uvWorkshop) {
        this.$notification['error']({
          message: 'Cannot proceed to next step',
          description: 'You must choose an event to continue.'
        })
        return false
      }
      if (this.ieeeMember && this.ieeeNo === '') {
        this.$notification['error']({
          message: 'Cannot proceed to next step',
          description: 'To enjoy IEEE Member discount, please provide your IEEE No. .'
        })
        return false
      }
      return true
    },
    jumpToForgotPassword: () => {
      this.$router.push('/reset-password')
    },
    makeReceiptDetail: function () {
      this.description = ''
      if (this.paperCnts !== 0) {
        this.description += ' Paper Amount ' + this.paperCnts
      }
      if (this.abstractOnly !== 0) {
        this.description += ' Abstract Only ' + this.abstractOnly
      }
      if (this.extraPages !== 0) {
        this.description += ' Extra Pages ' + this.extraPages
      }
      if (this.fullRegistration) {
        this.description += ' Full Registration'
      } else {
        if (this.uvDay) {
          this.description += ' UV Day'
        }
        if (this.uvWorkshop) {
          this.description += ' UV Workshop'
        }
      }
      if (this.student) {
        this.description += ' with Student Discount'
      } else if (this.senior) {
        this.description += ' with Senior Discount'
      } else if (this.ieeeMember) {
        this.description += ' with IEEE Member Discount'
      }
    },
    cardCheckout: function () {
      if (this.amt === 0) {
        const context = this
        let token = ''
        context.payload.stripeToken = token
        context.payload.token = ''
        context.payload.amount = context.amt
        context.makeReceiptDetail()
        context.payload.description = context.description
        context.payload.ieeeNo = context.ieeeNo
        context.payload.isSenior = context.senior
        context.payload.isVolunteer = context.isVolunteer
        context.payload.foodAlergy = context.alergy
        context.payload.isStudent = context.student
        context.payload.title = context.title
        context.payload.firstname = context.firstname
        context.payload.lastname = context.lastname
        context.payload.middlename = context.middlename
        context.payload.email = context.email
        context.payload.phone = context.phone
        context.payload.fullRegistration = context.fullRegistration
        context.payload.uvDay = context.uvDay
        context.payload.uvWorkshop = context.uvWorkshop
        context.payload.extraPages = context.extraPages
        this.$http.post(context.$store.state.endpoint.api + '/checkout', context.payload, {emulateJSON: true}).then(response => {
          console.log(response.body.flag)
          context.spinning = false
          if (response.body.flag === true) {
            context.spinning = false
            context.$message.success('Successfully paid', 2)
            context.$router.push('/success-registration')
          } else {
            context.spinning = false
            window.grecaptcha.reset()
            context.$message.error(response.body.info, 4)
          }
        }, response => {
          context.spinning = false
          window.grecaptcha.reset()
          context.$message.error('Internal Server Error. Please try again.', 4)
        })
        context.spinning = false
        return
      }
      this.$modal.show('card-modal')
    },
    handleSubmit: function (recaptchaToken) {
      this.spinning = true
      this.makeReceiptDetail()
      if (this.creditCard.cardNum === '' || this.creditCard.name === '' || this.creditCard.expiration === '' || this.creditCard.cvv === '') {
        this.$notification['error']({
          message: 'Cannot proceed to next step',
          description: 'You cannot leave required fields empty.'
        })
        window.grecaptcha.reset()
        this.spinning = false
        return
      }
      let stripeRespCallback = function (that) {
        const context = that
        return (status, resp) => {
          let response = resp
          context.stripeResp = response
          if (response.error) {
            console.log(response.error)
            context.$message.error(response.error.message, 3)
          } else if (response.type === 'card_error') {
            context.$message.error(response.error.message, 3)
          } else {
            let token = response.id
            console.log(response)
            context.payload.stripeToken = token
            context.payload.token = recaptchaToken
            context.payload.amount = context.amt
            context.makeReceiptDetail()
            context.payload.description = context.description
            context.payload.ieeeNo = context.ieeeNo
            context.payload.isSenior = context.senior
            context.payload.isVolunteer = context.isVolunteer
            context.payload.foodAlergy = context.alergy
            context.payload.isStudent = context.student
            context.payload.title = context.title
            context.payload.firstname = context.firstname
            context.payload.lastname = context.lastname
            context.payload.middlename = context.middlename
            context.payload.email = context.email
            context.payload.phone = context.phone
            context.payload.fullRegistration = context.fullRegistration
            context.payload.uvDay = context.uvDay
            context.payload.uvWorkshop = context.uvWorkshop
            context.payload.extraPages = context.extraPages
          }
          context.$http.post(context.$store.state.endpoint.api + '/checkout', context.payload, {emulateJSON: true}).then(response => {
            console.log(response.body.flag)
            context.spinning = false
            if (response.body.flag === true) {
              context.spinning = false
              context.$message.success('Successfully paid', 2)
              context.$router.push('/success-registration')
            } else {
              context.spinning = false
              window.grecaptcha.reset()
              context.$message.error(response.body.info, 4)
            }
          }, response => {
            context.spinning = false
            window.grecaptcha.reset()
            context.$message.error('Internal Server Error. Please try again.', 4)
          })
          context.spinning = false
        }
      }
      Stripe.card.createToken({
        number: this.creditCard.cardNum,
        cvc: this.creditCard.cvv,
        exp_month: this.creditCard.expiration.split(' / ')[0],
        exp_year: this.creditCard.expiration.split(' / ')[1],
        name: this.creditCard.name
      }, stripeRespCallback(this))
      // this.$checkout.open({
      //   name: 'Registration for IEEE Intl. Conference on Universal Village 2018',
      //   currency: 'USD',
      //   amount: this.amt,
      //   token: (token) => {
      //     console.log(token)
      //     console.log(recaptchaToken)
      //     this.payload.stripeToken = token.id
      //     window.setTimeout(() => {
      //       this.$http.post(this.$store.state.endpoint.api + '/checkout', this.payload, {emulateJSON: true}).then(response => {
      //         console.log(response.body.flag)
      //         this.spinning = false
      //         if (response.body.flag === true) {
      //           this.spinning = false
      //           this.$message.success('Successfully paid', 2)
      //           this.$router.push('/success')
      //         } else {
      //           this.spinning = false
      //           window.grecaptcha.reset()
      //           this.$message.error(response.body.info, 4)
      //         }
      //       }, response => {
      //         this.spinning = false
      //         window.grecaptcha.reset()
      //         this.$message.error('Internal Server Error. Please try again.', 4)
      //       })
      //     }, 500)
      //   }
      // })
    }
  },
  computed: {
    registered: function () {
      return this.attendee !== null && this.attendee !== undefined && this.attendee.userId !== -1
    },
    amtBeforeDiscount: function () {
      let amount = 0
      if (this.fullRegistration) {
        amount += 44500
      } else {
        if (this.uvDay) {
          amount += 0
        }
        if (this.uvWorkshop) {
          amount += 5000
        }
      }
      return amount
    },
    discount: function () {
      return (this.student || this.senior || this.ieeeNo) && this.fullRegistration
    },
    amt: function () {
      let discountA = 0
      if (this.student && this.fullRegistration) {
        discountA = 25000
      } else if ((this.senior || this.ieeeNo) && this.fullRegistration) {
        discountA = 10000
      }
      return Math.ceil(this.amtBeforeDiscount - discountA) + this.paperFee
    },
    discountAmt: function () {
      if (this.student && this.fullRegistration) {
        return 25000
      }
      if ((this.senior || this.ieeeNo) && this.fullRegistration) {
        return 10000
      }
    },
    paperFee: function () {
      let paperCnts = 0
      let abstractOnly = 0
      for (var i = 0; i < this.papers.length; i++) {
        if (this.papers[i].link === null || this.papers[i].link === undefined || this.papers[i].link === '') {
          abstractOnly++
        } else {
          paperCnts++
        }
      }
      return 15000 * paperCnts + 5000 * abstractOnly + 10000 * this.extraPages
    },
    paperCnts: function () {
      let cnts = 0
      for (var i = 0; i < this.papers.length; i++) {
        if (this.papers[i].link !== null && this.papers[i].link !== undefined && this.papers[i].link !== '') {
          cnts++
        }
      }
      return cnts
    },
    abstractOnly: function () {
      let cnts = 0
      for (var i = 0; i < this.papers.length; i++) {
        if (this.papers[i].link === null || this.papers[i].link === undefined || this.papers[i].link === '') {
          cnts++
        }
      }
      return cnts
    }
  }
}
</script>

<style scoped>
  .ant-collapse-header span {
    font-size: 1.4em;
    font-weight: bolder;
  }

  .ant-layout-content p {
    font-size: 1.2em;
    font-weight: 500;
  }

  .ant-divider-horizontal.ant-divider-with-text-right:before,
  .ant-divider-horizontal.ant-divider-with-text-right:after {
    border-top: 1px solid #029224;
    margin-right: 20%;
  }

  .ant-divider.ant-divider-horizontal.ant-divider-with-text-right {
    margin-left: 20%;
    width: 80%;
  }

  @media only screen and (max-width: 960px) {
    .ant-layout-content {
      padding: 0 20px;
    }
    #registration-left-banner {
      display: none;
    }
    .ant-tag.ant-tag-has-color {
      display: block;
    }
  }
  @media only screen and (min-width: 960px){
    .ant-layout-content.main-content {
      padding: 0 10%;
    }
      /* .ant-collapse-item  {
        font-size: 1.5em !important;
        font-weight: bolder;
      } */
  }
</style>
