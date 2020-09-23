<template>
	<view class="index">
		<view class="top">
			<swiper indicator-dots circular autoplay="true" indicator-active-color="#CC9999" class="swiper">
			    <swiper-item  v-for="(item,index) in swiperArr" :key="index">
			      <image :src="item"></image>
			    </swiper-item>
			  </swiper>
			  <view class="title"><icon class="iconfont icon-hi" style="color: #CC9999;margin-right: 10rpx;"></icon>同学，欢迎进入DH生活通</view>
		</view>
		<view class="bottom">
			<view class="bottomItem">
				<view class="itemTitle">
					信息查询
				</view>
				<view class="bottomContent">
					<navigator url="../schoolGrades/schoolGrades" hover-class="none"><view class="bottomContentItem"><image src="../../static/fonts/iconImg/chengjichaxun.png"></image><view>在校成绩</view></view></navigator>
					<navigator url="../gradeExamination/gradeExamination" hover-class="none"><view class="bottomContentItem"><image src="../../static/fonts/iconImg/siliujichaxun.png"></image><view>等级考试</view></view></navigator>
					<navigator url="../schoolCalendar/schoolCalendar" hover-class="none"><view class="bottomContentItem"><image src="../../static/fonts/iconImg/rili.png"></image><view>东大校历</view></view></navigator>
					<navigator url="../schoolMap/schoolMap" hover-class="none"><view class="bottomContentItem"><image src="../../static/fonts/iconImg/ditu.png"></image><view>东大地图</view></view></navigator>
					<view class="bottomContentItem"><image src="../../static/fonts/iconImg/weijichufen.png"></image><view>违纪处分</view></view>
				</view>
				
			</view>
			<view class="bottomItem">
				<view class="itemTitle">
					生活服务
				</view>
				<view class="bottomContent">
					<navigator url="../secondHand/secondHand" hover-class="none"><view class="bottomContentItem"><image src="../../static/fonts/iconImg/ershoushichang.png"></image><view>二手市场</view></view></navigator>
					<navigator url="../lostAndFound/lostAndFound" hover-class="none"><view class="bottomContentItem"><image src="../../static/fonts/iconImg/shiwuzhaoling.png"></image><view>失物招领</view></view></navigator>
					<navigator url="../rentHouse/rentHouse" hover-class="none"><view class="bottomContentItem"><image src="../../static/fonts/iconImg/loufang.png"></image><view>租房合租</view></view></navigator>
					<navigator url="../runningServices/runningServices" hover-class="none"><view class="bottomContentItem"><image src="../../static/fonts/iconImg/waimai.png"></image><view>跑腿代步</view></view></navigator>
					<navigator url="../repairPhone/repairPhone" hover-class="none"><view class="bottomContentItem"><image src="../../static/fonts/iconImg/weixiu.png"></image><view>后勤维修</view></view></navigator>
					<navigator url="../carpoolingTravel/carpoolingTravel" hover-class="none"><view class="bottomContentItem"><image src="../../static/fonts/iconImg/qiche.png"></image><view>拼车出行</view></view></navigator>
				</view>
				
			</view>
			<view class="bottomItem">
				<view class="itemTitle">
					常用工具
				</view>
				<view class="bottomContent">
					<view class="bottomContentItem"><image src="../../static/fonts/iconImg/pinggugongzuo.png"></image><view>自动评教</view></view>
					<view class="bottomContentItem"><image src="../../static/fonts/iconImg/wangke.png"></image><view>自动抢课</view></view>
					<view class="bottomContentItem"><image src="../../static/fonts/iconImg/xinlijiangkang.png"></image><view>心理咨询</view></view>
				</view>
				
			</view>
			<view class="bottomItem">
				<view class="itemTitle">
					社团建设
				</view>
				<view class="bottomContent">
					<navigator url="../schoolCommunity/schoolCommunity" hover-class="none">
						<view class="bottomContentItem"><image src="../../static/fonts/iconImg/shetuan.png"></image><view>社团展示</view></view>
					</navigator>
				</view>
				
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 轮播图数据
				swiperArr:["https://yanxuan.nosdn.127.net/78c8024805b6c54b8a489f371e8256e5.png","https://yanxuan.nosdn.127.net/c20826eb55aa68ccc1322572e648367d.png","https://yanxuan.nosdn.127.net/c1a3cda87b428c2780bbaa602ed889e4.png","https://yanxuan.nosdn.127.net/3e34ff435abd547deeee02ce379417fc.png"],
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.top{
		margin: 20rpx 0rpx;
		border-bottom: 10rpx solid #F1F1F1;
	}
	.swiper{
		height: 250rpx;
		padding: 0rpx 20rpx;
		display: flex;
		justify-content: center;
		background-color: #FFFFFF;
	}
	swiper-item{
		
	}
	swiper-item image{
		height: 250rpx;
		width: 100%;
		border-radius: 16rpx;
	}
	.title{
		margin: 20rpx;
		color: #808080;
	}
	.itemTitle{
		border-left: 10rpx solid #CC9999;
		padding-left: 18rpx;
		font-weight: bold;
	}
	.bottomItem{
		margin-left: 16rpx;
	}
	.bottomContent{
		display: flex;
		/* justify-content: space-between; */
		flex-wrap: wrap;
		margin-left: 12rpx;
	}
	.bottomContentItem{
			margin-bottom: 20rpx;
			margin-top: 18rpx;
			width: 180rpx;
			height: 180rpx;
			font-size: 26rpx;
	}
	.bottomContentItem image{
		width: 90rpx;
		height: 90rpx;
	}
</style>
