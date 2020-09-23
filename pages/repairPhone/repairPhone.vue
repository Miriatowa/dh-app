<template>
	<view>
		        <view class="uni-list">
		            <view class="uni-list-cell">
		                <view class="uni-list-cell-left">
		                    当前楼栋：
		                </view>
		                <view class="uni-list-cell-db">
		                    <picker @change="bindPickerChange" :value="index" :range="houseArray" mode = selector>
		                        <view class="uni-input">{{houseArray[currentIndex]}}<icon class="iconfont icon-xiangxia" style="margin-left: 20rpx;"></icon></view>
		                    </picker>
		                </view>
		            </view>
				 </view>
				 <view class="bottomContent">
					 <view class="contentLeft">
				 	<block  v-for="(item,index) in iphoneType" :key="index">
						<view :class="typeIndex == index ? 'selectContentItem' : 'contentItem'" :data-index="index" @click="onSelect">{{item.role}}</view>
					</block>
					</view>
					<view class="contentRight">
						<view class="title"><icon class="iconfont icon-dian1" style="font-size: 36rpx;margin-right: 10rpx; color: #4CD964;line-height: 80rpx;"></icon>{{iphoneType[typeIndex].role}}</view>
						<view >
							<view class="detail" v-for="(item2,index) in iphoneType[typeIndex].child" :key="index">
								<view class="leftDetail">
									<image class="roleImg" src="https://ae01.alicdn.com/kf/Ha00e12c5c2ad41ccac9375a0e1cfe344T.jpg"></image>
									<view>
										<view class="itemNum">{{item2.phoneNum}}</view>
										<view class="itemName">
											{{item2.name}}
										</view>
									</view>
									
								</view>
								<icon class="iconfont icon-dadianhua" style="font-size: 50rpx;" @click="onCallPhone" :data-telId="item2.phoneNum"></icon>
							</view>
						</view>
					</view>
				 </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				houseArray:["1栋","2栋","3栋","4栋","5栋","6栋","7栋","8栋","9栋","10栋","11栋","12栋","13栋","14栋","15栋","16栋","17栋","18栋","19栋","20栋","21栋","22栋","23栋","24栋","25栋"],
				currentIndex:22,
				iphoneType:[
					{role:"房管保洁",
						child:
						[
							{name:"郑杰", telNum:"15327453857"},
							{name:"李学英", telNum:"18702759429"},
							{name:"张艳荣", telNum:"15071187899"},
						]
					},
				{role:"水电维修",child:
					[{name:"任志强",telNum:"15327453857"}]
				},
				{role:"家具维修",child:
					[{name:"郑杰",telNum:"15327453857"}]
				},
				{role:"基建维修",child:
					[{name:"郑杰",telNum:"15327453857"}]
				},
				{role:"热水维修",child:
					[{name:"郑杰",telNum:"15327453857"}]
				},
				{role:"房管保洁",child:
					[{name:"郑杰",telNum:"15327453857"}]
				},
				{role:"空调维修",child:
					[{name:"郑杰",telNum:"15327453857"}]
				},
				{role:"网络维修",child:
					[{name:"郑杰",telNum:"15327453857"}]
				},
				{role:"管道疏通",child:
					[{name:"郑杰",telNum:"15327453857"}]
				},
				],
				typeIndex:0,
			}
		},
		onLoad(){
			uni.request({
				url:'http://127.0.0.1:8000/api/queryRepair',
				method:"POST",
				data:{
					houseId:parseInt(this.currentIndex)+1
				},
				success:(res)=> {
					for(var i=res.data.length-1;i> 0;i--){
						if(res.data[i].role == res.data[i-1].role){
							res.data.splice(i,1)
						}
					}
					this.iphoneType=res.data
					console.log(this.iphoneType)
				}
				
			})
		},
		methods: {
			bindPickerChange(e){
				this.currentIndex=e.target.value
				uni.request({
					url:'http://127.0.0.1:8000/api/queryRepair',
					method:"POST",
					data:{
						houseId:parseInt(this.currentIndex)+1
					},
					success:(res)=> {
						for(var i=res.data.length-1;i> 0;i--){
							if(res.data[i].role == res.data[i-1].role){
								res.data.splice(i,1)
							}
						}
						this.iphoneType=res.data
						console.log(this.iphoneType)
					}	
				})
			},
			onSelect(e){
				this.typeIndex=e.currentTarget.dataset.index
				console.log(e.currentTarget.dataset.index)
			},
			// 打电话
			onCallPhone(e){
				console.log(e.currentTarget.dataset.telid)
				uni.makePhoneCall({
				    phoneNumber: e.currentTarget.dataset.telid ,
					success:(res)=>{
						console.log(res)
					}
				});
			},
		}
	}
</script>

<style>
	.uni-list{
		background-color: #CC9999;
		width: 100%;
		height: 100rpx;
	}
	.uni-list-cell{
		display: flex;
		background-color: #FFFFFF;
		height: 80rpx;
		width: 90%;
		border-radius: 10rpx;
		margin-left: 5%;
		line-height: 80rpx;
	}
	.uni-list-cell-left{
		width: 140rpx;
		font-size: 28rpx;
		margin-left: 20rpx;
		color: #808080;
	}
	.uni-list-cell-db{
		flex:1;
	}
	.uni-list-cell-db picker{
		padding-left: 150rpx;
		color: #CC9999;
	}
	.bottomContent{
		display: flex;
		
	}
	.contentItem{
		height: 100rpx;
		line-height: 100rpx;
		font-size: 28rpx;
		text-align: center;
		color: #505050;
	}
	.selectContentItem{
		height: 100rpx;
		line-height:  100rpx;
		font-size: 30rpx;
		text-align: center;
		background-color: #FFFFFF;
		color: #CC9999;
	}
	.contentLeft{
		height: calc(100vh - 100rpx);
		width: 220rpx;
		background-color: #F1F1F1;
		
	}
	.contentRight{
		flex: 1;
		}
	.title{
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		padding-left: 20px;
		background: #f5f5f5;
		color: #646464;
		font-size: 28rpx;
		/* border-bottom: 2rpx solid #808080; */
	}
	.detail{
		height: 140rpx;
		display: flex;
		align-items: center;
		justify-content: space-around;
		color: #808080;
	}
	.leftDetail{
		display: flex;
		
	}
	.itemName{
		margin-top: 8rpx;
		font-size: 22rpx;
		line-height: 50rpx;
	}
	.roleImg{
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		margin-right: 10rpx;
	}
</style>
