<template>
  <a-layout-content style="padding: 0 50px">
    <a-layout style="padding: 0 24px 24px; background: rgba(255, 255, 255, .75);">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item v-for="navPage in this.$store.state.navPageList" :key="navPage">
          {{ navPage | capitalize }}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content :style="{ padding: '24px', margin: 0, minHeight: '280px' }" v-html="pagePlain">
      </a-layout-content>
    </a-layout>
  </a-layout-content>
</template>

<script>
export default {
  name: 'PagesDetail',
  data () {
    return {
      pageMeta: {
        content: '<h2>Loading</h2>',
        title: 'Title',
        date: 123456789,
        author: 'Admin'
      },
      pagePlain: ''
    }
  },
  watch: {
    '$route': 'fetchData'
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
        this.pagePlain = response.body
      }, response => {
        this.spinning = false
        loader()
        if (response.status === 404 || response.status === 0) {
          this.pagePlain = '<h2>Page is still in construction...</h2>'
        } else {
          this.$message.error('Page loading error. Please check parameters. status-' + response.status, 3)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
