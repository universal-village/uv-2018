<template>
  <div>
    <h1>My Submissions</h1>
    <a-table :columns="columns" :dataSource="data">
      <a slot="titles" slot-scope="text" href="#" @click="detailEntry(record.id)">{{ text }}</a>
      <span slot="keywords" slot-scope="text">
        {{ text.join(' | ') }}
      </span>
      <span slot="action" slot-scope="text, record" v-if="actionenabled">
        <a href="#" @click="editEntry(record.id)">Edit</a>
        <a-divider type="vertical" />
        <a href="#" @click="deleteEntry(record.id)">Delete</a>
      </span>
    </a-table>
  </div>
</template>

<script>
const columns = [{
  dataIndex: 'author',
  key: 'author',
  title: 'Author'
}, {
  title: 'Status',
  dataIndex: 'status',
  key: 'status'
}, {
  title: 'Title',
  dataIndex: 'title',
  key: 'title',
  scopedSlots: { customRender: 'titles' }
}, {
  title: 'Keywords',
  dataIndex: 'keywords',
  key: 'keywords',
  scopedSlots: { customRender: 'keywords' }
}, {
  title: 'Action',
  key: 'action',
  scopedSlots: { customRender: 'action' },
}];

const data = [{
  id: '1',
  author: 'John Blue',
  keywords: ['CNN', 'Tensorflow'],
  title: 'Something Interesting',
  status: 'Approved'
}, {
  id: '2',
  author: 'Peter Green',
  keywords: ['AI', 'MATLAB'],
  title: 'Something more Interesting',
  status: 'Not Approved'
}, {
  id: '3',
  author: 'Alex Yellow',
  keywords: ['CV', 'Python'],
  title: 'Something really Interesting',
  status: 'Pending'
}];

export default {
  name: 'Papers',
  data () {
    return {
      columns,
      data,
      modalVisible: false,
      actionenabled: false
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$http.get(this.$store.state.endpoint + '/login', {})
    }
  }
}
</script>

<style scoped>

</style>
