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
					<view class="lostItem">
						<view class="lostTop">
							<icon class="iconfont icon-sousuofangdajing" style="margin-bottom: 10rpx;margin-right: 13rpx;"></icon>
							<view class="lostName">{{item.name}}</view>
							
						</view>
						<view class="lostMid">
							<view class="lostMidTitle">{{item.publishType}}：</view>
							{{item.content}}
						</view>
						<view class="lostBottom">
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
						url:'http://127.0.0.1:8000/api/queryMySwzlData',
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
					url:"http://127.0.0.1:8000/api/deleteMySwzlData",
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
	.itemTop{
		display: flex;
		padding: 0rpx 20rpx;
		justify-content: space-between;
		align-items: center;
		height: 80rpx;
		font-size: 26rpx;
		
	}
	.itemMid{
		background-color: #F1F1F1;
		height: 100vh;
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
	.lostItem{
		width: 94%;
		background-color: #FFFFFF;
		margin: 20rpx auto;
		border-radius: 20rpx;
	}
	.lostTop{
		display: flex;
		height: 80rpx;
		margin: 0rpx 20rpx;
		justify-content: center;
		align-items: center;
		border-bottom: 2rpx solid #F1F1F1;
	}
	.lostName{
		font-size: 34rpx;
	}
	.lostMid{
		margin: 20rpx 10rpx;
		font-size: 28rpx;
	}
	.lostMidTitle{
		
		font-weight: bold;
		margin-bottom: 10rpx;
	}
	.lostBottom{
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
