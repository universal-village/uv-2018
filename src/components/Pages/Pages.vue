<template>
  <a-layout-content class="main-content">
    <a-layout style="padding: 0 24px 24px; background: rgba(255, 255, 255, .75);">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item v-for="navPage in this.$store.state.navPageList" :key="navPage">
          {{ navPage | capitalize }}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content v-html="pagePlain" class="page-content">
      </a-layout-content>
    </a-layout>
  </a-layout-content>
</template>

<script>
export default {
  name: 'PagesDetail',
  data () {
    return {
      pageMeta: {},
      pagePlain: ''
    }
  },
  watch: {
    '$route': ['fetchData', 'scrollToTop']
  },
  created () {
    this.fetchData()
  },
  methods: {
    getLinkHref (link) {
      return '/pages/' + link
    },
    fetchData () {
      let loader = this.$message.loading('Loading page...', 0)
      this.$http.get(this.$store.state.endpoint.pages + this.$route.params.page + '.html', {email: this.email, password: this.password}, {emulateJSON: true}).then(response => {
        console.log(response.body.flag)
        this.spinning = false
        loader()
        this.pagePlain = response.body.replace(/href=["'](.*)["']/gm, 'href="#/$1"')
      }, response => {
        this.spinning = false
        loader()
        if (response.status === 404 || response.status === 0) {
          this.pagePlain = '<div class="ant-alert ant-alert-info" style="min-width: 10vw; max-width: 300px;"><i class="anticon anticon-info-circle ant-alert-icon"></i><span class="ant-alert-message">Page is still in construction.</span></div>'
        } else {
          this.$message.error('Page loading error. Please check parameters. status-' + response.status, 3)
        }
      })
    },
    scrollToTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style scoped>
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
      /* .ant-collapse-item  {
        font-size: 1.5em !important;
        font-weight: bolder;
      } */
  }
</style>

<style type="text/css">
  .page-content p {
    font-size: 1.2em;
    font-weight: bold;
    font-family: "Times New Roman", Times, serif;
  }

  .page-content h1 {
    font-weight: bolder;
  }

  .page-content h2 {
    font-weight: bolder;
  }

  .page-content h3 {
    font-weight: bolder;
  }

  .page-content li {
    font-weight: bolder;
  }
</style>
