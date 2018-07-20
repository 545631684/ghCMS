<template>
  <div class="head">
    <p><img src="../assets/img/gh_06.png" alt="" />你好，XXX,欢迎登陆挂号后台！</p>
    <h1>项目挂号后台系统</h1>
    <a href="">点击退出</a>
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
.head h1 {width: 46%; font-size: 30px; padding-left: 10%; color: #004698;    margin-top: 2%;}
.head a { width: 8%; text-align: center; color: #ffffff; border-radius: 5px; background: #003886;    margin-top: 3%; padding: .5%;font-size: 14px; text-decoration: none;}
</style>
