<template>
  <a-layout style="background: none !important;">
    <a-layout-sider width="200" style="background: none">
      <a-menu
        mode="inline"
        :openKeys="openKeys"
        @openChange="onOpenChange"
        :style="{ height: '100%', borderRight: 0, background: 'rgba(255, 255, 255, .5)' }"
      >
        <a-sub-menu key="paper-repo">
          <span slot="title"><a-icon type="user" />Chairman</span>
          <a-menu-item key="submissions:papers">
            <router-link to="/chairman/paper-repo"><a-icon type="copy" />Paper Repo</router-link>
          </a-menu-item>
          <a-menu-item key="submissions:submit-paper">
            <router-link to="/chairman/promote"><a-icon type="plus" />Promote Reviewer</router-link>
          </a-menu-item>
        </a-sub-menu>
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
          <router-view name="Chairman"></router-view>
        </transition>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="js">
export default {
  name: 'category-chair',
  props: [],
  created () {
    // this.checkLoginStatus()
  },
  data () {
    return {
      rootSubmenuKeys: ['promote', 'paper-repo'],
      openKeys: ['sub1']
    }
  },
  methods: {
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
  },
  computed: {

  }
}
</script>

<style scoped lang="css">
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
</style>
