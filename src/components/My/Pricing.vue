<template>
  <a-layout-content class="main-content">
    <a-layout style="padding: 0 24px 24px; background: rgba(255, 255, 255, .75);">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item v-for="navPage in this.$store.state.navPageList" :key="navPage">
          {{ navPage | capitalize }}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content>
        <a-row :gutter="24" style="margin-bottom: 24px;">
          <a-col :lg="24" :md="24">
            <a-card style="width: 100%;">
              <a-icon type="calendar" style="font-size: 2em;"/>
              <h2>Full Registration</h2>
              <br>
              <a-table :columns="columns" :dataSource="data" bordered style="margin-top: 1em;" :pagination="false">
              </a-table>
            </a-card>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :lg="6" :md="12" style="margin-bottom: 10px; height: 180px;">
            <a-card style="width: 100%;">
              <a-icon type="usergroup-add" style="font-size: 2em;"/>
              <h2>UV Day</h2>
              <br>
              <span style="display: block; margin-left: 3em; margin-top: 10px;">Free Registration (included in Full Registration)</span>
            </a-card>
          </a-col>
          <a-col :lg="6" :md="12" style="margin-bottom: 10px; height: 180px;">
            <a-card style="width: 100%;">
              <a-icon type="bulb" style="font-size: 2em;"/>
              <h2>UV Workshop</h2>
              <br>
              <span style="display: block; margin-left: 3em; margin-top: 10px;">$50.00 (included in Full Registration)</span>
            </a-card>
          </a-col>
          <a-col :lg="6" :md="12" style="margin-bottom: 10px; height: 180px;">
            <a-card style="width: 100%;">
              <a-icon type="book" style="font-size: 2em;"/>
              <h2>Fee per extra Paper</h2>
              <br>
              <span style="display: block; margin-left: 3em; margin-top: 10px;">$150.00 each additional</span>
            </a-card>
          </a-col>
          <a-col :lg="6" :md="12" style="margin-bottom: 10px; height: 180px;">
            <a-card style="width: 100%;">
              <a-icon type="file" style="font-size: 2em;"/>
              <h2>Fee per extra Abstract Only Paper</h2>
              <br>
              <span style="display: block; margin-left: 3em; margin-top: 10px;">$50.00 each additional</span>
            </a-card>
          </a-col>
        </a-row>
        <span style="font-weight: bold; font-size: 1.5em;">* Students, seniors and IEEE members are eligible for registration discount.</span><br><br>
        <a-button type="primary" @click="$router.push('/conference-registration')">
          <a-icon type="left" /> Conference registration
        </a-button>
      </a-layout-content>
    </a-layout>
  </a-layout-content>
</template>

<script lang="js">
const columns = [{
  title: 'Type',
  dataIndex: 'type',
  key: 'type',
}, {
  title: 'Before Oct.7.2018',
  children: [{
    title: 'Attendee',
    dataIndex: 'normalAttendee',
    key: 'normalAttendee'
  }, {
    title: 'Presenter (Abstract)',
    dataIndex: 'normalPresenter',
    key: 'normalPresenter'
  }, {
    title: 'Author w. One Paper',
    dataIndex: 'normalAuthorWithPaper',
    key: 'normalAuthorWithPaper'
  }]
}, {
  title: 'After Oct.7.2018',
  children: [{
    title: 'Attendee',
    dataIndex: 'lateAttendee',
    key: 'lateAttendee'
  }, {
    title: 'Presenter (Abstract)',
    dataIndex: 'latePresenter',
    key: 'latePresenter'
  }, {
    title: 'Author w. One Paper',
    dataIndex: 'lateAuthorWithPaper',
    key: 'lateAuthorWithPaper'
  }]
}]

const data = [{
  key: '1',
  type: 'Student',
  normalAttendee: '$ 95.00',
  normalPresenter: '$ 145.00',
  normalAuthorWithPaper: '$ 245.00',
  lateAttendee: '$ 195.00',
  latePresenter: '$ 245.00',
  lateAuthorWithPaper: '$ 345.00'
}, {
  key: '2',
  type: 'IEEE / Senior',
  normalAttendee: '$ 245.00',
  normalPresenter: '$ 295.00',
  normalAuthorWithPaper: '$ 395.00',
  lateAttendee: '$ 345.00',
  latePresenter: '$ 395.00',
  lateAuthorWithPaper: '$ 495.00'
}, {
  key: '3',
  type: 'Professional',
  normalAttendee: '$ 345.00',
  normalPresenter: '$ 395.00',
  normalAuthorWithPaper: '$ 495.00',
  lateAttendee: '$ 445.00',
  latePresenter: '$ 495.00',
  lateAuthorWithPaper: '$ 595.00'
}]

export default {
  name: 'pricing',
  props: [],
  mounted () {

  },
  data () {
    return {
      columns,
      data
    }
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style scoped>
  h1 {
    color: green;
  }
  h2 {
    display: inline;
    color: green;
    padding-top: 5px;
    margin-left: 10px;
    font-family: Verdana;
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
      padding: 0 20px;
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
