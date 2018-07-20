<template>
  <el-table :data="tableData5" style="width: 100%">
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
</template>

<script>
export default{
  name: 'tablemm',
  data () {
    return {
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
  .demo-table-expand {font-size: 0;}
  .demo-table-expand label {width: 90px;color: #99a9bf;}
  .demo-table-expand .el-form-item {margin-right: 0;margin-bottom: 0;width: 50%;}
  .tablemm_n{ background: url(../assets/img/gh_16.jpg) no-repeat left;}
  .tablemm_n1{background: url(../assets/img/gh_17.jpg) no-repeat left;}
  .tablemm_n2{background: url(../assets/img/gh_18.jpg) no-repeat left;}
  .tablemm_n3{background: url(../assets/img/gh_19.jpg) no-repeat left;}
</style>
