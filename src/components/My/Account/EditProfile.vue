<template>
  <div>
    <h1>Edit Profile</h1>
    <a-layout-content :style="{ padding: '24px', margin: 0, minHeight: '280px' }">
      <div class="content">
        <a-form @submit="handleSubmit" :autoFormCreate="(form)=>{this.form = form}">
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
            <a-input placeholder="First Name" v-model="firstname">
              <a-icon v-if="firstname" slot="suffix" type="close-circle" @click="this.firstname = ''; this.form.setFieldsValue({firstname: ''})" />
            </a-input>
          </a-form-item>

          <a-form-item
            label='Middle Name'
            :labelCol="{ span: 9 }"
            :wrapperCol="{ span: 12 }"
            fieldDecoratorId="middlename"
            :fieldDecoratorOptions="{rules: [{max: 45, min: 0, message: 'Field \'Middle Name\' must be shorter than 45 characters.'}]}"
          >
            <a-input placeholder="Middle Name" v-model="middlename">
              <a-icon v-if="middlename" slot="suffix" type="close-circle" @click="emitEmptyField" />
            </a-input>
          </a-form-item>

          <a-form-item
            label='Last Name'
            :labelCol="{ span: 9 }"
            :wrapperCol="{ span: 12 }"
            fieldDecoratorId="lastname"
            :fieldDecoratorOptions="{rules: [{max: 45, min: 1, message: 'Field \'Last Name\' must be shorter than 45 characters.'}, { required: true, message: 'Please input your Last Name!' }]}"
          >
            <a-input placeholder="Last Name" v-model="lastname">
              <a-icon v-if="lastname" slot="suffix" type="close-circle" @click="emitEmptyField" />
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
              <a-icon slot="prefix" type="contacts" />
              <a-icon v-if="nameInOwnLanguage" slot="suffix" type="close-circle" @click="emitEmptyField" />
            </a-input>
          </a-form-item>

          <a-form-item
            label='Birthday'
            :labelCol="{ span: 9 }"
            :wrapperCol="{ span: 12 }"
            fieldDecoratorId="birthdayDate"
            :fieldDecoratorOptions="{rules: [{ required: true, message: 'What\'s your Birthday?' }]}"
          >
            <a-input placeholder="Birthday" v-model="birthdayDate" ref="titleInput">
              <a-icon slot="prefix" type="gift" />
              <a-icon v-if="birthdayDate" slot="suffix" type="close-circle" @click="emitEmptyField" />
            </a-input>
          </a-form-item>

          <a-form-item
            label='Biblography'
            :labelCol="{ span: 9 }"
            :wrapperCol="{ span: 12 }"
            fieldDecoratorId="bios"
            :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your Biblography!' }]}"
          >
            <a-textarea placeholder="Short summary about yourself" v-model="bios" ref="biosInput" :autosize="{ minRows: 3 }">
              <a-icon slot="prefix" type="smile" />
              <a-icon v-if="bios" slot="suffix" type="close-circle" @click="emitEmptyField" />
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
              <a-icon slot="prefix" type="team" />
              <a-icon v-if="organization" slot="suffix" type="close-circle" @click="emitEmptyField" />
            </a-input>
          </a-form-item>

          <a-form-item
            label='Address'
            :labelCol="{ span: 9 }"
            :wrapperCol="{ span: 12 }"
            fieldDecoratorId="address"
            :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your Address!' }]}"
          >
            <a-input placeholder="Address" v-model="address" ref="addressInput">
              <a-icon slot="prefix" type="car" />
              <a-icon v-if="address" slot="suffix" type="close-circle" @click="emitEmptyField" />
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
              <a-icon slot="prefix" type="car" />
              <a-icon v-if="city" slot="suffix" type="close-circle" @click="emitEmptyField" />
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
              <a-icon slot="prefix" type="mail" />
              <a-icon v-if="zipcode" slot="suffix" type="close-circle" @click="emitEmptyField" />
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
              <a-icon slot="prefix" type="car" />
              <a-icon v-if="state" slot="suffix" type="close-circle" @click="emitEmptyField" />
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
              <a-icon slot="prefix" type="car" />
              <a-icon v-if="country" slot="suffix" type="close-circle" @click="emitEmptyField" />
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
              <a-icon slot="prefix" type="phone" />
              <a-icon v-if="telephone" slot="suffix" type="close-circle" @click="emitEmptyField" />
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
              <a-icon slot="prefix" type="phone" />
              <a-icon v-if="fax" slot="suffix" type="close-circle" @click="emitEmptyField" />
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
              <a-icon slot="prefix" type="phone" />
              <a-icon v-if="cellphone" slot="suffix" type="close-circle" @click="emitEmptyField" />
            </a-input>
          </a-form-item>

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
            :fieldDecoratorOptions="{rules: [{ required: false, message: 'Please input your Passport!' }]}"
            v-if="needSupport"
          >
            <a-input placeholder="Passport" v-model="passport" ref="passportInput">
              <a-icon slot="prefix" type="idcard" />
              <a-icon v-if="passport" slot="suffix" type="close-circle" @click="emitEmptyField" />
            </a-input>
          </a-form-item>

          <!--<vue-recaptcha :sitekey="this.$store.state.sitekey">-->
            <a-button type='primary' htmlType='submit' style="width: 100%;" :loading="submitting" @click="submitData">
              <a-icon type="upload" /> Update
            </a-button>
          <!--</vue-recaptcha>-->
        </a-form>
      </div>
    </a-layout-content>
  </div>
</template>

<script>
export default {
  name: 'EditProfile',
  data () {
    return {
      userInfo: null,
      submitting: false
    }
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
            birthdayDate: [this.userInfo.birthyear, this.userInfo.birthmonth, this.userInfo.birthday].join('.') ,
            title: this.userInfo.title,
          })
        } catch (e) {
          this.$message.warn('Form parsing exception: ' + e, 4)
        }
      }, response  => {
        this.$message.error('Can\'t fetch category info.', 4)
      })
    },
    submitData () {
      this.submitting = true;
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
        title: formResult.title
      }, {emulateJSON: true}).then(response => {
        console.log(response.body)
        if (response.body.flag) {
          this.$message.success('Successfully updated user profile.', 4)
        } else {
          this.$message.error('Failed to update user profile. ' + response.body.cause, 4)
        }
      }, response => {
        this.$message.error('Internal Server Error. status-' + response.status, 4)
      })
    }
  }
}
</script>

<style scoped>

</style>
