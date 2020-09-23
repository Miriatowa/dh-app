<template>
	<view class="index">
		<view class="collectionItem">
				<view class="itemTop">
					<view>共计<text style="color: #D43C43;padding: 0rpx 5rpx;">{{courseCollectionArr.length}}</text>件宝贝</view>
					<view style="color: #D43C43;padding: 20rpx" @click="onEdit">
						{{editText}}
					</view>
				</view>
				<view class="itemMid">
					<checkbox-group @change="singleSelect">
					<view class="billItem" v-for="(item,index) in courseCollectionArr" :key="index" >
						<checkbox :value="item.goodsId" :checked="item.check" :hidden="!isEdit" />
						<view class="leftDetail">
							<image class="goodsImg" :src="item.goodsUrl[0]"></image>
							
						</view>
						<view class="rightDetail">
								<view class="itemName">
									{{item.goodsName}}
								</view>
								<view class="itemNum">
									<view class="itemPrice">
										￥{{item.goodsPrice}}
									</view>
									<view class="itemNumber">
											数量：<text style="color: #DD524D;">1</text>
									</view>
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
						url:'http://127.0.0.1:8000/api/queryMyEsxzData',
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
					url:"http://127.0.0.1:8000/api/deleteMyEsxzData",
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
										url:"../myEsxzPub/myEsxzPub"
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
	.storeCollection{
		border-top: 4rpx solid #E3E3E3;
	}
	.goodsCollection{
		color: #808080;
		height: 100vh;
		background-color: #E3E3E3;
	}
	.itemTop{
		display: flex;
		padding: 0rpx 20rpx;
		justify-content: space-between;
		align-items: center;
		height: 80rpx;
		font-size: 26rpx;
		border-bottom: 10rpx solid #F1F1F1;
	}
	.billItem{
		display: flex;
		align-items: center;
		margin-bottom: 16rpx;
		background-color: #FFFFFF;
		border-bottom: 1px solid #e5e5e5;
		margin-left: 10px;
		margin-top: 20rpx;
		overflow: hidden;
		color: #808080;
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
	.itemName{
		margin-top: 8rpx;
		font-size: 30rpx;
		font-weight: bold;
		color: #505050;
		line-height: 50rpx;
		
	}
	.itemNum{
		display: flex;
		margin-top: 40rpx;
		justify-content: space-between;
		align-items: center;
	}
	.itemPrice{
		color: #fa4b22;
		font-weight: 400;
	}
	.itemNumber{
			margin-left: 300rpx;
			
	}
	.goodsImg{
		width: 140rpx;
		height: 140rpx;
		border-radius: 10rpx;
		margin-right: 10rpx;
		border: 2rpx solid #ccc;
	}
</style>
