<template lang="html">

  <section class="credit-card">
    <a-card
      hoverable
      style="width: 500px; padding: 0;"
    >
      <div class="card-wrapper" style="width: 500px; margin-bottom: 30px; margin-left: -5%; height: auto;"  v-show="cardNum || name || expiration || cvv"></div>
      <a-form
          id="card-form"
          action="#"
        >
        <a-form-item
            :labelCol="{ span: 8 }"
            :wrapperCol="{ span: 15 }"
            label='Card'
            fieldDecoratorId="cardNum"
            :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input card number' }]}"
        >
          <a-input placeholder='Card Number' name="number" v-model="cardNum" @input="handleInput"/>
        </a-form-item>
        <a-form-item
            :labelCol="{ span: 8 }"
            :wrapperCol="{ span: 15 }"
            label='Card Holder Name'
            fieldDecoratorId="name"
            :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input card holder name' }]}"
        >
          <a-input placeholder='Card Holder Name' name="name" v-model="name" @input="handleInput"/>
        </a-form-item>
        <a-form-item
            :labelCol="{ span: 8 }"
            :wrapperCol="{ span: 8 }"
            label='Expiration'
            fieldDecoratorId="expiration"
            :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input expiration date' }]}"
        >
          <a-input placeholder='Expiration Date' name="expiry" v-model="expiration" @input="handleInput"/>
        </a-form-item>
        <a-form-item
            :labelCol="{ span: 8 }"
            :wrapperCol="{ span: 8 }"
            label='CVV / CVC'
            fieldDecoratorId="cardNum"
            :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input cvc / cvv number' }]}"
        >
          <a-input placeholder='Card Number' name="cvc" v-model="cvv" @input="handleInput"/>
        </a-form-item>
      </a-form>
    </a-card>
  </section>

</template>

<script lang="js">
import Card from 'card'
export default {
  name: 'credit-card',
  props: ['value'],
  mounted () {
    this.card = new Card({
      form: '#card-form',
      container: '.card-wrapper'
    })
    this.cardNum = this.value.cardNum
  },
  data () {
    return {
      card: undefined,
      cardNum: '',
      name: this.value.name,
      expiration: this.value.expiration,
      cvv: this.value.cvv
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', {
        cardNum: this.cardNum,
        name: this.name,
        expiration: this.expiration,
        cvv: this.cvv
      })
    }
  },
  computed: {

  }
}
</script>

<style scoped lang="css">
  .credit-card {

  }
</style>
