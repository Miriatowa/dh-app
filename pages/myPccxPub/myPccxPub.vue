<template>
	<view class="index">
		<view class="collectionItem">
				<view class="itemTop">
					<view>共计发布<text style="color: #D43C43;padding: 0rpx 5rpx;">{{courseCollectionArr.length}}</text>条</view>
					<view style="color: #D43C43;padding: 20rpx" @click="onEdit">
						{{editText}}
					</view>
				</view>
				<view class="itemMid">
					<checkbox-group @change="singleSelect">
					<view class="billItem" v-for="(item,index) in courseCollectionArr" :key="index" >
						<checkbox :value="item.id" :checked="item.check" :hidden="!isEdit" />
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
					</checkbox-group>
				</view>
		</view>
		<view class="itemBottom">
			<view class="bottomBar" :hidden="!isEdit">
				<checkbox-group @change="allSelect"><checkbox value="all" :checked="checkkAll">全选</checkbox></checkbox-group>
				<button type="warn" class="cancelBtn" @click="onCancelCollection">取消发布</button>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				courseCollectionArr:[],
				editText:"编辑",
				isEdit:false,
				cancelId:[],
				checkkAll:false,
				uid:"",
			}
		},
		onLoad(options) {
			uni.getStorage({
				key:"uid",
				success: (res) => {
					this.uid=res.data
					uni.request({
						url:'http://58.87.94.58:4000/api/queryMyPccxData',
						method:"POST",
						data:{
							userId:this.uid
						},
						success: (res) => {
								console.log(res)
								this.courseCollectionArr=res.data
						}
					})
				}
			})
			
		},
		methods: {
			// 编辑
			onEdit(){
				if(this.isEdit){
					this.editText="编辑"
					this.isEdit=false
				}else{
					this.editText="完成"
					this.isEdit=true
				}
				
			},
			// 选择单个
			singleSelect(e){
				console.log(e)
				this.cancelId=e.detail.value
				console.log(this.cancelId)
			},
			allSelect(e){
				if(e.detail.value=="all"){
					this.ckAll = true;
					this.courseCollectionArr.forEach((item)=>{
						item.check = this.ckAll
						var idStr=item.goodsId
						// 去重
						if(this.cancelId.includes(idStr)){
							console.log("重复id")
						}else{
							this.cancelId.push(idStr)
						}
						console.log(this.cancelId)
					})
					
				}else{
					this.ckAll = false;
					this.courseCollectionArr.map(item => item.check = this.ckAll);
					this.cancelId=[]
					console.log(this.cancelId)
				}	
			},
			// 取消发布
			onCancelCollection(){
				console.log(this.cancelId)
				uni.request({
					url:"http://58.87.94.58:4000/api/deleteMyPccxData",
					method:"POST",
					data:{
						userId: this.uid,
						deletIds: this.cancelId    //[1,2,3],
					},
					success: (res) => {
						console.log(res)
							uni.showToast({
								title:"删除成功",
								icon:"success",
								success: (res) => {
									uni.redirectTo({
										url:"../myPccxPub/myPccxPub"
									})
								}
							})
					}
				})
			}
		},
	}
</script>

<style>
	.itemTop{
		display: flex;
		padding: 0rpx 20rpx;
		justify-content: space-between;
		align-items: center;
		height: 80rpx;
		font-size: 26rpx;
	}
	.billItem{
		display: flex;
		align-items: center;
		margin-left: 10rpx;
	}
	.bottomBar{
		background-color: rgb(255,255,255,0.6);
		height: 120rpx;
		display: flex;
		padding: 0 18rpx;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
	}
	.cancelBtn{
		margin-left: 400rpx;
		width: 180rpx;
		font-size: 26rpx;
	}
	 .pub_content {
	  width: 90%;
	  margin: 0 auto;
	  border: 1px solid #e9e9e9;
	  margin-bottom: 20rpx;
	}
	 .pub_content .pub_top {
	  padding-left: 35rpx;
	}
	 .pub_content .pub_top .pub_place {
	  position: relative;
	}
	 .pub_content .pub_top .pub_place view {
	  margin-top: 30rpx;
	}
	 .pub_content .pub_top .pub_place view span {
	  color: #CC9999;
	  margin-right: 10rpx;
	}
	 .pub_content .pub_top .pub_type {
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
	 .pub_content .pub_mid {
	  border-top: 1px solid #e9e9e9;
	  padding-left: 35rpx;
	}
	 .pub_content .pub_mid .pub_time {
	  margin-top: 20rpx;
	}
	 .pub_content .pub_mid .pub_time span {
	  margin-right: 30rpx;
	}
	 .pub_content .pub_mid .pub_contact {
	  margin-top: 20rpx;
	}
	 .pub_content .pub_mid .pub_con {
	  margin-top: 20rpx;
	}
	 .pub_content .pub_mid .pub_con span {
	  margin-right: 20rpx;
	}
	 .pub_content .pub_bot {
	  margin-top: 40rpx;
	  margin-bottom: 20rpx;
	  padding-left: 35rpx;
	  position: relative;
	}
	 .pub_content .pub_bot .pub_tip {
	  font-size: 24rpx;
	}
	 .pub_content .pub_bot .pub_tip span {
	  font-size: 30rpx;
	  color: orangered;
	}
	 .pub_content .pub_bot .pub_btn {
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
