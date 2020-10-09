<template>
	<view class="index">
		<view class="collectionItem">
				<view class="collectionItemTop">
					<view>共计发布<text style="color: #D43C43;padding: 0rpx 5rpx;">{{courseCollectionArr.length}}</text>条</view>
					<view style="color: #D43C43;padding: 20rpx" @click="onEdit">
						{{editText}}
					</view>
				</view>
				<view class="collectionItemMid">
					<checkbox-group @change="singleSelect">
					<view class="billItem" v-for="(item,index) in courseCollectionArr" :key="index" >
						<checkbox :value="item.id" :checked="item.check" :hidden="!isEdit" />
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
						url:"http://58.87.94.58:4000/api/queryMyDqfwData",
						method:"GET",
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
					url:"http://58.87.94.58:4000/api/deleteMyDqfwData",
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
										url:"../mySwzlPub/mySwzlPub"
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
	.collectionItemTop{
		display: flex;
		padding: 0rpx 20rpx;
		justify-content: space-between;
		align-items: center;
		height: 80rpx;
		font-size: 26rpx;
		
	}
	/* .collectionItemMid{
		background-color: #F1F1F1;
		height: 100vh;
	} */
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
