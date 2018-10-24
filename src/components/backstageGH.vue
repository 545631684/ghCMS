<template>
  <el-container>
    <el-aside style="height:100vh">
      <Left :mkall="mkall"></Left>
    </el-aside>
    <el-container>
	    <el-header style="height: 85px;">
	      <Headers></Headers>
	    </el-header>
	    <el-main>
	    	<!-- 挂号信息 -->
	      <Middle v-show="mkall.gh"></Middle>
	    	<!-- 用户管理 -->
	      <Yonghm v-show="mkall.yh"></Yonghm>
	    	<!-- 项目管理 -->
	      <Project v-show="mkall.xm"></Project>
	    	<!-- 代码生成 -->
	      <Biaodan v-show="mkall.dm"></Biaodan>
	    </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Headers from '../components/headers'
import Left from '../components/left'
import Middle from '../components/middle'
import Project from '../components/project'
import Biaodan from '../components/biaodan'
import Yonghm from '../components/yonghm'
export default{
  name: 'backstage',
  data () {
    return {
      mkall: {
      	gh: true,
      	yh: false,
      	xm: false,
      	dm: false
      }
    }
  },
  methods: {
  },
  created () {
  },
  components: {
    Headers,
    Left,
    Middle,
    Project,
    Biaodan,
    Yonghm
  }
}
</script>

<style>
  .yincang{ display: none;}
</style>
