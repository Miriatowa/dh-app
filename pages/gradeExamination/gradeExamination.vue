<template>
	<view>
		<button type="primary" class="queryBtn" @click="queryScore">点击查询</button>
		<view :hidden="!isShow">
			<view class="title">等级考试成绩</view>
			<jyf-parser :html="nodes" ref="article" :tag-style='tagStyle' :autoscroll="true"></jyf-parser>
		</view>
		
	</view>
</template>

<script>
	import jyfParser from "@/components/jyf-parser/jyf-parser";
	export default {
		data() {
			return {
				nodes:'',
				tagStyle:{
				     table: 'border-collapse:collapse;border-top:1px solid #CC9999;border-left:1px solid #CC9999;width:90;margin:0 auto' ,
				     th: 'border-right:1px solid #CC9999;border-bottom:1px solid #CC9999;height:50px;line-height:50px;text-align: left;padding:0rpx 2rpx',
				     td: 'border-right:1px solid #CC9999;border-bottom:1px solid #CC9999;height:20px;line-height:20px;cursor:pointer;text-align:center;',
				   },
				isShow:false
			}
		},
		onLoad() {
				
		},
		methods: {
			queryScore(){
				uni.request({
					url:"http://127.0.0.1:8000/api/queryGradeExamination",
					method:"GET",
					success: (res) => {
						console.log(res)
						this.nodes=res.data
						this.isShow=true
					}
				})
			}
		},
		components: {
				   jyfParser
				 },
	}
</script>
	
<style>
	.queryBtn{
		width: 90%;
		margin-top: 100rpx;
		margin-bottom: 50rpx;
	}
	.datelist{
		border-collapse: collapse;
		width: 96%;
		margin: 0px auto;
		background-color: ;
	}
	.title{
		margin-bottom: 30rpx;
		font-weight: bold;
		color: #CC9999;
		margin-left: 35%;
	}
	
	
</style>
