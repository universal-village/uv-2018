<template>
  <div>
    <h1>Edit Paper Submission</h1>
    <a-layout-content :style="{ padding: '24px', margin: 0, minHeight: '280px' }">
      <a-button type="primary" @click="goBack">
        <a-icon type="left" />Back
      </a-button>
      <a-form :autoFormCreate="(form)=>{this.form = form}">
        <a-form-item
          label='Title'
          :labelCol="{ span: 6 }"
          :wrapperCol="{ span: 16 }"
          fieldDecoratorId="title"
          :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input the title of your paper submission!' }]}"
        >
          <a-input placeholder="Title" ref="titleInput" name="a">
            <a-icon slot="prefix" type="user" />
            <a-icon v-if="title" slot="suffix" type="close-circle" @click="emitEmptyField" />
          </a-input>
        </a-form-item>

        <a-form-item
          label='Abstract'
          :labelCol="{ span: 6 }"
          :wrapperCol="{ span: 16 }"
          fieldDecoratorId="abstract"
          :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input the Abstract of your paper submission!' }]}"
          :autosize="{ minRows: 3 }"
        >
          <a-textarea placeholder="Abstract">
            <a-icon v-if="abstract" slot="suffix" type="close-circle" @click="emitEmptyField" />
          </a-textarea>
        </a-form-item>

        <a-form-item
          label='Category'
          :labelCol="{ span: 6 }"
          :wrapperCol="{ span: 16 }"
          fieldDecoratorId="category"
          :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input the Category of your paper submission!' }]}"
        >
          <a-select
            style="width: 100%"
            placeholder="Category"
            :tokenSeparators="[',']"
          >
            <a-select-option v-for="category in categories" :key="category" >
              {{ category }}
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          label='Authors'
          :labelCol="{ span: 6 }"
          :wrapperCol="{ span: 16 }"
          fieldDecoratorId="authors"
          :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input the Authors of your paper submission!' }]}"
        >
          <a-select
            mode="tags"
            style="width: 100%"
            placeholder="Authors"
            :tokenSeparators="[',']"
          >
          </a-select>
        </a-form-item>

        <a-form-item
          label='Keywords'
          :labelCol="{ span: 6 }"
          :wrapperCol="{ span: 16 }"
          fieldDecoratorId="keywords"
          :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input the Keywords of your paper submission!' }]}"
        >
          <a-select
            mode="tags"
            style="width: 100%"
            placeholder="Keywords"
            :tokenSeparators="[',']"
          >
          </a-select>
        </a-form-item>

        <a-form-item
          label='Paper'
          :labelCol="{ span: 6 }"
          :wrapperCol="{ span: 16 }"
          fieldDecoratorId="paper"
          :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please upload the Paper of your paper submission!' }]}"
        >
          <a-upload-dragger name="paper" :multiple="false"
                            :action="getAction">
            <a-button>
              <a-icon type="upload" /> Upload
            </a-button>
          </a-upload-dragger>
        </a-form-item>
        <vue-recaptcha :sitekey="this.$store.state.sitekey" @verify="submitPaper">
          <a-button type="primary" :loading="uploading" htmlType='submit'>
            Save
          </a-button>
        </vue-recaptcha>
        <!--<a-button type="dashed" @click="devGetValue">-->
        <!--Get Value-->
        <!--</a-button>-->
      </a-form>
    </a-layout-content>
  </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'
export default {
  name: 'Edit',
  data () {
    return {
      paper: {
        title: '',
        authors: '',
        id: -1
      },
      authorEmail: '',
      uploading: false,
      editingPaperList: [],
      categories: [],
      editingPaper: {},
      getAction: this.$store.state.endpoint.api + '/uploadPaper'
    }
  },
  components: {
    VueRecaptcha
  },
  watch: {
    '$route': ['getCategories', 'fetchData']
  },
  created () {
    this.getCategories()
    this.fetchData()
    this.authorEmail = this.$store.state.authenticate.username
  },
  methods: {
    fetchData () {
      this.$http.get(this.$store.state.endpoint.api + '/myPaper').then(response => {
        console.log(response.body)
        try {
          // this.editingPaperList = [
          //   {"paperid":7,"title":"as7","authors":"asfsdf,a,s,d,g,f","categoryId":1,"keywords":["adsfdsaf", "adff"],
          //     "link":"https://s3.us-east-2.amazonaws.com/uv2018-paper/1532017404874-FAaQ.pdf","phase":"Need-Review",
          //     "_abstract":'absstract'}, {"paperid":8,"title":"as8","authors":"asfsdf","categoryId":1,"keywords":["adsfdsaf"],
          //     "link":"https://s3.us-east-2.amazonaws.com/uv2018-paper/1532017404874-FAQ.pdf","phase":"Need-Review",
          //     "_abstract":null}, {"paperid":9,"title":"as9","authors":"asfsdf","categoryId":1,"keywords":["adsfdsaf"],
          //     "link":"https://s3.us-east-2.amazonaws.com/uv2018-paper/1532017404874-FAQ.pdf","phase":"Need-Review",
          //     "_abstract":null}]
          this.editingPaperList = response.body
          if (!this.$route.params.paperId) {
            return this.$message.error('Paper ID not specified. Please specify your paper ID in the page url.', 4)
          }
          console.log('source list %o', this.editingPaperList)
          this.editingPaper = this.editingPaperList.filter((el) => { return el.paperid === parseInt(this.$route.params.paperId) })[0]
          console.log('editing object %o, paper id %s', this.editingPaper, this.$route.params.paperId)
          this.paper.id = this.editingPaper.id
          this.paper.authors = this.editingPaper.authors
          this.paper.title = this.editingPaper.title
          this.form.setFieldsValue({
            title: this.editingPaper.title,
            authors: this.editingPaper.authors.split(','),
            category: this.categories[this.editingPaper.categoryId - 1],
            keywords: this.editingPaper.keywords,
            abstract: this.editingPaper._abstract
          })
        } catch (e) {
          this.$message.error('Can\'t fetch submission.', 4)
          console.log('[Edit Paper 9893ea55]: Exception Caught')
          console.log(e)
        }
      }, response => {
        this.$message.error('Can\'t fetch submission.', 4)
      })
    },
    getCategories () {
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
    submitPaper (recaptchaToken) {
      this.uploading = true
      let fields = this.form.getFieldsValue()
      this.$http.post(this.$store.state.endpoint.api + '/updatePaper',
        {
          paperid: this.$route.params.paperId,
          title: encodeURIComponent(fields.title),
          abstract: encodeURIComponent(fields.abstract),
          categoryid: this.categories.findIndex((el) => { return el === fields.category }) + 1,
          authors: encodeURIComponent(fields.authors.join(',')),
          keyword: encodeURIComponent(fields.keywords.join(',')),
          token: recaptchaToken
        }, {emulateJSON: true}
      ).then(response => {
        this.uploading = false
        console.log(response.body)
        if (response.body.flag) {
          this.$message.success('Your paper has been successfully submitted. Redirecting you to your submission list.', 3)
          this.$router.push('/my/submissions/paper')
        } else {
          this.$message.error(`Error occurred while submitting your paper: [${response.body.cause}]. Please try again later.`, 4)
          window.grecaptcha.reset()
        }
      }, response => {
        this.uploading = false
        this.$message.error(`Error occurred while submitting your paper: [${response.body.cause}]. Please try again later.`, 4)
        window.grecaptcha.reset()
      })
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>
