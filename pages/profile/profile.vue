<template>
		<view class="login">
		<view class="login_mes">
		 <!-- <view class='user_img' >
		   <open-data type="userAvatarUrl" id="userAvatarUrl"></open-data>
		   <open-data type="userNickName" class="userNickName"></open-data>
		   </view> -->
		 <view class='user_img' >
			   <image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-miraitowa/2ab5c930-0912-11eb-81ea-f115fe74321c.jpg" id="userAvatarUrl" @click="changeAva"></image>
		      <view class="my_login">Oaa859367376</view>
		     </view>
		  
		</view>
		<view class="profileCollection">
			<view class="orderTitle">
			 	工具服务
			 </view>
			 <view class="myServe">
			<navigator url="../myCollection/myCollection" hover-class="none">
			 <view class="serveItem">
			 	<view><icon class="iconfont icon-shoucang iconSev"></icon></view>
			 	<span style="margin-left: 38rpx;">我的收藏</span>
			 </view>
			 </navigator>
			 <navigator url="../feedback/feedback" hover-class="none">
			 <view class="serveItem">
			 	<view><icon class="iconfont icon-fabu iconSev"></icon></view>
			 		<span style="margin-left: 38rpx;">意见反馈</span>
			 	</view>
						</navigator>
			 <navigator url="../aboutUs/aboutUs" hover-class="none">
			 <view class="serveItem">
			 	<view><icon class="iconfont icon-miaoshu iconSev"></icon></view>
			 	<span style="margin-left: 38rpx;">关于我们</span>
			 </view>
			 </navigator>
			</view>
			
			
				
		</view>
		
		 
		<view class="mySev">
		   <view class="orderTitle">
		   	我的发布
		   </view>
		   <view class="myOrderList">
		   	<view class="myServe">
		   	<navigator url="../myEsxzPub/myEsxzPub" hover-class="none">
		   	 <view class="serveItem">
		   	 	<view><icon class="iconfont icon-ershoushebei iconSev"></icon></view>
		   	 	<span style="margin-left: 38rpx;">二手闲置</span>
		   	 </view>
		   	 </navigator>
		   	 <navigator url="../mySwzlPub/mySwzlPub" hover-class="none">
		   	 <view class="serveItem">
		   	 	<view><icon class="iconfont icon-dibudaohanglan- iconSev"></icon></view>
		   	 		<span style="margin-left: 38rpx;">失物招领</span>
		   	 	</view>
		   	</navigator>
		   	 <navigator url="../myDqfwPub/myDqfwPub" hover-class="none">
		   	 <view class="serveItem">
		   	 	<view><icon class="iconfont icon-waimai- iconSev"></icon></view>
		   	 	<span style="margin-left: 38rpx;">代跑服务</span>
		   	 </view>
		   	 </navigator>
		   	 <navigator url="../myPccxPub/myPccxPub" hover-class="none">
		   	 <view class="serveItem">
		   	 	<view><icon class="iconfont icon-chexian iconSev"></icon></view>
		   	 	<span style="margin-left: 38rpx;">拼车出行</span>
		   	 </view>
		   	 </navigator>
			 <navigator url="../myZfhzPub/myZfhzPub" hover-class="none">
		   	 <view class="serveItem">
		   	 	<view><icon class="iconfont icon-zufang1 iconSev"></icon></view>
		   	 		 <span style="margin-left: 52rpx;">租房合租</span>
		   	 	</view>
		   	 </navigator>
		   	<navigator url="../helper/helper" hover-class="none">
		   	<view class="serveItem">
		   		<view><icon class="iconfont icon-lianximaijia iconSev"></icon></view>
		   			<span style="margin-left: 38rpx;">校园树洞</span>
		   		</view>
		   	</navigator>
		   	</view>
		   </view>
		  </view>
		 
		 <view class="appName">@DH生活通</view>
		</view>
		
		</view>
</template>

