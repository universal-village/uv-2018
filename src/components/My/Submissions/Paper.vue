<template>
  <div>
    <h1>My Submissions</h1>
    <a-table :columns="columns" :dataSource="paperList">
      <a slot="titles" slot-scope="text" href="#" @click="detailEntry(record.id)">
        {{ text }}
      </a>
      <span slot="authors" slot-scope="text">
        {{ text.join(', ') }}
      </span>
      <span slot="keywords" slot-scope="text">
        {{ text.join(', ') }}
      </span>
      <span slot="action" slot-scope="text, record">
        <a href="#" @click="editEntry(record.id)">Edit</a>
        <a-divider type="vertical" />
        <a-popconfirm title="Are you sure to delete this paper submission?" @confirm="deleteEntry(record.id)" @cancel="cancel" okText="Delete" cancelText="No">
          <a href="#">Delete</a>
        </a-popconfirm>
      </span>
    </a-table>
  </div>
</template>

<script>
const columns = [{
  dataIndex: 'paperid',
  key: 'paperid',
  title: 'ID'
}, {
  title: 'Title',
  dataIndex: 'title',
  key: 'title',
  scopedSlots: { customRender: 'titles' }
}, {
  dataIndex: 'abstract',
  key: 'abstract',
  title: 'Abstract'
}, {
  dataIndex: 'categoryid',
  key: 'categoryid',
  title: 'Category'
}, {
  title: 'Authors',
  dataIndex: 'authors',
  key: 'authors',
  scopedSlots: { customRender: 'authors' }
}, {
  title: 'Keywords',
  dataIndex: 'keyword',
  key: 'keyword',
  scopedSlots: { customRender: 'keywords' }
}, {
  title: 'Action',
  key: 'action',
  scopedSlots: { customRender: 'action' }
}]

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
}]

export default {
  name: 'Papers',
  data () {
    return {
      columns,
      data,
      modalVisible: false,
      paperList: [{
        paperid: 1,
        title: 'Something Interesting',
        abstract: 'Something',
        categoryid: 122,
        authors: ['Alpha', 'Ben', 'Charlie'],
        keyword: ['AI', 'CV', 'Computer Vision']
      }]
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$http.get(this.$store.state.endpoint + '/myPaper').then(response => {
        console.log(response.body)
        try {
          //this.paperList = response.body.data
        } catch (e) {
          this.$message.error('Can\'t fetch My Paper Submissions. Please try again later.', 5)
        }
      }, response => {
        this.$message.error('Can\'t fetch My Paper Submissions. Please try again later.', 5)
      })
    }
  }
}
</script>

<style scoped>

</style>
