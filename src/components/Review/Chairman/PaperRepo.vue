<template lang="html">
  <a-layout-content>
    <a-table :columns="columns" :dataSource="data" bordered>
      <template slot="name" slot-scope="text">
        <h3 style="font-weight: bolder">{{text}}</h3>
      </template>
      <template slot="phase" slot-scope="phase">
        <span style="font-weight: bold; width: 200px">{{phase}}</span>
      </template>
      <template slot="abstract" slot-scope="abstract">
        <p>{{abstract}}</p>
      </template>
      <template slot="operation" slot-scope="operation, record, index">
        <a-button type="dashed" style="margin: 10px;" @click="openReviewPanel(record.paperid)">Reviews</a-button>
        <a-button type="dashed" style="margin: 10px;" @click="openAssignmentPanel(record)">Assign Reviewer</a-button>
        <a-button type="primary" shape="circle" icon="download" @click="openFileLink(record.link)"/>
        <a-button type="primary" shape="circle" icon="edit" @click="openEditPanel(record)"></a-button>
      </template>
      <template slot="title" slot-scope="currentPageData">
        <h2>Papers in Repo</h2>
      </template>
    </a-table>
    <modal name="review-modal" height="auto"
           width="1500"
           :adaptive="true"
           :scrollable="true"
           style="height: 85vh; padding: 10vh 0"
    >
      <a-layout-content>
        <a-row :gutter="24">
          <a-col :lg="5" class="review-title-div"><span class="review-title">Reviewer Email</span></a-col>
          <a-col :lg="2" class="review-title-div"><span class="review-title">Theoretical Contribution</span></a-col>
          <a-col :lg="2" class="review-title-div"><span class="review-title">Technological Contribution</span></a-col>
          <a-col :lg="2" class="review-title-div"><span class="review-title">Survey Tutorial Contribution</span></a-col>
          <a-col :lg="2" class="review-title-div"><span class="review-title">Originality of Concepts</span></a-col>
          <a-col :lg="2" class="review-title-div"><span class="review-title">Technical Soundness</span></a-col>
          <a-col :lg="2" class="review-title-div"><span class="review-title">Importance of Results</span></a-col>
          <a-col :lg="2" class="review-title-div"><span class="review-title">Clarity of Presentation</span></a-col>
          <a-col :lg="5" class="review-title-div"><span class="review-title">Overall</span></a-col>
        </a-row>
        <hr>
        <a-collapse defaultActiveKey="1" :bordered="false">
          <a-collapse-panel v-for="(review, index) in reviews" :key="index">
            <template slot="header">
              <a-row :gutter="24">
                <a-col :lg="5" class="review-div"><span class="review">{{review.email}}</span></a-col>
                <a-col :lg="2" class="review-div"><span class="review">{{review.theoreticalContribution}}</span></a-col>
                <a-col :lg="2" class="review-div"><span class="review">{{review.technologicalContribution}}</span></a-col>
                <a-col :lg="2" class="review-div"><span class="review">{{review.surveyTurtorialContribution}}</span></a-col>
                <a-col :lg="2" class="review-div"><span class="review">{{review.originalityOfConcepts}}</span></a-col>
                <a-col :lg="2" class="review-div"><span class="review">{{review.technicalSoundness}}</span></a-col>
                <a-col :lg="2" class="review-div"><span class="review">{{review.importanceOfResult}}</span></a-col>
                <a-col :lg="2" class="review-div"><span class="review">{{review.clarityOfPresentation}}</span></a-col>
                <a-col :lg="5" class="review-div"><span class="review">{{review.overall}}</span></a-col>
              </a-row>
            </template>
            <p>{{review.comment}}</p>
          </a-collapse-panel>
        </a-collapse>
      </a-layout-content>
    </modal>
    <modal name="assign-modal" height="auto"
           width="700"
           :adaptive="true"
           :draggable="true"
           :scrollable="true"
           style="height: 85vh; padding: 10vh 0"
    >
      <div style="background:#ECECEC; padding: 0">
        <a-card title="Assign reviewer" :bordered="false" style="width: 100%">
          <a-row :gutter="24">
            <a-col :lg="12" :md="24" class="assign-col">
            <a-auto-complete
              :dataSource="reviewerSource"
              style="width: 100%"
              @search="handleSearch"
              v-model="assignedEmail"
              placeholder="reviewer email"
              class="assign-reviewer-input"
            />
            </a-col>
            <a-col :lg="12" :md="12" class="assign-col">
              <span>to </span><span style="font-weight: bold;">{{assignedPaperTitle}}</span>
            </a-col>
          </a-row>
          <a-col :span="24" class="assign-col">
            <vue-recaptcha :sitekey="this.$store.state.sitekey" @verify="handleSubmit">
              <a-button type='primary' htmlType='submit' style="width: 100%;" :loading="spinning">
                Confirm
              </a-button>
            </vue-recaptcha>
          </a-col>
        </a-card>
      </div>
    </modal>
    <modal name="edit-modal" height="auto"
           width="700"
           :adaptive="true"
           :draggable="true"
           :scrollable="true"
           style="height: 85vh; padding: 10vh 0"
    >
      <template>
        <a-card title="Category Chair Conclusion">
          <span class="decision-ele">Final Decision on </span><span style="font-weight: bolder;">{{decisionPaperTitle}}</span>
          <a-textarea placeholder="Comment" :rows="10" class="decision-ele" v-model="decisionComment"/>
          <span class="decision-ele" style="float: right;">{{commentCounts}}/16000</span>
          <span class="decision-ele">Total Performance</span>
          <a-select defaultValue="C" style="width: 120px" class="decision-ele" v-model="decisionPerformance">
            <a-select-option value="C">C</a-select-option>
            <a-select-option value="B">B</a-select-option>
            <a-select-option value="A-">A-</a-select-option>
            <a-select-option value="A">A</a-select-option>
            <a-select-option value="A+">A+</a-select-option>
          </a-select><a-tag color="green" class="decision-ele" v-if="recommandAward">Recommended Award</a-tag>
          <br>
          <span class="decision-ele">Decision</span>
          <a-select defaultValue="reject" style="width: 120px" class="decision-ele" v-model="decisionResult">
            <a-select-option value="reject">reject</a-select-option>
            <a-select-option value="accept">accept</a-select-option>
          </a-select>
          <div class="decision-ele" style="float: right;">
            <vue-recaptcha :sitekey="this.$store.state.sitekey" @verify="handleSubmitFinalDecision">
              <a-button type='primary' htmlType='submit' style="width: 100%;" :loading="spinning">
                Confirm
              </a-button>
            </vue-recaptcha>
          </div>
        </a-card>
      </template>
    </modal>
  </a-layout-content>
