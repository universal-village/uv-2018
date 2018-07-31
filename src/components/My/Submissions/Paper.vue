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
    <a-card v-for="(paper, index) in paperList" :title="paper.title" :key="paper.paperid" style="margin: 2em" :bordered="false">
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
          <a-button type="primary" @click="editEntry(currentEditingPaper.paperId)" icon="edit" :disabled="!isDraft(currentEditingPaper.phase)">
            Edit
          </a-button>
          <a-popconfirm title="Delete this submission?" @confirm="deleteEntry(currentEditingPaper.paperId)"
                        okText="Delete" cancelText="No">
            <a-button type="danger" icon="delete" :disabled="!isDraft(currentEditingPaper.phase)">
              Delete
            </a-button>
          </a-popconfirm>
          <a-popconfirm title="Upon submission you can no longer edit your paper" @confirm="confirm" @cancel="cancel" okText="Ready to Review" cancelText="Keep Editing" v-if="isDraft(currentEditingPaper.phase)">
            <a-button type="primary" icon="check-circle-o" style="float: right;">
              Request Review
            </a-button>
          </a-popconfirm>
          <a-divider type="horizontal" />
          <a-row>
            <a-col :span="16">
              <label for="title"><b> Title </b></label>
              <span>{{ currentEditingPaper.title || "(Not specified)" }}</span>
              <label for="authors"><b> Authors </b></label>
              <span>{{currentEditingPaper.authors || "(Not specified)"}}</span>
              <label for="category"><b> Category </b></label>
            </a-col>
            <a-col :span="8">
              <a-timeline style="float: right;">
                <a-timeline-item :color="timelineDraft.color">
                  <a-icon slot="dot" :type="timelineDraft.icon" style="fontSize: '24px'" />
                  Draft
                </a-timeline-item>
                <a-timeline-item :color="timelineReview.color">
                  <a-icon slot="dot" :type="timelineReview.icon" style="fontSize: '24px'" />
                  Need-Review
                </a-timeline-item>
                <a-timeline-item :color="timelineDecision.color">
                  <a-icon slot="dot" :type="timelineDecision.icon" style="fontSize: '24px'" />
                  {{timelineDecision.text}}
                </a-timeline-item>
                <a-timeline-item :color="timelineFinal.color">
                  <a-icon slot="dot" :type="timelineFinal.icon" style="fontSize: '24px'" />
                  Camera-Ready
                </a-timeline-item>
              </a-timeline>
            </a-col>
          </a-row>
          <span>{{categories[currentEditingPaper.categoryId - 1] || "(Not specified)"}}</span>
          <label for="abstract"><b> Abstract </b></label>
          <p>{{currentEditingPaper._abstract || "(Not specified)"}}</p >
          <label for="keywords"><b> Keywords </b></label>
          <p>{{currentEditingPaper.keywords.join(", ") || "(Not specified)"}}</p >
          <label for="phase"><b> Phase </b></label>
          <span>{{currentEditingPaper.phase || "(Not specified)"}}<a-tooltip placement="topLeft" title="Draft should be submitted first in order to be reviewed" v-if="isDraft(currentEditingPaper.phase)" style="margin-left: 10px"><a-icon type="question-circle" /></a-tooltip></span>
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
      paperList: [{"paperid":4,"title":"Test Paper of Guanghua v3","authors":"Guanghua,Yiyang","categoryId":4,"keywords":["ghjhklkk;l"],"link":"https://s3.us-east-2.amazonaws.com/uv2018-paper/1531860511036-2018.7.9-Global_Optimization_of_a_Neural_Network-Hidden_Markov_Model_Hybrid.pdf","phase":"Draft","_abstract":null},{"paperid":16,"title":"Test Paper of Guanghua Without File Upload","authors":"Guanghua,9 at el","categoryId":2,"keywords":["211","985"],"link":"https://s3.us-east-2.amazonaws.com/uv2018-paper/1532563285511-2018.7.9-Global_Optimization_of_a_Neural_Network-Hidden_Markov_Model_Hybrid.pdf","phase":"Need-Review","_abstract":"hhhhhhhhhhhhhhhhhhh"},{"paperid":25,"title":"Test Paper of Guanghua wobushi SB le","authors":"Guanghua","categoryId":1,"keywords":["daafsdadad","b vnvv"],"link":null,"phase":"Reject","_abstract":"https://s3.us-east-2.amazonaws.com/uv2018-paper/1532117106595-Hidden_Markov_Model.pdf"},{"paperid":40,"title":"Title ","authors":"A,B,C","categoryId":3,"keywords":["Foo","Bar"],"link":"https://s3.us-east-2.amazonaws.com/uv2018-paper/1532836836429-FAQ.pdf","phase":"Accept","_abstract":"Some random abstract"}],
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
    // this.getCategories()
    // this.fetchData()
  },
  methods: {
    fetchData () {
      this.$http.get(this.$store.state.endpoint.api + '/myPaper').then(response => {
        console.log(response.body)
        try {
          this.paperList = response.body
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
    },
    isDraft (phase) {
      return phase === 'Draft'
    }
  },
  computed: {
    timelineDraft: function () {
      if (this.currentEditingPaper.phase === 'Draft') {
        return {
          icon: 'loading',
          color: 'red'
        }
      } else {
        return {
          icon: 'check-circle-o',
          color: 'green'
        }
      }
    },
    timelineReview: function () {
      if (this.currentEditingPaper.phase === 'Draft') {
        return {
          icon: 'clock-circle',
          color: 'blue'
        }
      } else if (this.currentEditingPaper.phase === 'Need-Review') {
        return {
          icon: 'loading',
          color: 'red'
        }
      } else {
        return {
          icon: 'check-circle-o',
          color: 'green'
        }
      }
    },
    timelineDecision: function () {
      if (this.currentEditingPaper.phase === 'Accept') {
        return {
          icon: 'check-circle-o',
          color: 'green',
          text: 'Accept'
        }
      } else if (this.currentEditingPaper.phase === 'Reject') {
        return {
          icon: 'close-circle',
          color: 'red',
          text: 'Reject'
        }
      } else if (this.currentEditingPaper.phase === 'Camera-Ready') {
        return {
          icon: 'check-circle-o',
          color: 'green',
          text: 'Accept'
        }
      } else {
        return {
          icon: 'clock-circle',
          color: 'blue',
          text: 'Final-Decision'
        }
      }
    },
    timelineFinal: function () {
      if (this.currentEditingPaper.phase === 'Camera-Ready') {
        return {
          icon: 'loading',
          color: 'read'
        }
      } else if (this.currentEditingPaper.phase === 'Reject') {
        return {
          icon: 'close-circle',
          color: 'red'
        }
      } else {
        return {
          icon: 'clock-circle',
          color: 'blue'
        }
      }
    }
  }
}
</script>

<style scoped>
  input[type=password],input[type=text]{width:100%;padding:9pt 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;box-sizing:border-box}.imgcontainer{text-align:center;margin:24px 0 9pt}img.avatar{width:40%;border-radius:50%}.container-modal{padding:3em}span.psw{float:right;padding-top:1pc}@media screen and (max-width:300px){span.psw{display:block;float:none}.editbtn{width:100%}}.v--modal-box{display:none;position:fixed;z-index:1;padding-top:75pt;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,255,0,.4)}.modal-content{position:relative;background-color:#fefefe;margin:auto;padding:0;border:1px solid #888;width:80%;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);-webkit-animation-name:animatetop;-webkit-animation-duration:.4s;animation-name:animatetop;animation-duration:.4s}@-webkit-keyframes animatetop{0%{top:-300px;opacity:0}to{top:0;opacity:1}}@keyframes animatetop{0%{top:-300px;opacity:0}to{top:0;opacity:1}}.close{color:#fff;float:right;font-size:28px;font-weight:700}.close:focus,.close:hover{color:#000;text-decoration:none;cursor:pointer}.modal-header{background-color:#5cb85c;color:#fff}.modal-body,.modal-footer,.modal-header{padding:2px 1pc}.modal-footer{background-color:#5cb85c;color:#fff}div.panel h1{font-weight:bolder;font-size:2em}div.panel label{display:block;font-size:1.5em;font-weight:700}div.panel p,div.panel span{display:block;font-size:1.2em;margin-bottom:10px;margin:.25em 2em 1.5em 2em;}div.panel p{width:80%}
</style>
