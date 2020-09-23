<template>
	<view>
		<!-- 轮播图 -->
		<swiper indicator-dots circular autoplay="true" indicator-active-color="#cc9999" class="swiper">
			<swiper-item v-for="(item,index) in responseData[0].houseUrl" :key="index">
				<image :src="item" style="width: 100%;" ></image>
			</swiper-item>
		</swiper>
		
		<!-- 标题 -->
		<view class="title">
			{{responseData[0].houseTitle}}
		</view>
		
		<!-- 价格 -->
		<view class="price">￥{{responseData[0].housePrice}}/月</view>
		
		<!-- 描述 -->
		<view class="goodsDescribe">简述: {{responseData[0].houseDescribe}}</view>
		
		<!-- 基础设施 -->
		<view class="equipment">
			基础设施：
			<view class="eqipmentItem">
				<view class="itemContent">
					<view><icon class="iconfont icon-luyouqi ico"></icon><view>路由</view></view>
				</view>
				<view class="itemContent">
					<view><icon class="iconfont icon-kongtiao ico"></icon><view>空调</view></view>
				</view>
				<view class="itemContent">
					<view><icon class="iconfont icon-zhuozi ico"></icon><view>桌子</view></view>
				</view>
				<view class="itemContent">
					<view><icon class="iconfont icon-icon-test ico"></icon><view>柜子</view></view>
				</view>
				<view class="itemContent">
					<view><icon class="iconfont icon-yizi ico"></icon><view>椅子</view></view>
				</view>
				<view class="itemContent">
					<view><icon class="iconfont icon-chuang"></icon><view> 床</view></view>
				</view>
				<view class="itemContent">
					<view><icon class="iconfont icon-haofangtuo400iconfont2reshuiqi ico"></icon><view>浴霸</view></view>
				</view>
			</view>
			
		</view>
		
		<!-- 位置 -->
		<view class="address">
			<icon class="iconfont icon-dingwei"></icon>位置：{{responseData[0].houseAddress}}
		</view>
		
		<!-- 联系方式 -->
		<view class="contact">
			<icon class="iconfont icon-shouji"></icon>{{responseData[0].contactType}}: {{responseData[0].contactNumber}}
		</view>
		
		<!-- 发布时间 -->
		<view class="contact">
			<icon class="iconfont icon-shijian"></icon>发布时间: {{responseData[0].publishTime}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				responseData:[]
			}
		},
		onLoad(options){
			console.log(options.id)
			uni.request({
				url:'http://127.0.0.1:8000/api/queryZfhzDeatilData',
				method:"POST",
				data:{
					houseId:options.id
				},
				success:(res)=> {
					console.log(res)
					this.responseData=res.data
				}
				
			})
		},
		methods: {
			
		}
	}
</script>

<style>
	.swiper{
		width: 100%;
		height: 400rpx;
	}
	.title{
		font-weight: bold;
		margin-left: 10rpx;
		margin-top: 20rpx;
	}
	.price{
		color: #ff6633;
		font-weight: bold;
		font-size: 28rpx;
		margin-left: 10rpx;
		margin-top: 20rpx;
	}
	.goodsDescribe{
		padding: 30rpx 20rpx;
		border-top: 2rpx solid #e1e1e1;
		border-bottom: 2rpx solid #E1E1E1;
		margin-left: 10rpx;
		margin-right: 10rpx;
		margin-top: 20rpx;
		font-size: 26rpx;
	}
	.address{
		padding: 30rpx 20rpx;
		border-bottom: 2rpx solid #E1E1E1;
		margin-left: 10rpx;
		margin-right: 10rpx;
		font-size: 26rpx;
	}
	.equipment{
		padding: 30rpx 20rpx;
		border-bottom: 2rpx solid #E1E1E1;
		margin-left: 10rpx;
		margin-right: 10rpx;
		font-size: 26rpx;
		
	}
	.eqipmentItem{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.itemContent{
		/* width: 200rpx; */
		
	}
	.contact{
		padding: 30rpx 20rpx;
		border-bottom: 2rpx solid #E1E1E1;
		margin-left: 10rpx;
		margin-right: 10rpx;
		font-size: 26rpx;
	}
	.ico{
		margin-left: 10rpx;
	}
</style>
