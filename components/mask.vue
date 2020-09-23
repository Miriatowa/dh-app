<template>
	<view class="modal" :hidden="!maskShow.isSelect" :style="{top: maskShow.topDis+'rpx'}">
	  <view class="panel" :style="{top: maskShow.topDis+'rpx'}">
	      <!-- slot插槽  具名插槽-->
	      <slot name="modal-content"></slot>
	  </view>
	</view>

</template>

<script>
	export default{
	data() {
		return {
			
		}
	},
	props:["maskShow"]
	}
</script>

<style>
	.modal {
	  position: fixed;
	  top: 0;
	  right: 0;
	  bottom: 0;
	  left: 0;
	  z-index: 99;
	  background: rgba(0, 0, 0, 0.6);
	}
	
	.panel {
	  position: fixed;
	  top: 0;
	  right: 0;
	  left: 0;
	  width: 100%;
	  box-sizing: border-box;
	  background-color: #f8f8f8;
	  text-align: left;
	  border-radius: 0 0 10rpx 10rpx;
	  padding-bottom: 100rpx;
	}
	
	
</style>
