<template>
	<view>
		        <view class="uni-list">
					<search></search>
				 </view>
				 <view class="bottomContent">
					 <view class="contentLeft">
				 	<block  v-for="(item,index) in goodsTypeArr" :key="index">
						<view :class="typeIndex == index ? 'selectContentItem' : 'contentItem'" :data-index="index" @click="onSelect">{{item}}</view>
					</block>
					</view>
					<view class="contentRight">
						<view class="title"><icon class="iconfont icon-dian1" style="font-size: 36rpx;margin-right: 10rpx; color: #4CD964;line-height: 80rpx;"></icon>{{goodsTypeArr[typeIndex]}}</view>
						<view >
							<view class="detail" v-for="(item,index) in goodsArr" :key="index" @click="toDetail" :data-index="item.goodsId">
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
						</view>
					</view>
				 </view>
				 <icon class="iconfont icon-ziyuan addBtn" @click="toPublish"></icon>
	</view>
</template>

<script>
	let uid=''
	import search from "../../components/search.vue"
	export default {
		data() {
			return {
				goodsTypeArr: ['生活用品','宿舍电器','闲置书籍','美妆护肤','视频会员','电子产品','美味零食','时尚服装','潮流鞋子'],
				goodsArr:[],
				typeIndex:0,
			}
		},
		onLoad(){
					uni.request({
						url:'http://127.0.0.1:8000/api/queryEsxzData',
						method:"POST",
						data:{
							goodsType:"生活用品"
						},
						success:(res)=> {
							console.log(res)
							this.goodsArr=res.data
						}
						
					})
			
		},
		methods: {
			onSelect(e){
				this.typeIndex=e.currentTarget.dataset.index
				console.log(e.currentTarget.dataset.index)
				uni.request({
					url:'http://127.0.0.1:8000/api/queryEsxzData',
					method:"POST",
					data:{
						goodsType:this.goodsTypeArr[this.typeIndex]
					},
					success:(res)=> {
						console.log(res)
						this.goodsArr=res.data
					}
					
				})
				
			},
			toPublish(){
				console.log("111")
				uni.navigateTo({
					url:"../secondHandPub/secondHandPub"
				})
			},
			toDetail(e){
				console.log(e)
				// e.currentTarget.dataset.index
				uni.navigateTo({
					url:`../secondHandDetail/secondHandDetail?id=${e.currentTarget.dataset.index}`
				})
			}
		},
		components:{
			search,
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
		border-bottom: 1px solid #e5e5e5;
		margin-left: 10px;
		margin-top: 10rpx;
		padding-bottom: 10rpx;
		overflow: hidden;
		color: #808080;
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
			margin-left: 160rpx;
			
	}
	.goodsImg{
		width: 140rpx;
		height: 140rpx;
		border-radius: 10rpx;
		margin-right: 10rpx;
		border: 2rpx solid #ccc;
	}
	.addBtn{
		color: #CC9999;
		font-size: 100rpx;
		position: fixed;
		right: 0;
		bottom: 50rpx;
	}
</style>
