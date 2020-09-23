<template>
	<view class="index">
		<view class="tabbar">
			<view :class="isFound ? 'isSelect' : 'noSelect'" @click="onToggleFound">寻物启事</view>
			<view :class="isLost ? 'isSelect' : 'noSelect'" @click="onToggleLost">招领启事</view>
		</view>
		<view class="" v-if="isFound">
			<block v-for="(item,index) in swArr" :key="index">
				<view class="lostItem">
					<view class="lostTop">
						<icon class="iconfont icon-sousuofangdajing" style="margin-bottom: 10rpx;margin-right: 13rpx;"></icon>
						<view class="lostName">{{item.name}}</view>
						
					</view>
					<view class="lostMid">
						<view class="lostMidTitle">寻物启示：</view>
						{{item.content}}
					</view>
					<view class="lostBottom">
						<view class="contact"><icon class="iconfont icon-shouji"></icon>{{item.contactType}}: {{item.contactNum}}</view>
						<view class="time">{{item.publishTime}}</view>
					</view>
				</view>
			</block>
			
		</view>
		<view class="" v-if="isLost">
			<block v-for="(item,index) in zlArr" :key="index">
				<view class="lostItem">
					<view class="lostTop">
						<icon class="iconfont icon-sousuofangdajing" style="margin-bottom: 10rpx;margin-right: 13rpx;"></icon>
						<view class="lostName">{{item.name}}</view>
						
					</view>
					<view class="lostMid">
						<view class="lostMidTitle">招领启示：</view>
						{{item.content}}
					</view>
					<view class="lostBottom">
						<view class="contact"><icon class="iconfont icon-shouji"></icon>{{item.contactType}}: {{item.contactNum}}</view>
						<view class="time">{{item.publishTime}}</view>
					</view>
				</view>
			</block>
		</view>
		<icon class="iconfont icon-ziyuan addBtn" @click="toPublish"></icon>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLost:false,
				isFound:true,
				swArr:[],
				zlArr:[]
			}
		},
		onLoad(){
					uni.request({
						url:'http://127.0.0.1:8000/api/querySwzlData',
						method:"POST",
						data:{
							publishType:"寻物启事"
						},
						success:(res)=> {
							console.log(res)
							this.swArr=res.data
						}
						
					})
			
		},
		methods: {
			onToggleLost(){
				this.isLost=true
				this.isFound=false
				uni.request({
					url:'http://127.0.0.1:8000/api/querySwzlData',
					method:"POST",
					data:{
						publishType:"寻物启事"
					},
					success:(res)=> {
						console.log(res)
						this.swArr=res.data
					}
					
				})
			},
			onToggleFound(){
				this.isLost=false
				this.isFound=true
				uni.request({
					url:'http://127.0.0.1:8000/api/querySwzlData',
					method:"POST",
					data:{
						publishType:"招领启事"
					},
					success:(res)=> {
						console.log(res)
						this.zlArr=res.data
						
					}
					
				})
			},
			toPublish(){
				console.log("111")
				uni.navigateTo({
					url:"../lostAndFoundPub/lostAndFoundPub"
				})
			},
		}
	}
</script>

<style>
	.index{
		background-color: #F1F1F1;
		height: 100vh;
	}
	.tabbar{
		height: 80rpx;
		display: flex;
		background-color: #CC9999;
	}
	.isSelect{
		color: #FFFFFF;
		border-bottom: 4rpx solid #FFFFFF;
		margin: 12rpx 20rpx;
		font-size: 34rpx;
		font-weight: 500;
	}
	.noSelect{
		color: #FFFFFF;
		font-size: 28rpx;
		margin: 18rpx 20rpx;
	}
	.addBtn{
		color: #CC9999;
		font-size: 100rpx;
		position: fixed;
		right: 0;
		bottom: 50rpx;
	}
	.lostItem{
		width: 94%;
		background-color: #FFFFFF;
		margin: 20rpx auto;
		border-radius: 20rpx;
	}
	.lostTop{
		display: flex;
		height: 80rpx;
		margin: 0rpx 20rpx;
		justify-content: center;
		align-items: center;
		border-bottom: 2rpx solid #F1F1F1;
	}
	.lostName{
		font-size: 34rpx;
	}
	.lostMid{
		margin: 20rpx 10rpx;
		font-size: 28rpx;
	}
	.lostMidTitle{
		
		font-weight: bold;
		margin-bottom: 10rpx;
	}
	.lostBottom{
		padding-bottom: 20rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.contact{
		margin-left: 10rpx;
		font-size: 26rpx;
		color: #808080;
	}
	.time{
		margin-right: 20rpx;
		font-size: 26rpx;
		color: #808080;
		margin-top: 16rpx;
	}
</style>
