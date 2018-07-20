<template>
  <div class="biaodan">
    <h1>*Form表单代码生成*</h1>
    <div class="bd_div">
      <select name="" class="M_seldct">
        <option value="">选择项目</option>
      </select>
      <input type="button" name="" id="" value="生成代码"/>
    </div>
    <p>*注释：选择项目，点击生成代码按钮，生成你所需要的form表单代码。如有接收不到信息或者项目信息变更，请重新选择项目生成代码</p>
    <div class="bd_scq">代码生成区</div>
  </div>
</template>

<script>
export default{
  name: 'biaodan',
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
  .biaodan h1 { color: #6e6e6e; font-size: 28px; font-weight: normal;width: 100%;}
  .bd_div { width: 100%;}
  select {appearance:none;-moz-appearance:none; -webkit-appearance:none;}
  .biaodan .bd_div select.M_seldct {  background: url(../assets/img/gh_13.png) 91% 53% no-repeat; background-size: 7%;border-radius: 3px;-moz-border-radius: 3px;-webkit-border-radius: 3px;border: 1px solid #B6B6B6;height: 30px;width: 20%; margin-right: 2%; padding-left: 1%;}
  .bd_div input {background: linear-gradient(#868686,#3d3c3c); border: none; width: 10%; color: #FFFFFF; text-align: center;border-radius: 3px;-moz-border-radius: 3px;-webkit-border-radius: 3px;height: 28px;}
  .biaodan p { color: #ae0404; width: 50%; line-height: 25px; font-size: 13px; text-align: justify;}
  .bd_scq { width: 50%; border:1px solid #CFCFCF; text-align: center; padding: 1%; background: #ededed; height: 280px; line-height: 280px; font-size: 40px; color: #bbbbbb;}
</style>
