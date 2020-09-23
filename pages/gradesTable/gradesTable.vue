<template>
	<view>
		<view class="title">成绩单</view>
		<jyf-parser :html="nodes" ref="article" :tag-style='tagStyle' :autoscroll="true"></jyf-parser>
	</view>
</template>

<script>
	import jyfParser from "@/components/jyf-parser/jyf-parser";
	export default {
		data() {
			return {
				nodes:'',
				tagStyle:{
				     table: 'border-collapse:collapse;border-top:1px solid #CC9999;border-left:1px solid #CC9999;width:96%;margin:0 auto' ,
				     th: 'border-right:1px solid #CC9999;border-bottom:1px solid #CC9999;height:50px;line-height:50px;text-align: left;padding:0rpx 2rpx',
				     td: 'border-right:1px solid #CC9999;border-bottom:1px solid #CC9999;height:20px;line-height:20px;cursor:pointer;text-align:center;',
				   },
			}
		},
		onLoad(options) {
			console.log(options)
				uni.request({
					url:"http://127.0.0.1:8000/api/querySchoolGrades",
					data:{
						type:parseInt(options.id)
					},
					method:"POST",
					success: (res) => {
						console.log(res)
						this.nodes=res.data
					}
				})
		},
		methods: {
			
		},
		components: {
				   jyfParser
				 },
	}
</script>

<style>
	.title{
		margin-bottom: 30rpx;
		margin-top: 10rpx;
		font-weight: bold;
		color: #CC9999;
		margin-left: 44%;
	}
</style>
