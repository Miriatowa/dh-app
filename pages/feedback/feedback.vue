<template>
	<view>
		<view class="yjfk">
		  <textarea placeholder="请输入反馈内容...."  placeholder-class="glomer"  @input="bindInputvalue"></textarea>
		  <button type="warn" size="default" @click="handleSubmit">提交反馈</button>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content:"",
			}
		},
		methods: {
			bindInputvalue(e) {
			    this.content= e.detail.value
			},
			handleSubmit(){
				uni.getStorage({
					key:"uid",
					success:(res)=> {
							uni.request({
								url:'http://58.87.94.58:4000/api/postYjfkData',
								method:"POST",
								data:{
									yjfk_content:this.content,
									uid:res.data
								},
								success:(res)=> {
									uni.showToast({
										title:"提交成功",
										icon:"success",
										success:(res)=>{
											uni.switchTab({
												url:"../profile/profile"
											})
										}
									})
								}
								
							})
					}
				})
				
			},
		}
	}
</script>

<style scoped>
	.yjfk {
	  padding-top: 25rpx;
	  background-color: #e3e3e3;
	  height: 100vh;
	}
	.yjfk text {
	  color: #AAAAAA;
	  margin-left: 20rpx;
	}
	.yjfk textarea {
	  width: 96%;
	  margin: 25rpx auto;
	  height: 300rpx;
	  border: 1px solid #F1F1F1;
	  border-radius: 10rpx;
	  padding-left: 10rpx;
	  padding-top: 10rpx;
	  background-color: #fff;
	}
	.yjfk button {
	  width: 90%;
	  margin-top: 40rpx;
	}
	
</style>
