<template>
	<view>
		<view class="tabbar" >
			<view :class="academicYear  ? 'isSelect' : 'noSelect'" @click="toggleCurrent">本学年</view>
			<view :class="lastAcademicYear  ? 'isSelect' : 'noSelect'" @click="toggleLast">上学年</view>
		</view>
		<view class="content">
			<image @click="onPreview" src="https://yanxuan.nosdn.127.net/7ebb9990edd9dd17faf1e58611f426a5.jpg" :hidden="academicYear" mode="widthFix"></image>
			<image @click="onPreview" src="https://yanxuan.nosdn.127.net/3064bb07a7b7bbf1625cb51999f9b11b.jpeg " :hidden="lastAcademicYear" mode="widthFix"></image>
			<view class="tips">亲，这里没有别人，只有东大校历^_^</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				academicYear:true,
				lastAcademicYear:false,
				caldendarArr:["https://yanxuan.nosdn.127.net/3064bb07a7b7bbf1625cb51999f9b11b.jpeg","https://yanxuan.nosdn.127.net/7ebb9990edd9dd17faf1e58611f426a5.jpg",]
			}
		},
		methods: {
			toggleCurrent(){
				this.academicYear=true
				this.lastAcademicYear=false
			},
			toggleLast(){
				this.academicYear=false
				this.lastAcademicYear=true
			},
			onPreview(){
				uni.previewImage({
				            urls: this.caldendarArr,
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
.tabbar{
	height: 100rpx;
	line-height: 100rpx;
	display: flex;
	justify-content: space-around;
	}
.isSelect{
	color: #CC9999;
	border-bottom: 4rpx solid #CC9999;
}
.noSelect{
	color: #808080;
}
.content{
	background-color: #F1F1F1;
	height: calc(100vh - 100rpx );
}
.content image{
	width: 90%;
	margin: 20% 5%;
}
.tips{
	color: #808080;
	font-size: 26rpx;
	position: fixed;
	left: 20%;
	bottom: 10%;
}
</style>
