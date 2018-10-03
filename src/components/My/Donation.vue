<template>
  <a-layout-content class="main-content">
    <a-layout style="padding: 0 24px 24px; background: rgba(255, 255, 255, .75);">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item v-for="navPage in this.$store.state.navPageList" :key="navPage">
          {{ navPage | capitalize }}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content>
        <h1>Donation</h1>
        <a-form @submit="submitHandler" :autoFormCreate="(form)=>{this.form = form}">
          <a-form-item label="Amount" :labelCol="{ span: 5 }" :wrapperCol="{ span: 12 }" fieldDecoratorId="amount"
                       :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please specify your donation amount!' }]}">
            <a-radio-group v-model="amountType" default-value="1000000" @change="donationAmountHandler" button-style="solid">
              <a-radio-button class="monospace" value="presets|1000000">$ 10,000.00</a-radio-button>
              <a-radio-button class="monospace" value="presets|500000">$ 5,000.00</a-radio-button>
              <a-radio-button class="monospace" value="presets|300000">$ 3,000.00</a-radio-button>
              <a-radio-button class="monospace" value="custom">Other...</a-radio-button>
            </a-radio-group>
          </a-form-item>
          <a-form-item label="Custom Amount" size="large" :labelCol="{ span: 5 }" :wrapperCol="{ span: 6 }" fieldDecoratorId="customAmount" v-if="customAmount">
            <a-input class="monospace" placeholder="Please enter donation amount..." @change="customAmountHandler" ref="amountInput">
              <a-icon slot="prefix" type="pay-circle"/>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" htmlType="submit">
              Submit
            </a-button>
          </a-form-item>
        </a-form>
      </a-layout-content>
    </a-layout>
  </a-layout-content>
</template>

<script lang="js">
import ARadioGroup from 'vue-antd-ui/es/radio/Group'
import AFormItem from 'vue-antd-ui/es/form/FormItem'
import AButton from "vue-antd-ui/es/button/button";
export default {
  name: 'donation',
  components: {AButton, AFormItem, ARadioGroup},
  props: [],
  mounted () {
    // this.customAmount = true
  },
  data () {
    return {
      amountType: null,
      customAmount: false
    }
  },
  methods: {
    donationAmountHandler (event) {
      const presetsToken = 'presets|'
      let clicked = event.target.value
      console.log(event)
      if (clicked.indexOf(presetsToken) === 0) {
        this.customAmount = false
        this.amount = parseInt(event.target.value.slice(presetsToken.length))
      } else if (clicked === 'custom') {
        this.amount = null
        this.customAmount = true
      } else {
        this.$notification['error']({
          message: 'Unable to parse your option',
          description: 'Website error occurred. Please contact support at ' + this.$store.state.support.email
        })
      }
    },
    submitHandler (event) {
      console.log(this.form.getFieldsValue())
    },
    customAmountHandler (event) {
      console.log(event)
    }
  },
  computed: {

  }
}
</script>

<style scoped>
  h1 {
    color: green;
  }
  h2 {
    display: inline;
    color: green;
    padding-top: 5px;
    margin-left: 10px;
    font-family: Verdana;
  }
  h3 {
    color:green;
  }
  h4 {
    color: green;
    font-size: 16px;
  }
  li{
    font-size: 16px;
  }
  a:link {
    text-decoration: underline;
  }

  .ant-layout-content p {
    font-size: 1.2em;
    font-weight: bold;
    font-family: "Times New Roman", Times, serif;
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

  .monospace {
    font-family: Consolas, Menlo, Courier, monospace;
  }
</style>
