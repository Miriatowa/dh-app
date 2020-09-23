<template>
	<view>
		<view class="car_share">
			<view class="tabbar">
				<view :class="isFound ? 'isSelect' : 'noSelect'" @click="onToggleFound">找拼友</view>
				<view :class="isLost ? 'isSelect' : 'noSelect'" @click="onToggleLost">车找人</view>
			</view>
		<view class="" v-if="isFound">
			<view class="mid_content">
			<view v-for="(item,index) in responseData" :key="index" :data-num="index" @click="get_id">
			  <view class="pub_content">
			    <view class="pub_top">
			    <span class="pub_place">
			       <view><span>从</span> {{item.orignPlace}}</view>
			      <view><span>到</span>  {{item.aimsPlace}}</view>
			       
			    </span>
			    <view class="pub_type">
			      {{item.publishType}}
			    </view>
			   
			  </view>
			  <view class="pub_mid">
			  <view class="pub_time">
			     出发日期：<span>{{item.publishTime}}</span><!-- 时间：<span>{{item.time}}</span> -->
			  </view>
			  <view class="pub_contact">
			    {{item.contactType}}：{{item.contactNum}}
			  </view>
			    
			  <view class="pub_con">
			      <span>具体：{{item.goodsDescribe}}</span> 
			  </view>
			  </view>
			  <view class="pub_bot">
			    <view class="pub_tip">
			      <span>Tips：</span>价格线下自行商量...
			    </view>
			      <view class="pub_btn" bindtap="contact_btn" >联系Ta</view>
			  </view>
			    
			    
			      
			  </view>
			    
			</view>
			
			</view>
		</view>
		<view class="" v-if="isLost">
			<view class="mid_content">
			<view v-for="(item,index) in responseData" :key="index" :data-num="index" @click="get_id">
			  <view class="pub_content">
			    <view class="pub_top">
			    <span class="pub_place">
			       <view><span>从</span> {{item.orignPlace}}</view>
			      <view><span>到</span>  {{item.aimsPlace}}</view>
			       
			    </span>
			    <view class="pub_type">
			      {{item.publishType}}
			    </view>
			   
			  </view>
			  <view class="pub_mid">
			  <view class="pub_time">
			     出发日期：<span>{{item.publishTime}}</span><!-- 时间：<span>{{item.time}}</span> -->
			  </view>
			  <view class="pub_contact">
			    {{item.contactType}}：{{item.contactNum}}
			  </view>
			    
			  <view class="pub_con">
			      <span>具体：{{item.goodsDescribe}}</span> 
			  </view>
			  </view>
			  <view class="pub_bot">
			    <view class="pub_tip">
			      <span>Tips：</span>价格线下自行商量...
			    </view>
			      <view class="pub_btn" bindtap="contact_btn" >联系Ta</view>
			  </view>
			    
			    
			      
			  </view>
			    
			</view>
			
			</view>
		</view>
		 <button  bindtap='copy' style="display:none">复制</button>
		  
		
		  
		  
		</view>
		<icon class="iconfont icon-ziyuan addBtn" @click="toPublish"></icon>
	</view>
</template>

<script>
	import search from "../../components/search.vue"
	export default {
		data() {
			return {
				isLost:false,
				isFound:true,
				responseData:[]
			}
		},
		onLoad(){
			uni.request({
				url:'http://127.0.0.1:8000/api/queryPccxData',
				method:"POST",
				data:{
					pccxType:"找拼友"
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
					url:'http://127.0.0.1:8000/api/queryPccxData',
					method:"POST",
					data:{
						pccxType:"车找人"
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
					url:'http://127.0.0.1:8000/api/queryPccxData',
					method:"POST",
					data:{
						pccxType:"找拼友"
					},
					success:(res)=> {
						console.log(res)
						this.responseData=res.data
					}
					
				})
			},
			// 跳转到发布页面
			toPublish(){
				uni.navigateTo({
					url:"../carpoolingTravelPub/carpoolingTravelPub"
				})
			},
		},
		components:{search}
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
	.uni-list{
			background-color: #CC9999;
			width: 100%;
			height: 100rpx;
		}
	.car_share .search_nav navigator {
	  height: 100%;
	  background-color: #fff;
	  border-radius: 10rpx;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	}
	.car_share .top_swiper swiper image {
	  height: calc( 100vw / 1.6 );
	  width: 100%;
	}
	.car_share .mid_content {
	  width: 100%;
	  margin-top: 20rpx;
	}
	.car_share .mid_content .pub_content {
	  width: 90%;
	  margin: 0 auto;
	  border: 1px solid #e9e9e9;
	  margin-bottom: 20rpx;
	}
	.car_share .mid_content .pub_content .pub_top {
	  padding-left: 35rpx;
	}
	.car_share .mid_content .pub_content .pub_top .pub_place {
	  position: relative;
	}
	.car_share .mid_content .pub_content .pub_top .pub_place view {
	  margin-top: 30rpx;
	}
	.car_share .mid_content .pub_content .pub_top .pub_place view span {
	  color: #CC9999;
	  margin-right: 10rpx;
	}
	.car_share .mid_content .pub_content .pub_top .pub_type {
	  position: relative;
	  width: 160rpx;
	  height: 50rpx;
	  text-align: center;
	  line-height: 50rpx;
	  font-size: 24rpx;
	  left: 58vw;
	  top: -100rpx;
	  background-color: #CC9999;
	  color: white;
	  border-radius: 10rpx;
	}
	.car_share .mid_content .pub_content .pub_mid {
	  border-top: 1px solid #e9e9e9;
	  padding-left: 35rpx;
	}
	.car_share .mid_content .pub_content .pub_mid .pub_time {
	  margin-top: 20rpx;
	}
	.car_share .mid_content .pub_content .pub_mid .pub_time span {
	  margin-right: 30rpx;
	}
	.car_share .mid_content .pub_content .pub_mid .pub_contact {
	  margin-top: 20rpx;
	}
	.car_share .mid_content .pub_content .pub_mid .pub_con {
	  margin-top: 20rpx;
	}
	.car_share .mid_content .pub_content .pub_mid .pub_con span {
	  margin-right: 20rpx;
	}
	.car_share .mid_content .pub_content .pub_bot {
	  margin-top: 40rpx;
	  margin-bottom: 20rpx;
	  padding-left: 35rpx;
	  position: relative;
	}
	.car_share .mid_content .pub_content .pub_bot .pub_tip {
	  font-size: 24rpx;
	}
	.car_share .mid_content .pub_content .pub_bot .pub_tip span {
	  font-size: 30rpx;
	  color: orangered;
	}
	.car_share .mid_content .pub_content .pub_bot .pub_btn {
	  position: absolute;
	  left: 475rpx;
	  bottom: 0rpx;
	  height: 50rpx;
	  width: 160rpx;
	  text-align: center;
	  line-height: 50rpx;
	  border-radius: 10rpx;
	  color: #CC9999;
	  border: 1px solid #CC9999;
	}
	.car_share .bot_add .iconfont {
	  position: fixed;
	  right: 0;
	  top: 40vh;
	}
	.addBtn{
		color: #CC9999;
		font-size: 100rpx;
		position: fixed;
		right: 0;
		bottom: 50rpx;
	}
</style>
