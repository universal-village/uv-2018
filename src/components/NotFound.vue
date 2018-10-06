<template>
  <a-layout-content class="success-main-content">
    <a-layout style="padding: 0 24px 24px; background: rgba(255, 255, 255, .75);">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item v-for="navPage in this.paginationLinks" :key="navPage">
          {{ navPage | capitalize }}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content :style="{ padding: '24px', margin: 0 }" class="page-content">
        <a-row :gutter="24" justify="center">
          <a-col :sm="24" :md="4"></a-col>
          <a-col :sm="24" :md="16">
            <h1><span style="color: rgba(0, 0, 0, .5); font-size: 48px; margin-right: .1em;">404</span> &#10093; Not Found.</h1>
            <h2>The requested resource was not found. Please try the link below, or contact us at <a :href="'mailto:' + this.$store.state.support.email">{{this.$store.state.support.email}}</a></h2>
            <ul>
              <li><router-link to="/">Homepage</router-link></li>
              <li><router-link to="/my">My UV</router-link></li>
              <li><router-link to="/conference-registration">Conference Registration</router-link></li>
            </ul>
          </a-col>
        </a-row>
      </a-layout-content>
    </a-layout>
  </a-layout-content>
</template>

<script>
import anime from 'animejs'

export default {
  name: 'NotFound',
  mounted () {
    this.animateIcon()
  },
  data () {
    return {
      paginationLinks: ['Home', 'Error', '404']
    }
  },
  methods: {
    animateIcon () {
      console.log(this.$el.querySelectorAll('.section.description h1'))
      anime.timeline()
        .add({
          targets: '.page-content h1',
          elasticity: 500,
          duration: 900,
          translateX: [-80, 0],
          opacity: [0, 1],
          scaleY: [0.95, 1],
          offset: 400
        })
        .add({
          targets: '.page-content h2',
          duration: 1050,
          translateX: [-80, 0],
          opacity: [0, 1],
          scaleY: [0.95, 1],
          elasticity: 500,
          offset: 450
        })
        .add({
          targets: '.page-content ul li',
          elasticity: 500,
          duration: 1300,
          translateX: [-80, 0],
          opacity: [0, 1],
          scaleY: [0.95, 1],
          offset: 550,
          delay: (el, i) => {
            return i * 50
          }
        })
    }
  }
}
</script>

<style scoped>
  li {
    font-weight: bold;
  }
</style>
