<template>
	<view class="container">
	  <i class="iconfont icon-tubiao- find"></i>
	  <input class="bar" placeholder="请输入关键字..." placeholder-class="in-bar" @click="onInput"></input>
	  <icon class="iconfont icon-saomiao camera"></icon>
	</view>
</template>

<script>
	export default{
		methods:{
			onInput(e){
				console.log(e)
			}
		}
	}
</script>

<style>
	
	.container {
	  display: flex;
	  align-items: center;
	  padding-left: 20rpx;
	  padding-right: 20rpx;
	  position: relative;
	  
	  height: 100rpx;
	}
	
	.bar {
	  flex: 1;
	  height: 68rpx;
	  font-size: 28rpx;
	  border-radius: 16rpx;
	  background-color: #f5f5f5;
	  padding-left: 60rpx;
	}
	
	.camera {
	  position: absolute;
	  top: 45%;
	  transform: translate(86vw, -50%);
	  color: #9f9f9f;
	}
	
	.in-bar {
	  color: #999;
	}
	
	.find {
	  position: absolute;
	  top: 50%;
	  transform: translate(16rpx, -50%);
	  color: #9f9f9f;
	  font-size: 40rpx;
	}

</style>