</template>

<script lang="js">
import VueRecaptcha from 'vue-recaptcha'
export default {
  name: 'paper-repo',
  props: [],
  mounted () {
    this.checkChairmanStatus()
    this.fetchData()
    this.getCategories()
    this.fetchReviewers()
  },
  components: {
    VueRecaptcha
  },
  data () {
    return {
      assignedEmail: '',
      spinning: false,
      assignedPaperTitle: '',
      assignedPaperId: -1,
      categoryId: 0,
      categories: [],
      columns: [{
        title: 'Title',
        dataIndex: 'title',
        scopedSlots: { customRender: 'name' },
        width: '15%'
      }, {
        title: 'Authors',
        dataIndex: 'authors',
        width: '15%'
      }, {
        title: 'Phase',
        dataIndex: 'phase',
        scopedSlots: { customRender: 'phase' },
        width: '10%'
      }, {
        title: 'Abstract',
        dataIndex: 'abstract',
        scopedSlots: { customRender: 'abstract' },
        width: '36%'
      }, {
        title: 'Operation',
        dataIndex: 'operation',
        scopedSlots: { customRender: 'operation' },
        width: '24%'
      }],
      papers: [],
      reviews: [],
      reviewPaperId: -1,
      reviewerSource: [],
      reviewerEmails: ['cheng.gu@husky.neu.edu', 'yangliu5@mit.edu'],
      decisionPaperId: -1,
      decisionPaperTitle: '',
      decisionComment: '',
      decisionPerformance: '',
      decisionResult: ''
    }
  },
  methods: {
    fetchData: function () {
      if (this.$store.state.authenticate.username.length === 0) {
        this.$message.info('Before entering Chairman Page, please log in.', 4)
        this.$router.push('/')
        return
      }
      this.$http.get(this.$store.state.endpoint.api + '/categoryChair/getCategoryPapers', {emulateJSON: true}).then(response => {
        console.log(response.body)
        if (response.body.flag !== true) {
          this.$message.error('Authentication Failed ' + response.body.info, 3)
        } else {
          this.papers = response.body.papers
        }
      }, response => {
        this.$message.error('Page loading error. Please check parameters. status-' + response.status, 3)
      })
    },
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
    openReviewPanel: function (paperid) {
      this.fetchReviews(paperid)
      // this.$modal.show('review-modal')
    },
    openAssignmentPanel: function (paper) {
      this.assignedPaperTitle = paper.title
      this.assignedPaperId = paper.paperid
      this.$modal.show('assign-modal')
    },
    openFileLink: function (href) {
      window.open(href, '_blank')
    },
    openEditPanel: function (paper) {
      console.log(paper)
      this.decisionPaperId = paper.paperid
      this.decisionPaperTitle = paper.title
      this.decisionResult = ''
      this.decisionPerformance = ''
      this.decisionComment = ''
      this.$modal.show('edit-modal')
    },
    fetchReviews: function (id) {
      this.$http.post(this.$store.state.endpoint.api + '/categoryChair/getPaperReviews', {
        paperid: id
      }, {emulateJSON: true}).then(response => {
        console.log(response.body)
        if (response.body.flag !== true) {
          this.$message.error(response.body.info, 3)
        } else {
          this.reviews = response.body.reviews
          console.log(this.reviews)
          this.$modal.show('review-modal')
        }
      }, response => {
        this.$message.error('Page loading error. Please check parameters. status-' + response.status, 3)
      })
    },
    handleSearch: function (val) {
      if (!val) {
        this.reviewerSource = []
      } else {
        this.reviewerSource = this.reviewerEmails.filter((ele) => {
          return ele.match(val)
        })
      }
    },
    fetchReviewers: function () {
      this.$http.get(this.$store.state.endpoint.api + '/categoryChair/getCategoryReviewers', {emulateJSON: true}).then(response => {
        console.log(response.body)
        let reviewers = response.body
        this.reviewerEmails = reviewers.map((ele) => {
          return ele.email
        })
      }, response => {
        this.$message.error('Loading Reviewers Failed. Please check parameters. status-' + response.status, 3)
      })
    },
    handleSubmit (recaptchaToken) {
      this.spinning = true
      console.log(recaptchaToken)
      // return false
      this.$http.post(this.$store.state.endpoint.api + '/categoryChair/assignPaper', {
        paperId: this.assignedPaperId,
        email: this.assignedEmail,
        token: recaptchaToken
      }, {emulateJSON: true}).then(response => {
        console.log(response.body.flag)
        this.spinning = false
        if (response.body.flag === true) {
          this.$message.success('Successfully Assigned.', 2)
        } else {
          this.$message.error(response.body.info, 4)
        }
      }, response => {
        this.spinning = false
        this.$message.error('Internal Server Error. Please try again.', 4)
      })
    },
    handleSubmitFinalDecision (recaptchaToken) {
      this.spinning = true
      console.log(recaptchaToken)
      /* this.$http.post(this.$store.state.endpoint.api + '/categoryChair/assignPaper', {
        paperId: this.assignedPaperId,
        email: this.assignedEmail,
        token: recaptchaToken
      }, {emulateJSON: true}).then(response => {
        console.log(response.body.flag)
        this.spinning = false
        if (response.body.flag === true) {
          this.$message.success('Successfully Assigned.', 2)
        } else {
          this.$message.error(response.body.info, 4)
        }
      }, response => {
        this.spinning = false
        this.$message.error('Internal Server Error. Please try again.', 4)
      }) */
    }
  },
  computed: {
    data: function () {
      return this.papers.map((val) => {
        return {
          paperid: val.paperid,
          title: val.title,
          authors: val.authors,
          phase: val.phase,
          abstract: val._abstract,
          link: val.link
        }
      })
    },
    category: function () {
      return this.categories[this.categoryId]
    },
    commentCounts: function () {
      return this.decisionComment.length
    },
    recommandAward: function () {
      return this.decisionPerformance === 'A+'
    }
  }
}
</script>

<style scoped lang="css">
  span.review-title {
    display: block;
    font-weight: bolder;
    font-size: 1.2em;
    padding: 10px;
    margin: auto;
  }
  div.review-title-div {
    text-align: center;
  }
  span.review {
    display: block;
    padding: 10px;
    margin: auto;
  }
  div.review-div {
    text-align: center;
  }
  input.ant-input.ant-select-search__field {
    display: inline-block;
    padding: 20px;
  }
  .assign-col {
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .decision-ele {
    margin-top: 20px;
    display: inline-block;
    margin-right: 10px;
  }
</style>
