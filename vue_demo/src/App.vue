<template>
  <div>
    <!--    <header class="site-header jumbotron">-->
    <!--      <div class="container">-->
    <!--        <div class="row">-->
    <!--          <div class="col-xs-12">-->
    <!--            <h1>请发表对Vue的评论</h1>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </header>-->
    <!--    <div class="container">-->
    <!--      <Add :addComment="addComment"/>-->
    <!--      <List :comments="comments" :deleteComment="deleteComment"/>-->
    <!--    </div>-->
<!--        <button @click="post">PDF测试</button>-->
<!--    <button @click="postPDF">PDF签验测试</button>-->
<!--    <button @click="check">点击</button>-->
    <iframe :src=webUrl width="100%" height="700"></iframe>
  </div>
</template>

<script>
import Add from './components/Add'
import List from './components/List'
export default {
  name: 'App',
  data () {
    return {
      comments: [
        {
          name: 'bob',
          content: 'hi vue'
        },
        {
          name: 'bob2',
          content: 'hi vue'
        },
        {
          name: 'bob3',
          content: 'hi vue'
        }
      ],
      // // pdfUrl: 'http://image.cache.timepack.cn/nodejs.pdf',
      // currentPage: 0, // pdf文件页码
      // pageCount: 0, // pdf文件总页数
      // fileType: 'pdf', // 文件类型
      // // src: 'http://image.cache.timepack.cn/nodejs.pdf' // pdf文件地址
      pdfUrl: '/static/Mapper.pdf',
      webUrl: ''
    }
  },
  created () {
    // console.log(1111)
    // this.webUrl = '/static/pdf/web/viewer.html?file=' + encodeURIComponent('/api/111.pdf')
    // this.webUrl = '/static/pdf/web/viewer.html?file=' + encodeURIComponent('http://119.3.244.32:8001/gpx-bid-file/150601/gpx-tender/2019/11/3/demo.pdf')
    this.webUrl = '/static/pdf/web/viewer.html?file=' + 'http://47.103.13.140:8087/111.pdf'
    // this.webUrl = '/static/pdf/web/viewer.html?file=' + 'http://47.103.13.140:8085/download'
    // this.webUrl = '/static/pdf/web/viewer.html?file=' + 'http://119.3.244.32:8001/gpx-bid-file/150601/gpx-tender/2019/11/3/demo.pdf'
  },
  components: {List, Add},
  methods: {
    check () {
      // window.open('/static/pdf/web/viewer.html?file=https://bosssoft-bes.oss-cn-hangzhou.aliyuncs.com/Mapper.pdf')
      // window.open('/static/pdf/web/viewer.html?file=http://172.20.0.248:8083/demo.pdf')
    },
    /**
     * pdf签验
     */
    post () {
      console.log('adara')
      // this.$http({
      //   method: 'get',
      //   url: '/api/download',
      //   responseType: 'blob'
      // }).then(result => {
      //   console.log(result)
      // })
      this.$http.post('/postPdf',
        JSON.stringify({
          'startPage': 4,
          'endPage': 8
        }),
        {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
          // responseType: 'blob'
        }
      )
        .then(result => {
          // window.open('/static/pdf/web/viewer.html?file=' + result)
          console.log(result)
        })
    },
    /**
     * pdf签章验证
     */
    postPDF () {
      console.log('PDF签验')
      this.$http.post('/api/verification',
        JSON.stringify({
          'fileInputPath': 'C:/Netty.pdf',
          'filePassword': ''
        }),
        {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).then(result => {
        console.log(result.data)
      })
    },
    addComment (comment) {
      this.comments.unshift(comment)
    },
    deleteComment (index) {
      this.comments.splice(index, 1)
    }
  }

}
</script>

<style scoped>

</style>
