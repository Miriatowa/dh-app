<template>
	<view class="index">
		<!-- 二手闲置发布 -->
		  <view class="tip">
		           温馨提示：为方便大家，请确保发布信息的完整性和可靠性！
		  </view>
		  <input placeholder="物品名称" class="goodsName" @input="onGoodName"/>
		  <textarea placeholder="商品描述" class="goodsDescribe" @input="onGoodDes"></textarea>
		  <view class="contactTitle">发布类别：</view>
		  <view class="goodsType">
		  	<picker @change="bindPickerChange" :value="index" :range="goodsTypeArr"  class="picker">
		  	   {{goodsTypeArr[currentIndex]}}
		  	</picker>
			</view>
		  <view class="contactTitle">联系方式：</view>
		  <view class="contactType">
			<input placeholder="QQ(选填)" class="goodsName" @input="onCotactType" data-typeId='1' />
			<input placeholder="微信(选填)" class="goodsName" @input="onCotactType" data-typeId='2' />
			<input placeholder="电话(选填)" class="goodsName" @input="onCotactType" data-typeId='3' />
		  </view>
		      <button class="form_type" type="primary" @click="bindswzlSubmit" :loading="buttonLoading" >
		          立即发布
		      </button>
		
		</view>
</template>

<script>
	// 商品名称
	let swzl_name=''
	// 商品描述
	let swzl_des=''
	// 商品类别
	let goodsType='寻物启事'
	// 联系方式
	let swzl_phonenum=''
	// 联系类型
	let contactType="微信"
	// 用户id
	let uid=""
	export default {
		data() {
			return {
				goodsTypeArr: ['寻物启事','招领启事'],
				    id:0,
					swzl_contact:"",
					swzl_time:"",
					swzl_number:"",
					 // 按钮等待数据
					buttonLoading: false,
					currentIndex:0,
			}
		},
		onLoad(){
			uni.getStorage({
			    key: 'uid',
			    success: function (res) {
			        uid=res.data;
			    }
			});
		},
		methods: {
			// // 发布人数据获取
			// getswzlPeople: function(e){
			//   var that = this;
			//   that.setData({
			//     swzl_people: that.data.nickName
			//   })
			// },
			// 商品名称
			onGoodName(e){
			    swzl_name= e.detail.value
			},
			// 商品描述
			onGoodDes(e){
				swzl_des=e.detail.value
			},
			// 商品种类数据获取
			bindPickerChange(e) {
			  this.currentIndex= e.detail.value,
			  goodsType=this.goodsTypeArr[this.currentIndex]
			  console.log(goodsType)
			},
			onCotactType(e){
				swzl_phonenum=e.detail.value
				if(e.currentTarget.dataset.typeid == 1){
					contactType="QQ"
				}else if(e.currentTarget.dataset.typeid == 2){
					contactType="微信"
				}else if(e.currentTarget.dataset.typeid == 3){
					contactType="电话"
				}
			},
			// 数据提交
			bindswzlSubmit(){
				 var swzl_people="Miraitowa"
				 var swzl_time=new Date().toLocaleDateString();
				 var postdata={
				 	swzl_people,
				 	swzl_time,
				 	swzl_name,
				 	swzl_des,
				 	swzl_phonenum,
				 	contactType,
				 	goodsType,
				 	uid,
				 }
				 console.log(postdata)
				 uni.request({
				 	url:"http://127.0.0.1:8000/api/postSwzlData",
				 	method:"POST",
				 	data:postdata,
				 	success: (res) => {
				 		wx.showToast({
				 		  title: '发布成功',
						  icon:"success",
						  success: (res) => {
						  	uni.navigateTo({
						  		url:'../lostAndFound/lostAndFound'
						  	})
						  }
				 		})
				 	}
				 })
				uni.hideLoading()
				
			}
		}
	}
</script>

<style>
	.index{
		background-color: #F1F1F1;
		height: 100%;
	}
	.tip {
	  width: 100%;
	  color: #CC9999;
	  font-size: 28rpx;
	  text-align: center;
	}
	.goodsName{
		width: 94%;
		margin: 20rpx auto;
		height: 70rpx;
		line-height: 70rpx;
		background-color: #FFFFFF;
		padding-left: 20rpx;
	}
	.goodsDescribe{
		width: 94%;
		margin: 20rpx auto;
		background-color: #FFFFFF;
		padding-left: 20rpx;
		padding-top: 20rpx;
	}
	.goodsType{
		display: flex;
		height: 70rpx;
		line-height: 70rpx;
		background-color: #FFFFFF;
		color: #808080;
		width: 94%;
		margin: 20rpx auto;
		padding-left: 20rpx;
	}
	.contactTitle{
		margin-left: 20rpx;
	}
	.form_type{
		width: 96%;
		margin: 0 auto;
	}
	.image-list {
	  display: flex;
	  flex-wrap: wrap;
	  margin-top: 20rpx;
	  margin-left: 20rpx;
	  margin-bottom: 20rpx;
	}
	
	.image-wrap {
	  width: 220rpx;
	  height: 220rpx;
	  margin-right: 10rpx;
	  margin-bottom: 10rpx;
	  position: relative;
	  overflow: hidden;
	  text-align: center;
	}
	
	.image {
	  width: 100%;
	  height: 100%;
	}
	
	.icon-shanchu {
	  position: absolute;
	  top: 0;
	  right: 0;
	  width: 40rpx;
	  height: 40rpx;
	  background-color: #000;
	  opacity: 0.4;
	  color: #fff;
	  text-align: center;
	  line-height: 40rpx;
	  font-size: 38rpx;
	  font-weight: bolder;
	}
	
	.selectphoto {
	  border: 2rpx dashed #cbd1d7;
	  position: relative;
	}
	
	.icon-21 {
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  transform: translate(-50%, -50%);
	  color: #cbd1d7;
	  font-size: 60rpx;
	}
</style>
