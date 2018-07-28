<template>
  <a-layout-content class="success-main-content">
    <a-layout style="padding: 0 24px 24px; background: rgba(255, 255, 255, .75);">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item v-for="navPage in this.$store.state.navPageList" :key="navPage">
          {{ navPage | capitalize }}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content class="page-content">
        <a-row>
          <a-col :span="8">
            <img src="@/assets/success.svg" class="draw-svg" />
          </a-col>
          <a-col :span="16">
            fuck
          </a-col>
        </a-row>
      </a-layout-content>
    </a-layout>
  </a-layout-content>
</template>

<script>
import anime from 'animejs'

export default {
  name: 'success',
  created () {
    this.animateIcon()
  },
  data () {
    return {

    }
  },
  methods: {
    animateIcon () {
      console.log(document.querySelectorAll('.draw-svg'))
    }
  }
}
</script>

<style>
  @media only screen and (max-width: 960px) {
    .success-main-content .ant-layout-content {
      padding: 0 20px;
    }
  }
  @media only screen and (min-width: 960px){
    .success-main-content .ant-layout-content.main-content {
        padding: 0 15%;
    }
    .success-main-content .ant-layout {
        padding: 0 24px 24px;
    }
  }
</style>
