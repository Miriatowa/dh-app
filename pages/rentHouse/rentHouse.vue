<template>
	<view class="index">
		<view class="tabbar">
			<view :class="isFound ? 'isSelect' : 'noSelect'" @click="onToggleFound">租房</view>
			<view :class="isLost ? 'isSelect' : 'noSelect'" @click="onToggleLost">出租</view>
		</view>
		<view class="zfhzContent" v-if="isFound">
			<view class="zfNumber">共有<text style="color: #CC9999;">{{responseData.length}}</text>求租信息</view>
			<block v-for="(item,index) in responseData" :key="index">
				<view class="zfItem">
					<view class="zfItemLeft">
						<view class="zfTitle">{{item.houseTitle}}</view>
						<view class="zfAddress">期望区域：{{item.houseAddress}}</view>
						<view class="zfContact">{{item.contactType}}：{{item.contactNumber}}</view>
						<view class="zfTime">发布时间：{{item.publishTime}}</view>
					</view>
					<view class="zfItemRight">
						<view class="zfPrice">￥ {{item.housePrice}}/月</view>
						
					</view>
				</view>
			</block>
		</view>
		<view class="zfhzContent" v-if="isLost">
			<block v-for="(item,index) in responseData" :key="index">
				<view class="item"  @click="toBillDetail" :data-id='item.houseId'>
					<view class="goodsItem" >
						<view class="itemImage">
							<image  mode="widthFix" :src="item.houseUrl[0]"></image>
						</view>
						<view class="content">
							<view class="contentTop">
							<text class="title">{{item.houseTitle}}</text>
							</view>
							<view class="contentBottom">
									<view class="houseAddress">
										<icon class="iconfont icon-dingwei" style="font-size: 26rpx;"></icon>{{item.houseAddress}}
									</view>
								<view class="saleDetailBottom">
									<view class="price">￥ {{item.housePrice}}/月</view>
									<view class="moreDetail">更多<icon class="iconfont icon-xiangyou" style="font-size: 22rpx;margin-left: 5rpx;"></icon></view>
								</view>
							</view>
							
						</view>
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
				responseData:[],
			}
		},
		onLoad() {
			uni.request({
				url:'http://58.87.94.58:4000/api/queryZfhzData',
				method:"GET",
				data:{
					publishType:"租房"
				},
				success:(res)=> {
					console.log(res)
					this.responseData=res.data
				}
				
			})
		},
		methods: {
			onToggleLost(){
				this.isLost=true
				this.isFound=false
				uni.request({
					url:'http://58.87.94.58:4000/api/queryZfhzData',
					method:"GET",
					data:{
						publishType:"出租"
					},
					success:(res)=> {
						console.log(res)
						this.responseData=res.data
					}
					
				})
			},
			onToggleFound(){
				this.isLost=false
				this.isFound=true
				uni.request({
					url:'http://58.87.94.58:4000/api/queryZfhzData',
					method:"GET",
					data:{
						publishType:"租房"
					},
					success:(res)=> {
						console.log(res)
						this.responseData=res.data
					}
					
				})
			},
			toPublish(){
				uni.navigateTo({
					url:"../rentHousePub/rentHousePub"
				})
			},
			toBillDetail(e){
				uni.navigateTo({
					url:`../rentHouseDetail/rentHouseDetail?id=${e.currentTarget.dataset.id}`
				})
			}
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
	.zfhzContent{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.item{
		background-color: #FFFFFF;
		width: 360rpx;
		border-radius: 14rpx;
		margin-top: 10rpx;
	}
	.goodsItem{
		margin: 10rpx 20rpx;
	}
	.itemImage image{
		margin-top: 20rpx;
		width: 320rpx;
		height: 320rpx;
		border-radius: 20rpx;
	}
	.content{
		flex: 1;
	}
	.contentTop{
		margin-top: 10rpx;
	}
	.title{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		font-weight: bold;
		margin-left: 6rpx;
	}
	.houseAddress{
		font-size: 26rpx;
		color: #808080;
	}
	.saleDetailBottom{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 60rpx;
	}
	.price{
		color: #ff6633;
		font-weight: bold;
		line-height: 60rpx;
	}
	.saleNum{
		font-size: 24rpx;
		color: #808080;
		margin-left: 5rpx;
	}
	.moreDetail{
		font-size: 22rpx;
		color: #CCCCCC;
		line-height: 60rpx;
	}
	.zfNumber{
		margin-top: 10rpx;
		background-color: #FFFFFF;
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		padding: 0 40rpx;
		border-bottom: 1px solid #eee;
		font-size: 28rpx;
	}
	.zfItem{
		background-color: #FFFFFF;
		width: 100%;
		border-bottom: 2rpx solid #F1F1F1;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 30rpx;
		padding-top: 30rpx;
	}
	.zfTitle{
		font-weight: bold;
		padding: 10rpx 40rpx;
	}
	.zfAddress{
		padding: 10rpx 40rpx;
		color: #808080;
		font-size: 26rpx;
		
	}
	.zfContact{
		padding: 10rpx 40rpx;
		color: #808080;
		font-size: 26rpx;
	}
	.zfPrice{
		color: #ff6633;
		font-weight: bold;
		margin-right: 20rpx;
		
	}
	.zfTime{
		padding: 10rpx 40rpx;
		font-size: 26rpx;
		color: #808080;
	}
</style>
