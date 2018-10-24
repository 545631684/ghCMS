<template>
  <div class="yhm">
    <div class="title">
      <h1>*用户管理*</h1>
      <el-button class="anniu" type="primary" @click="createHtml()">创建用户</el-button>
    </div>
    <el-table
    	highlight-current-row
	    :data="tableData"
	    height="250"
	    style="width: 100%;">
	    <el-table-column
	    	align="center"
	    	type="index"
	      label="序号"
	      width="80">
	    </el-table-column>
	    <el-table-column
	    	align="center"
	    	width="250"
	      prop="userName"
	      label="用户名">
	    </el-table-column>
	    <el-table-column
	    	align="center"
	    	width="250"
	      prop="itemName"
	      label="项目名称">
	    </el-table-column>
	    <el-table-column
	    	align="center"
	    	width="200"
	      prop="authority"
	      label="权限">
	    </el-table-column>
	    <el-table-column
	    	align="center"
	      label="操作">
	      <template slot-scope="scope">
	      	<el-switch
	      		style="margin-right: 10px;"
            v-model="value1"
            active-text="启用"
            inactive-text="禁用"
            active-color="#13ce66"
            inactive-color="#13ce66">
          </el-switch>
      		<el-button size="mini" plain @click="">修改密码</el-button>
      		<el-button size="mini" plain @click="">修改项目绑定</el-button>
      		<el-button size="mini" plain @click="">权限修改</el-button>
      		<el-button size="mini" type="danger" plain @click="">删除用户</el-button>
	      </template>
	    </el-table-column>
	  </el-table>
    <!--<table>
      <tr>
        <th class="table_th">序号</th>
        <th class="table_th01">用户名</th>
        <th class="table_th02">项目名称</th>
        <th class="table_th03">权限</th>
        <th class="table_th04">登陆状态</th>
        <th class="table_th05">操作</th>
      </tr>
      <tr>
        <td>1</td>
        <td>545631684@qq.com</td>
        <td>大同</td>
        <td>超级管理员</td>
        <td class="pro_td1">
          <el-switch
            v-model="value2"
            active-text="启用"
            inactive-text="禁用"
            active-color="#13ce66"
            inactive-color="#13ce66">
          </el-switch>
        </td>
        <td class="pro_td">
          <a href="" class="a2">修改密码</a>
          <a href="" class="a3">删除用户</a>
          <a href="" class="a4">修改项目绑定</a>
          <a href="" class="a5">权限的升降</a>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>545631684@qq.com</td>
        <td>大同/大同/大同/大同</td>
        <td>普通管理员</td>
        <td class="pro_td1">
          <el-switch
            v-model="value1"
            active-text="启用"
            inactive-text="禁用"
            active-color="#13ce66"
            inactive-color="#13ce66">
          </el-switch>
        </td>
        <td class="pro_td">
          <a href="" class="a2">修改密码</a>
        </td>
      </tr>
    </table>-->
  </div>
</template>

<script>
export default{
  name: 'yonghm',
  data () {
    return {
      value1: true,
      value2: true,
      tableData: [
      	{
      		id: '1',
      		userName: 'zyj',
      		itemName: '大同',
      		authority: '普通用户'
      	},
      	{
      		id: '2',
      		userName: 'zyh',
      		itemName: '上海',
      		authority: '超级管理员'
      	},
      ]
    }
  },
  methods: {
  },
  created () {
  }
}
</script>

<style scoped>
.yhm {}
.yhm .title { width: 100%;display: inline-block;}
.yhm .title h1 {color: #6e6e6e; font-size: 28px; font-weight: normal; width: 200px; float: left;}
.yhm .title .anniu { float: left; margin-top: 27px;}
.table_th { width: 5%;}
.table_th01 { width: 15%;}
.table_th02 {  width: 15%;}
.table_th03 { width: 10%;}
.table_th04 { width: 15%;}
.table_th05 { width: 40%;}
table,th,td {text-align: center; color: #9a9a9a;}
th,td { padding: 1% 1%;}
table {width: 100%;}
.pro_td a.a1 {margin-right: 3%;}
.pro_td a.a2,.pro_td a.a3,.pro_td a.a4,.pro_td a.a5 { padding: 1% 3%; background: #d7eaff; border-radius: 5px; border:1px solid #6d6d6d; color: #6d6d6d; text-align: center;text-decoration: none; font-size: 13px;}
.pro_td1 { color: #1fdd67;}
</style>
