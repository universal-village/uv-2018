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
      <a href="#" slot="extra" @click="detailEntry(paper.paperid)">edit</a>
      <a-row>
        <a-col :lg="10" :md="24">
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
        </a-col>
        <a-col :lg="14" :md="24">
          <a-steps :current="paperPhaseStep(paper.phase).step" :status="paperPhaseStep(paper.phase).status">
            <a-step title="Draft" description="Edit your paper" />
            <a-step title="Need-Review" description="Reviewer give scores" />
            <a-step :title="paperPhaseStep(paper.phase).decisionText" :description="paperPhaseStep(paper.phase).decisionDescrip" />
            <a-step title="Camera-Ready" description="Last edit before publishing" />
          </a-steps>
        </a-col>
        <a-button type="dashed" style="margin-top: 20px; float: right;" v-if="reviewAvailable(paper.phase)" @click="openReport(paper.paperid)">Reviews Available <a-icon type="book" /></a-button>
      </a-row>
    </a-card>

    <a-card v-if="!this.paperList" title="(No paper submissions yet)">
      <p>There's currently no paper submissions on your account. <router-link to="/my/submissions/add">Submit one.</router-link></p>
    </a-card>

    <modal name="report-modal" height="auto"
           width="700"
           :adaptive="true"
           :scrollable="true"
           style="height: 85vh; padding: 10vh 0"
    >
      <a-card
           style="width:100%"
           :tabList="reportTabList"
           :activeTabKey="reportTabKey"
           @tabChange="key => onTabChange(key)"
      >
        <div v-if="reportTabKey === 'chairman'">
          <p class="report-div">
            {{chairmanReview.comment}}
          </p>
          <span class="report-div">Overall: {{chairmanReview.totalPerformance}}</span>
          <span class="report-div">Decision: {{chairmanReview.decision}}</span>
        </div>
        <div v-else>
          <p class="report-div">
            {{reviewerTabComment}}
          </p>
          <a-row>
            <a-col :span="12">
              <span class="report-div">Theoretical Contribution: {{reviewerTabTC}}</span>
              <span class="report-div">Technological Contribution: {{reviewerTabTechC}}</span>
              <span class="report-div">Survey Tutorial Contribution: {{reviewerTabSTC}}</span>
              <span class="report-div">Originality of Concepts: {{reviewerTabOOC}}</span>
              <span class="report-div">Technical Soundness: {{reviewerTabTechS}}</span>
              <span class="report-div">Importance of Results: {{reviewerTabIOR}}</span>
              <span class="report-div">Clarity of Presentation: {{reviewerTabCOP}}</span>
              <span class="report-div">Overall: {{reviewerTabOverall}}</span>
            </a-col>
            <a-col :span="12">
              <svg width="200" height="200" style="float: right;">
                <polygraph :stats="stats"></polygraph>
              </svg>
            </a-col>
          </a-row>
        </div>
      </a-card>
    </modal>

    <modal name="paper-modal" height="auto"
           :width="700"
           :adaptive="true"
           :scrollable="true"
           style="height: 85vh; padding: 10vh 0"
    >
      <div class="panel" style="display: block;">
        <div class="container-modal">
          <h1>Submitted Paper #{{ currentEditingPaper.paperId }}</h1>
          <a-button type="primary" @click="editEntry(currentEditingPaper.paperId)" icon="edit" :disabled="currentEditingPaper.phase === 'Reject'">
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
              Submit
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
          <label for="eCF" v-if="currentEditingPaper.phase === 'Accept' || currentEditingPaper.phase === 'Camera-Ready'"><b> Electronic Copyright Transfer </b></label>
          <form action="https://ecopyright.ieee.org/ECTT/IntroPage.jsp" method="post" v-if="currentEditingPaper.phase === 'Accept' || currentEditingPaper.phase === 'Camera-Ready'">
            <input name="PubTitle" value="2018 4th International Conference on Universal Village (UV)" type="hidden">
            <input name="ArtTitle" :value="currentEditingPaper.title" type="hidden">
            <input name="AuthName" :value="currentEditingPaper.authors" type="hidden">
            <input name="ArtId" :value="currentEditingPaper.paperId" type="hidden">
            <input name="ArtSource" value="43900" type="hidden">
            <input name="AuthEmail" :value="$store.state.authenticate.username" type="hidden">
            <span style="font-weight: bold; font-size: 1.0em;">* IEEE policy requires that all authors of accepted papers must transfer copyright to IEEE by utilizing the electronic IEEE Copyright Form(eCF). Please use the following link to sign the IEEE Electronic Copyright Form.</span>
            <input name="rtrnurl" type="hidden" value="https://uv2018.universal-village.org/#/my/submissions/paper">
            <a-button type='dashed' htmlType='submit'>
              Copyright Submission
            </a-button>
          </form>
          <br>
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
import Polygon from '../../Helper/Polygon.vue'
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
      chairmanReview: {
        paperId: 0,
        categoryChairId: 0,
        comment: '',
        totalPerformance: '',
        decision: ''
      },
      reportTabKey: 'chairman',
      reviewerTabComment: '',
      reviewerTabTC: '',
      reviewerTabTechC: '',
      reviewerTabSTC: '',
      reviewerTabOOC: '',
      reviewerTabTechS: '',
      reviewerTabIOR: '',
      reviewerTabCOP: '',
      reviewerTabOverall: '',
      reviews: [],
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
  components: {
    'polygraph': Polygon
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
    },
    confirm () {
      this.$http.post(this.$store.state.endpoint.api + '/readyToReview', {paperId: this.currentEditingPaper.paperId}, {emulateJSON: true}).then(response => {
        console.log(response.body)
        if (response.body.flag) {
          this.$message.success('Paper submitted to review successfully.', 3)
          this.$router.push('/my/submissions/paper')
        } else {
          this.$message.error(response.body.cause, 4)
        }
      }, response => {
        this.$message.error('Error occurred while communicate to server. Please try again later.', 4)
      })
    },
    cancel () {

    },
    paperPhaseStep (phase) {
      if (phase === 'Draft') {
        return {
          step: 0,
          status: 'process',
          decisionText: 'Final-Decision',
          decisionDescrip: 'Editor make decision'
        }
      } else if (phase === 'Need-Review') {
        return {
          step: 1,
          status: 'process',
          decisionText: 'Final-Decision',
          decisionDescrip: 'Editor make decision'
        }
      } else if (phase === 'Reject') {
        return {
          step: 2,
          status: 'error',
          decisionText: 'Reject',
          decisionDescrip: 'Rejected by Editor'
        }
      } else {
        return {
          step: 4,
          status: 'process',
          decisionText: 'Accept',
          decisionDescrip: 'Congratulations'
        }
      }
    },
    reviewAvailable (phase) {
      return phase !== 'Need-Review' && phase !== 'Draft'
    },
    openReport (id) {
      this.$http.post(this.$store.state.endpoint.api + '/getPaperReport', { paperId: id }, {emulateJSON: true}).then(response => {
        console.log(response.body)
        if (response.body.flag !== true) {
          this.$message.error('Authentication Failed ' + response.body.info, 3)
        } else {
          this.reviews = response.body.report.reviews
          this.chairmanReview = response.body.report.chairmanReview
          this.$modal.show('report-modal')
        }
      }, response => {
        this.$message.error('Page loading error. Please check parameters. status-' + response.status, 3)
      })
      /* this.reviews = testResponseBody.report.reviews
      this.chairmanReview = testResponseBody.report.chairmanReview
      this.$modal.show('report-modal')
      console.log(this.reviews) */
    },
    onTabChange (key) {
      this.reportTabKey = key
      let ind = parseInt(key)
      this.reviewerTabComment = this.reviews[ind].comment
      this.reviewerTabTC = this.reviews[ind].theoreticalContribution
      this.reviewerTabTechC = this.reviews[ind].technologicalContribution
      this.reviewerTabSTC = this.reviews[ind].surveyTurtorialContribution
      this.reviewerTabOOC = this.reviews[ind].originalityOfConcepts
      this.reviewerTabTechS = this.reviews[ind].technicalSoundness
      this.reviewerTabIOR = this.reviews[ind].importanceOfResult
      this.reviewerTabCOP = this.reviews[ind].clarityOfPresentation
      this.reviewerTabOverall = this.reviews[ind].overall
    },
    scoreToValue: function (score) {
      if (score === 'A+' || score === 'A+ ') {
        return 100
      } else if (score === 'A' || score === 'A ') {
        return 75
      } else if (score === 'A-' || score === 'A- ') {
        return 50
      } else if (score === 'B' || score === 'B ') {
        return 25
      } else {
        console.log(score)
        return 0
      }
    }
  },
  computed: {
    stats: function () {
      let x = [
        { label: 'TC', value: this.scoreToValue(this.reviewerTabTC) * 0.75 + 25 },
        { label: 'TechC', value: this.scoreToValue(this.reviewerTabTechC) * 0.75 + 25 },
        { label: 'STC', value: this.scoreToValue(this.reviewerTabSTC) * 0.75 + 25 },
        { label: 'OOC', value: this.scoreToValue(this.reviewerTabOOC) * 0.75 + 25 },
        { label: 'TS', value: this.scoreToValue(this.reviewerTabTechS) * 0.75 + 25 },
        { label: 'IOR', value: this.scoreToValue(this.reviewerTabIOR) * 0.75 + 25 },
        { label: 'COP', value: this.scoreToValue(this.reviewerTabCOP) * 0.75 + 25 }
      ]
      return x
    },
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
    },
    reportTabList: function () {
      let list = [{
        key: 'chairman',
        tab: 'Category Chair Review'
      }]
      for (var i = 0; i < this.reviews.length; i++) {
        list.push({
          key: '' + i,
          tab: 'Review ' + (i + 1)
        })
      }
      return list
    }
  }
}
</script>

