<template>
  <a-layout style="background: none !important;">
    <a-layout-sider width="250" style="background: none">
      <a-menu
        mode="inline"
        :openKeys="openKeys"
        @openChange="onOpenChange"
        :style="{ height: '100%', borderRight: 0, background: 'rgba(255, 255, 255, .5)' }"
      >
        <a-sub-menu key="submissions">
          <span slot="title"><a-icon type="profile" />My Submissions</span>
          <a-menu-item key="submissions:papers">
            <router-link to="/my/submissions/paper"><a-icon type="copy" />Papers</router-link>
          </a-menu-item>
          <a-menu-item key="submissions:submit-paper">
            <router-link to="/my/submissions/add"><a-icon type="plus" />Submit Paper</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="profile">
          <span slot="title"><a-icon type="setting" />Settings</span>
          <a-menu-item key="profile:general">
            <router-link to="/my/profile"><a-icon type="solution" />My Profile</router-link>
          </a-menu-item>
          <a-menu-item key="profile:reset-password">
            <router-link to="/reset-password"><a-icon type="lock" />Reset Password</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="chairman" v-if="isCategoryChair">
          <router-link to="/chairman" class="a-advance-nav"><a-icon type="user" />Category Chair</router-link>
        </a-menu-item>
        <a-menu-item key="reviewer" v-if="isReviewer">
          <router-link to="/reviewer" class="a-advance-nav"><a-icon type="user" />Reviewer</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout style="padding: 0 24px 24px; background: none !important;">
      <a-layout-content :style="{ background: 'rgba(255, 255, 255, .5)', padding: '24px', margin: 0, minHeight: '280px' }">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item v-for="navPage in this.$store.state.navPageList" :key="navPage">
            {{ navPage | capitalize }}
          </a-breadcrumb-item>
        </a-breadcrumb>
        <transition name="slide-fade-submission" mode="out-in" :beforeEnter="beforeEnter">
          <router-view name="My"></router-view>
        </transition>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      isReviewer: false,
      isCategoryChair: false,
      rootSubmenuKeys: ['submissions', 'profile'],
      openKeys: ['sub1']
    }
  },
  created () {
    this.checkLoginStatus()
    this.checkChairmanStatus()
    this.checkReviewerStatus()
  },
  methods: {
    checkChairmanStatus: function () {
      this.$http.get(this.$store.state.endpoint.api + '/isCategoryChair', {emulateJSON: true}).then(
        response => {
          this.isCategoryChair = response.body.flag
        }, response => {
          // this.$message.error('Page loading error. Please check parameters. status-' + response.status, 3)
          console.log('Cannot fetch chairman status')
        })
    },
    checkReviewerStatus: function () {
      this.$http.get(this.$store.state.endpoint.api + '/isReviewer', {emulateJSON: true}).then(
        response => {
          this.isReviewer = response.body.flag
        }, response => {
          // this.$message.error('Page loading error. Please check parameters. status-' + response.status, 3)
          console.log('Cannot fetch reviewer status')
        })
    },
    checkLoginStatus () {
      if (this.$store.state.authenticate.username.length === 0) {
        this.$message.info('Before entering My UV, please log in.', 4)
        this.$router.push('/login')
      }
    },
    onOpenChange (openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    },
    beforeEnter () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style>
  .slide-fade-submission-enter-active {
    transition: all 175ms cubic-bezier(0.0, 0.0, 0.2, 1);
  }
  .slide-fade-submission-leave-active {
    transition: all 200ms cubic-bezier(0.4, 0.0, 1, 1);
  }
  .slide-fade-submission-enter {
    transform: translateX(50px) scale(1);
    filter: blur(5px);
    opacity: 0;
  }
  .slide-fade-submission-leave-to {
    transform: scale(0.8);
    filter: blur(5px);
    opacity: 0;
  }
  .a-advance-nav {
    font-size: 16px !important;
  }
</style>
