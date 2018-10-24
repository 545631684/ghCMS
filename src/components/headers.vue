<template>
  <div class="head">
    <p><img src="../assets/img/gh_06.png" alt="" />你好，XXX,欢迎登陆挂号后台！</p>
    <h1>项目挂号后台系统</h1>
    <el-button class="anniu" type="primary" @click="">点击退出</el-button>
  </div>
</template>

<script>
export default{
  name: 'headers',
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
  }
}
</script>

<style scoped>
.head {border-bottom: 1px solid #b6b6b6; padding-bottom: 1%;height: 100%;}
.head p,.head h1,.head a {display: block; float: left; margin: 0;}
.head p {width: 23%;  font-size: 12px;color: #b10202;margin-top: 3.9%;}
.head p img{width: 18px;    margin-right: 2%;}
.head h1 {width: 46%; font-size: 30px; padding-left: 10%; color: #3a8ee6;    margin-top: 2%;}
.head .anniu { width: 8%;  margin-top: 3%; padding: .5%;}
</style>
