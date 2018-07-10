<template>
  <el-container class="landBody" :style="{width: webWidth + 'px', height: webHeight + 'px'}">
      <div class="landDiv">
        <div>
          <p><img src="../assets/img/gh_03.png" alt="" /><span>用户名：</span><input type="" name="username" id="" value="" placeholder="请输入您的用户名" /></p>
          <p><img src="../assets/img/gh_04.png" alt="" /><span>密   码：</span><input type="" name="pwd" id="" value="" placeholder="请输入您的密码" /></p>
          <img class="landing" src="../assets/img/gh_05.png" alt=""/>
        </div>
      </div>
  </el-container>
</template>

<script>
export default {
  name: 'land',
  data () {
    return {
      webWidth: 0,
      webHeight: 0
    }
  },
  methods: {
  },
  created () {
    this.webWidth = window.screen.availWidth
    this.webHeight = window.screen.availHeight
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .landBody{ width: 100%; max-width: 100%; height: 100%; background: url(../assets/img/gh_01.jpg) repeat-x;}
  .landDiv{position: absolute; top: 35%;width: 100%; max-width: 100%;}
  .landDiv div{width: 500px; height:330px; margin: auto; background: url(../assets/img/gh_02.png) no-repeat; background-size: 100%; padding-top: 90px;}
  .landDiv div p{padding:10px 75px 0;}
  .landDiv div p:after {content: ".";display: block;height: 0;clear: both;visibility: hidden;}
  .landDiv div p img{display: block; float: left; width: 28px; height: 28px; margin: 6px auto;}
  .landDiv div p span{display: block; float: left;width: 80px; height: 35px; line-height: 35px; text-align: center; font-weight: bold; font-size: 16px;}
  .landDiv div p input{display: block; float: left;width: 225px; height: 35px;line-height: 35px; border: 1px solid #cfcfcf; border-radius: 5px; text-indent: 1em;}
  .landDiv div .landing{display: block; margin: auto; width: 130px; height: auto;    padding: 10px 0;}
</style>