<script>
	
	export default {
		data() {
			return {
				isLogin:false,
				spellId:'',
				goodsId:'',
				teacherId:0
			}
		},
		onLoad(){
			// uni.getStorage({
			// 	key: 'uid',
			// 	    success:  (res)=> {
			// 			if(res.data){
			// 				this.isLogin=false
			// 			}
			// 	        this.isLogin=res.data;
			// 	    }
			// 	});
		},
		methods: {
			changeAva(){
				
			},
			// toLogin(){
			// 	uni.navigateTo({
			// 		url:"../login/login"
			// 	})
			// },
			// 跳转到我的订单
			toAllOrder(){
				uni.navigateTo({
					url:"../myOrder/myOrder"
				})
			},
			// 跳转到我的收藏
			toMyGoodsCollection(){
				uni.navigateTo({
					url:"../myGoodsCollection/myGoodsCollection"
				})
			},
			toMyStoreCollection(){
				uni.navigateTo({
					url:`../myGoodsCollection/myGoodsCollection?id=1`
				})
			},
			
		}
	}
</script>

<style>
	.login{
		background-color: #e3e3e3;
		height: 100vh;
	}
	.login .login_mes {
	  background-color: #CC9999;
	  padding-bottom: 100rpx;
	  border-radius: 0 0 20% 20%;
	}
	.login .login_mes .user_img {
	 display: flex;
	 /* justify-content: center; */
	  align-items: center;
	}
	.login .login_mes .user_img #userAvatarUrl {
	  width: 120rpx;
	  height: 120rpx;
	  border-radius: 50%;
	  overflow: hidden;
	  text-align: center;
	  margin-left: 30rpx;
	  margin-top: 20rpx;
	}
	.login .login_mes .user_img .userNickName {
	  font-size: 30rpx;
	  font-weight: bold;
	  color: black;
	  margin-left: 30rpx;
	  margin-top: 20rpx;
	}
	.login .login_mes .user_img .my_login {
	  font-size: 33rpx;
	  margin-top: 30rpx;
	  margin-left: 20rpx;
	  font-weight: bold;
	}
	.profileCollection{
		background-color: #FFFFFF;
		width: 94%;
		margin: -10% 3% 0% 3%;
		z-index: 99;
		border-radius: 10rpx;
	}
	.myOrder{
		margin: 20rpx auto 0rpx; 
		background-color: #FFFFFF;
		border-radius: 10rpx;
		width: 94%;
	}
	.mySev{
		margin: 20rpx auto 0rpx; 
		background-color: #FFFFFF;
		border-radius: 10rpx;
		width: 94%;
	}
	.myOrderList{
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
	}
	.orderTitle{
		display: flex;
		justify-content: space-between;
		font-weight: bold;
		height: 80rpx;
		line-height: 80rpx;
		margin-left: 20rpx;
		border-bottom: 1rpx solid #E3E3E3;
	}
	.allOrder{
		height: 80rpx;
		line-height: 80rpx;
		margin-right: 20rpx;
		font-weight: 100;
		font-size: 26rpx;
	}
	.orderItem{
		margin-top: 20rpx;
		margin-bottom:20rpx;
		font-size:28rpx;
		width: 230rpx;
		color: #88888;
		padding-left: 100rpx;
	}
	.iconstyle{
		color: #ff6633;
		font-size: 50rpx;
		margin-left:20rpx;
		margin-bottom: 10rpx
	}
	.myServe{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		}
	.myCourse{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
	}
	.serveItem{
		width: 190rpx;
		margin-top: 20rpx;
		margin-bottom:20rpx;
		font-size:28rpx;
		color: #88888;
	}
	.iconStyle{
		color: #ff6633;
		font-size: 50rpx;
		margin-left:30rpx;
		margin-bottom: 10rpx
	}
	.iconSev{
		color: #ff6633;
		font-size: 50rpx;
		margin-left:70rpx;
		margin-bottom: 10rpx
	}
	.appName{
		position: fixed;
		left: 39%;
		bottom: 2%;
		font-size: 28rpx;
		color: #888888;
	}

</style>
