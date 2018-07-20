<template>
  <div class="landBody" :style="{width: width_screen + 'px', height: height_screen + 'px'}">
    <div class="landDiv">
      <div>
        <p><img src="../assets/img/gh_03.png" alt=""/><span>用户名：</span><input v-model="username" type="text" value="" placeholder="请输入您的用户名"/></p>
        <p><img src="../assets/img/gh_04.png" alt=""/><span>密   码：</span><input v-model="pwd" type="password" value="" placeholder="请输入您的密码" @keyup.enter="tijiao"/></p>
        <img class="landing" src="../assets/img/gh_05.png" alt="" @click="tijiao"/>
      </div>
    </div>
  </div>
</template>

<script>
import { loginLand } from '../assets/js/api'
export default{
  name: 'Lapp',
  data () {
    return {
      username: '',
      pwd: '',
      width_screen: 0,
      height_screen: 0
    }
  },
  methods: {
    tijiao () {
      if (this.username.length === 0) {
        this.$alert('请输入用户名', '警告', {confirmButtonText: '确定'})
      } else if (this.pwd.length === 0) {
        this.$alert('请输入密码', '警告', {confirmButtonText: '确定'})
      } else {
        loginLand(this)
      }
    }
  },
  created () {
    this.width_screen = window.screen.width
    this.height_screen = window.screen.height
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body { margin: 0; padding: 0;}
.landBody {
  width: 100%;
  max-width: 100%;
  height: 100%;
  background: url(../assets/img/gh_01.jpg) repeat-x;
}
.landDiv {
  position: absolute;
  top: 35%;
  width: 100%;
  max-width: 100%;
  }
.landDiv div {
  width: 500px;
  height: 330px;
  margin: auto;
  background: url(../assets/img/gh_02.png) no-repeat;
  background-size: 100%;
  padding-top: 90px;
}
.landDiv div p {
  padding: 10px 75px 0;
}
.landDiv div p:after {
  content: "." ;
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.landDiv div p img {
  display: block;
  float: left;
  width: 28px;
  height: 28px;
  margin: 6px auto;
}
.landDiv div p span {
  display: block;
  float: left;
  width: 80px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
}
.landDiv div p input {
  display: block;
  float: left;
  width: 225px;
  height: 35px;
  line-height: 35px;
  border: 1px solid #cfcfcf;
  border-radius: 5px;
  text-indent: 1em;
}
.landDiv div .landing {
  display: block;
  margin: auto;
  width: 130px;
  height: auto;
  padding: 4px 0;
}
</style>
