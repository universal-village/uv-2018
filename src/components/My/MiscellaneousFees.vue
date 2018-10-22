<template lang="html">

  <a-layout-content class="main-content">
    <a-layout style="padding: 0 24px 24px; background: rgba(255, 255, 255, .75);">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item v-for="navPage in this.$store.state.navPageList" :key="navPage">
          {{ navPage | capitalize }}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content :style="{ margin: 0, minHeight: '280px' }" class="conference-reg-content">
        <h1>Miscellaneous Fees</h1>
        <h3>For IEEE UV2018 Attendees Only</h3>
        <a-form style="margin-top: 100px;">
          <a-form-item
            label='E-mail'
            :labelCol="{ span: 6 }"
            :wrapperCol="{ span: 18 }"
            fieldDecoratorId="email"
            :fieldDecoratorOptions="{rules: [{ required: true, message: 'How could we contact you?' }]}"
          >
              <a-input placeholder="E-mail" v-model="email" ref="emailInput" style="width: 60%;">
              <a-icon slot="prefix" type="mail"/>
            </a-input>
          </a-form-item>

          <br>

          <a-form-item
            label='Abstract Only Paper'
            :labelCol="{ span: 6 }"
            :wrapperCol="{ span: 18 }"
            fieldDecoratorId="abstractOnly"
          >
            <a-input-number
              :defaultValue="0"
              :min="0"
              :max="20"
              v-model="abstractOnly"
            />
          </a-form-item>

          <a-form-item
            label='Full Paper'
            :labelCol="{ span: 6 }"
            :wrapperCol="{ span: 18 }"
            fieldDecoratorId="fullPaper"
          >
            <a-input-number
              :defaultValue="0"
              :min="0"
              :max="20"
              v-model="fullPaper"
            />
          </a-form-item>

          <a-form-item
            label='Extra Pages'
            :labelCol="{ span: 6 }"
            :wrapperCol="{ span: 18 }"
            fieldDecoratorId="extraPages"
          >
            <a-input-number
              :defaultValue="0"
              :min="0"
              :max="20"
              v-model="extraPages"
            />
          </a-form-item>

          <a-form-item
            label='Other'
            :labelCol="{ span: 6 }"
            :wrapperCol="{ span: 18 }"
            fieldDecoratorId="uvWorkshop"
            :fieldDecoratorOptions="{rules: [{ required: false, message: 'UV Workshop.' }]}"
          >
            <a-input-number
              :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
              :parser="value => value.replace(/\$\s?|(,*)/g, '')"
              :min="0"
              v-model="otherFees"
            />
          </a-form-item>

          <br>

          <a-form-item
            label='Paper Fee'
            :labelCol="{ span: 6 }"
            :wrapperCol="{ span: 18 }"
            fieldDecoratorId="paperFee"
            v-if="paperFee > 0">
            <span>${{ parseFloat(paperFee / 100).toFixed(2) }}</span>
          </a-form-item>

          <a-form-item
            label='Miscellaneous Fee'
            :labelCol="{ span: 6 }"
            :wrapperCol="{ span: 18 }"
            fieldDecoratorId="miscellaneousFees"
            v-if="otherFees > 0">
            <span>${{ parseFloat(otherFees).toFixed(2) }}</span>
          </a-form-item>

          <br>

          <a-form-item
            label='Total'
            :labelCol="{ span: 6 }"
            :wrapperCol="{ span: 18 }"
            fieldDecoratorId="totalFee"
            v-if="amt > 0"
          >
            <span>${{ parseFloat(amt / 100).toFixed(2) }}</span>
          </a-form-item>

          <a-button type='primary' htmlType='submit' style="float: left; margin-top: 20px; margin-left: 25%; margin-bottom: 100px;" @click="cardCheckout()">
            Checkout
          </a-button>

        </a-form>
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

<script lang="js">
import VueRecaptcha from 'vue-recaptcha'
import CreditCard from '@/components/Helper/CreditCard.vue'
Stripe.setPublishableKey('pk_live_pKhzzxn3bjKaSG2Rs3kTsKxP')
export default {
  name: 'miscellaneous-fees',
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
      email: '',
      extraPages: 0,
      fullPaper: 0,
      abstractOnly: 0,
      otherFees: 0,
      spinning: false,
      creditCard: {
        cardNum: '',
        name: '',
        expiration: '',
        cvv: ''
      },
      payload: {
        stripeToken: '',
        amount: 0,
        description: '',
        email: '',
        token: '',
        currency: 'USD'
      },
      description: '',
      attendee: undefined
    }
  },
  methods: {
    checkRegistrationStatus: function () {
      this.$http.get(this.$store.state.endpoint.api + '/checkConferenceRegistrationStatus', {emulateJSON: true}).then(
        response => {
          console.log(response.body)
          if (response.body.flag !== true) {
            this.$message.error(response.body.info)
            this.$message.info('For IEEE UV2018 Attendees only', 4)
            this.$router.push('/')
          } else {
            this.attendee = response.body.attendee
            if (!this.registered()) {
              this.$message.info('For IEEE UV2018 Attendees only', 4)
              this.$router.push('/')
            }
          }
        }, response => {
          this.$message.error('Cannot load conference registration information. status-' + response.status, 3)
          this.$message.info('For IEEE UV2018 Attendees only', 4)
          this.$router.push('/')
        })
    },
    registered: function () {
      return this.attendee !== null && this.attendee !== undefined && this.attendee.userId !== -1
    },
    cardCheckout: function () {
      if (this.amt === 0) {
        this.$notification['error']({
          message: 'Cannot proceed to next step',
          description: 'No fees to pay.'
        })
        return
      }
      this.$modal.show('card-modal')
    },
    makeReceiptDetail: function () {
      let receiptDescription = 'Miscellaneous Fees'
      if (this.fullPaper !== 0) {
        receiptDescription += ' Full Paper ' + this.fullPaper
      }
      if (this.extraPages !== 0) {
        receiptDescription += ' Extra Pages ' + this.extraPages
      }
      if (this.abstractOnly !== 0) {
        receiptDescription += ' Abstract Only Paper ' + this.abstractOnly
      }
      if (this.otherFees !== 0) {
        receiptDescription += ' Other Fees $' + this.otherFees + '.00'
      }
      this.payload.description = receiptDescription
      this.description = receiptDescription
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
            context.payload.email = context.email
          }
          context.$http.post(context.$store.state.endpoint.api + '/miscellaneousFees', context.payload, {emulateJSON: true}).then(response => {
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
    }
  },
  computed: {
    paperFee: function () {
      return (this.abstractOnly * 5000 + this.fullPaper * 15000 + this.extraPages * 10000)
    },
    amt: function () {
      return (this.abstractOnly * 5000 + this.fullPaper * 15000 + this.extraPages * 10000 + this.otherFees * 100)
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

  .conference-reg-content.ant-layout-content {

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
