<template>
  <div class="projdct">
    <div class="title">
      <h1>*项目管理*</h1>
      <a href=""><img src="../assets/img/gh_20.png"/></a>
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
	      prop="itemName"
	      label="项目名称">
	    </el-table-column>
	    <el-table-column
	    	align="center"
	    	width="200"
	      prop="itemState"
	      label="项目状态">
	      <template slot-scope="scope">
	      	<el-switch
            v-model="value1"
            active-color="#16d068"
            inactive-color="#fd4949">
          </el-switch>
	      </template>
	    </el-table-column>
	    <el-table-column
	    	align="center"
	    	width="300"
	      prop="itemMailbox"
	      label="可接收邮箱">
	    </el-table-column>
	    <el-table-column
	    	align="center"
	      label="操作">
	      <template slot-scope="scope">
      		<el-button size="mini" plain @click="">修改名称</el-button>
      		<el-button size="mini" plain @click="">修改邮箱</el-button>
      		<el-button size="mini" type="danger" plain @click="">删除项目</el-button>
	      </template>
	    </el-table-column>
	  </el-table>
  </div>
</template>

<script>
export default{
  name: 'project',
  data () {
    return {
      value1: true,
      value2: true,
      tableData: [
      	{
      		id: '1',
      		itemName: '大同',
      		itemState: true,
      		itemMailbox: '545631684@qq.com'
      	},
      	{
      		id: '1',
      		itemName: '大同',
      		itemState: true,
      		itemMailbox: '545631684@qq.com'
      	},
      	{
      		id: '1',
      		itemName: '大同',
      		itemState: true,
      		itemMailbox: '545631684@qq.com'
      	}
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
.projdct {}
.projdct .title { width: 100%;display: inline-block;}
.projdct .title h1 {color: #6e6e6e; font-size: 28px; font-weight: normal; width: 200px; float: left;}
.projdct .title a { width: 8%; float: left; margin-top: 32px;}
.projdct .title a img { width: 100%;}
.table_th { width: 5%;}
.table_th01 { width: 10%;}
.table_th02 {  width: 17%;}
.table_th03 { width: 23%;}
.table_th04 { width: 45%;}
table,th,td {text-align: center;}
th,td { padding: 1% 0;}
table {width: 100%;}
.pro_td a.a1 {margin-right: 3%;}
.pro_td a.a2,.pro_td a.a3,.pro_td a.a4 { padding: 1% 3%; background: #d7eaff; border-radius: 5px; border:1px solid #6d6d6d; color: #6d6d6d; text-align: center;text-decoration: none;}
.pro_td1 { color: #1fdd67;}
</style>
