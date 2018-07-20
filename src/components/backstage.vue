<template>
  <el-container>
    <el-aside :style="{height: height_screen+'px'}">
      <Left></Left>
    </el-aside>
    <el-container>
    <el-header>
      <Headers></Headers>
    </el-header>
    <el-main>
      <Middle></Middle>
      <Project class="yincang"></Project>
      <Biaodan class="yincang"></Biaodan>
      <Yonghm class="yincang"></Yonghm>
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
      height_screen: 0
    }
  },
  methods: {
    tijiao () {
    }
  },
  created () {
    this.height_screen = window.screen.height
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