<style scoped>
  .report-div {
    display: block;
    margin-bottom: 10px;
  }
  .card-container {
    background: #F5F5F5;
    overflow: hidden;
    padding: 24px;
  }
  .card-container > .ant-tabs-card > .ant-tabs-content {
    height: 120px;
    margin-top: -16px;
  }

  .card-container > .ant-tabs-card > .ant-tabs-content > .ant-tabs-tabpane {
    background: #fff;
    padding: 16px;
  }

  .card-container > .ant-tabs-card > .ant-tabs-bar {
    border-color: #fff;
  }

  .card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
    border-color: transparent;
    background: transparent;
  }

  .card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {
    border-color: #fff;
    background: #fff;
  }
  input[type=password],input[type=text]{width:100%;padding:9pt 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;box-sizing:border-box}.imgcontainer{text-align:center;margin:24px 0 9pt}img.avatar{width:40%;border-radius:50%}.container-modal{padding:3em}span.psw{float:right;padding-top:1pc}@media screen and (max-width:300px){span.psw{display:block;float:none}.editbtn{width:100%}}.v--modal-box{display:none;position:fixed;z-index:1;padding-top:75pt;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,255,0,.4)}.modal-content{position:relative;background-color:#fefefe;margin:auto;padding:0;border:1px solid #888;width:80%;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);-webkit-animation-name:animatetop;-webkit-animation-duration:.4s;animation-name:animatetop;animation-duration:.4s}@-webkit-keyframes animatetop{0%{top:-300px;opacity:0}to{top:0;opacity:1}}@keyframes animatetop{0%{top:-300px;opacity:0}to{top:0;opacity:1}}.close{color:#fff;float:right;font-size:28px;font-weight:700}.close:focus,.close:hover{color:#000;text-decoration:none;cursor:pointer}.modal-header{background-color:#5cb85c;color:#fff}.modal-body,.modal-footer,.modal-header{padding:2px 1pc}.modal-footer{background-color:#5cb85c;color:#fff}div.panel h1{font-weight:bolder;font-size:2em}div.panel label{display:block;font-size:1.5em;font-weight:700}div.panel p,div.panel span{display:block;font-size:1.2em;margin-bottom:10px;margin:.25em 2em 1.5em 2em;}div.panel p{width:80%}
  div.v--modal-box.v--modal.report-modal {
    width: 1000px !important;
  }
</style>
