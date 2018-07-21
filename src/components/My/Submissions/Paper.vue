<template>
  <div>
    <h1>My Submissions</h1>
    <!--<a-table :columns="columns" :dataSource="paperList" :scroll="{ x: 1200, y: 600 }">-->
      <!--<a slot="titles" slot-scope="text, record" href="#" @click="detailEntry(record.paperid)">-->
        <!--{{ text }}-->
      <!--</a>-->
      <!--<span slot="action" slot-scope="text, record">-->
        <!--<a @click="editEntry(record.paperid)">Edit</a>-->
        <!--<a-divider type="vertical" />-->
        <!--<a-popconfirm title="Are you sure to delete this paper submission?" @confirm="deleteEntry(record.paperid)"-->
                      <!--okText="Delete" cancelText="No">-->
          <!--<a>Delete</a>-->
        <!--</a-popconfirm>-->
      <!--</span>-->
    <!--</a-table>-->
    <a-card v-for="paper in paperList" :title="paper.title" :key="paper.paperid" style="margin: 2em" :bordered="false">
      <a href="#" slot="extra" @click="detailEntry(paper.paperid)">more</a>
      <!-- TODO: Add the badge of the phases. -->
      <span style="display: inline-block">Authors</span>
      <a-divider type="vertical" />
      <p style="display: inline-block;">
        <a-tag v-for="tag in paper.authors.split(',')" :key="tag" style="cursor: default">{{ tag }}</a-tag>
      </p>
      <br>
      <!--<span style="display: inline-block">Title</span>-->
      <!--<a-divider type="vertical" />-->
      <!--<p style="display: inline-block;">-->
        <!--{{ paper.title }}-->
      <!--</p>-->
      <!--<br>-->
      <span style="display: inline-block">Phase</span>
      <a-divider type="vertical" />
      <p style="display: inline-block;">
        {{ paper.phase.replace('-', ' ').replace('Need', 'Needs') }}
      </p>
    </a-card>

    <a-card v-if="!this.paperList" title="(No paper submissions yet)">
      <p>There's currently no paper submissions on your account. <router-link to="/my/submissions/add">Submit one.</router-link></p>
    </a-card>

    <modal name="paper-modal" height="auto"
           width="700"
           :adaptive="true"
           :scrollable="true"
           style="height: 85vh; padding: 10vh 0"
    >
      <div class="panel" style="display: block;">
        <div class="container-modal">
          <h1>Submitted Paper #{{ currentEditingPaper.paperId }}</h1>
          <a-button type="primary" @click="editEntry(currentEditingPaper.paperId)" icon="edit">
            Edit
          </a-button>
          <a-popconfirm title="Delete this submission?" @confirm="deleteEntry(currentEditingPaper.paperId)"
                        okText="Delete" cancelText="No">
            <a-button type="danger" icon="delete">
              Delete
            </a-button>
          </a-popconfirm>
          <a-divider type="horizontal" />
          <label for="title"><b> Title </b></label>
          <span>{{ currentEditingPaper.title || "(Not specified)" }}</span>
          <label for="authors"><b> Authors </b></label>
          <span>{{currentEditingPaper.authors || "(Not specified)"}}</span>
          <label for="category"><b> Category </b></label>
          <span>{{categories[currentEditingPaper.categoryId - 1] || "(Not specified)"}}</span>
          <label for="abstract"><b> Abstract </b></label>
          <p>{{currentEditingPaper._abstract || "(Not specified)"}}</p >
          <label for="keywords"><b> Keywords </b></label>
          <p>{{currentEditingPaper.keywords.join(", ") || "(Not specified)"}}</p >
          <label for="phase"><b> Phase </b></label>
          <span>{{currentEditingPaper.phase || "(Not specified)"}}</span>
          <label for="link"><b> Link </b></label>
          <span>
            <a :href="currentEditingPaper.link" v-if="currentEditingPaper.link" target="_blank">
              {{ currentEditingPaper.link.split('/').pop() }}
            </a>
            <span v-else>(Not specified)</span>
          </span>
        </div>
      </div>
    </modal>
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
        paperId: '',
        title: '',
        authors: '',
        categoryId: '',
        _abstract: '',
        keywords: [],
        phase: ''
      },
      categories: []
    }
  },
  created () {
    this.getCategories()
    this.fetchData()
  },
  methods: {
    /**
     * 
     */
    fetchData () {
      this.$http.get(this.$store.state.endpoint.api + '/myPaper').then(response => {
        console.log(response.body)
        try {
          this.paperList = response.body
          // this.paperList = [{"paperid":7,"title":"Constrained model predictive control: Stability and optimality ","authors":"D.Q.Mayne, J.B.Rawlings, C.V.Rao, P.O.M.Scokaert","categoryId":1,"keywords":["adsfdsaf"],"link":"https://s3.us-east-2.amazonaws.com/uv2018-paper/1532017404874-FAQ.pdf","phase":"Need-Review","_abstract":'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend in quam non blandit. Praesent nunc eros, maximus eget semper eget, venenatis et nisl. Etiam sem enim, lacinia vitae feugiat et, ultricies sit amet mauris. Ut finibus, orci et iaculis laoreet, diam nibh laoreet erat, vitae congue eros sapien vitae lacus. In nisl tortor, egestas feugiat dignissim eu, faucibus sit amet arcu. Fusce ultrices vestibulum ipsum, non blandit diam rhoncus id. Vestibulum consequat orci ac metus ornare, eu tristique ligula venenatis. Nullam lectus arcu, interdum ut est in, fermentum maximus lorem. Mauris pulvinar cursus nibh, at rhoncus erat venenatis eu. Vestibulum maximus, mauris in volutpat molestie, mauris ligula faucibus orci, commodo vulputate nisi lectus ac neque.'},{"paperid":8,"title":"as8","authors":"asfsdf","categoryId":1,"keywords":["adsfdsaf"],"link":"https://s3.us-east-2.amazonaws.com/uv2018-paper/1532017404874-FAQ.pdf","phase":"Need-Review","_abstract":null},{"paperid":9,"title":"as8","authors":"asfsdf","categoryId":1,"keywords":["adsfdsaf"],"link":"https://s3.us-east-2.amazonaws.com/uv2018-paper/1532017404874-FAQ.pdf","phase":"Need-Review","_abstract":null},{"paperid":10,"title":"as8","authors":"asfsdf","categoryId":1,"keywords":["adsfdsaf"],"link":"https://s3.us-east-2.amazonaws.com/uv2018-paper/1532017404874-FAQ.pdf","phase":"Need-Review","_abstract":null}]
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
      this.editingPaperId = paperId
      this.$router.push('/my/submissions/edit/' + paperId)
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
      this.$http.post(this.$store.state.endpoint.api + '/deletePaper', {paperid: paperId}, {emulateJSON: true}).then(response => {
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
    },
    detailEntry (paperIdSecond) {
      let matcher = this.paperList.filter((el) => { return el.paperid === paperIdSecond })[0]
      console.log('Matched %o, List %o', matcher, this.paperList)
      this.currentEditingPaper = {
        paperId: paperIdSecond,
        title: matcher.title,
        authors: matcher.authors,
        _abstract: matcher._abstract,
        categoryId: matcher.categoryId,
        keywords: matcher.keywords,
        phase: matcher.phase,
        link: matcher.link
      }
      console.log('Matched %o, List %o', matcher, this.paperList)
      this.$modal.show('paper-modal')
    }
  }
}
</script>

<style scoped>
  input[type=password],input[type=text]{width:100%;padding:9pt 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;box-sizing:border-box}.imgcontainer{text-align:center;margin:24px 0 9pt}img.avatar{width:40%;border-radius:50%}.container-modal{padding:3em}span.psw{float:right;padding-top:1pc}@media screen and (max-width:300px){span.psw{display:block;float:none}.editbtn{width:100%}}.v--modal-box{display:none;position:fixed;z-index:1;padding-top:75pt;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,255,0,.4)}.modal-content{position:relative;background-color:#fefefe;margin:auto;padding:0;border:1px solid #888;width:80%;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);-webkit-animation-name:animatetop;-webkit-animation-duration:.4s;animation-name:animatetop;animation-duration:.4s}@-webkit-keyframes animatetop{0%{top:-300px;opacity:0}to{top:0;opacity:1}}@keyframes animatetop{0%{top:-300px;opacity:0}to{top:0;opacity:1}}.close{color:#fff;float:right;font-size:28px;font-weight:700}.close:focus,.close:hover{color:#000;text-decoration:none;cursor:pointer}.modal-header{background-color:#5cb85c;color:#fff}.modal-body,.modal-footer,.modal-header{padding:2px 1pc}.modal-footer{background-color:#5cb85c;color:#fff}div.panel h1{font-weight:bolder;font-size:2em}div.panel label{display:block;font-size:1.5em;font-weight:700}div.panel p,div.panel span{display:block;font-size:1.2em;margin-bottom:10px;margin:.25em 2em 1.5em 2em;}div.panel p{width:80%}
</style>
