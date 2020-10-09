<template>
	<view>
		<view class="tabbar">
			<view :class="isTake ? 'isSelect' : 'noSelect'" @click="onToggleTake">代取</view>
			<view :class="isBuy ? 'isSelect' : 'noSelect'" @click="onToggleBuy">代买</view>
			<view :class="isGet ? 'isSelect' : 'noSelect'" @click="onToggleGet">代办</view>
		</view>
		<view class="mainContent" v-if="isTake">
			<!-- 代取服务发布 -->
		<block v-for="(item,index) in dqfwArr" :key="index">
		<view class="item">
			<view class="itemTop">
				<view class="serviceType">{{item.publishType}}</view>
				<view class="serviceContent">￥ {{item.price}}</view>
			</view>
			<view class="itemMid">
				<view class="">
					<view class="serviceAddress"><span class="oriTitle">起</span>{{item.orignPlace}}</view>
					<view class="serviceAddress"><span class="aimTitle">终</span>{{item.aimsPlace}}</view>
				</view>
				<view class="serivceDes">
					<icon class="iconfont icon-wupin"></icon>：{{item.publishDescribe}}
				</view>
			</view>
			<view class="itemBot">
				<view class="contact"><icon class="iconfont icon-shouji"></icon>{{item.contactType}}: {{item.contactNum}}</view>
				<view class="time">{{item.publishTime}}</view>
			</view>
		</view>
		</block>	
			
		</view>
		<view class="index" v-if="isBuy">
			<block v-for="(item,index) in dqfwArr" :key="index">
					<view class="item">
						<view class="itemTop">
							<view class="serviceType">{{item.publishType}}</view>
							<view class="serviceContent">￥ {{item.price}}</view>
						</view>
						<view class="itemMid">
							<view class="">
								<view class="serviceAddress"><span class="oriTitle">起</span>{{item.orignPlace}}</view>
								<view class="serviceAddress"><span class="aimTitle">终</span>{{item.aimsPlace}}</view>
							</view>
							<view class="serivceDes">
								<icon class="iconfont icon-wupin"></icon>：{{item.publishDescribe}}
							</view>
						</view>
						<view class="itemBot">
							<view class="contact"><icon class="iconfont icon-shouji"></icon>{{item.contactType}}: {{item.contactNum}}</view>
							<view class="time">{{item.publishTime}}</view>
						</view>
					</view>
					</block>	
		</view>
		<view class="index" v-if="isGet">
			<block v-for="(item,index) in dqfwArr" :key="index">
					<view class="item">
						<view class="itemTop">
							<view class="serviceType">{{item.publishType}}</view>
							<view class="serviceContent">￥ {{item.price}}</view>
						</view>
						<view class="itemMid">
							<view class="">
								<view class="serviceAddress"><span class="oriTitle">起</span>{{item.orignPlace}}</view>
								<view class="serviceAddress"><span class="aimTitle">终</span>{{item.aimsPlace}}</view>
							</view>
							<view class="serivceDes">
								<icon class="iconfont icon-wupin"></icon>：{{item.publishDescribe}}
							</view>
						</view>
						<view class="itemBot">
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
	let uid=""
	export default {
		data() {
			return {
				isBuy:false,
				isTake:true,
				isGet:false,
				dqfwArr:[],
			}
		},
		onLoad(){
			uni.getStorage({
			    key: 'uid',
			    success: function (res) {
			        uid=res.data;
			    }
			});
			uni.request({
				url:"http://58.87.94.58:4000/api/queryDqfwData",
				method:"GET",
				data:{
					type:'代取'
				},
				success: (res) => {
					console.log(res.data)
					this.dqfwArr=res.data
				}
			})
		},
		methods: {
			onToggleBuy(){
				this.isBuy=true
				this.isTake=false
				this.isGet=false
				uni.request({
					url:"http://58.87.94.58:4000/api/queryDqfwData",
					method:"GET",
					data:{
						type:'代买'
					},
					success: (res) => {
						console.log(res.data)
						this.dqfwArr=res.data
					}
				})
			},
			onToggleTake(){
				this.isBuy=false
				this.isTake=true
				this.isGet=false
				uni.request({
					url:"http://58.87.94.58:4000/api/queryDqfwData",
					method:"GET",
					data:{
						type:'代取'
					},
					success: (res) => {
						console.log(res.data)
						this.dqfwArr=res.data
					}
				})
			},
			onToggleGet(){
				this.isBuy=false
				this.isTake=false
				this.isGet=true
				uni.request({
					url:"http://58.87.94.58:4000/api/queryDqfwData",
					method:"GET",
					data:{
						type:'代办'
					},
					success: (res) => {
						console.log(res.data)
						this.dqfwArr=res.data
					}
				})
			},
			toPublish(){
				uni.navigateTo({
					url:"../runningServicesPub/runningServicesPub"
				})
			},
		}
	}
</script>

<style>
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
	.item{
		padding:  0rpx 10rpx;
		border-top: 10rpx solid #F1F1F1;
	}
	.itemTop{
		display: flex;
		justify-content: space-between;
		height: 100rpx;
		align-items: center;
		border-bottom: 2rpx solid #F1F1F1;
	}
	.serviceType{
		height: 60rpx;
		line-height: 60rpx;
		font-size: 28rpx;
		padding:4rpx 20rpx;
		border-radius: 6rpx;
		background-color: #FBEFF8;
		color: #CC9999;
		font-weight: 600
	}
	.serviceContent{
		color:#fa4b22;
		font-weight:bold;
		margin-right: 20rpx;
	}
	.serivceDes{
		font-size: 28rpx;
		color: #808080;
		margin-right: 20rpx;
	}
	.itemMid{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 160rpx;
		border-bottom: 2rpx solid #F1F1F1;
	}
	.serviceAddress{
		margin-top: 30rpx;
		margin-bottom: 30rpx;
	}
	.oriTitle{
		background-color: #000000;
		color: #FFFFFF;
		padding: 5rpx 10rpx;
		font-size: 26rpx;
		border-radius: 50%;
		margin-right: 10rpx;
	}
	.aimTitle{
		background-color: #F0AD4E;
		padding: 5rpx 10rpx;
		font-size: 26rpx;
		color: #FFFFFF;
		border-radius: 50%;
		margin-right: 10rpx;
	}
	.itemBot{
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
