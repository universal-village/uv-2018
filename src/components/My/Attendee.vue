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
          <a-col :md="24" :xs="24">
            <a-collapse :bordered="false" accordion :defaultActiveKey='1'>
              <a-collapse-panel :key="1" >
                <template slot="header">
                  <span>Register for IEEE International Universal Village Conference</span>
                </template>
                <div class="attendee-description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel efficitur dolor, sed faucibus enim. Sed tempor tempus ornare. In ornare magna in felis gravida, vel lobortis sem molestie. Donec ultrices, lorem in consequat sagittis, nisi nibh hendrerit est, vel iaculis sem nunc eu mi. Quisque efficitur egestas sapien eu ultricies. Cras sit amet accumsan nisl. Quisque quis nulla egestas, tempus eros at, tristique metus. Etiam tempus posuere nunc quis elementum. Duis dignissim placerat mi quis rhoncus. Proin vestibulum consequat erat vitae dapibus. Morbi vel elementum mauris. Aliquam molestie tristique gravida.</p>
                  <p>Proin sagittis nisi a magna sagittis iaculis. Praesent eget sapien at quam condimentum varius. Maecenas vestibulum mi ipsum, sed accumsan massa elementum et. Nullam a turpis non diam suscipit mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac consectetur magna, vel ultricies urna. Suspendisse non semper lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse aliquam, neque a suscipit dignissim, magna est consectetur mi, sit amet blandit augue massa vitae orci. Vivamus et tellus ligula. Morbi quis luctus ipsum. Proin mi quam, pretium a est vitae, tempor blandit lectus. Praesent finibus dui sollicitudin maximus euismod. Donec efficitur scelerisque mauris, vitae ornare orci mollis eu. Sed eu nunc felis. Sed et mattis sem, et dictum lorem.</p>
                  <p>Aliquam congue turpis sit amet metus posuere, a dignissim dui molestie. Duis eget posuere lectus. Donec interdum nisl quis ante mollis porttitor. Nam bibendum est eros, ultricies venenatis tortor ultrices vitae. Ut mollis varius ante a auctor. Sed eu tincidunt risus. Nulla vestibulum ligula sit amet nulla maximus, vel rhoncus metus rutrum. Nunc posuere justo in efficitur molestie. Sed nisi elit, volutpat ut elit id, eleifend ullamcorper sapien. Morbi a mauris viverra, aliquet urna a, ullamcorper mauris. Phasellus condimentum dignissim dolor vel rhoncus. Aliquam ac tempor sapien, in posuere ante. Vestibulum ultrices eu elit facilisis maximus. Duis rutrum, dolor vel bibendum pharetra, odio orci auctor nisi, nec pellentesque tellus tortor at tortor. Phasellus ullamcorper interdum justo, nec elementum eros tincidunt id.</p>
                  <p>Proin blandit metus ex, in rhoncus ex volutpat a. Aliquam mattis gravida leo ut placerat. Aliquam pulvinar volutpat vestibulum. Sed elementum nunc sit amet dapibus molestie. Nunc pellentesque interdum dolor vel pharetra. Nullam facilisis laoreet lorem, sit amet rhoncus massa sollicitudin interdum. Pellentesque cursus est ligula, ac sagittis augue aliquam luctus. Praesent odio augue, dapibus a sapien a, iaculis consequat est. Sed sed porta dolor. Suspendisse imperdiet nulla nec leo ullamcorper, id scelerisque lacus tristique. In vitae dui tempor, rutrum tortor eget, ultricies arcu.</p>
                </div>
              </a-collapse-panel>
              <a-collapse-panel :key="2">
                <template slot="header">
                  <span>Volunteer, Exhibitor and Honored Membership Registration</span>
                </template>
                <div class="attendee-description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum interdum arcu, eget consectetur erat posuere vel. Etiam faucibus eros lacus, at pellentesque libero lacinia vitae. Nulla venenatis pharetra tempus. Quisque volutpat aliquet volutpat. Vestibulum in iaculis odio, sit amet venenatis ipsum. Curabitur accumsan posuere felis, nec venenatis velit vestibulum ut. Vivamus et pharetra felis. Vivamus scelerisque ligula molestie lacus volutpat egestas vitae vel diam. Donec facilisis leo vel nunc facilisis sodales. Nulla a commodo sapien, non venenatis massa. Praesent cursus lacus et mauris iaculis fringilla in non eros. Nullam consequat odio risus. Praesent hendrerit rutrum eleifend.</p>
                  <p>Ut auctor, ipsum ac volutpat placerat, dolor turpis convallis nunc, id lobortis tellus eros aliquam risus. Morbi id elit at augue interdum fringilla eu a turpis. Sed sed venenatis ante, at aliquam libero. Etiam vel imperdiet est. Sed vestibulum, diam id accumsan aliquet, magna lorem bibendum nulla, at tempor sapien massa in ante. Vestibulum ac magna in felis suscipit porttitor condimentum vel neque. Integer venenatis, nunc a blandit congue, justo est volutpat justo, ac auctor mi nibh at lorem. Praesent rhoncus dapibus ipsum, in lacinia ante ornare ut. Phasellus cursus condimentum odio, sed accumsan ex elementum quis. Aenean sit amet pretium risus, et faucibus urna. Proin porttitor felis justo, quis sodales massa posuere et. Morbi leo mauris, rutrum et orci at, facilisis porta nisi. Morbi lobortis molestie lacus ut lobortis.</p>
                </div>
              </a-collapse-panel>
              <a-collapse-panel :key="3">
                <template slot="header">
                  <span>Register and make a payment</span>
                </template>
                <div class="content">
                  <a-form style="padding: 24px; margin-top: 2em;">
                    <a-form-item
                      label='E-mail'
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 12 }"
                      fieldDecoratorId="email"
                      :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your E-mail!' }]}"
                    >
                      <a-input placeholder="E-mail" v-model="email" ref="emailInput">
                        <a-icon slot="prefix" type="user"/>
                        <a-icon v-if="email" slot="suffix" type="close-circle" style="cursor: pointer;"/>
                      </a-input>
                    </a-form-item>
                    <a-form-item
                      label='Password'
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 12 }"
                      fieldDecoratorId="password"
                      :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your password!' }]}"
                    >
                      <a-input placeholder="Password" v-model="password" ref="passwordInput" type="password">
                        <a-icon slot="prefix" type="lock"/>
                        <a-icon v-if="password" slot="suffix" type="close-circle" style="cursor: pointer;" @click="clr('pw')"/>
                        <a-icon v-if="!password" slot="suffix" type="question-circle" style="cursor: pointer;" @click="jumpToForgotPassword"/>
                      </a-input>
                    </a-form-item>
                    <a-form-item
                      :wrapperCol="{ span: 12, offset: 5 }"
                    >
                      <vue-recaptcha :sitekey="this.$store.state.sitekey" @verify="handleSubmit">
                        <a-button type='primary' htmlType='submit' style="width: 100%;" :loading="spinning">
                          Proceed to checkout
                        </a-button>
                      </vue-recaptcha>
                    </a-form-item>
                  </a-form>
                </div>
              </a-collapse-panel>
            </a-collapse>
          </a-col>
        </a-row>
      </a-layout-content>
    </a-layout>
  </a-layout-content>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'
