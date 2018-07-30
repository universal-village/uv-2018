<template>
  <a-layout-content class="main-content">
    <a-layout style="padding: 0 24px 24px; background: rgba(255, 255, 255, .75);">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item v-for="navPage in this.$store.state.navPageList" :key="navPage">
          {{ navPage | capitalize }}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content class="page-content">
        <a-alert
          message="No Assigned Paper"
          description="Currently No Papers Have Been Assigned to You"
          type="info"
          closable
          v-if="!hasWork()"
        />
        <a-row v-else :gutter="24">
          <a-col :xl="8" :lg="12" :sm="24" v-for="(assignedPaper, index) in assignedPapers" :key="assignedPaper + '' + index">
            <a-card
              hoverable
            >
              <h1 style="font-weight: bolder">{{assignedPaper.paper.title}}</h1>
              <h3>{{assignedPaper.paper.authors}}</h3>
              <span>{{assignedPaper.paper.keywords.join(', ')}}</span>
              <hr>
              <p>{{assignedPaper.paper._abstract}}</p>
              <ul class="ant-card-actions" slot="actions">
                <li style="width: 50%;" @click="editPaperReview(index)"><a-icon type="edit" /></li>
                <li style="width: 50%;" @click="checkPaperDetail(index)"> <a-icon type="ellipsis" /></li>
              </ul>
              <hr>
              <a-collapse :bordered="false">
                <a-collapse-panel key="1">
                  <template slot="header">
                    <h2 style="display: inline-block">Overall</h2>
                    <h2 style="display: inline-block; font-weight: bolder; margin-left: 65%"><span>{{assignedPaper.review.overall? assignedPaper.review.overall: 'TODO'}}</span></h2>
                  </template>
                  <a-row :glutten="12">
                    <a-col :span="12" class="col-score">
                      <label>Theoretical Contribution</label><br>
                      <span>{{assignedPaper.review.theoreticalContribution}}</span>
                    </a-col>
                    <a-col :span="12" class="col-score">
                      <label>Technological Contribution</label><br>
                      <span>{{assignedPaper.review.technologicalContribution}}</span>
                    </a-col>
                    <a-col :span="12" class="col-score">
                      <label>Survey Tutorial Contribution</label><br>
                      <span>{{assignedPaper.review.surveyTurtorialContribution}}</span>
                    </a-col>
                    <a-col :span="12" class="col-score">
                      <label>Originality of Concepts</label><br>
                      <span>{{assignedPaper.review.originalityOfConcepts}}</span>
                    </a-col>
                    <a-col :span="12" class="col-score">
                      <label>Technical Soundness</label><br>
                      <span>{{assignedPaper.review.technicalSoundness}}</span>
                    </a-col>
                    <a-col :span="12" class="col-score">
                      <label>Importance of Results</label><br>
                      <span>{{assignedPaper.review.importanceOfResult}}</span>
                    </a-col>
                    <a-col :span="12" class="col-score">
                      <label>Clarity of Presentation</label><br>
                      <span>{{assignedPaper.review.clarityOfPresentation}}</span>
                    </a-col>
                  </a-row>
                </a-collapse-panel>
              </a-collapse>
            </a-card>
          </a-col>
        </a-row>
        <modal name="paper-modal" height="auto"
           width="700"
           :adaptive="true"
           :scrollable="true"
           style="height: 85vh; padding: 10vh 0"
        >
          <div class="panel" style="display: block;">
            <div class="container-modal">
              <h1>Submitted Paper #{{ currentEditingPaper.paperid }}</h1>
              <a-divider type="horizontal" />
              <label for="title"><b> Title </b></label>
              <span>{{ currentEditingPaper.title || "(Not specified)" }}</span>
              <label for="authors"><b> Authors </b></label>
              <span>{{ currentEditingPaper.authors || "(Not specified)"}}</span>
              <label for="category"><b> Category </b></label>
              <span>{{ categories[currentEditingPaper.categoryId - 1] || "(Not specified)"}}</span>
              <label for="abstract"><b> Abstract </b></label>
              <p>{{ currentEditingPaper._abstract || "(Not specified)"}}</p >
              <label for="keywords"><b> Keywords </b></label>
              <p>{{ currentEditingPaper.keywords.join(", ") || "(Not specified)"}}</p >
              <label for="phase"><b> Phase </b></label>
              <span>{{ currentEditingPaper.phase || "(Not specified)"}}</span>
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
        <modal name="review-modal" height="auto"
           width="1000"
           :adaptive="true"
           :scrollable="true"
           style="height: 85vh; padding: 10vh 0"
        >
          <div class="panel" style="display: block;">
            <div class="container-modal">
              <h1>Review {{currentEditingPaper.title}}</h1>
              <hr>
              <a-form
                class='ant-advanced-search-form'
              >
                <a-row :gutter="36"></a-row>
                <a-row>
                  <a-col :span="24" style="text-align: left;">
                    <a-col :lg="8" :md="12" :sm="24" style="block: none;">
                      <h3 style="display: inline;">Theoretical Contribution</h3><h2 style="font-weight: bolder; display: inline-block; margin-left: 10%">{{TC}}</h2>
                      <a-slider :marks="marks" :defaultValue="25" :step="25" style="margin-right: 50px;" v-model="TC"/>
                    </a-col>
                    <a-col :lg="8" :md="12" :sm="24" style="block: none;">
                      <h3 style="display: inline;">Technical Contribution</h3><h2 style="font-weight: bolder; display: inline-block; margin-left: 10%">{{TechC}}</h2>
                      <a-slider :marks="marks" :defaultValue="25" :step="25" style="margin-right: 50px;" v-model="TechC"/>
                    </a-col>
                    <a-col :lg="8" :md="12" :sm="24" style="block: none;">
                      <h3 style="display: inline;">Survey Tutorial Contribution</h3><h2 style="font-weight: bolder; display: inline-block; margin-left: 10%">{{STC}}</h2>
                      <a-slider :marks="marks" :defaultValue="25" :step="25" style="margin-right: 50px;" v-model="STC"/>
                    </a-col>
                    <a-col :lg="8" :md="12" :sm="24" style="block: none;">
                      <h3 style="display: inline;">Originality of Concepts</h3><h2 style="font-weight: bolder; display: inline-block; margin-left: 10%">{{OOC}}</h2>
                      <a-slider :marks="marks" :defaultValue="25" :step="25" style="margin-right: 50px;" v-model="OOC"/>
                    </a-col>
                    <a-col :lg="8" :md="12" :sm="24" style="block: none;">
                      <h3 style="display: inline;">Technical Soundness</h3><h2 style="font-weight: bolder; display: inline-block; margin-left: 10%">{{TS}}</h2>
                      <a-slider :marks="marks" :defaultValue="25" :step="25" style="margin-right: 50px;" v-model="TS"/>
                    </a-col>
                    <a-col :lg="8" :md="12" :sm="24" style="block: none;">
                      <h3 style="display: inline;">Importance of Results</h3><h2 style="font-weight: bolder; display: inline-block; margin-left: 10%">{{IOR}}</h2>
                      <a-slider :marks="marks" :defaultValue="25" :step="25" style="margin-right: 50px;" v-model="IOR"/>
                    </a-col>
                    <a-col :lg="8" :md="12" :sm="24" style="block: none;">
                      <h3 style="display: inline;">Clarity of Presentation</h3><h2 style="font-weight: bolder; display: inline-block; margin-left: 10%">{{COP}}</h2>
                      <a-slider :marks="marks" :defaultValue="25" :step="25" style="margin-right: 50px;" v-model="COP"/>
                    </a-col>
                    <a-col :span="16" :push="8">
                      <svg width="200" height="200">
                        <polygraph :stats="stats"></polygraph>
                      </svg>
                    </a-col>
                    <a-col :lg="8" :md="12" :sm="24" style="block: none;">
                      <h3 style="display: inline;">Overall</h3><h2 style="font-weight: bolder; display: inline-block; margin-left: 10%">{{overall}}</h2>
                      <a-slider :marks="marks" :defaultValue="25" :step="25" style="margin-right: 50px;" v-model="overall"/>
                    </a-col>
                    <a-col :lg="16" :md="24">
                      <a-form-item
                        label='Comment'
                        fieldDecoratorId="comment"
                        :fieldDecoratorOptions="{rules: [{ required: true, message: 'Comment cannot be left blank!' }]}"
                      >
                        <a-textarea placeholder="Comment about this Paper" v-model="comment" :autosize="{ minRows: 3 }">
                        </a-textarea>
                      </a-form-item>
                      <vue-recaptcha :sitekey="this.$store.state.sitekey" @verify="handleSubmit">
                        <a-button type='primary' htmlType='submit' style="width: 100%;" :loading="spinning">
                          Submit Review
                        </a-button>
                      </vue-recaptcha>
                    </a-col>
                  </a-col>
                </a-row>
              </a-form>
            </div>
          </div>
        </modal>
      </a-layout-content>
    </a-layout>
  </a-layout-content>
