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
      <a-form @submit="handleSubmit" :autoFormCreate="(form)=>{this.form = form}">
        <a-form-item
          label='Title'
          :labelCol="{ span: 6 }"
          :wrapperCol="{ span: 16 }"
          fieldDecoratorId="title"
          :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input the title of your paper submission!' }]}"
        >
          <a-input placeholder="Title" v-model="edit.title" ref="titleInput">
            <a-icon slot="prefix" type="user" />
            <a-icon v-if="edit.title" slot="suffix" type="close-circle" @click="emitEmptyField" />
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
          <a-textarea placeholder="Abstract" v-model="edit.abstract">
            <a-icon v-if="edit.abstract" slot="suffix" type="close-circle" @click="emitEmptyField" />
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
            mode="tags"
            style="width: 100%"
            @change="handleChange"
            placeholder="Category"
            :tokenSeparators="[',']"
            modal="edit.category"
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
            modal="edit.keywords"
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
            modal="edit.keywords"
          >
            <a-select-option v-for="tag in tagList" :key="tag" >
              {{ tag }}
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          label='Paper'
          :labelCol="{ span: 6 }"
          :wrapperCol="{ span: 16 }"
          fieldDecoratorId="paper"
          :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please upload the Paper of your paper submission!' }]}"
        >
          <a-upload-dragger name="file" :multiple="true" action="//jsonplaceholder.typicode.com/posts/" @change="handleChange">
            <p class="ant-upload-drag-icon">
              <a-icon type="inbox" />
            </p>
            <p class="ant-upload-text" :style="{ 'padding': '0 1em' }">Click or drag file to this area to upload</p>
            <p class="ant-upload-hint" :style="{ 'padding': '0 1em' }">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
          </a-upload-dragger>
        </a-form-item>
      </a-form>
    </a-modal>
  <a-table :columns="columns" :dataSource="paperList" :scroll="{ x: 1300, y: 100 }">
      <a slot="titles" slot-scope="text" href="#" @click="detailEntry(record.id)">
        {{ text }}
      </a>
      <span slot="authors" slot-scope="text">
        {{ text.join(', ') }}
      </span>
      <span slot="keywords" slot-scope="text">
        {{ text.join(', ') }}
      </span>
      <span slot="category" slot-scope="text">
        {{ categoryMatcher[text] }} ({{ text }})
      </span>
      <span slot="action" slot-scope="text, record">
        <a @click="editEntry(record.paperid)">Edit</a>
        <a-divider type="vertical" />
        <a-popconfirm title="Are you sure to delete this paper submission?" @confirm="deleteEntry(record.paperid)"
                      @cancel="cancel" okText="Delete" cancelText="No">
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
  title: 'ID',
  width: 75,
  fixed: 'left'
}, {
  title: 'Title',
  dataIndex: 'title',
  key: 'title',
  scopedSlots: { customRender: 'titles' },
  width: 250
}, {
  dataIndex: 'abstract',
  key: 'abstract',
  title: 'Abstract',
  width: 200
}, {
  dataIndex: 'categoryid',
  key: 'categoryid',
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
  dataIndex: 'keyword',
  key: 'keyword',
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
      paperList: [{
        paperid: 1,
        title: 'Something Interesting',
        abstract: 'Something',
        categoryid: 122,
        authors: ['Alpha', 'Ben', 'Charlie'],
        keyword: ['AI', 'CV', 'Computer Vision']
      }],
      edit: {
        title: null,
        abstract: null,
        category: null,
        authors: null,
        keywords: null,
        paper: null
      },
      categoryMatcher: {
        122: 'Computer'
      }
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$http.get(this.$store.state.endpoint + '/myPaper').then(response => {
        console.log(response.body)
        try {
          // this.paperList = response.body.data
        } catch (e) {
          this.$message.error('Can\'t fetch My Paper Submissions. Please try again later.', 5)
        }
      }, response => {
        this.$message.error('Can\'t fetch My Paper Submissions. Please try again later.', 5)
      })
    },
    editEntry (paperId) {
      this.editingPaperId = paperId
      this.modalVisible = true
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
      this.$http.get(this.$store.state.endpoint + '/deletePaper', {paperId: paperId}).then(response => {
        console.log(response.body)
        if (response.body.flag) {
          deletingEntry()
          this.$message.success('Paper submission deleted successfully.', 3)
          this.paperList = this.paperList.filter((el) => { return el.paperId !== paperId })
        } else {
          deletingEntry()
          this.$message.error('Error occured while deleting your submission. Please try again later.', 5)
        }
      }, response => {
        deletingEntry()
        this.$message.error('Error occured while deleting your submission. Please try again later.', 5)
      })
    }
  }
}
</script>

<style scoped>

</style>
