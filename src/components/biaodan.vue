<template>
	<div class="biaodan">
		<h1>*Form表单代码生成*</h1>
		<div class="bd_div">
			<el-select class="M_seldct" v-model="itemName" placeholder="请选择" clearable>
				<el-option v-for="item in items" :key="item.id" :label="item.name" :value="item.name">
				</el-option>
			</el-select>
			<el-button type="primary" @click="createHtml()">生成代码</el-button>
		</div>
		<p>*注释：选择项目，点击生成代码按钮，生成你所需要的form表单代码。如有接收不到信息或者项目信息变更，请重新选择项目生成代码</p>
		<div class="bd_scq" v-show="!codeHTML">代码生成区</div>
		<pre v-highlightB class="bd_scq2" v-show="codeHTML">
		    <code style="width: 98%;height: 280px;padding: 8px;margin: -16px 0 0 0;" v-text="codeHTML"></code>
		</pre>
	</div>
</template>

<script>
	export default {
		name: 'biaodan',
		data() {
			return {
				items: [{
					name: '大同德瑞医院',
					id: '1'
				},{
					name: '上海健桥医院',
					id: '2'
				},{
					name: '福州鼓楼医院',
					id: '3'
				}],
				itemName: '',
				codeHTML: ''
				}
		},
		watch: {
			itemName: function (newQuestion, oldQuestion) {
				if (this.itemName.length === 0) {
					this.codeHTML = ''
				}
			}
		},
		methods: {
			getEmail (type) {
				return '545631684@qq.com'
			},
			createHtml () {
				if (this.itemName.length !== 0) {
					this.codeHTML = '\n//项目：'+ this.itemName +'\n//接收邮箱：'+ this.getEmail(this.itemName) +'\n\n<form action="http://gh.doudouv.com/adduser">\n	<p><label>姓名：</label><input type="text" id="" name="name"/></p>\n	<p><label>电话：</label><input type="text" id="" name="tel"/></p>\n	<p><label>描述：</label><input type="text" id="" name="describe"/></p>\n	<input type="submit" name="" id="" value=""/>\n</form>'
				} else {
					this.$alert('请先选择要生成代码的项目！', '警告', {confirmButtonText: '确定'})
				}
			}
		},
		created() {
		}
	}
</script>

<style scoped>
.biaodan h1{color:#6e6e6e;font-size:28px;font-weight:400;width:100%}
.bd_div{width:100%}
select{appearance:none;-moz-appearance:none;-webkit-appearance:none}
.biaodan .bd_div select.M_seldct{background:url(../assets/img/gh_13.png) 91% 53% no-repeat;background-size:7%;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;border:1px solid #B6B6B6;height:30px;width:20%;margin-right:2%;padding-left:1%}
.bd_div input{background:linear-gradient(#868686,#3d3c3c);border:none;width:10%;color:#FFF;text-align:center;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;height:28px}
.biaodan p{color:#ae0404;line-height:25px;font-size:13px;text-align:justify}
.bd_scq{width:50%;border:1px solid #CFCFCF;text-align:center;padding:1%;background:#ededed;height:280px;line-height:280px;font-size:40px;color:#bbb}
.bd_scq2{width:52%;border:1px solid #CFCFCF;height:280px;font-size:14px;color:#bbb;margin:0;padding:0}
</style>