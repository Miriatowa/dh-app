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
						<checkbox :value="item.houseId" :checked="item.check" :hidden="!isEdit" />
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
						url:'http://58.87.94.58:4000/api/queryMyZfhzData',
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
					url:"http://58.87.94.58:4000/api/deleteMyZfhzData",
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
										url:"../myZfhzPub/myZfhzPub"
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
		border-bottom: 10rpx solid #F1F1F1;
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
	.billItem{
		display: flex;
		align-items: center;
		margin-left: 10rpx;
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
