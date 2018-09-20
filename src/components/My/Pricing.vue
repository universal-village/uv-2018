<template>
  <a-layout-content class="main-content">
    <a-layout style="padding: 0 24px 24px; background: rgba(255, 255, 255, .75);">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item v-for="navPage in this.$store.state.navPageList" :key="navPage">
          {{ navPage | capitalize }}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content>
        <a-row :gutter="24">
          <a-col :lg="8" :md="12" style="margin-bottom: 10px; height: 200px;">
            <a-card style="width: 100%;">
              <a-icon type="calendar" style="font-size: 2em;"/>
              <h2>Full Registration</h2>
              <a-table :columns="columns" :dataSource="data" bordered style="margin-top: 1em;">
                <span slot="price" slot-scope="text"><code>{{text}}</code></span>
                <span slot="description" slot-scope="text">{{text}}</span>
              </a-table>
            </a-card>
          </a-col>
          <a-col :lg="8" :md="12" style="margin-bottom: 10px; height: 180px;">
            <a-card style="width: 100%;">
              <a-icon type="usergroup-add" style="font-size: 2em;"/>
              <h2>UV Day</h2>
              <br>
              <span style="display: block; margin-left: 3em; margin-top: 10px;">$50.00 (included in Full Registration)</span>
            </a-card>
          </a-col>
          <a-col :lg="8" :md="12" style="margin-bottom: 10px; height: 180px;">
            <a-card style="width: 100%;">
              <a-icon type="bulb" style="font-size: 2em;"/>
              <h2>UV Workshop</h2>
              <br>
              <span style="display: block; margin-left: 3em; margin-top: 10px;">$50.00 (included in Full Registration)</span>
            </a-card>
          </a-col>
          <a-col :lg="8" :md="12" style="margin-bottom: 10px; height: 180px;">
            <a-card style="width: 100%;">
              <a-icon type="book" style="font-size: 2em;"/>
              <h2>Paper Fee</h2>
              <br>
              <span style="display: block; margin-left: 3em; margin-top: 10px;">$150.00 each</span>
            </a-card>
          </a-col>
          <a-col :lg="8" :md="12" style="margin-bottom: 10px; height: 180px;">
            <a-card style="width: 100%;">
              <a-icon type="file" style="font-size: 2em;"/>
              <h2>Abstract Only Paper</h2>
              <br>
              <span style="display: block; margin-left: 3em; margin-top: 10px;">$50.00 each</span>
            </a-card>
          </a-col>
        </a-row>
        <span style="font-weight: bold; font-size: 1.5em;">* Students, seniors and IEEE members are eligible for registration discount.</span><br><br>
        <a-button type="primary" @click="$router.push('/conference-registration')">
          <a-icon type="left" />Conference registration
        </a-button>
      </a-layout-content>
    </a-layout>
  </a-layout-content>
</template>

<script lang="js">
const columns = [{
  title: 'Price',
  dataIndex: 'price',
  key: 'price',
}, {
  title: 'Date',
  dataIndex: 'description',
  key: 'description',
}]

const data = [{
  key: '1',
  price: '$345.00',
  description: 'Early Registration (before Oct. 1)'
}, {
  key: '2',
  price: '$445.00',
  description: 'Late Registration (after Oct. 1)'
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
