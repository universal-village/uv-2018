<template>
  <div>
    <a-layout-content style="padding: 0 50px">
      <a-layout style="padding: 0 24px 24px; background: rgba(255, 255, 255, .75);">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item v-for="navPage in this.$store.state.navPageList" :key="navPage">
            {{ navPage | capitalize }}
          </a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content :style="{ padding: '24px', margin: 0, minHeight: '280px' }">
          <ul>
            <li v-for="page in pageList" :key="page">
              <router-link :to="getLinkHref(page.link)">
                {{ page.name }}
              </router-link>
            </li>
          </ul>
        </a-layout-content>
      </a-layout>
    </a-layout-content>
  </div>
</template>

<script>
export default {
  name: 'PagesIndex',
  data () {
    return {
      pageList: [{
        name: 'My first page',
        link: 'my-first-page'
      }, {
        name: 'Call for papers',
        link: 'call-for-papers'
      }]
    }
  },
  methods: {
    getLinkHref (link) {
      return '/pages/' + link
    }
  }
}
</script>

<style scoped>

</style>
