<template>
  <div>
    <h1>Add new Paper Submission</h1>
    <a-layout-content :style="{ padding: '24px', margin: 0, minHeight: '280px' }">
      <a-form @submit="handleSubmit" :autoFormCreate="(form)=>{this.form = form}">
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
            @change="handleChange"
            placeholder="Category"
            :tokenSeparators="[',']"
          >
            <a-select-option v-for="category in categoryAutoComplete" :key="category" >
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
            @change="handleChange"
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
            @change="handleChange"
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
          <a-upload-dragger name="paper" :multiple="false" @change="handleChange"
                            :action="getAction">
            <p class="ant-upload-drag-icon">
              <a-icon type="inbox" />
            </p>
            <p class="ant-upload-text" :style="{ 'padding': '0 1em' }">Click or drag file to this area to upload</p>
            <p class="ant-upload-hint" :style="{ 'padding': '0 1em' }">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
          </a-upload-dragger>
        </a-form-item>
        <a-button type="primary" :loading="uploading" htmlType='submit' @click="submitPaper">
          Submit
        </a-button>
        <a-button type="dashed" @click="devGetValue">
          Get Value
        </a-button>
      </a-form>
    </a-layout-content>
  </div>
</template>

<script>
export default {
  name: 'PaperAdd',
  data () {
    return {
      title: '',
      abstract: '',
      authors: [],
      keyword: [],
      file: '',
      tagList: ['one', 'two', 'three'],
      authorList: [],
      categoryAutoComplete: [],
      uploading: false,
      getAction: this.$store.state.endpoint + '/uploadPaper'
    }
  },
  created () {
    this.fetchAutoComplete()
  },
  methods: {
    fetchAutoComplete () {
      this.$http.get(this.$store.state.endpoint + '/getCategories').then(response => {
        console.log(response.body)
        try {
          this.categoryAutoComplete = response.body.categories
        } catch (e) {
          this.$message.error('Can\'t fetch category info.', 5)
        }
      }, response => {
        this.$message.error('Can\'t fetch category info.', 5)
      })
    },
    submitPaper () {
      let fields = this.form.getFieldsValue()
      this.$http.post(this.$store.state.endpoint + '/submitPaper',
        {
          title: encodeURIComponent(fields.title),
          abstract: encodeURIComponent(fields.abstract),
          categoryid: this.categoryAutoComplete.findIndex((el) => { return el === fields.category }) + 1,
          authors: encodeURIComponent(fields.authors.join(',')),
          keyword: encodeURIComponent(fields.keywords.join(','))
        }, {emulateJSON: true}
      ).then(response => {
        console.log(response.body)
        try {
          this.categoryAutoComplete = response.body.categories
        } catch (e) {
          this.$message.error('Can\'t fetch category info.', 5)
        }
      }, response => {
        this.$message.error('Can\'t fetch category info.', 5)
      })
    },
    devGetValue () {
      console.log(this.form.getFieldsValue())
    }
  }
}
</script>

<style scoped>

</style>
