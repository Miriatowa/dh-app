<template>
	<view class="container" >
	  <form class="loginFrom" @submit="onSubmit">
		  <view class="pageTitle">登录/注册</view>
	    <view class="formItem">
	      <input class="inputStyle" name="txtUserName" placeholder="请输入学号" maxlength='11' @input="onIdCard" />
	    </view>
	    <view class="formItem">
	      <input class="inputStyle" name="TextBox2" placeholder="请输入密码" type="password" @input="onPassWord" />
	    </view>
	    <view class="formItem">
	        <input class="inputCode" name="txtSecretCode" placeholder="验证码"  maxlength='4' @input="onCode"/>
	        <image :src="codeUrl" class="codeImg"></image>
	    </view>
		 <button  class="subBtn" type="primary" form-type="submit">登录</button>
	  </form>
	</view>
</template>

<script>
	let userInfo=''
	let loginCode=''
	var jwxtId=""
	var jwxtPwd=""
	var jwxtCode=""
	export default {
		data() {
			return {
				codeUrl:'',
			}
		},
		onLoad() {
			let that = this;
			    uni.request({
			      // url: 'http://58.87.94.58:4000/api/getCode',
				  url: "http://127.0.0.1:4000/api/getCode",
			      success:(res)=> {
					  console.log(res)
			        that.codeUrl= "data:image/JPG;base64," + res.data
			      }
			    })
		},
		methods: {
			onIdCard(e){
				jwxtId=e.detail.value
			},
			onPassWord(e){
				jwxtPwd=e.detail.value
			},
			onCode(e){
				jwxtCode=e.detail.value
			},
			onSubmit(){
				uni.request({
				    // url: "http://58.87.94.58:4000/api/appLogin",
					url: "http://127.0.0.1:4000/api/appLogin",
				    method: 'POST',
														 data:{
															jwxtId,
															jwxtPwd,
															jwxtCode,
														 },							
				    success: (res) => {
															if(res.statusCode == 200){
																uni.setStorage({
																		    key: 'uid',
																		    data: res.data[0].userId,
																		    success: function () {
																		        uni.switchTab({
																		        		url:"../index/index"
																		        	})
																		    }
																		});										  
																
																}else{
																	uni.showModal({
																		title:"提示",
																		content:"用户名或者密码错误",
																		 success: function (res) {
																		        uni.redirectTo({
																		        	url:"../login/login"
																		        })
																		    }
																	})			
																			
																		}
				        uni.hideLoading();
				    }
				});
			},
		}
	}
</script>

<style>
	.container{
		height: 100vh;
		width: 100vw;
		/* background-image: url("https://yanxuan.nosdn.127.net/d6b782fd459c6ce703afa0251fc91ca6.jpg"); */
		background-image: url("https://yanxuan.nosdn.127.net/195a1d9d7844cc0f3086685034530816.jpg");
		background-position: right bottom, left top; 
		background-size:100% 100%;
		background-repeat:no-repeat; 
		position: relative;
		z-index: 1;
	}
	.loginFrom{
		background-color: rgba(255,255,255,0.5);
		position: absolute;
		z-index: 99;
		border-radius: 10rpx;
		left: 5%;
		top: 25%;
		width: 90%;
	}
	.formItem{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.codeImg{
		width: 144rpx;
		height: 80rpx;
		margin-top: 30rpx;
	}
	.pageTitle{
		color: #CC9999;
		font-size: 40rpx;
		font-size: bold;
		padding: 40rpx 0rpx 25rpx 250rpx;
		border-bottom: 6rpx solid #CC9999;
	}
	.inputStyle{
		height: 80rpx;
		line-height: 80rpx;
		background-color: rgb(255,255,255,0.8);
		color: #808080;
		margin-top: 30rpx;
		width: 80%;
		padding-left: 20rpx;
		border-radius: 10rpx;
	}
	.inputCode{
		height: 80rpx;
		line-height: 80rpx;
		background-color: rgb(255,255,255,0.8);
		color: #808080;
		margin-top: 30rpx;
		width: 59%;
		padding-left: 20rpx;
		border-bottom-left-radius: 10rpx;
		border-top-left-radius: 10rpx;
	}
	.subBtn{
		width: 90%;
		margin-top: 50rpx;
		margin-bottom: 30rpx;
	}
</style>