<template>
	<view class="index">
		<!-- 二手闲置发布 -->
		  <view class="tip">
		           温馨提示：为方便大家，请确保发布信息的完整性和可靠性！
		  </view>
		  <input placeholder="商品名称" class="goodsName" @input="onGoodName"/>
		  <textarea placeholder="商品描述" class="goodsDescribe" @input="onGoodDes"></textarea>
		  <input placeholder="商品售价" class="goodsName" @input="onGoodDPrice" type="number"/>
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
		  <view class="contactTitle">上传图片：</view>
		 <view class="image-list">
		   <!-- 显示图片 -->
		   <block v-for="(item,index) in images" :key="index">
		     <view class="image-wrap">
		       <image class="image" :src="item" mode="aspectFill" @click="onPreviewImage" :data-imgsrc="item"></image>
		       <i class="iconfont icon-shanchu" @click="onDelImage" :data-index="index"></i>
		     </view>
		   </block>
		 
		   <!-- 选择图片 -->
		   <view class="image-wrap selectphoto" :hidden="!selectPhoto" @click="onChooseImage">
		     <i class="iconfont icon-21"></i>
		   </view>
		 
		 </view>
		      <button class="form_type" type="primary" @click="bindEsxzSubmit" :loading="buttonLoading" >
		          立即发布
		      </button>
		
		</view>
</template>

<script>
	// 上传图片最大数量
	let MAX_IMG_NUM=9
	// 商品名称
	let esxz_name=''
	// 商品描述
	let esxz_des=''
	// 商品类别
	let goodsType='生活用品'
	// 商品价格
	let esxz_pri=''
	// 联系方式
	let esxz_phonenum=''
	// 联系类型
	let contactType="微信"
	// 用户id
	let uid=""
	export default {
		data() {
			return {
				goodsTypeArr: ['生活用品','宿舍电器','闲置书籍','美妆护肤','视频会员','电子产品','美味零食','时尚服装','潮流鞋子'],
				    id:0,
					esxz_contact:"",
					esxz_time:"",
					esxz_img:"",
					esxz_number:"",
					 // 按钮等待数据
					buttonLoading: false,
					images: [],
					selectPhoto:true,
					currentIndex:0,
					goodsUrl:[]
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
			// getEsxzPeople: function(e){
			//   var that = this;
			//   that.setData({
			//     esxz_people: that.data.nickName
			//   })
			// },
			// 商品名称
			onGoodName(e){
			    esxz_name= e.detail.value
			},
			// 商品描述
			onGoodDes(e){
				esxz_des=e.detail.value
			},
			// 商品价格
			onGoodDPrice(e){
				esxz_pri=e.detail.value
			},
			// 商品种类数据获取
			bindPickerChange(e) {
			  this.currentIndex= e.detail.value,
			  goodsType=this.goodsTypeArr[this.currentIndex]
			  console.log(goodsType)
			},
			onCotactType(e){
				esxz_phonenum=e.detail.value
				if(e.currentTarget.dataset.typeid == 1){
					contactType="QQ"
				}else if(e.currentTarget.dataset.typeid == 2){
					contactType="微信"
				}else if(e.currentTarget.dataset.typeid == 3){
					contactType="电话"
				}
			},
			// 选择图片
			onChooseImage(){
			  let max = MAX_IMG_NUM - this.images.length
			  uni.chooseImage({
			    count: max,
			    sizeType: ['original', 'compressed'],
			    sourceType: ['album', 'camera'],
			    success: (res)=> {
					console.log(res)
			        this.images= this.images.concat(res.tempFilePaths)
			      // 还能再选几张图片
			      max = MAX_IMG_NUM - this.images.length
			        this.selectPhoto= max <= 0 ? false : true
			    },
			  })
			},
			// 删除图片
			onDelImage(e){
			  var index=e.target.dataset.index
			  var array=this.images.splice(index,1)
			  this.images=this.images
			  if (this.images.length < MAX_IMG_NUM){
			      this.selectPhoto=true
			  }
			},
			// 预览图片
			onPreviewImage(e){
			  uni.previewImage({
			    urls: this.images,
			    current: e.target.dataset.imgsrc
			  })
			},
			// 数据提交
			bindEsxzSubmit(){
				// 上传图片
				uni.showLoading({
				  title: '发布中',
				  mask: true,
				})
				let promiseArr = []
				let fileIds = []
				// 上传图片到云存储
				for(var i=0;i<this.images.length;i++){
				  let p = new Promise((resolve, reject) => {
				    let item = this.images[i]
				    // 文件扩展名
				    let suffix = /\.\w+$/.exec(item)[0]
				    uniCloud.uploadFile({
				      cloudPath: 'DH/' + Date.now() + '-' + Math.random() * 1000000 + suffix,
				      filePath: item,
				      success: (res) => {
				        fileIds = fileIds.concat(res.fileID)
				        resolve()
				      },
				      fail: (err) => {
				        reject()
				      }
				    })
				   })
				  promiseArr.push(p)
				}
				Promise.all(promiseArr).then((res) => {
				 var esxz_people="Miraitowa"
				 var esxz_time=new Date().toLocaleDateString();
				 let idStr = Date.now().toString(36)
				 idStr += Math.random().toString(36).substr(3)
				 var postdata={
				 	esxz_people,
				 	esxz_time,
				 	esxz_name,
				 	esxz_des,
				 	esxz_pri,
				 	esxz_phonenum,
				 	contactType,
				 	goodsType,
				 	uid,
					idStr,
				 	goodsUrl:`${fileIds}`
				 }
				 console.log(postdata)
				 uni.request({
				 	url:"http://127.0.0.1:8000/api/postEsxzData",
				 	method:"POST",
				 	data:postdata,
				 	success: (res) => {
				 		wx.showToast({
				 		  title: '发布成功',
						  icon:"success",
						  success: (res) => {
						  	uni.navigateTo({
						  		url:'../secondHand/secondHand'
						  	})
						  }
				 		})
				 	}
				 })
				}).catch((err) => {
				  wx.hideLoading()
				  console.log(err)
				  wx.showToast({
				    title: '发布失败',
				  })
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
