<template>
  <div>
    <h1>My Submissions</h1>
    <a-modal
      v-model="modalVisible"
      title="Edit Paper Submission"
      onOk="handleOk"
    >
      <template slot="footer">
        <a-button key="back" @click="() => {this.modalVisible = false}">Cancel</a-button>
        <a-button key="submit" type="primary" :loading="submittingEdition" @click="handleOk">
          Submit
        </a-button>
      </template>
      <h1>Editing Paper {{editingPaperId}}</h1>
      <a-form @submit="handleSubmit" :autoFormCreate="(form)=>{this.form = form}">
        <a-form-item
          label='Title'
          :labelCol="{ span: 6 }"
          :wrapperCol="{ span: 16 }"
          fieldDecoratorId="title"
          :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input the title of your paper submission!' }]}"
        >
          <a-input placeholder="Title" v-model="this.currentEditingPaper.title" ref="titleInput">
            <a-icon slot="prefix" type="user" />
            <a-icon v-if="this.currentEditingPaper.title" slot="suffix" type="close-circle" @click="emitEmptyField" />
          </a-input>
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

        <!--<a-form-item-->
          <!--label='Paper'-->
          <!--:labelCol="{ span: 6 }"-->
          <!--:wrapperCol="{ span: 16 }"-->
          <!--fieldDecoratorId="paper"-->
          <!--:fieldDecoratorOptions="{rules: [{ required: true, message: 'Please upload the Paper of your paper submission!' }]}"-->
        <!--&gt;-->
          <!--<a-upload-dragger name="file" :multiple="true" action="//jsonplaceholder.typicode.com/posts/" @change="handleChange">-->
            <!--<p class="ant-upload-drag-icon">-->
              <!--<a-icon type="inbox" />-->
            <!--</p>-->
            <!--<p class="ant-upload-text" :style="{ 'padding': '0 1em' }">Click or drag file to this area to upload</p>-->
            <!--<p class="ant-upload-hint" :style="{ 'padding': '0 1em' }">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>-->
          <!--</a-upload-dragger>-->
        <!--</a-form-item>-->
      </a-form>
    </a-modal>
  <a-table :columns="columns" :dataSource="paperList" :scroll="{ x: 1200, y: 100 }">
      <a slot="titles" slot-scope="text" href="#" @click="detailEntry(record.id)">
        {{ text }}
      </a>
      <span slot="authors" slot-scope="text">
        {{ text }}
      </span>
      <span slot="keywords" slot-scope="text">
        {{ text.join(', ') }}
      </span>
      <span slot="category" slot-scope="text">
        {{ categories[text] }}
      </span>
      <span slot="action" slot-scope="text, record">
        <a @click="editEntry(record.paperid)">Edit</a>
        <a-divider type="vertical" />
        <a-popconfirm title="Are you sure to delete this paper submission?" @confirm="deleteEntry(record.paperid)"
                      okText="Delete" cancelText="No">
          <a>Delete</a>
        </a-popconfirm>
      </span>
    </a-table>
  </div>
</template>

<script>
const columns = [{
  dataIndex: 'paperid',
  key: 'paperid',
  title: 'Paper ID',
  width: 100,
  fixed: 'left'
}, {
  title: 'Title',
  dataIndex: 'title',
  key: 'title',
  scopedSlots: { customRender: 'titles' },
  width: 250
}, {
  dataIndex: 'categoryId',
  key: 'categoryId',
  scopedSlots: { customRender: 'category' },
  title: 'Category',
  width: 150
}, {
  title: 'Authors',
  dataIndex: 'authors',
  key: 'authors',
  scopedSlots: { customRender: 'authors' },
  width: 200
}, {
  title: 'Keywords',
  dataIndex: 'keywords',
  key: 'keywords',
  scopedSlots: { customRender: 'keywords' },
  width: 300
}, {
  title: 'Action',
  key: 'action',
  fixed: 'right',
  width: 125,
  scopedSlots: { customRender: 'action' }
}]

const data = [{
  id: '1',
  author: 'John Blue',
  keywords: ['CNN', 'Tensorflow'],
  title: 'Something Interesting',
  status: 'Approved'
}, {
  id: '2',
  author: 'Peter Green',
  keywords: ['AI', 'MATLAB'],
  title: 'Something more Interesting',
  status: 'Not Approved'
}, {
  id: '3',
  author: 'Alex Yellow',
  keywords: ['CV', 'Python'],
  title: 'Something really Interesting',
  status: 'Pending'
}]

export default {
  name: 'Papers',
  data () {
    return {
      columns,
      data,
      modalVisible: false,
      editingPaperId: null,
      submittingEdition: false,
      paperList: [{"paperid":5,"title":"asdf","authors":"sdaf","categoryId":1,"keywords":["sdf"]}],
      currentEditingPaper: {
        title: null,
        category: null,
        authors: null,
        keywords: null,
        paper: null
      },
      categories: ["Intelligent Transportation and Urban Planning","Healthcare and Well-being","Intelligent Communities & New Lifestyles Enabled by Big Data & AI","Data Management","Green Energy and Materials","Blue Energy and Materials","Ecological and Environmental Systems","Secial Session: Intelligent Modeling and Simulation","Secial Session: Future Intelligent Manufacturing","Secial Session: Effective Microorganisms Technology","Forum: UV City Forum","Forum: UV Student Forum","Forum: UV Industry & Entrepreneurship Forum","UV Poster Session","UV Exhibition"]
    }
  },
  created () {
    this.getCategories(),
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$http.get(this.$store.state.endpoint.api + '/myPaper').then(response => {
        console.log(response.body)
        try {
          this.paperList = JSON.parse(response.body)
        } catch (e) {
          this.$message.error('Can\'t fetch My Paper Submissions. Please try again later.', 4)
        }
      }, response => {
        this.$message.error('Can\'t fetch My Paper Submissions. Please try again later.', 4)
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
    editEntry (paperId) {
      this.modalVisible = true
      this.editingPaperId = paperId
      let currentEditingPaper = this.paperList.find((el) => {
        return el.paperid === paperId
      })
      console.log(currentEditingPaper)
      this.form.setFieldsValue('title', currentEditingPaper.title)
      this.form.setFieldsValue('category', this.categories[this.currentEditingPaper.categoryId])
      this.form.setFieldsValue('authors', currentEditingPaper.authors)
      this.form.setFieldsValue('keywords', currentEditingPaper.keywords.join(','))
    },
    updateEntry (paperId) {
      // update entry to server
    },
    handleOk (e) {
      console.log('ok, event obj: ', e)
      this.submittingEdition = true
      // push to server
    },
    handleChange (e) {
      console.log(e)
    },
    deleteEntry (paperId) {
      const deletingEntry = this.$message.loading('Deleting your submission...', 0)
      this.$http.post(this.$store.state.endpoint.api + '/deletePaper', {paperId: paperId}).then(response => {
        console.log(response.body)
        if (response.body.flag) {
          deletingEntry()
          this.$message.success('Paper submission deleted successfully.', 3)
          this.paperList = this.paperList.filter((el) => { return el.paperId !== paperId })
        } else {
          deletingEntry()
          this.$message.error('Error occured while deleting your submission. Please try again later.', 4)
        }
      }, response => {
        deletingEntry()
        this.$message.error('Error occured while deleting your submission. Please try again later.', 4)
      })
    }
  }
}
</script>

<style scoped>

</style>
