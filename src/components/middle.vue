<template>
  <div class="Middle">
    <h1>*挂号信息*</h1>
    <ul>
      <li>
        <div class="gh_cx gh_span">
          <span>查询项目</span>
          <el-select v-model="value" placeholder="查询项目">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="gh_ly gh_span">
          <span>来源地址</span>
          <el-input v-model="input2" placeholder="请输入要查询的地址"></el-input>
        </div>
      </li>
      <li>
        <div class="gh_cx gh_span">
          <span>查询姓名</span>
          <el-input v-model="input1" placeholder="请输入要查询的姓名"></el-input>
        </div>
        <div class="gh_ly gh_span gh_rq block">
          <span class="demonstration">查询日期</span>
          <!--{{value6}}-->
          <el-date-picker
            v-model="value6"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div>
        <div class="gh_an">
        	<el-button class="anniu" type="primary" @click="createHtml()">查询</el-button>
        	<el-button class="anniu" type="primary" @click="createHtml()">导出数据</el-button>
        </div>
      </li>
    </ul>
    <el-table :data="tableData5" style="width: 100%" highlight-current-row>
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="序列号">
              <span>{{ props.row.Number }}</span>
            </el-form-item>
            <el-form-item label="登记日期">
              <span>{{ props.row.time }}</span>
            </el-form-item>
            <el-form-item label="姓名">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="年龄">
              <span>{{ props.row.age }}</span>
            </el-form-item>
            <el-form-item label="电话">
              <span>{{ props.row.tel }}</span>
            </el-form-item>
            <el-form-item label="病情描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
            <el-form-item label="来源地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="所属项目">
              <span>{{ props.row.xiang }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="序列号"
        prop="Number"
        class="tablemm_n">
      </el-table-column>
      <el-table-column
        label="登记日期"
        prop="time"
        class="tablemm_n1">
      </el-table-column>
      <el-table-column
        label="姓名"
        prop="name"
        class="tablemm_n2">
      </el-table-column>
      <el-table-column
        label="电话"
        prop="tel"
        class="tablemm_n3">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default{
  name: 'middle',
  data () {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      input1: '',
      input2: '',
      value6: '',
      tableData5: [{
        name: '郑',
        Number: '1236654',
        tel: '13363441210',
        address: '上海市普陀区真北路',
        desc: '一不小心抑郁了！',
        time: '2018/06/05',
        age: '33',
        xiang: '大同'
      }, {
        name: '郑2',
        Number: '1236654',
        tel: '13363441210',
        address: '上海市普陀区真北路',
        desc: '一不小心抑郁了！',
        time: '2018/06/05',
        age: '33',
        xiang: '大同'
      }, {
        name: '郑3',
        Number: '1236654',
        tel: '13363441210',
        address: '上海市普陀区真北路',
        desc: '一不小心抑郁了！',
        time: '2018/06/05',
        age: '33',
        xiang: '大同'
      }, {
        name: '郑4',
        Number: '1236654',
        tel: '13363441210',
        address: '上海市普陀区真北路',
        desc: '一不小心抑郁了！',
        time: '2018/06/05',
        age: '33',
        xiang: '大同'
      }]
    }
  },
  methods: {
  },
  created () {
  }
}
</script>

<style scoped>
.el-date-editor,.el-range-editor,.el-input__inner,.el-date-editor--daterange { width: 300px;}
.demonstration {font-size: 14px;}
.el-input { width: 300px;}
.Middle { height: 200px;}
.Middle h1 { color: #6e6e6e;font-size: 28px; font-weight: normal; width: 100%;}
.Middle ul { margin: 0; padding: 0 1% 0;}
.Middle ul li { margin-bottom: 2%; list-style: none; height: 25px;}
.Middle ul li .el-select{width: 300px;}
.Middle ul li div.gh_cx { width: 30%;}
.Middle ul li div.gh_span { margin: 0 1% 0s; float: left;}
.Middle ul li div.gh_span span { font-size: 14px; float: left; width: 25%; line-height: 40px; color: #333333;}
.Middle ul li div.gh_cx select.M_seldct {  background: url(../assets/img/gh_13.png) 91% 53% no-repeat; background-size: 7%;}
.M_seldct { width: 60%;border-radius: 3px;-moz-border-radius: 3px;-webkit-border-radius: 3px; border: 1px solid #B6B6B6; height: 25px; padding: 0 0 0 1%; color: #7f7f7f;}
select{appearance:none;-moz-appearance:none; -webkit-appearance:none;}
.Middle ul li div.gh_cx span {}
.Middle ul li div.gh_ly { width: 30%;}
.Middle ul li div.gh_ly span {}
.Middle ul li div.gh_ly input.gh_input {border-radius: 3px;-moz-border-radius: 3px;-webkit-border-radius: 3px;border: 1px solid #B6B6B6;height: 25px;width: 68%;}
.gh_rq {width: 60%;}
.gh_rq .gh_in { width: 32%;border-radius: 3px;-moz-border-radius: 3px;-webkit-border-radius: 3px;border: 1px solid #B6B6B6;height: 25px;padding: 0 0 0 1%; text-align: center;}
.gh_an { width: 35%; float: left; margin-left: 2%;}
.gh_an a { display: block; width:22%; float: left; margin-right: 3%;}
.gh_an a img{ width: 100%;display: block;}
.demo-table-expand {font-size: 0;}
.demo-table-expand label {width: 90px;color: #99a9bf;}
.demo-table-expand .el-form-item {margin-right: 0;margin-bottom: 0;width: 50%;}
.tablemm_n { background: url(../assets/img/gh_16.jpg) no-repeat left;}
.tablemm_n1 {background: url(../assets/img/gh_17.jpg) no-repeat left;}
.tablemm_n2 {background: url(../assets/img/gh_18.jpg) no-repeat left;}
.tablemm_n3 {background: url(../assets/img/gh_19.jpg) no-repeat left;}
</style>
