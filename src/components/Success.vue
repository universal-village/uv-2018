<template>
  <a-layout-content class="success-main-content">
    <a-layout style="padding: 0 24px 24px; background: rgba(255, 255, 255, .75);">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item v-for="navPage in this.$store.state.navPageList" :key="navPage">
          {{ navPage | capitalize }}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content class="page-content">
        <a-row justify="center">
          <a-col :xs="24" :sm="24" :md="10" :lg="8" :xl="6" :xxl="6" class="section">
            <!-- TODO: Add animation effect to the svg logo (svg drawing). -->
            <svg id="successAnimation" class="animated" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 70 70" style="max-height: 30vh; text-align: center">
              <path id="successAnimationResult" fill="#D8D8D8" d="M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z"/>
              <circle id="successAnimationCircle" cx="35" cy="35" r="24" stroke="#979797" stroke-width="2" stroke-linecap="round" fill="transparent"/>
              <polyline id="successAnimationCheck" stroke="#979797" stroke-width="2" points="23 34 34 43 47 27" fill="transparent"/>
            </svg>
          </a-col>
          <a-col :xs="24" :sm="24" :md="14" :lg="16" :xl="18" :xxl="18" class="section description">
            <!-- TODO: Also add some notice text over here. -->
            <h1>Your operation is successful!</h1>
            <h2>Your new password has been generated and sent to your email. Please check it. </h2>
            <p>Welcome to the international community of Universal Village!<br>If you want to know more about Universal Village, you can visit the following links for the previous UV conferences.</p>
            <ul>
              <li>
                <router-link to="/uv2013">UV 2013</router-link>
              </li>
              <li>
                <router-link to="/uv2014">UV 2014</router-link>
              </li>
              <li>
                <router-link to="/uv2016">UV 2016</router-link>
              </li>
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
  name: 'success',
  mounted () {
    this.animateIcon()
  },
  data () {
    return {

    }
  },
  methods: {
    animateIcon () {
      console.log(this.$el.querySelectorAll('.section.description h1'))
      anime.timeline()
        .add({
          targets: '.section.description h1',
          easing: 'easeOutExpo',
          duration: 900,
          translateX: [-80, 0],
          opacity: [0, 1],
          scaleY: [0.95, 1],
          offset: 350
        })
        .add({
          targets: '.section.description h2',
          easing: 'easeOutExpo',
          duration: 1050,
          translateX: [-80, 0],
          opacity: [0, 1],
          scaleY: [0.95, 1],
          offset: 375
        })
        .add({
          targets: '.section.description p',
          easing: 'easeOutExpo',
          duration: 1300,
          translateX: [-80, 0],
          opacity: [0, 1],
          scaleY: [0.95, 1],
          offset: 400
        })
        .add({
          targets: '.section.description',
          easing: 'easeOutExpo',
          duration: 1700,
          textShadow: ['0 0 3px #fff', '0 0 0px #fff'],
          offset: 350
        })
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
  .section {
    padding: 1em
  }
  @-webkit-keyframes scaleAnimation {
    0% {
      opacity: 0;
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
    }
    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes scaleAnimation {
    0% {
      opacity: 0;
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
    }
    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @-webkit-keyframes drawCircle {
    0% {
      stroke-dashoffset: 151px;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }
  @keyframes drawCircle {
    0% {
      stroke-dashoffset: 151px;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }
  @-webkit-keyframes drawCheck {
    0% {
      stroke-dashoffset: 36px;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }
  @keyframes drawCheck {
    0% {
      stroke-dashoffset: 36px;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }
  @-webkit-keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  #successAnimationCircle {
    stroke-dasharray: 151px 151px;
    stroke: #25AE88;
  }

  #successAnimationCheck {
    stroke-dasharray: 36px 36px;
    stroke: #25AE88;
  }

  #successAnimationResult {
    fill: #25AE88;
    opacity: 0;
  }

  #successAnimation.animated {
    -webkit-animation: 1s ease-out 0s 1 both scaleAnimation;
    animation: 1s ease-out 0s 1 both scaleAnimation;
  }
  #successAnimation.animated #successAnimationCircle {
    -webkit-animation: 1s cubic-bezier(0.77, 0, 0.175, 1) 0s 1 both drawCircle, 0.3s linear 0.9s 1 both fadeOut;
    animation: 1s cubic-bezier(0.77, 0, 0.175, 1) 0s 1 both drawCircle, 0.3s linear 0.9s 1 both fadeOut;
  }
  #successAnimation.animated #successAnimationCheck {
    -webkit-animation: 1s cubic-bezier(0.77, 0, 0.175, 1) 0s 1 both drawCheck, 0.3s linear 0.9s 1 both fadeOut;
    animation: 1s cubic-bezier(0.77, 0, 0.175, 1) 0s 1 both drawCheck, 0.3s linear 0.9s 1 both fadeOut;
  }
  #successAnimation.animated #successAnimationResult {
    -webkit-animation: 0.3s linear 0.9s both fadeIn;
    animation: 0.3s linear 0.9s both fadeIn;
  }
</style>
