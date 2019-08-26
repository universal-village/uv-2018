<template lang="html">
  <a-layout-content class="main-content">
    <a-layout style="padding: 0 24px 24px; background: rgba(255, 255, 255, .75);">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item v-for="navPage in this.$store.state.navPageList" :key="navPage">
          {{ navPage | capitalize }}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content class="page-content" v-bar>
        <a-tabs tabPosition="right" :style="{ height: '1000px' }">
          <a-tab-pane v-for="(category, index) in categoryPapers" :tab="category.categoryName" :key="'key ' + index">
            <div>
              <a-card v-for="(paper, ind) in category.papers" :bordered="false" style="background-color: rgba(0, 0, 0, 0);">
                <b style="font-weight: bolder; font-size: 1.1em; margin-bottom: 20px;">{{ paper.title }}</b><br>
                <i><strong style="font-size: 1.0em; display: block; margin-bottom: 5px;">{{ paper.authors }}</strong></i>
                <span>KEYWORDS: </span><strong style="padding-bottom: 12px;">{{ paper.keywords.join(", ") || "(Not specified)" }}</strong><br>
                <strong style="font-size: 0.8em; display: block; margin-top: 10px;">
                  <read-more more-str="show more" link="#" less-str="show less" :max-chars="550" :text="paper._abstract">
                  </read-more>
                </strong>
              </a-card>
            </div>
          </a-tab-pane>
        </a-tabs>
      </a-layout-content>
    </a-layout>
  </a-layout-content>
</template>

<script lang="js">
export default {
  name: 'accepted-papers',
  props: [],
  mounted () {
    this.fetchPapers()
  },
  data () {
    return {
      scrollTrackStyle: {

      },
      scrollBarStyle: {
        color: 'green'
      },
      msg: undefined,
      categoryPapers: []
    }
  },
  methods: {
    fetchPapers: function () {
      this.$http.get(this.$store.state.endpoint.api + '/getAcceptedPapers', {emulateJSON: true}).then(
        response => {
          if (response.body.flag !== true) {
            this.$message.error(response.body.cause, 3)
          } else {
            this.categoryPapers = response.body.categoryPapers
          }
        }, response => {
          // this.$message.error('Page loading error. Please check parameters. status-' + response.status, 3)
          console.log('Cannot fetch accepted papers repo')
        })
    }
  },
  computed: {

  }
}
</script>

<style scoped lang="css">
  h1 {
    color: green;
  }
  h2 {
    color: green;
    padding-top: 5px;
  }
  h3 {
    color:green;
  }
  h4 {
    color: green;
    font-size: 16px;
  }
  li{
    font-size: 16px;
  }
  a:link {
    text-decoration: underline;
  }

  .ant-layout-content p {
    font-size: 1.2em;
    font-weight: bold;
    font-family: "Times New Roman", Times, serif;
  }

  @media only screen and (max-width: 960px) {
      .ant-layout-content {
      padding: 0px;
    }
  }
  @media only screen and (min-width: 960px){
      .ant-layout-content.main-content {
        padding: 0 5%;
    }
      .ant-layout {
        padding: 0 24px 24px;
    }
      /* .ant-collapse-item  {
        font-size: 1.5em !important;
        font-weight: bolder;
      } */
  }
</style>
