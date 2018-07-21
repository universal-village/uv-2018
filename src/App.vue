<template>
  <a-layout id="app">
    <a-back-top />
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
          <a-menu-item key="program:forum">
            <router-link to="/forums">Forums</router-link>
          </a-menu-item>
          <a-menu-item key="program:workshops">
            <router-link to="/workshops">Workshops</router-link>
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
          <a-menu-item key="attending:registration">
            <router-link to="/pages/registration">Registration</router-link>
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
              <router-link to="/archive/uv-2013">UV 2013</router-link>
            </a-menu-item>
            <a-menu-item key="about-us:previous-conferences:uv-2014">
              <router-link to="/archive/uv-2014">UV 2014</router-link>
            </a-menu-item>
            <a-menu-item key="about-us:previous-conferences:uv-2016">
              <router-link to="/archive/uv-2016">UV 2016</router-link>
            </a-menu-item>
          </a-sub-menu>
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
      Copyright &copy; 2012-{{ thisYear }}. The International Conference on Universal Village. All Rights Reserved.
    </a-layout-footer>
  </a-layout>
</template>

<script>
export default {
  name: 'App',
  created () {
    this.updateBreadcrumb()
    this.validateLogin()
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
          this.$store.state.authenticate.username = decodeURIComponent(response.body.email)
        }
      })
    },
    scrollToTop () {
      window.scrollTo(0, 0)
    },
    beforeEnter () {
      window.scrollTo(0, 0)
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
  .ant-menu-submenu-vertical > .ant-menu-submenu-title .ant-menu-submenu-arrow {
    right: 0;
  }
  .ant-layout-header > .ant-menu-root >  .ant-menu-item-active:not(.disable-activation) {
    background: rgba(255, 255, 255, .5) !important;
  }
  .ant-layout-header > .ant-menu-root >  .ant-menu-submenu-active:not(.disable-activation) {
    background: rgba(255, 255, 255, .5) !important;
    border-bottom: 2px solid #1890ff !important;
  }
  .ant-menu-submenu-content > .ant-menu-item-selected:not(.disable-activation) {
    border-left: 4px solid #6fbbff !important;
    border-bottom: 0 !important;
  }
  .ant-layout-header > .ant-menu-root > .ant-menu-item-selected:not(.disable-activation) {
    border-bottom: 2px solid #145baa !important;
  }
  .ant-menu-dark.ant-menu-horizontal {
    border: 0 !important;
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
</style>
