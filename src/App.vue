<template>
  <a-layout id="app">
    <modal name="update-notification-modal" height="auto"
           width="800"
           :pivotY="0.3"
           :clickToClose="false"
           :adaptive="true"
           :scrollable="true"
           @opened="animateUpdateNotification"
           style="height: 85vh; padding: 10vh 0;"
    >
      <div class="panel update-notification" style="display: block;">
        <div class="container-modal">
          <h1>System Update Notification</h1>
          <p>UV2018 website system was recently upgraded to enhance the security.</p>
          <p><span style="font-weight: 900">Registered Users</span>, please <nobr><a-button size="large" style="margin-left: .35em;" class="reset-password-notification"><router-link to="/regenerate-password?from=notice" @click.native="confirmedWebsiteUpdated"><a-icon type="link" /> reset your password.</router-link></a-button></nobr></p>
          <p>If you have any questions, please contact us at the email:<br><span style="font-family: Source Code Pro, Consolas, Courier New, Courier, monospace; word-break: break-all;">uv2018.committee@universal-village.org</span></p>
          <p>Thank you for helping us to keep your account safe.</p>
          <p style="float: right">UV2018 IT Team</p>
          <br><br>
          <a-button size="large" class="btn" style="float: right" type="primary" @click="confirmedWebsiteUpdated"><a-icon type="cross" /> Close, and Never show again</a-button>
        </div>
      </div>
    </modal>
    <a-back-top />
    <!--<a-layout-sider-->
      <!--breakpoint="lg"-->
      <!--collapsedWidth="0"-->
      <!--@collapse="onCollapse"-->
    <!--&gt;-->
      <!--<div class="logo" />-->
      <!--<a-menu theme="dark" mode="inline" :defaultSelectedKeys="['4']">-->
        <!--<a-menu-item key="1">-->
          <!--<a-icon type="user" />-->
          <!--<span class="nav-text">nav 1</span>-->
        <!--</a-menu-item>-->
        <!--<a-menu-item key="2">-->
          <!--<a-icon type="video-camera" />-->
          <!--<span class="nav-text">nav 2</span>-->
        <!--</a-menu-item>-->
        <!--<a-menu-item key="3">-->
          <!--<a-icon type="upload" />-->
          <!--<span class="nav-text">nav 3</span>-->
        <!--</a-menu-item>-->
        <!--<a-menu-item key="4">-->
          <!--<a-icon type="user" />-->
          <!--<span class="nav-text">nav 4</span>-->
        <!--</a-menu-item>-->
      <!--</a-menu>-->
    <!--</a-layout-sider>-->
    <a-layout-header class="header">
      <router-link to="/">
        <div class="logo" />
      </router-link>
      <a-menu
        theme="dark"
        breakpoint="lg"
        mode="horizontal"
        :defaultSelectedKeys="['0']"
        :style="{ lineHeight: '64px', background: 'none' }"
        style="box-shadow: rgba(-2, 0, 0, 0.14) 0 16px 24px 10px, rgba(-2 0, 0, 0.12) 0 6px 30px 5px, rgba(0, 0, 0, 1) 0 8px 20px -5px }"
      >
        <a-menu-item key="home">
          <router-link to="/">Home</router-link>
        </a-menu-item>

        <a-sub-menu>
          <span slot="title">Authors <a-icon type="down"></a-icon></span>
          <a-menu-item key="authors:call-for-papers">
            <router-link to="/pages/call-for-papers">Call for Papers</router-link>
          </a-menu-item>
          <a-menu-item key="authors:paper-submission">
            <router-link to="/my/submissions/add">Paper Submission</router-link>
          </a-menu-item>
          <a-menu-item key="authors:important-dates">
            <router-link to="/pages/important-dates">Important Dates</router-link>
          </a-menu-item>
        </a-sub-menu>

        <a-sub-menu>
          <span slot="title">Program <a-icon type="down"></a-icon></span>
          <a-menu-item key="program:categories-and-sessions">
            <router-link to="/pages/categories-and-sessions">Categories and Sessions</router-link>
          </a-menu-item>
          <!-- <a-menu-item key="program:forum">
            <router-link to="/pages/forums">Forums</router-link>
          </a-menu-item> -->
          <a-sub-menu key="program:forums" title="UV Forums" :style="{ marginRight: '1em' }">
            <a-menu-item key="program:forums:city-forum">
              <router-link to="/pages/city-forum">City Forum</router-link>
            </a-menu-item>
            <a-menu-item key="program:forums:student-forum">
              <router-link to="/pages/student-forum">Student Forum</router-link>
            </a-menu-item>
            <a-menu-item key="program:forums:industry-forum">
              <router-link to="/pages/industry-forum">Industry & Entrepreneurship Forum</router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item key="program:workshops">
            <router-link to="/pages/workshops">Workshops</router-link>
          </a-menu-item>
          <a-menu-item key="program:schedule">
            <router-link to="/pages/schedule">Schedule</router-link>
          </a-menu-item>
          <a-menu-item key="program:accepted-papers">
          <router-link to="/pages/accepted-papers">Accepted Papers</router-link>
          </a-menu-item>
        </a-sub-menu>

        <a-sub-menu>
          <span slot="title">Attending <a-icon type="down"></a-icon></span>
          <a-menu-item key="attending:accommodation">
            <router-link to="/pages/accommodation">Accommodation</router-link>
          </a-menu-item>
          <a-menu-item key="attending:local-information">
            <router-link to="/pages/local-information">Local Information</router-link>
          </a-menu-item>
          <a-menu-item key="attending:registration-price">
            <router-link to="/pricing">Registration price</router-link>
          </a-menu-item>
          <a-menu-item key="attending:registration">
            <router-link to="/conference-registration">Conference Registration</router-link>
          </a-menu-item>
        </a-sub-menu>

        <a-menu-item key="exhibition">
          <router-link to="/pages/exhibition">Exhibitions</router-link>
        </a-menu-item>

        <a-menu-item key="committee">
          <router-link to="/pages/committee">Committee</router-link>
        </a-menu-item>

        <a-menu-item key="sponsors">
          <router-link to="/pages/sponsors">Sponsors</router-link>
        </a-menu-item>

        <a-sub-menu>
          <span slot="title">About Us <a-icon type="down"></a-icon></span>
          <a-menu-item key="about-us:mission-and-vision">
            <router-link to="/pages/mission-and-vision">Mission and Vision</router-link>
          </a-menu-item>
          <a-sub-menu key="about-us:previous-conferences" title="Previous Conferences" :style="{ marginRight: '1em' }">
            <a-menu-item key="about-us:previous-conferences:uv-2013">
              <router-link to="/uv2013">UV 2013</router-link>
            </a-menu-item>
            <a-menu-item key="about-us:previous-conferences:uv-2014">
              <router-link to="/uv2014">UV 2014</router-link>
            </a-menu-item>
            <a-menu-item key="about-us:previous-conferences:uv-2016">
              <router-link to="/uv2016">UV 2016</router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item key="about-us:Q&A">
            <router-link to="/pages/QA">Q&A</router-link>
          </a-menu-item>
          <a-menu-item key="about-us:contact-us">
            <router-link to="/pages/contact-us">Contact Us</router-link>
          </a-menu-item>
        </a-sub-menu>

        <a-menu-item key="my-uv">
          <router-link to="/my">My UV</router-link>
        </a-menu-item>

        <a-menu-item class="disable-activation" style="float: right" v-if="this.$store.state.authenticate.username.length === 0" key="logged-out">
          <router-link to="/login"><a-button class="btn" type="dashed"><a-icon type="login"></a-icon> Login</a-button></router-link>
        </a-menu-item>
        <a-menu-item class="disable-activation" style="float: right; color: rgba(255, 255, 255, 0.65)" v-else key="logged-in">
          <span style="font-family: Source Code Pro, Courier New, Courier, Consolas, Menlo, monospace">
            {{ this.$store.state.authenticate.username }}
          </span> <a-divider type="vertical" />
          <a-button class="btn" type="danger" @click="logout"><a-icon type="logout"></a-icon> Logout</a-button>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <transition name="slide-fade" mode="out-in" :before-enter="beforeEnter">
      <router-view name="App"></router-view>
    </transition>
    <a-layout-footer style="text-align: center; background: rgba(240,242,245,.5);">
      Contact us: <span style="font-family: Source Code Pro, Consolas, Courier New, Courier, monospace;">uv2018.committee@universal-village.org<br></span>
      <a-divider type="horizontal" style="margin: 8px 0; background: #212121" />
      Copyright &copy; 2012-{{ thisYear }}. The International Conference on Universal Village. All Rights Reserved.
    </a-layout-footer>
  </a-layout>
