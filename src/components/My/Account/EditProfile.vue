<template>
  <div>
    <h1>Edit Profile</h1>
    <a-layout-content :style="{ padding: '24px', margin: 0, minHeight: '280px' }">
      <div class="content">
        <a-form :autoFormCreate="(form)=>{this.form = form}">
          <a-form-item
            label='Title'
            :labelCol="{ span: 9 }"
            :wrapperCol="{ span: 12 }"
            fieldDecoratorId="title"
            :fieldDecoratorOptions="{rules: [{ required: true, message: 'How should we call you?' }]}"
          >
            <a-select>
              <a-select-option value="Mr.">Mr.</a-select-option>
              <a-select-option value="Mrs.">Mrs.</a-select-option>
              <a-select-option value="Ms.">Ms.</a-select-option>
              <a-select-option value="Dr.">Dr.</a-select-option>
              <a-select-option value="Prof.">Prof.</a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item
            label='First Name'
            :labelCol="{ span: 9 }"
            :wrapperCol="{ span: 12 }"
            fieldDecoratorId="firstname"
            :fieldDecoratorOptions="{rules: [{max: 45, min: 1, message: 'Field \'First Name\' must be shorter than 45 characters.'}, { required: true, message: 'Please input your First Name!' }]}"
          >
            <a-input placeholder="First Name" v-model="editing.firstname">
              <a-icon v-if="editing.firstname" slot="suffix" type="close-circle" @click="this.firstname = ''; this.form.setFieldsValue({firstname: ''})" />
            </a-input>
          </a-form-item>

          <a-form-item
            label='Middle Name'
            :labelCol="{ span: 9 }"
            :wrapperCol="{ span: 12 }"
            fieldDecoratorId="middlename"
            :fieldDecoratorOptions="{rules: [{max: 45, min: 0, message: 'Field \'Middle Name\' must be shorter than 45 characters.'}]}"
          >
            <a-input placeholder="Middle Name" v-model="editing.middlename">
              <a-icon v-if="editing.middlename" slot="suffix" type="close-circle" @click="emitEmptyField" />
            </a-input>
          </a-form-item>

          <a-form-item
            label='Last Name'
            :labelCol="{ span: 9 }"
            :wrapperCol="{ span: 12 }"
            fieldDecoratorId="lastname"
            :fieldDecoratorOptions="{rules: [{max: 45, min: 1, message: 'Field \'Last Name\' must be shorter than 45 characters.'}, { required: true, message: 'Please input your Last Name!' }]}"
          >
            <a-input placeholder="Last Name" v-model="editing.lastname">
              <a-icon v-if="editing.lastname" slot="suffix" type="close-circle" @click="emitEmptyField" />
            </a-input>
          </a-form-item>

          <a-form-item
            label='Name in own Language'
            :labelCol="{ span: 9 }"
            :wrapperCol="{ span: 12 }"
            fieldDecoratorId="nameInOwnLanguage"
            :fieldDecoratorOptions="{rules: [{max: 200, min: 1, message: 'Field \'Name in own Language\' must be shorter than 200 characters.'}, { required: true, message: 'Please input your Name in own Language!' }]}"
          >
            <a-input placeholder="Name in own Language" v-model="editing.nameInOwnLanguage" ref="nameInOwnLanguageInput">
              <a-icon slot="prefix" type="contacts" />
              <a-icon v-if="editing.nameInOwnLanguage" slot="suffix" type="close-circle" @click="emitEmptyField" />
            </a-input>
          </a-form-item>

          <a-form-item
            label='Birthday'
            :labelCol="{ span: 9 }"
            :wrapperCol="{ span: 12 }"
            fieldDecoratorId="birthdayDate"
            :fieldDecoratorOptions="{rules: [{ required: true, message: 'What\'s your Birthday?' }]}"
          >
            <a-input placeholder="Birthday" v-model="editing.birthdayDate" ref="titleInput">
              <a-icon slot="prefix" type="gift" />
              <a-icon v-if="editing.birthdayDate" slot="suffix" type="close-circle" @click="emitEmptyField" />
            </a-input>
          </a-form-item>

          <a-form-item
            label='Biography'
            :labelCol="{ span: 9 }"
            :wrapperCol="{ span: 12 }"
            fieldDecoratorId="bios"
            :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your Biography!' }]}"
          >
            <a-textarea placeholder="Short summary about yourself" v-model="editing.bios" ref="biosInput" :autosize="{ minRows: 3 }">
              <a-icon slot="prefix" type="smile" />
              <a-icon v-if="editing.bios" slot="suffix" type="close-circle" @click="emitEmptyField" />
            </a-textarea>
          </a-form-item>

          <a-form-item
            label='Organization'
            :labelCol="{ span: 9 }"
            :wrapperCol="{ span: 12 }"
            fieldDecoratorId="organization"
            :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your Organization!' }]}"
          >
            <a-input placeholder="Organization" v-model="editing.organization" ref="organizationInput">
              <a-icon slot="prefix" type="team" />
              <a-icon v-if="editing.organization" slot="suffix" type="close-circle" @click="emitEmptyField" />
            </a-input>
          </a-form-item>

          <a-form-item
            label='Address'
            :labelCol="{ span: 9 }"
            :wrapperCol="{ span: 12 }"
            fieldDecoratorId="address"
            :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your Address!' }]}"
          >
            <a-input placeholder="Address" v-model="editing.address" ref="addressInput">
              <a-icon slot="prefix" type="car" />
              <a-icon v-if="editing.address" slot="suffix" type="close-circle" @click="emitEmptyField" />
            </a-input>
          </a-form-item>

          <a-form-item
            label='City'
            :labelCol="{ span: 9 }"
            :wrapperCol="{ span: 12 }"
            fieldDecoratorId="city"
            :fieldDecoratorOptions="{rules: [{ required: false, message: 'Please input your City!' }]}"
          >
            <a-input placeholder="City" v-model="editing.city" ref="cityInput">
              <a-icon slot="prefix" type="car" />
              <a-icon v-if="editing.city" slot="suffix" type="close-circle" @click="emitEmptyField" />
            </a-input>
          </a-form-item>

          <a-form-item
            label='Zip Postal Code'
            :labelCol="{ span: 9 }"
            :wrapperCol="{ span: 12 }"
            fieldDecoratorId="zipcode"
            :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your Zip Postal Code!' }]}"
          >
            <a-input placeholder="02049" v-model="editing.zipcode" ref="zipcodeInput">
              <a-icon slot="prefix" type="mail" />
              <a-icon v-if="editing.zipcode" slot="suffix" type="close-circle" @click="emitEmptyField" />
            </a-input>
          </a-form-item>

          <a-form-item
            label='State'
            :labelCol="{ span: 9 }"
            :wrapperCol="{ span: 12 }"
            fieldDecoratorId="state"
            :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your State!' }]}"
          >
            <a-input placeholder="State" v-model="editing.state" ref="stateInput">
              <a-icon slot="prefix" type="car" />
              <a-icon v-if="editing.state" slot="suffix" type="close-circle" @click="emitEmptyField" />
            </a-input>
          </a-form-item>

          <a-form-item
            label='Country'
            :labelCol="{ span: 9 }"
            :wrapperCol="{ span: 12 }"
            fieldDecoratorId="country"
            :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your Country!' }]}"
          >
            <a-input placeholder="Country" v-model="editing.country" ref="countryInput">
              <a-icon slot="prefix" type="car" />
              <a-icon v-if="editing.country" slot="suffix" type="close-circle" @click="emitEmptyField" />
            </a-input>
          </a-form-item>

          <a-form-item
            label='Telephone'
            :labelCol="{ span: 9 }"
            :wrapperCol="{ span: 12 }"
            fieldDecoratorId="telephone"
            :fieldDecoratorOptions="{rules: [{ required: false, message: 'Please input your Telephone!' }]}"
          >
            <a-input placeholder="Telephone" v-model="editing.telephone" ref="telephoneInput">
              <a-icon slot="prefix" type="phone" />
              <a-icon v-if="editing.telephone" slot="suffix" type="close-circle" @click="emitEmptyField" />
            </a-input>
          </a-form-item>

          <a-form-item
            label='Fax'
            :labelCol="{ span: 9 }"
            :wrapperCol="{ span: 12 }"
            fieldDecoratorId="fax"
            :fieldDecoratorOptions="{rules: [{ required: false, message: 'Please input your Fax!' }]}"
          >
            <a-input placeholder="Fax" v-model="editing.fax" ref="faxInput">
              <a-icon slot="prefix" type="phone" />
              <a-icon v-if="editing.fax" slot="suffix" type="close-circle" @click="emitEmptyField" />
            </a-input>
          </a-form-item>

          <a-form-item
            label='Cellphone'
            :labelCol="{ span: 9 }"
            :wrapperCol="{ span: 12 }"
            fieldDecoratorId="cellphone"
            :fieldDecoratorOptions="{rules: [{ required: false, message: 'Please input your Cellphone!' }]}"
          >
            <a-input placeholder="Cellphone" v-model="editing.cellphone" ref="cellphoneInput">
              <a-icon slot="prefix" type="phone" />
              <a-icon v-if="editing.cellphone" slot="suffix" type="close-circle" @click="emitEmptyField" />
            </a-input>
          </a-form-item>

          <a-form-item
            label='I Need a Support Letter for US Visa'
            :labelCol="{ span: 9 }"
            :wrapperCol="{ span: 12 }"
            fieldDecoratorId="needSupport"
            :fieldDecoratorOptions="{rules: [{ required: true, message: 'Do you need Support?' }]}"
          >
            <a-switch checkedChildren="Yes" unCheckedChildren="No"/>
          </a-form-item>

          <a-form-item
            label='Passport Number'
            :labelCol="{ span: 9 }"
            :wrapperCol="{ span: 12 }"
            fieldDecoratorId="passport"
            :fieldDecoratorOptions="{rules: [{ required: false, message: 'Please input your Passport!' }]}"
            v-if="needSupport"
          >
            <a-input placeholder="Passport" v-model="editing.passport" ref="passportInput">
              <a-icon slot="prefix" type="idcard" />
              <a-icon v-if="editing.passport" slot="suffix" type="close-circle" @click="emitEmptyField" />
            </a-input>
          </a-form-item>

          <a-form-item
            label='Photo'
            :labelCol="{ span: 9 }"
            :wrapperCol="{ span: 12 }"
            fieldDecoratorId="photo"
            :fieldDecoratorOptions="{rules: [{ required: false, message: 'You can upload your photo here.' }]}"
          >
            <a-upload-dragger name="photo" :multiple="false" @change="handleChange"
                              :action="getAction">
              <p class="ant-upload-drag-icon">
                <a-icon type="inbox"/>
              </p>
              <p class="ant-upload-text" :style="{ 'padding': '0 2em' }">Click or drag file to this area to upload them; file
                size should be less than 5MB.</p>
            </a-upload-dragger>
          </a-form-item>

          <vue-recaptcha :sitekey="this.$store.state.sitekey" @verify="submitData">
            <a-button type='primary' htmlType='submit' style="width: 100%;" :loading="submitting">
              <a-icon type="upload" /> Update
            </a-button>
          </vue-recaptcha>
        </a-form>
      </div>
    </a-layout-content>
  </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'