export default {
  name: 'attendee',
  props: [],
  components: {
    VueRecaptcha
  },
  mounted () {

  },
  data () {
    return {
      email: '',
      password: '',
      spinning: false,
      activeKey: '1',
      amt: 10000,
      product: {
        name: 'Test',
        description: 'Ticket to UV2018'
      },
      payload: {
        stripeToken: 'token.id',
        amount: 49999,
        currency: 'USD',
        description: 'Ticket to IEEE Intl. UV2018'
      }
    }
  },
  methods: {
    clr: function (name) {
      switch (name) {
        case 'pw':
          this.password = ''
          break
        case 'email':
          this.email = ''
          break
      }
    },
    jumpToForgotPassword: () => {
      this.$router.push('/reset-password')
    },
    handleSubmit: function (recaptchaToken) {
      this.spinning = true
      this.$checkout.open({
        name: 'test charging',
        currency: 'USD',
        amount: this.amt,
        token: (token) => {
          console.log(token)
          console.log(recaptchaToken)
          this.payload.stripeToken = token.id
          window.setTimeout(() => {
            this.$http.post(this.$store.state.endpoint.api + '/checkout', this.payload, {emulateJSON: true}).then(response => {
              console.log(response.body.flag)
              this.spinning = false
              if (response.body.flag === true) {
                this.$message.success('Successfully paid', 2)
                this.$router.push('/success')
              } else {
                this.$message.error(response.body.info, 4)
              }
            }, response => {
              this.spinning = false
              this.$message.error('Internal Server Error. Please try again.', 4)
            })
          }, 500)
        }
      })
    },
  },
  computed: {

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

  @media only screen and (max-width: 960px) {
    .ant-layout-content {
      padding: 0 20px;
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
