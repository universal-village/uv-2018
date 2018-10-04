<template>
  <a-layout-content class="main-content">
    <a-layout style="padding: 0 24px 24px; background: rgba(255, 255, 255, .75);">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item v-for="navPage in this.$store.state.navPageList" :key="navPage">
          {{ navPage | capitalize }}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content class="donation-page">
        <h1>Donation</h1>
        <a-table :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}" :columns="columns"
                 :dataSource="donationConfiguration" :pagination="false"/>
        chose #{{selectedRowKeys[0]}}, have to pay {{donationConfiguration[selectedRowKeys[0] - 1].price}}
      </a-layout-content>
    </a-layout>
  </a-layout-content>
</template>

<script lang="js">
import ARadioGroup from 'vue-antd-ui/es/radio/Group'
import AFormItem from 'vue-antd-ui/es/form/FormItem'
import AButton from 'vue-antd-ui/es/button/button'

const columns = [{
  title: 'Name',
  dataIndex: 'name',
}, {
  title: 'Benefits',
  dataIndex: 'benefits',
}, {
  title: 'Price (USD, total contribution)',
  dataIndex: 'priceDescription',
}]

const donationConfiguration = [{
  key: '1',
  name: 'Platinum Sponsor',
  benefits: `A lot of description here`,
  priceDescription: '> $ 10,000',
  price: '1000000'
}, {
  key: '2',
  name: 'Gold Sponsor',
  benefits: `A lot of description here`,
  priceDescription: '> $ 6,000',
  price: '600000'
}, {
  key: '3',
  name: 'Silver Sponsor',
  benefits: `A lot of description here`,
  priceDescription: '> $ 3,000',
  price: '300000'
}, {
  key: '4',
  name: 'Conference Exhibitor',
  benefits: `A lot of description here`,
  priceDescription: '= $ 3,000 - Subject to Organizer Approval',
  price: '300000'
}, {
  key: '5',
  name: 'Other',
  benefits: `A lot of description here`,
  priceDescription: '< $ 3,000',
  price: '100000'
}]

export default {
  name: 'donation',
  components: {AButton, AFormItem, ARadioGroup},
  props: [],
  mounted () {
    // this.customAmount = true
  },
  data () {
    return {
      donationConfiguration,
      columns,
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
    }
  },
  methods: {
    donationAmountHandler (event) {
      const presetsToken = 'presets|'
      let clicked = event.target.value
      console.log(event)
      if (clicked.indexOf(presetsToken) === 0) {
        this.customAmount = false
        this.amount = parseInt(event.target.value.slice(presetsToken.length))
      } else if (clicked === 'custom') {
        this.amount = null
        this.customAmount = true
      } else {
        this.$notification['error']({
          message: 'Unable to parse your option',
          description: 'Website error occurred. Please contact support at ' + this.$store.state.support.email
        })
      }
    },
    submitHandler (event) {
      console.log(this.form.getFieldsValue())
    },
    customAmountHandler (event) {
      console.log(event)
    },
    onSelectChange (selectedRowKey) {
      console.log('selectedRowKey: ', selectedRowKey, '|', selectedRowKey[selectedRowKey.length - 1])
      let tempList = []
      tempList[0] = selectedRowKey[selectedRowKey.length - 1]
      this.selectedRowKeys = tempList
    }
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
    color: green;
  }

  h4 {
    color: green;
    font-size: 16px;
  }

  li {
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

  @media only screen and (min-width: 960px) {
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

  .monospace {
    font-family: Consolas, Menlo, Courier, monospace;
  }
</style>

<style>
  .ant-table-selection {
    display: none;
  }
</style>