export default {
  name: 'EditProfile',
  data () {
    return {
      userInfo: null,
      submitting: false,
      editing: {
        firstname: '',
        middlename: '',
        lastname: '',
        nameInOwnLanguage: '',
        birthdayDate: '',
        bios: '',
        organization: '',
        address: '',
        city: '',
        zipcode: '',
        state: '',
        country: '',
        telephone: '',
        fax: '',
        cellphone: '',
        passport: '',
        needSupport: ''
      },
      getAction: this.$store.state.endpoint.api + '/uploadPhoto'
    }
  },
  components: {
    VueRecaptcha
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$http.get(this.$store.state.endpoint.api + '/getUser').then(response => {
        console.log(response.body)
        try {
          this.userInfo = response.body
          // this.userInfo = {"bios":"adsfdsagda","photo":null,"email":"2403901511%40qq.com","zipcode":"1234","firstname":"asdfasdf","lastname":"12323421","middlename":null,"nameInOwnLanguage":"231413245","organization":"dsagdasg","address":"adsfdsaf","city":"searaesf","state":"dsafasdf","country":"adsfsadf","telephone":"sdafsadf","fax":"sadfasdf","cellphone":"dsadsfasdf","passport":"asdfdsaf","needSupport":"true","title":"46fdsg","birthyear":222,"birthmonth":9,"birthday":9}
        } catch (e) {
          this.$message.error('Can\'t fetch category info.', 4)
        }
        try {
          console.log(this.userInfo)
          this.form.setFieldsValue({
            zipcode: this.userInfo.zipcode,
            bios: this.userInfo.bios,
            firstname: this.userInfo.firstname,
            middlename: this.userInfo.middlename,
            lastname: this.userInfo.lastname,
            nameInOwnLanguage: this.userInfo.nameInOwnLanguage,
            organization: this.userInfo.organization,
            address: this.userInfo.address,
            city: this.userInfo.city,
            state: this.userInfo.state,
            country: this.userInfo.country,
            telephone: this.userInfo.telephone,
            fax: this.userInfo.fax,
            cellphone: this.userInfo.cellphone,
            passport: this.userInfo.passport,
            needSupport: this.userInfo.needSupport,
            birthdayDate: [this.userInfo.birthyear, this.userInfo.birthmonth, this.userInfo.birthday].join('.'),
            title: this.userInfo.title
          })
        } catch (e) {
          this.$message.warn('Form parsing exception: ' + e, 4)
        }
      }, response => {
        this.$message.error('Can\'t fetch category info.', 4)
      })
    },
    handleChange () {

    },
    submitData (recaptchaToken) {
      this.submitting = true
      let formResult = this.form.getFieldsValue()
      this.$http.post(this.$store.state.endpoint.api + '/updateUser', {
        zipcode: formResult.zipcode,
        bios: formResult.bios,
        firstname: formResult.firstname,
        middlename: formResult.middlename,
        lastname: formResult.lastname,
        nameInOwnLanguage: formResult.nameInOwnLanguage,
        organization: formResult.organization,
        address: formResult.address,
        city: formResult.city,
        state: formResult.state,
        country: formResult.country,
        telephone: formResult.telephone,
        fax: formResult.fax,
        cellphone: formResult.cellphone,
        passport: formResult.passport,
        needSupport: formResult.needSupport,
        birthday: formResult.birthdayDate.split('.')[2],
        birthmonth: formResult.birthdayDate.split('.')[1],
        birthyear: formResult.birthdayDate.split('.')[0],
        title: formResult.title,
        token: recaptchaToken
      }, {emulateJSON: true}).then(response => {
        console.log(response.body)
        this.submitting = false
        if (response.body.flag) {
          this.$message.success('Successfully updated user profile.', 4)
        } else {
          this.$message.error('Failed to update user profile. ' + response.body.cause, 4)
          window.grecaptcha.reset()
        }
      }, response => {
        this.submitting = false
        this.$message.error('Internal Server Error. status-' + response.status, 4)
        window.grecaptcha.reset()
      })
    }
  }
}
</script>

<style scoped>

</style>
