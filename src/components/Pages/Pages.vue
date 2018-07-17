<template>
  <a-layout-content style="padding: 0 50px">
    <a-layout style="padding: 0 24px 24px; background: rgba(255, 255, 255, .75);">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item v-for="navPage in this.$store.state.navPageList" :key="navPage">
          {{ navPage | capitalize }}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content :style="{ padding: '24px', margin: 0, minHeight: '280px' }" v-html="pageMeta.content">
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
      }
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
      this.$http.get(this.$store.state.endpoint.pages + this.$route.params.page, {email: this.email, password: this.password}, {emulateJSON: true}).then(response => {
        console.log(response.body.flag)
        this.spinning = false
        if (response.body.flag === true) {
          this.$message.success('Successfully logged in. Redirecting you to the homepage in 3s.', 3)
          this.pageMeta = response.body
        } else {
          this.$message.error('Username or Password is incorrect. Check your credentials and try again.', 4)
        }
      }, response => {
        this.spinning = false
        this.$message.error('Internal Server Error. Please try again.', 4)
      })
    }
  }
}
</script>

<style scoped>

</style>
