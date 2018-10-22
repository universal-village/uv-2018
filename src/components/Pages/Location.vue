<template lang="html">

  <a-layout-content class="main-content">
    <a-layout style="padding: 0 24px 24px; background: rgba(255, 255, 255, .75);">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item v-for="navPage in this.$store.state.navPageList" :key="navPage">
          {{ navPage | capitalize }}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content class="page-content">
        <h1>MIT Kresge</h1>
        <img src="https://cdn.universal-village.org/images/MIT-Kresge-2.jpg">
        <!-- <img src="https://cdn.universal-village.org/images/MIT Kresge-1.jpeg">
        <img src="https://cdn.universal-village.org/images/MIT-Kresge-3.jpg"> -->
        <img src="https://cdn.universal-village.org/images/MIT-Kresge-4.jpg">
        <h1>MAP</h1>
        <img src="https://cdn.universal-village.org/images/Map.jpg">
      </a-layout-content>
    </a-layout>
  </a-layout-content>

</template>

<script lang="js">
export default {
  name: 'location',
  props: [],
  mounted () {

  },
  data () {
    return {

    }
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style scoped lang="css">
  img {
    width: 90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  h1 {
    color: green;
  }
  h2 {
    color: green;
    padding-top: 5px;
  }
  h3 {
    color:green;
  }
  h4 {
    color: green;
    font-size: 16px;
  }
  li{
    font-size: 16px;
  }
  a:link {
    text-decoration: underline;
  }

  .ant-layout-content p {
    font-size: 1.2em;
    font-weight: bold;
    font-family: "Times New Roman", Times, serif;
  }

  @media only screen and (max-width: 960px) {
      .ant-layout-content {
      padding: 0;
    }
  }
  @media only screen and (min-width: 960px){
      .ant-layout-content.main-content {
        padding: 0 10%;
    }
      .ant-layout {
        padding: 0 24px 24px;
    }
      /* .ant-collapse-item  {
        font-size: 1.5em !important;
        font-weight: bolder;
      } */
  }
</style>
