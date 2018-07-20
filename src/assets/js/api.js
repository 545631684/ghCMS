import Axios from 'axios'
import qs from 'qs'

// login.vue 接口  登陆验证
export function loginLand (_this) {
  Axios.post(_this.URLS + '/index.php/Home/Login/login', qs.stringify({userName: _this.username, password: _this.pwd}))
    .then(function (response) {
      if (response.data.msg === '0') {
        // console.log(response.data)
        _this.$router.push('/backstage') // 跳转后台首页
      } else if (response.data.msg === '1') {
        _this.$alert('用户名或密码错误', '警告', {confirmButtonText: '确定'})
      }
    })
    .catch(function (error) {
      console.log(error)
    })
}

// backstageUploadImg.vue 接口 标题判断是否重复
export function queryTitle2 (title, mid, _this) {
  Axios.get(_this.URLS + '/index.php/Home/Index/titlerepeats?title=' + title + '&mId=' + mid)
    .then(function (response) {
      // console.log(response.data)
      if (response.data.msg === '0') {
        // 没有重复的
        _this.titleDiv = true
        _this.titleCf = true
      } else if (response.data.msg === '1') {
        // 有重复的
        _this.titleDiv = true
        _this.titleCf = false
      } else if (response.data.msg === '2') {
        // 没有重复的
        _this.titleDiv = true
        _this.titleCf = true
      }
    })
    .catch(function (error) {
      console.log(error)
    })
}
