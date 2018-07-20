<template>
  <div>
    <h1>My Submissions</h1>
    <CollectionCreateForm
      :wrappedComponentRef="this.saveFormRef"
      :visible="this.visible"
      :onCancel="this.handleCancel"
      :onCreate="this.handleCreate"
    />
  <a-table :columns="columns" :dataSource="paperList" :scroll="{ x: 1200, y: 600 }">
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
  dataIndex: '_abstract',
  key: '_abstract',
  scopedSlots: { customRender: 'abstract' },
  title: 'Abstract',
  width: 400
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
      paperList: [],
      currentEditingPaper: {
        title: null,
        category: null,
        authors: null,
        keywords: null,
        paper: null
      },
      categories: []
    }
  },
  created () {
    this.getCategories()
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$http.get(this.$store.state.endpoint.api + '/myPaper').then(response => {
        console.log(response.body)
        try {
          this.paperList = [{"paperid":7,"title":"as","authors":"asfsdf","categoryId":1,"keywords":["adsfdsaf"],"link":"https://s3.us-east-2.amazonaws.com/uv2018-paper/1532017404874-FAQ.pdf","phase":"Need-Review","_abstract":null},{"paperid":7,"title":"as","authors":"asfsdf","categoryId":1,"keywords":["adsfdsaf"],"link":"https://s3.us-east-2.amazonaws.com/uv2018-paper/1532017404874-FAQ.pdf","phase":"Need-Review","_abstract":null},{"paperid":7,"title":"as","authors":"asfsdf","categoryId":1,"keywords":["adsfdsaf"],"link":"https://s3.us-east-2.amazonaws.com/uv2018-paper/1532017404874-FAQ.pdf","phase":"Need-Review","_abstract":null},{"paperid":7,"title":"as","authors":"asfsdf","categoryId":1,"keywords":["adsfdsaf"],"link":"https://s3.us-east-2.amazonaws.com/uv2018-paper/1532017404874-FAQ.pdf","phase":"Need-Review","_abstract":null},{"paperid":7,"title":"as","authors":"asfsdf","categoryId":1,"keywords":["adsfdsaf"],"link":"https://s3.us-east-2.amazonaws.com/uv2018-paper/1532017404874-FAQ.pdf","phase":"Need-Review","_abstract":null},{"paperid":7,"title":"as","authors":"asfsdf","categoryId":1,"keywords":["adsfdsaf"],"link":"https://s3.us-east-2.amazonaws.com/uv2018-paper/1532017404874-FAQ.pdf","phase":"Need-Review","_abstract":null},{"paperid":7,"title":"as","authors":"asfsdf","categoryId":1,"keywords":["adsfdsaf"],"link":"https://s3.us-east-2.amazonaws.com/uv2018-paper/1532017404874-FAQ.pdf","phase":"Need-Review","_abstract":null},{"paperid":7,"title":"as","authors":"asfsdf","categoryId":1,"keywords":["adsfdsaf"],"link":"https://s3.us-east-2.amazonaws.com/uv2018-paper/1532017404874-FAQ.pdf","phase":"Need-Review","_abstract":null}]
        } catch (e) {
          console.error('Error during parse: e[%s], response[%s]', e, response)
          this.$message.error('Can\'t fetch My Paper Submissions. Please try again later.', 4)
        }
      }, response => {
        console.error('Error during response: ' + response)
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
      this.visible = true
      this.editingPaperId = paperId
      let currentEditingPaper = this.paperList.find((el) => {
        return el.paperid === paperId
      })
      console.log(currentEditingPaper)
      // this.form.setFieldsValue('title', currentEditingPaper.title)
      // this.form.setFieldsValue('category', this.categories[this.currentEditingPaper.categoryId])
      // this.form.setFieldsValue('authors', currentEditingPaper.authors)
      // this.form.setFieldsValue('keywords', currentEditingPaper.keywords.join(','))
    },
    updateEntry (paperId) {
      this.$http.post(this.$store.state.endpoint.api + '/updatePaper', {
        paperId: paperId,
        title: this.form.getFieldsValue('title'),
        category: this.form.getFieldsValue('category'),
        authors: this.form.getFieldsValue('authors'),
        keywords: this.form.getFieldsValue('keywords').join(', ')
      }, {emulateJSON: true}).then(response => {
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
          this.$message.error('Error occurred while deleting your submission. Please try again later.', 4)
        }
      }, response => {
        deletingEntry()
        this.$message.error('Error occurred while deleting your submission. Please try again later.', 4)
      })
    },
    handleCancel  () {
      this.visible = false
    },
    handleCreate  () {
      const form = this.formRef.form
      form.validateFields((err, values) => {
        if (err) {
          return
        }
        console.log('Received values of form: ', values)
        form.resetFields()
        this.visible = false
      })
    },
    saveFormRef (formRef) {
      this.formRef = formRef
    }
  }
}
</script>

<style scoped>

</style>
