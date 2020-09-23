<template>
	<view>
		<view class="tapBar">
			<navigator class="barItem" hover-class="none" url="../secondHand/secondHand">
				<image src="../../static/fonts/iconImg/ershoushichang.png"></image><view class="txt">二手闲置</view>
			</navigator>
			<navigator class="barItem" hover-class="none" url="../lostAndFound/lostAndFound">
				<image src="../../static/fonts/iconImg/shiwuzhaoling.png"></image><view class="txt">失物招领</view>
			</navigator>
			<navigator class="barItem" hover-class="none" url="../runningServices/runningServices">
				 <image src="../../static/fonts/iconImg/waimai.png"></image><view class="txt">代跑服务</view>
			</navigator>
			<navigator class="barItem" hover-class="none" url="../carpoolingTravel/carpoolingTravel">
				<image src="../../static/fonts/iconImg/qiche.png"></image><view class="txt">拼车出行</view>
			</navigator>
			<navigator class="barItem" hover-class="none" url="../rentHouse/rentHouse">
				<image src="../../static/fonts/iconImg/loufang.png"></image><view class="txt">租房合租</view>
			</navigator>
			<navigator class="barItem" hover-class="none">
				<image src="../../static/fonts/iconImg/liuyan.png"></image><view class="txt">校园树洞</view>
			</navigator>
		</view>
		<view class="searchTabar">
			<search ></search>
		</view>
		<view class="order" >
					<view @click="selectOrder" style="color: #CC9999;">{{selectArray[selIndex]}}<icon :class="maskParams.isSelect==true ? 'iconfont icon-shang1' : 'iconfont icon-xia1'"  style="margin-left: 6rpx;"></icon></view>
					<view @click="selectBysale">浏览量</view>
					<view class="orderRight">
						<icon :class="crossWiseTtyle==true ? 'iconfont icon-shuping' : 'iconfont icon-hengshuqiehuanshu'" style="font-size: 36rpx;" @click="toggleStyle"></icon>
						<icon class="iconfont icon-vertical_line" style="margin: 0rpx 18rpx 0rpx 14rpx;"></icon>
						筛选<icon class="iconfont icon-shaixuan" style="font-size: 32rpx;"></icon></view>
					<!-- 排序遮罩层 -->
					<orderMask :maskShow="maskParams">
						<form slot="modal-content" report-submit="true" >
							<view v-for="(item,index) in selectArray" :key="index" >
								<view  @click="select_type" :data-index="index" :class="index == sel_index ? 'select_item' : 'no_select_item'">
									{{item}}<icon class="iconfont icon-xuanzhong" style="right: 20rpx;" ></icon>
								</view>
							</view>						 
						 </form>
					</orderMask>
				</view>
				<view class="contentBox">
					<block v-for="(item,index) in swArr" :key="index">
						<view class="lostItem">
							<view class="lostTop">
								<icon class="iconfont icon-sousuofangdajing" style="margin-bottom: 10rpx;margin-right: 13rpx;"></icon>
								<view class="lostName">{{item.name}}</view>
								
							</view>
							<view class="lostMid">
								<view class="lostMidTitle">寻物启示：</view>
								{{item.content}}
							</view>
							<view class="lostBottom">
								<view class="contact"><icon class="iconfont icon-shouji"></icon>{{item.contactType}}: {{item.contactNum}}</view>
								<view class="time">{{item.publishTime}}</view>
							</view>
						</view>
					</block>
				</view>
	</view>
</template>

<script>
	import orderMask from "../../components/mask.vue"
	import search from "../../components/search.vue"
	let tapBarHeight=''
	let searchTabarHeight=''
	export default {
		data() {
			return {
				selectArray:["最新发布","浏览量","点赞量",],
				selIndex:0,
				maskParams:{isSelect:false,topDis:400},
				swArr:[],
			}
		},
		onReady() {
			var _this=this
			uni.getSystemInfo({ 
				success:(res)=> { //成功回调函数
				console.log(res.windowHeight)
					_this.scrollHeight=res.windowHeight
				}
			})
			uni.createSelectorQuery().select(".tapBar").boundingClientRect(data=>{
											tapBarHeight=data.height
										}).exec()
			uni.createSelectorQuery().select(".searchTabar").boundingClientRect(data=>{
								searchTabarHeight=data.height
																	}).exec()
			uni.createSelectorQuery().select(".searchTabar").boundingClientRect(data=>{
											this.maskParams.topDis=(data.height + tapBarHeight+searchTabarHeight)*2+50
										}).exec()
		},
		onLoad() {
				uni.request({
					url:'http://127.0.0.1:8000/api/querySwzlData',
					method:"POST",
					data:{
						publishType:"寻物启事"
					},
					success:(res)=> {
						console.log(res)
						this.swArr=res.data
					}
					
				})
		},
		methods: {
			selectOrder(){
				this.maskParams.isSelect=!this.maskParams.isSelect
			},
			select_type(e){
				this.selIndex=e.target.dataset.index
				// if(e.target.dataset.index==1){
				// 	this.bill=this.bill.sort(function(a,b){return b.price-a.price});
				// }
				// if(e.target.dataset.index==2){
				// 	this.bill=this.bill.sort(function(a,b){return a.saled-b.saled});
				// }
				// if(e.target.dataset.index==3){
				// 	this.bill=this.bill.sort(function(a,b){return b.saled-a.saled});
				// }
				this.maskParams.isSelect=false
			},
		},
		components:{
			orderMask,
			search,
		}
	}
</script>

<style scoped>
	.tapBar{
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #FFFFFF;
		flex-wrap: wrap;
		flex-direction: row;
	}
	.barItem{
		width: 250rpx;
		margin-top: 40rpx;
	}
	.barItem image{
		width: 90rpx;
		height: 90rpx;
		margin-left: 75rpx;
	}
	.txt{
		margin-left: 55rpx;
		color: #808080;
	}
	.order{
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 100rpx;
		background-color: #FFFFFF;
		color: #808080;
		border-bottom: 4rpx solid #F1F1F1;
	}
	.orderRight{
		line-height: 100rpx;
	}
	.searchTabar{
		margin-top: 30rpx;
		margin-bottom: 20rpx;
	}
	.select_item{
		margin-top: 20rpx;
		margin-bottom: 10rpx;
		color: #D43C43;
		position: relative;
		padding-left: 20rpx;
	}
	.no_select_item{
		margin-top: 20rpx;
		position: relative;
		padding-left: 20rpx;
	}
	.select_item:last-child{
		margin-bottom: 20rpx;
	}
	.no_select_item:last-child{
		margin-bottom: 20rpx;
	}
	.lostItem{
		padding: 0rpx 20rpx;
		background-color: #FFFFFF;
		border-top: 6rpx solid #F1F1F1;
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
