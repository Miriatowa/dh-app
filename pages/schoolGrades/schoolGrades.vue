<template>
	
	<view>
		<button type="primary" class="queryBtn" @click="queryTermGrades">本学期成绩查询</button>
		<button type="primary" class="queryBtn" @click="queryYearGrades">本学年成绩查询</button>
		<button type="primary" class="queryBtn" @click="queryAllGrades">在校成绩查询</button>
		
		
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			queryTermGrades(){
				uni.navigateTo({
					url:`../gradesTable/gradesTable?id=1`
				})
			},
			queryYearGrades(){
				uni.navigateTo({
					url:`../gradesTable/gradesTable?id=2`
				})
			},
			queryAllGrades(){
				uni.navigateTo({
					url:`../gradesTable/gradesTable?id=5`
				})
			},
		},
		
	}
</script>

<style>
	.queryBtn{
		width: 90%;
		margin-top: 100rpx;
		margin-bottom: 50rpx;
	}
</style>
