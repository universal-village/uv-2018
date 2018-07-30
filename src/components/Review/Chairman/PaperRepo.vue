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
        <a-button type="dashed" style="margin: 10px;" @click="openReviewPanel(record.paperid)">Reviews</a-button><a-button type="dashed" style="margin: 10px;" @click="openAssignmentPanel(record)">Assign Reviewer</a-button><a-button type="primary" shape="circle" icon="download" />
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
<<<<<<< HEAD
      categories: [],
=======
      categories: ['Intelligent Transportation and Urban Planning', 'Healthcare and Well-being', 'Intelligent Communities & New Lifestyles Enabled by Big Data & AI', 'Data Management', 'Green Energy and Materials', 'Blue Energy and Materials', 'Ecological and Environmental Systems', 'Secial Session: Intelligent Modeling and Simulation', 'Secial Session: Future Intelligent Manufacturing', 'Secial Session: Effective Microorganisms Technology', 'Forum: UV City Forum', 'Forum: UV Student Forum', 'Forum: UV Industry & Entrepreneurship Forum', 'UV Poster Session', 'UV Exhibition'],
>>>>>>> a9ca4d25d83d67f8c6c4c00bd7df0ba60694d784
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
        width: '40%'
      }, {
        title: 'Operation',
        dataIndex: 'operation',
        scopedSlots: { customRender: 'operation' },
        width: '20%'
      }],
<<<<<<< HEAD
      papers: [],
=======
      papers: [{'paperid': 5, 'title': 'asdf', 'authors': 'sdaf', 'categoryId': 1, 'keywords': ['sdf'], 'link': 'https://s3.us-east-2.amazonaws.com/uv2018-paper/1531883947381-abstract.pdf', 'phase': 'Need-Review', '_abstract': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}, {'paperid': 15, 'title': 'Test Title', 'authors': 'Test Author0, Test Author1, Test Author2, Test Author3, Test Author4, Test Author5', 'categoryId': 1, 'keywords': ['Test Keywords0', 'Test Keywords1', 'Test Keywords2', 'Test Keywords3', 'Test Keywords4', 'Test Keywords5', 'Test Keywords6', 'Test Keywords7', 'Test Keywords8'], 'link': 'https://s3.us-east-2.amazonaws.com/uv2018-paper/1532054943692-structure.docx', 'phase': 'Need-Review', '_abstract': null}, {'paperid': 17, 'title': 'Test Title', 'authors': 'Guoxin Huang', 'categoryId': 1, 'keywords': ['Test Keywords'], 'link': 'https://s3.us-east-2.amazonaws.com/uv2018-paper/1532078439600-structure.docx', 'phase': 'Need-Review', '_abstract': 'https://s3.us-east-2.amazonaws.com/uv2018-paper/1532078439600-structure.docx'}, {'paperid': 25, 'title': 'Test Paper of Guanghua wobushi SB le', 'authors': 'Guanghua', 'categoryId': 1, 'keywords': ['daafsdadad', 'b vnvv'], 'link': null, 'phase': 'Need-Review', '_abstract': 'https://s3.us-east-2.amazonaws.com/uv2018-paper/1532117106595-Hidden_Markov_Model.pdf'}, {'paperid': 34, 'title': 'Intelligent transportation and urban planning ', 'authors': 'Hello Tester', 'categoryId': 1, 'keywords': ['Test POM', 'POM', 'MIT'], 'link': 'https://s3.us-east-2.amazonaws.com/uv2018-paper/1532394345517-pom.xml', 'phase': 'Need-Review', '_abstract': 'This is an intelligent transportation and urban planning '}, {'paperid': 35, 'title': "Prof. Horn's Fake Paper", 'authors': 'Prof. Horn,testuser1,testuser2,genius', 'categoryId': 1, 'keywords': ['machine vision', 'computer vision', 'robot vision', 'vision'], 'link': 'https://s3.us-east-2.amazonaws.com/uv2018-paper/1532553593676-FAQ.pdf', 'phase': 'Need-Review', '_abstract': 'The second best paper on the world.'}, {'paperid': 36, 'title': 'Theory of Modeling and Simulation: Integrating Discrete Event and Continuous Dynamic ', 'authors': 'Lin Zhang', 'categoryId': 1, 'keywords': ['Model', 'Simulation', 'Computing'], 'link': 'https://s3.us-east-2.amazonaws.com/uv2018-paper/1532610645912-AcceptedAuthorPublishingAgreement.pdf', 'phase': 'Need-Review', '_abstract': 'Simulation technology has rapidly grown up and becomes a new interdiscipline with the development of computer technology, and has become one essential research method and means to almost all fields of science and technology. Simulation is an activity based on the model. How to build a right model is the core issue in simulation. A large number of research achievements on models have been obtained in the past dozens of years. These achievements are related to different phases in a model lifecycle. However, the lifecycle concept has not been emphasized enough in the simulation domain and related research and applications are not sufficient. Although importance of the'}, {'paperid': 39, 'title': 'title', 'authors': 'author,author2', 'categoryId': 1, 'keywords': ['keywprkds', 'ketwddss'], 'link': 'https://s3.us-east-2.amazonaws.com/uv2018-paper/1532809210533-kernel.log', 'phase': 'Need-Review', '_abstract': 'abstract'}],
>>>>>>> a9ca4d25d83d67f8c6c4c00bd7df0ba60694d784
      reviews: [],
      reviewPaperId: -1,
      reviewerSource: [],
      reviewerEmails: ['cheng.gu@husky.neu.edu', 'yangliu5@mit.edu']
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
          this.$message.error(response.body.info, 3)
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
<<<<<<< HEAD
      this.fetchReviews(paperid)
      // this.$modal.show('review-modal')
    },
    openAssignmentPanel: function (paper) {
      this.assignedPaperTitle = paper.title
      this.assignedPaperId = paper.paperid
      this.$modal.show('assign-modal')
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
=======
      this.$modal.show('review-modal')
    },
    openAssignmentPanel: function (paperid) {
      this.$modal.show('assign-modal')
>>>>>>> a9ca4d25d83d67f8c6c4c00bd7df0ba60694d784
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
          abstract: val._abstract
        }
      })
    },
    category: function () {
      return this.categories[this.categoryId]
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
</style>