</template>

<script>
import anime from 'animejs'
export default {
  name: 'App',
  created () {
    this.updateBreadcrumb()
    this.validateLogin()
  },
  mounted () {
    this.showUpdateInfo()
  },
  watch: {
    '$route': ['updateBreadcrumb']
  },
  methods: {
    updateBreadcrumb () {
      console.log(this.$store.state.navPageList)
      this.$store.state.navPageList = this.$route.path.substr(1).split('/').filter(Boolean)
      this.$store.state.navPageList.unshift('Home')
      console.log(this.$store.state.navPageList)
    },
    logout () {
      this.$store.state.authenticate.username = ''
      this.$http.get(this.$store.state.endpoint.api + '/logout').then(response => {
        if (response.body.flag === true) {
          this.$message.success('Logout: Successfully.', 3)
          this.$store.state.authenticate.username = ''
          this.$router.push('/')
        } else {
          this.$message.error('Logout: Failed. Please try again later.', 4)
        }
      }, response => {
        this.$message.error('Logout: Internal Server Error. Please contact administrator.', 4)
      })
    },
    validateLogin () {
      this.$http.get(this.$store.state.endpoint.api + '/isLogin').then(response => {
        if (response.body.flag === true) {
          let serverBackEmail = decodeURIComponent(response.body.email)
          this.$store.state.authenticate.username = serverBackEmail
          if (serverBackEmail !== undefined) {
            this.$LogRocket.identify(serverBackEmail)
          }
        }
      })
    },
    scrollToTop () {
      window.scrollTo(0, 0)
    },
    beforeEnter () {
      window.scrollTo(0, 0)
    },
    showUpdateInfo () {
      console.log('Update confirm status: ' + this.$cookie.get('confirmedUpdate'))
      if (!this.$cookie.get('confirmedUpdate')) {
        this.$modal.show('update-notification-modal')
      }
    },
    animateUpdateNotification () {
      console.log(this.$el.querySelectorAll('.container-modal'))
      anime({
        targets: ['.container-modal h1', '.container-modal strong', '.container-modal p'],
        translateX: [-100, 0],
        opacity: [0, 1],
        filter: ['saturate(0)', 'saturate(1)'],
        delay: (el, i) => { return i * 100 },
        duration: 1200,
        easing: 'easeOutCirc',
        offset: 500
      })
    },
    confirmedWebsiteUpdated () {
      this.$cookie.set('confirmedUpdate', true)
      this.$modal.hide('update-notification-modal')
    },
    resetPasswordAndConfirmWebsiteUpdated () {
      this.$cookie.set('confirmedUpdate', true)
      this.$router.push('/reset-password')
      this.$modal.hide('update-notification-modal')
    }
  },
  computed: {
    thisYear () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style>
  @media only screen and (max-width: 960px) {
    .ant-layout-content {
      padding: 0;
    }
    /* li.ant-menu-submenu {
      background: rgba(77, 136, 63, .8) !important;
      display: block !important;
    }
    li.ant-menu-item {
      background: rgba(119, 174, 60, .8) !important;
      display: block !important;
    } */
    .ant-layout-header {
      height: auto !important;
    }
  }
  @media only screen and (min-width: 960px) {

  }
  .ant-menu-submenu-vertical > .ant-menu-submenu-title .ant-menu-submenu-arrow {
    right: 0;
  }
  .ant-layout-header > .ant-menu-root >  .ant-menu-item-active:not(.disable-activation) {
    background: rgba(255, 255, 255, .5) !important;
  }
  .ant-layout-header > .ant-menu-root >  .ant-menu-submenu-active:not(.disable-activation) {
    background: rgba(255, 255, 255, .5) !important;
    border-bottom: 2px solid rgba(158, 230, 79, 0.85) !important;
  }
  .ant-menu-submenu-content > .ant-menu-item-selected:not(.disable-activation) {
    border-left: 4px solid rgba(158, 230, 79, 0.85) !important;
    border-bottom: 0 !important;
  }
  .ant-layout-header > .ant-menu-root > .ant-menu-item-selected:not(.disable-activation) {
    border-bottom: 2px solid rgba(119, 174, 60, 0.85) !important;
  }
  .ant-menu-dark.ant-menu-horizontal {
    border: 0 !important;
  }
  .ant-menu-item:hover, .ant-menu-item-active, .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open, .ant-menu-submenu-active, .ant-menu-submenu-title:hover {
    color: rgba(255, 255, 255, .95);
  }
  .disable-activation, .disable-activation .ant-menu-item-selected {
    background: none !important;
    cursor: default;
  }
  body {
    background: #96c93d;
    background: -webkit-linear-gradient(195deg, #96c93d, #00b09b);
    background: linear-gradient(195deg, #96c93d, #00b09b);
    color: #212121;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  .header {
    z-index: 10;
    background: rgba(0, 0, 0, .7);
    -webkit-box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
  }
  #app {
    color: #2c3e50;
    transition: all 1s cubic-bezier(0.77, 0.00, 0.175, 1.00);
    background: none;
    min-height: calc(100vh - 128px);
  }
  .slide-fade-enter-active {
    transition: all 175ms cubic-bezier(0.0, 0.0, 0.2, 1);
  }
  .slide-fade-leave-active {
    transition: all 200ms cubic-bezier(0.4, 0.0, 1, 1);
  }
  .slide-fade-enter {
    transform: translateX(50px) scale(1);
    filter: blur(5px);
    opacity: 0;
  }
  .slide-fade-leave-to {
  transform: scale(0.8);
    filter: blur(5px);
    opacity: 0;
  }
  .btn {
    transition: all 225ms ease-in-out;
    transform: none;
    -webkit-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);
  }
  .btn:hover {
    transform: translateY(-2px);
    -webkit-box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3);
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3);
  }
  .btn:active {
    transform: translateY(1px);
    -webkit-box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
  }
  .logo {
    width: 64px;
    height: 48px;
    background: url(https://cdn.universal-village.org/images/logo-new.png) top center no-repeat;
    background-size: auto 100%;
    margin: 8px 0;
    float: left;
  }
  .ant-message {
    margin-top: 64px;
  }
  .v--modal-block-scroll {
    overflow: auto !important;
  }
  .ant-menu-dark .ant-menu-sub {
    background: rgba(23, 41, 19, 0.85) !important;
    color: rgba(255, 255, 255, .85)
  }
  .ant-menu.ant-menu-dark .ant-menu-item-selected, .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
    background: rgba(77, 136, 63, 0.85);
    font-weight: 500;
  }
  .ant-menu-item, .ant-menu-submenu span {
    font-size: 1.1em;
    font-weight: 400;
  }
  /*.ant-menu-item, .ant-menu-submenu span {*/
    /*font-size: 1.2em;*/
    /*font-weight: 400;*/
    /*margin-top: -2px;*/
  /*}*/

  .update-notification .container-modal{padding:2.5em 3em 5em 3em}.update-notification .v--modal-box{display:none;position:fixed;z-index:1;padding-top:75pt;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,255,0,.9)}.update-notification .modal-content{position:relative;background-color:#fefefe;margin:auto;padding:0;border:1px solid #888;width:80%;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);-webkit-animation-name:animatetop;-webkit-animation-duration:.4s;animation-name:animatetop;animation-duration:.4s}@-webkit-keyframes animatetop{0%{top:-300px;opacity:0}to{top:0;opacity:1}}@keyframes animatetop{0%{top:-300px;opacity:0}to{top:0;opacity:1}}.update-notification .modal-header{background-color:#5cb85c;color:#fff}.update-notification .modal-body,.update-notification .modal-footer,.update-notification .modal-header{padding:2px 1pc}.update-notification .modal-footer{background-color:#5cb85c;color:#fff}.update-notification div.panel h1{font-weight:bolder;font-size:2em}.update-notification div.panel p,.update-notification div.panel span{display:block;font-size:1.2em;margin-bottom:10px;margin:.25em 2em 1.5em}

  /*.panel p {*/
    /*margin: 1em 0 0 2em;*/
  /*}*/
  /*.panel {*/
    /*font-weight: 500;*/
    /*font-size: 1.2em;*/
  /*}*/
  /*.v--modal {*/
    /*box-shadow: 0 0 5px 15px #eb4952;*/
    /*border-radius: 1em;*/
    /*background: rgba(255, 255, 255, .9);*/
  /*}*/
  /*.v--modal-overlay {*/
    /*background: rgba(0, 0, 0, .85);*/
  /*}*/
  /*.panel strong {*/
    /*font-weight: 700;*/
    /*font-size: 1.4em;*/
    /*background: #122fa0;*/
    /*color: #fff;*/
    /*border-radius: .3em;*/
    /*padding: 12px 18px;*/
    /*box-shadow: 0 0 0 0px #122fa0;*/
    /*transition: all .75s cubic-bezier(0.19, 1, 0.22, 1);*/
  /*}*/
  /*.panel strong:hover {*/
    /*background: #192d7f;*/
    /*box-shadow: 0 0 0 5px #2f54eb;*/
  /*}*/
  /*.panel strong:focus, .panel strong:active {*/
    /*box-shadow: 0 0 0 2px #2f54eb;*/
  /*}*/

  .v--modal-overlay[data-modal="update-notification-modal"] .panel p {
    margin: 1em 0 0 2em;
  }
  .v--modal-overlay[data-modal="update-notification-modal"] .panel {
    font-weight: 500;
    font-size: 1.2em;
  }
  .v--modal-overlay[data-modal="update-notification-modal"] .v--modal {
    box-shadow: inset 0 0 0px 3px #6e9f39;
    border-radius: 1em;
    background: linear-gradient(195deg, rgba(255, 255, 255, .8), rgba(255, 255, 255, 1));
  }
  .v--modal-overlay[data-modal="update-notification-modal"] {
    background: rgba(0, 0, 0, .85);
  }
  .v--modal-overlay[data-modal="update-notification-modal"] .reset-password-notification {
    font-weight: 700;
    /*background: #1890ff;*/
    /*color: #fff;*/
    border-radius: .3em;
    /*padding: 12px 18px;*/
    box-shadow: 0 0 0 0 #40A9FF;
    transition: all 750ms cubic-bezier(0.19, 1, 0.22, 1);
    transition-delay: 0s !important;
  }
  .v--modal-overlay[data-modal="update-notification-modal"] .reset-password-notification:hover {
    /*background: #40A9FF;*/
    box-shadow: 0 0 0 5px #40A9FF;
  }
  .v--modal-overlay[data-modal="update-notification-modal"] .reset-password-notification:active {
    /*background: #096DD9 !important;*/
    box-shadow: 0 0 0 3px #40A9FF !important;
  }

  .account-link {
    color: #1890ff;
    background-color: transparent;
    border-radius: 1px;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    padding: 3px 6px;
    transition: all .75s cubic-bezier(0.19, 1, 0.22, 1);
  }

  .account-link:hover {
    color: #e7eeff;
    background-color: #1890ff;
    box-shadow: 0 0 0 7px #1890ff;
  }

  .account-link:active {
    color: #dde9ff !important;
    background-color: #1166b4 !important;
    box-shadow: 0 0 0 4px #1476d0 !important;
  }

</style>
