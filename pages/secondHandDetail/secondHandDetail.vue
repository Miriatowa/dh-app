<template>
	<view>
		<view class="good_details">
		<block v-for="(item,index) in goodArray" :key="index" class="get_data">
			<swiper indicator-dots circular autoplay="true" indicator-active-color="#CC9999" class="swiper">
			    <swiper-item  v-for="(item2,index) in item.goodsUrl" :key="index">
			       <view class="good_img">
				  <image :src="item2" mode="aspectFit"></image>
				  </view>
			    </swiper-item>
			  </swiper>
		   <view class="good_content">
		   <view class="good_name">
		      <text>{{item.goodsName}}</text>
		   </view>
		   <view class="good_seller_name">
		      <text>卖家：{{item.nickName}}</text>
		   </view>   
		   <view class="good_seller_price">
		      <text>价格：{{item.goodsPrice}}</text>
		   </view> 
		   <view class="good_qq">
		      <text selectable="true">{{item.contactType}}：{{item.contactNum}}</text>
		      <button  bindtap='copy' style="display:none">复制</button>
		   </view>   
		   <view class="good_data">
		      <text>发布时间: {{item.publishTime}}</text>
		   </view>
		   <view class="good_number">
		      <text>详情描述：{{item.goodsDescribe}}</text>
		   </view>
		   </view>
		</block>
		
		     <!-- 底部工具栏 -->
		  <view class="btm_tool_wrap">
		    <!-- 分享 -->
		    <view class="btm_item share">
		         
		        <text class="iconfont icon-fenxiang" style="font-size: 60rpx;"></text>
		        <button open-type="share" >分享</button>
		    </view>
		    <!-- 加入收藏 -->
		    <!-- 跳转到 tabbar上的时候 要注意 open-type -->
		    <navigator hover-class="none"  url="../myCollection/myCollection" class="btm_item cart">
		      
		        <text class="iconfont icon-shoucang" style="font-size: 54rpx;"></text>
		      
		    </navigator>
		    <!-- 加入收藏 -->
		    <view class="btm_item add_collection" @click="handleItemAdd" >加入收藏</view>
		    <!-- 联系卖家 -->
		    <view class="btm_item contact_now" @click="handleItemCon" ><icon class="iconfont icon-lianximaijia" style="margin-right: 8rpx;margin-bottom: 5rpx;"></icon>联系卖家</view>
		
		
		  </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodArray:[],
				goodsId:'',
			}
		},
		onShareAppMessage() {
			return {
				title: '东湖闲置街欢迎您前来选购！',
				path: '/pages/secondHand/secondHand',
			}
		},
		onLoad(options) {
			console.log(options)
			this.goodsId=options.id
			uni.request({
				url:'http://127.0.0.1:8000/api/queryEsxzDetail',
				method:"POST",
				data:{
					goodsId:this.goodsId
				},
				success: (res) => {
						console.log(res)
						this.goodArray=res.data
				}
			})
		},
		methods: {
			handleItemAdd(){
				console.log(this.goodArray[0].goodsUrl)
				uni.getStorage({
				    key: 'uid',
				    success: (res)=> {
						uni.request({
							url:'http://127.0.0.1:8000/api/postMyEsxzCollectionData',
							method:"POST",
							data:{
								collectionId:this.goodArray[0].id,
								uid:res.data,
							},
							success: (res) => {
									uni.showToast({
										title:'收藏成功',
										icon:'success',
									})
							}
						})
				        
				    }
				});
				
			},
			handleItemCon(){
				uni.showModal({
					title:"请收到添加联系方式"
				})
			}
		}
	}
</script>

<style>
	.swiper{
		width: 100%;
		height: 500rpx;
	}
	.good_img {
	  display: flex;
	  height: 500rpx;
	  justify-content: center;
	  align-items: center;
	  background-color: #fff;
	  border-bottom: 1px solid #e4e4e4;
	 
	}
	.good_details .good_content {
	  padding-top: 70rpx;
	  padding-left: 50rpx;
	  margin-top: 10rpx;
	  border-bottom: 1px solid #e4e4e4;
	  border-top: 1px solid #e4e4e4;
	}
	.good_details .good_content .good_name {
	  margin: 15rpx 0;
	  font-size: 60rpx;
	  font-weight: 500;
	}
	.good_details .good_content .good_seller_name {
	  color: #c8c8c8;
	  margin: 15rpx 0;
	}
	.good_details .good_content .good_seller_price {
	  color: #C8C8C8;
	  margin: 15rpx 0;
	}
	.good_details .good_content .good_number {
	  color: #c8c8c8;
	  margin: 15rpx 0;
	  padding-right: 10rpx;
	  margin-bottom: 70rpx;
	}
	.good_details .good_content .good_qq {
	  color: #c8c8c8;
	  margin: 15rpx 0;
	}
	.good_details .good_content .good_wx {
	  color: #c8c8c8;
	  margin: 15rpx 0;
	}
	.good_details .good_content .good_data {
	  color: #c8c8c8;
	  margin: 15rpx 0;
	  
	}
	.good_details .btm_tool_wrap {
	  display: flex;
	  height: 100rpx;
	  width: 100%;
	  background-color: #fff;
	  position: fixed;
	  bottom: 0;
	  left: 0;
	}
	.good_details .btm_tool_wrap .btm_item {
	  flex: 1;
	  text-align: center;
	}
	.good_details .btm_tool_wrap .cart {
	  position: relative;
	}
	.good_details .btm_tool_wrap .cart .iconfont {
	  position: absolute;
	  top: 30rpx;
	  left: 35rpx;
	}
	.good_details .btm_tool_wrap .share {
	  position: relative;
	}
	.good_details .btm_tool_wrap .share .icon-fenxiang {
	  position: absolute;
	  top: 20rpx;
	  left: 30rpx;
	}
	.good_details .btm_tool_wrap .share button {
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
	  opacity: 0;
	}
	.good_details .btm_tool_wrap .cart {
	  position: relative;
	}
	.good_details .btm_tool_wrap .cart .icon-shoucang {
	  position: absolute;
	  top:25rpx;
	  left: 35rpx;
	}
	.good_details .btm_tool_wrap .add_collection {
	  flex: 2;
	  color: #fff;
	  background-color: #eb4450;
	  font-size: 32rpx;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	}
	.good_details .btm_tool_wrap .contact_now {
	  flex: 2;
	  color: #fff;
	  background-color: #CC9999;
	  font-size: 32rpx;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	}
	
</style>
