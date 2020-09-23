<template>
	<view>
		<view class="content">
			<image @click="onPreview" :src="mapArr[0]"  mode="widthFix"></image>
			<view class="tips">地图在手，东湖我有^_^</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mapArr:["https://yanxuan.nosdn.127.net/eda811bde388b5fe1bae9caeed5ae7e3.jpg"]
			}
		},
		methods: {
			onPreview(){
				uni.previewImage({
				            urls: this.mapArr,
				            longPressActions: {
				                itemList: ['发送给朋友', '保存图片', '收藏'],
				                success: function(data) {
				                    console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
				                },
				                fail: function(err) {
				                    console.log(err.errMsg);
				                }
				            }
				        });
			}
		}
	}
</script>

<style>
	.content{
		background-color: #F1F1F1;
		height: 100vh;
	}
	.content image{
		width: 90%;
		margin: 40rpx 35rpx 0rpx 35rpx;
	}
	.tips{
		color: #808080;
		font-size: 26rpx;
		margin-top: 35rpx;
		margin-left: 220rpx;
	}
</style>