</template>

<script lang="js">
import Polygon from '../Helper/Polygon.vue'
import VueRecaptcha from 'vue-recaptcha'
export default {
  name: 'reviewer',
  components: {
    'polygraph': Polygon,
    VueRecaptcha
  },
  props: [],
  mounted () {

  },
  data () {
    return {
      categoryId: 0,
      assignedPapers: [],
      currentEditingPaper: {
        paperid: -1,
        title: '',
        authors: '',
        categoryId: '',
        _abstract: '',
        keywords: [],
        phase: '',
        link: ''
      },
      categories: [],
      marks: {
        0: 'C',
        25: 'B',
        50: 'A-',
        75: 'A',
        100: 'A+'
      },
      spinning: false,
      TC: 25,
      TechC: 25,
      STC: 25,
      OOC: 25,
      TS: 25,
      IOR: 25,
      COP: 25,
      overall: 25,
      comment: ''
    }
  },
  methods: {
    hasWork: function () {
      return this.assignedPapers.length > 0
    },
    fetchData: function () {
      if (this.$store.state.authenticate.username.length === 0) {
        this.$message.info('Before entering Reviewer Page, please log in.', 4)
        this.$router.push('/')
        return
      }
      this.checkReviewerStatus()
      this.$http.get(this.$store.state.endpoint.api + '/reviewer/getAssignedPapers', {emulateJSON: true}).then(response => {
        console.log(response.body)
        if (response.body.flag !== true) {
          this.$message.error(response.body.info, 3)
        } else {
          this.assignedPapers = response.body.assignedPapers
        }
      }, response => {
        this.$message.error('Page loading error. Please check parameters. status-' + response.status, 3)
      })
    },
    checkReviewerStatus: function () {
      this.$http.get(this.$store.state.endpoint.api + '/isReviewer', {emulateJSON: true}).then(
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
    checkPaperDetail: function (index) {
      this.currentEditingPaper = this.assignedPapers[index].paper
      this.$modal.show('paper-modal')
    },
    editPaperReview: function (index) {
      this.currentEditingPaper = this.assignedPapers[index].paper
      this.TC = this.scoreToValue(this.assignedPapers[index].review.theoreticalContribution)
      this.TechC = this.scoreToValue(this.assignedPapers[index].review.technologicalContribution)
      this.STC = this.scoreToValue(this.assignedPapers[index].review.surveyTurtorialContribution)
      this.OOC = this.scoreToValue(this.assignedPapers[index].review.originalityOfConcepts)
      this.TS = this.scoreToValue(this.assignedPapers[index].review.technicalSoundness)
      this.IOR = this.scoreToValue(this.assignedPapers[index].review.importanceOfResult)
      this.COP = this.scoreToValue(this.assignedPapers[index].review.clarityOfPresentation)
      this.overall = this.scoreToValue(this.assignedPapers[index].review.overall)
      this.comment = this.assignedPapers[index].review.comment
      this.$modal.show('review-modal')
    },
    formatter: function (value) {
      if (value === 100) {
        return 'A+'
      } else if (value >= 75) {
        return 'A'
      } else if (value >= 50) {
        return 'A-'
      } else if (value >= 25) {
        return 'B'
      } else {
        return 'C'
      }
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
    },
    handleSubmit (recaptchaToken) {
      this.spinning = true
      console.log(recaptchaToken)
      // return false
      this.$http.post(this.$store.state.endpoint.api + '/reviewer/reviewPaper', {
        paperId: this.currentEditingPaper.paperid,
        comment: this.comment,
        COP: this.formatter(this.COP),
        TC: this.formatter(this.TC),
        TechC: this.formatter(this.TechC),
        STC: this.formatter(this.STC),
        OOC: this.formatter(this.OOC),
        TS: this.formatter(this.TS),
        IOR: this.formatter(this.IOR),
        overall: this.formatter(this.overall),
        token: recaptchaToken
      }, {emulateJSON: true}).then(response => {
        console.log(response.body.flag)
        this.spinning = false
        if (response.body.flag === true) {
          this.$message.success('Successfully Updated.', 2)
        } else {
          this.$message.error(response.body.info, 4)
        }
      }, response => {
        this.spinning = false
        this.$message.error('Internal Server Error. Please try again.', 4)
      })
    }
  },
  computed: {
    stats: function () {
      return [
        { label: 'TC', value: this.TC * 0.75 + 25 },
        { label: 'TechC', value: this.TechC * 0.75 + 25 },
        { label: 'STC', value: this.STC * 0.75 + 25 },
        { label: 'OOC', value: this.OOC * 0.75 + 25 },
        { label: 'TS', value: this.TS * 0.75 + 25 },
        { label: 'IOR', value: this.IOR * 0.75 + 25 },
        { label: 'COP', value: this.COP * 0.75 + 25 }
      ]
    }
  },
  created () {
    this.fetchData()
    this.getCategories()
  }
}
</script>

<style scoped lang="css">
  .ant-layout-content p {
    font-size: 1.2em;
    font-weight: bold;
    font-family: "Times New Roman", Times, serif;
  }

  @media only screen and (max-width: 960px) {
      .ant-layout-content {
      padding: 0 20px;
    }
  }
  @media only screen and (min-width: 960px){
      .ant-layout-content.main-content {
        padding: 0 10%;
    }
      .ant-layout {
        padding: 0 24px 24px;
    }
  }
  .col-score {
    height: 4em;
  }
  polygon {
    fill: #42b983;
    opacity: .75;
  }
  input[type=password],input[type=text]{width:100%;padding:9pt 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;box-sizing:border-box}.imgcontainer{text-align:center;margin:24px 0 9pt}img.avatar{width:40%;border-radius:50%}.container-modal{padding:3em}span.psw{float:right;padding-top:1pc}@media screen and (max-width:300px){span.psw{display:block;float:none}.editbtn{width:100%}}.v--modal-box{display:none;position:fixed;z-index:1;padding-top:75pt;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,255,0,.4)}.modal-content{position:relative;background-color:#fefefe;margin:auto;padding:0;border:1px solid #888;width:80%;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);-webkit-animation-name:animatetop;-webkit-animation-duration:.4s;animation-name:animatetop;animation-duration:.4s}@-webkit-keyframes animatetop{0%{top:-300px;opacity:0}to{top:0;opacity:1}}@keyframes animatetop{0%{top:-300px;opacity:0}to{top:0;opacity:1}}.close{color:#fff;float:right;font-size:28px;font-weight:700}.close:focus,.close:hover{color:#000;text-decoration:none;cursor:pointer}.modal-header{background-color:#5cb85c;color:#fff}.modal-body,.modal-footer,.modal-header{padding:2px 1pc}.modal-footer{background-color:#5cb85c;color:#fff}div.panel h1{font-weight:bolder;font-size:2em}div.panel label{display:block;font-size:1.5em;font-weight:700}div.panel p,div.panel span{display:block;font-size:1.2em;margin-bottom:10px;margin:.25em 2em 1.5em 2em;}div.panel p{width:80%}
</style>
