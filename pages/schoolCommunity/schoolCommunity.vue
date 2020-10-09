<template>
	<view>
		<view class="tabbar">
			<block v-for="(item,index) in tabbarType" :key="index">
			<view :class="currentTabbar == index ? 'isSelect' : 'noSelect'" :data-index="index" @click="toggleTabbar">
				<view>{{item}}</view>
			</view>
			</block>
		</view>
		<view class="content">
				<block v-for="(item,index) in communityType" :key="index">
					<view class="item">
						<image :src="item.imgUrl" class="itemLeft"></image>
						<view class="itemRight">
							<view class="itemTitle">
								{{item.title}}
							</view>
							<view class="itemPro">
								社团宗旨：{{item.production}}
							</view>
							<view class="itemBot">
								<view class="itemPro">
									社团简介>>
								</view>
								<!-- <button type="primary" class="itemBtn"><icon class="iconfont icon-lianximaijia" style="margin-right: 10rpx;font-size: 26rpx;"></icon>加入社团</button> -->
							</view>
								
							
						</view>
					</view>
				</block>
		</view>
	</view>
</template>

<script>
	let queryLeaguerType="文艺类"
	export default {
		data() {
			return {
				tabbarType:["文艺类","实践类","学术类","体育类"],
				communityType:[],
				currentTabbar:0,
			}
		},
		onLoad() {
			uni.request({
				url:'http://58.87.94.58:4000/api/queryLeaguer',
				method:"GET",
				data:{
					queryLeaguerType:queryLeaguerType
				},
				success:(res)=> {
					console.log(res)
					this.communityType=res.data
				}
				
			})
		},
		methods: {
			toggleTabbar(e){
				this.currentTabbar=e.currentTarget.dataset.index
				console.log(e.currentTarget.dataset.index)
				if(e.currentTarget.dataset.index == 0){
					queryLeaguerType="文艺类"
				}
				if(e.currentTarget.dataset.index == 1){
					queryLeaguerType="实践类"
				}
				if(e.currentTarget.dataset.index == 2){
					queryLeaguerType="学术类"
				}
				if(e.currentTarget.dataset.index == 3){
					queryLeaguerType="体育类"
				}
				uni.request({
					url:'http://58.87.94.58:4000/api/queryLeaguer',
					method:"GET",
					data:{
						queryLeaguerType:queryLeaguerType
					},
					success:(res)=> {
						console.log(res)
						this.communityType=res.data
					}
					
				})
			},
	}
	}
</script>

<style>
	.tabbar{
		display: flex;
		background-color: #F1F1F1;
		align-items: center;
		justify-content: space-around;
		color: #808080;
	}
	.isSelect{
		height: 80rpx;
		line-height: 80rpx;
		color: #CC9999;
		border-bottom: 2rpx solid #CC9999;
	}
	.item{
		display: flex;
		border-bottom: 10rpx solid #F1F1F1;
		padding: 10rpx;
	}
	.itemLeft{
		width: 200rpx;
		height: 200rpx;
		border-radius: 10rpx;
	}
	.itemRight{
		flex: 1;
		margin-left: 20rpx;
		margin-top: 16rpx;
	}
	.itemTitle{
		font-size: 34rpx;
		font-weight: bold;
	}
	.itemPro{
		color: #808080;
		font-size: 26rpx;
		margin-top: 20rpx;
	}
	.itemBot{
		display: flex;
		justify-content: space-between;
	}
	.itemBtn{
		/* margin-left: 300rpx; */
		width: 205rpx;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 26rpx;
	}
</style>
