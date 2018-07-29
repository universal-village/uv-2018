<template>
  <a-layout-content>
    <a-form-item
      label='Email'
      :labelCol="{ span: 5 }"
      :wrapperCol="{ span: 12 }"
      fieldDecoratorId="note"
      :fieldDecoratorOptions="{rules: [{ required: true, message: 'Reviewer email cannot be left blank!' }]}"
    >
      <a-input placeholder="email" v-model="promoteEmail"/>
      <vue-recaptcha :sitekey="this.$store.state.sitekey" @verify="handleSubmit">
        <a-button type='primary' htmlType='submit' style="float: right; margin-top: 2em;">
          Promote User as Reviewer &nbsp;
          <a-icon type="forward"/>
        </a-button>
      </vue-recaptcha>
    </a-form-item>
    <a-table :columns="columns" :dataSource="data" bordered>
      <template slot="name" slot-scope="text">
        <span style="font-weight: bolder">{{text}}</span>
      </template>
      <template slot="title" slot-scope="currentPageData">
        <h2>Reviewers Available at #{{categories[categoryId]}}</h2>
      </template>
    </a-table>
  </a-layout-content>
</template>

<script lang="js">
import VueRecaptcha from 'vue-recaptcha'
export default {
  name: 'promote',
  props: [],
  components: {
    VueRecaptcha
  },
  mounted () {
    this.checkChairmanStatus()
    this.fetchData()
    this.getCategories()
  },
  data () {
    return {
      promoteEmail: '',
      spinning: false,
      categoryId: 0,
      categories: [''],
      reviewers: [/* {"userid":17,"firstname":"Guanghua","middlename":"","lastname":"Cheng","email":"orangeparadise01@gmail.com","organization":"Universal Village"} */],
      columns: [{
        title: 'Name',
        dataIndex: 'name',
        scopedSlots: { customRender: 'name' },
      }, {
        title: 'Email',
        className: 'email',
        dataIndex: 'email',
      }, {
        title: 'Organization',
        dataIndex: 'organization',
      }]
    }
  },
  methods: {
    checkChairmanStatus: function () {
      this.$http.get(this.$store.state.endpoint.api + '/isCategoryChair', {emulateJSON: true}).then(
        response => {
          console.log(response.body.flag)
          if (response.body.flag !== true) {
            this.$message.error(response.body.info)
            this.$router.push('/')
          } else {
            this.categoryId = this.$message.categoryId
          }
        }, response => {
          this.$message.error('Page loading error. Please check parameters. status-' + response.status, 3)
          this.$router.push('/')
        })
    },
    getCategories: function () {
      this.$http.get(this.$store.state.endpoint.api + '/getCategories').then(response => {
        console.log(response.body)
        try {
          this.categories = response.body.categories
        } catch (e) {
          this.$message.error('Can\'t fetch category info.', 4)
        }
      }, response => {
        this.$message.error('Can\'t fetch category info.', 4)
      })
    },
    fetchData: function () {
      if (this.$store.state.authenticate.username.length === 0) {
        this.$message.info('Before entering Reviewer Page, please log in.', 4)
        this.$router.push('/')
        return
      }
      this.$http.get(this.$store.state.endpoint.api + '/categoryChair/getCategoryReviewers', {emulateJSON: true}).then(response => {
        console.log(response.body)
        /* if (response.body.flag !== true) {
          this.$message.error(response.body.info, 3)
        } else {
          this.assignedPapers = response.body.assignedPapers
        } */
        this.reviewers = response.body
      }, response => {
        this.$message.error('Page loading error. Please check parameters. status-' + response.status, 3)
      })
    },
    handleSubmit (recaptchaToken) {
      this.spinning = true
      console.log(recaptchaToken)
      // return false
      this.$http.post(this.$store.state.endpoint.api + '/categoryChair/promoteReviewer', {
        email: this.promoteEmail,
        token: recaptchaToken
      }, {emulateJSON: true}).then(response => {
        console.log(response.body.flag)
        this.spinning = false
        if (response.body.flag === true) {
          this.$message.success('Successfully Updated.', 2)
        } else {
          this.$message.error(response.body.info, 4)
        }
      }, response => {
        this.spinning = false
        this.$message.error('Internal Server Error. Please try again.', 4)
      })
    }
  },
  computed: {
    data: function () {
      return this.reviewers.map((val) => {
        return {
          name: val.firstname + ' ' + val.middlename + ' ' + val.lastname,
          email: val.email,
          organization: val.organization
        }
      })
    }
  }
}
</script>

<style scoped lang="css">
th.column-money td.column-money {
  text-align: right !important;
}

button.ant-btn ant-btn-primary {
  display: block;
  margin-left: 80%;
  margin-right: auto;
}
</style>
