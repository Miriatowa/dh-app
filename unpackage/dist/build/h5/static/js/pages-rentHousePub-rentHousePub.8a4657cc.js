(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-rentHousePub-rentHousePub"],{"0087":function(t,e,a){"use strict";a.r(e);var i=a("c52d"),n=a("4ec2");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("4b56");var s,c=a("f0c5"),l=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"594c70e9",null,!1,i["a"],s);e["default"]=l.exports},"4b56":function(t,e,a){"use strict";var i=a("e61f"),n=a.n(i);n.a},"4ec2":function(t,e,a){"use strict";a.r(e);var i=a("627b"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"627b":function(t,e,a){"use strict";(function(t){a("99af"),a("a434"),a("d3b7"),a("ac1f"),a("3ca3"),a("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=9,n="",o="",s="",c="租房",l="",d="",r="微信",u={data:function(){return{goodsTypeArr:["租房","出租"],id:0,zfhz_contact:"",zfhz_time:"",zfhz_img:"",zfhz_number:"",buttonLoading:!1,images:[],selectPhoto:!0,currentIndex:0,goodsUrl:[]}},onLoad:function(){uni.getStorage({key:"uid",success:function(t){t.data}})},methods:{onGoodTitle:function(t){n=t.detail.value},onAdress:function(t){console.log(t),o=t.detail.value},onGoodDes:function(t){s=t.detail.value},onGoodPrice:function(t){l=t.detail.value},bindPickerChange:function(t){this.currentIndex=t.detail.value,c=this.goodsTypeArr[this.currentIndex],console.log(c)},onCotactType:function(t){d=t.detail.value,1==t.currentTarget.dataset.typeid?r="QQ":2==t.currentTarget.dataset.typeid?r="微信":3==t.currentTarget.dataset.typeid&&(r="电话")},onChooseImage:function(){var t=this,e=i-this.images.length;uni.chooseImage({count:e,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(a){console.log(a),t.images=t.images.concat(a.tempFilePaths),e=i-t.images.length,t.selectPhoto=!(e<=0)}})},onDelImage:function(t){var e=t.target.dataset.index;this.images.splice(e,1);this.images=this.images,this.images.length<i&&(this.selectPhoto=!0)},onPreviewImage:function(t){uni.previewImage({urls:this.images,current:t.target.dataset.imgsrc})},bindzfhzSubmit:function(){var e=this;uni.showLoading({title:"发布中",mask:!0});for(var a=[],i=[],u=0;u<this.images.length;u++){var f=new Promise((function(a,n){var o=e.images[u],s=/\.\w+$/.exec(o)[0];t.uploadFile({cloudPath:"zfhz/"+Date.now()+"-"+1e6*Math.random()+s,filePath:o,success:function(t){i=i.concat(t.fileID),a()},fail:function(t){n()}})}));a.push(f)}Promise.all(a).then((function(t){var e=uni.getStorageSync("nickName"),a=(new Date).toLocaleDateString(),u={zfhz_people:e,zfhz_time:a,zfhz_name:n,zfhz_des:s,zfhz_address:o,zfhz_pri:l,zfhz_phonenum:d,contactType:r,goodsType:c,uid:"1466a14802e8e59bbdc06f30730dafde",goodsUrl:"".concat(i)};console.log(u),uni.request({url:"http://58.87.94.58:4000/api/postZfhzData",method:"POST",data:u,success:function(t){wx.showToast({title:"发布成功",icon:"success",success:function(t){uni.navigateTo({url:"../rentHouse/rentHouse"})}})}})})).catch((function(t){wx.hideLoading(),console.log(t),wx.showToast({title:"发布失败"})})),uni.hideLoading(),console.log(this.goodsUrl)}}};e.default=u}).call(this,a("a9ff")["default"])},aaf2:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".index[data-v-594c70e9]{background-color:#f1f1f1;height:100%}.tip[data-v-594c70e9]{width:100%;color:#c99;font-size:%?28?%;text-align:center}.goodsName[data-v-594c70e9]{width:94%;margin:%?20?% auto;height:%?70?%;line-height:%?70?%;background-color:#fff;padding-left:%?20?%}.goodsDescribe[data-v-594c70e9]{width:94%;margin:%?20?% auto;background-color:#fff;padding-left:%?20?%;padding-top:%?20?%}.goodsType[data-v-594c70e9]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?70?%;line-height:%?70?%;background-color:#fff;color:grey;width:94%;margin:%?20?% auto;padding-left:%?20?%}.contactTitle[data-v-594c70e9]{margin-left:%?20?%}.form_type[data-v-594c70e9]{width:96%;margin:0 auto}.image-list[data-v-594c70e9]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin-top:%?20?%;margin-left:%?20?%;margin-bottom:%?20?%}.image-wrap[data-v-594c70e9]{width:%?220?%;height:%?220?%;margin-right:%?10?%;margin-bottom:%?10?%;position:relative;overflow:hidden;text-align:center}.image[data-v-594c70e9]{width:100%;height:100%}.icon-shanchu[data-v-594c70e9]{position:absolute;top:0;right:0;width:%?40?%;height:%?40?%;background-color:#000;opacity:.4;color:#fff;text-align:center;line-height:%?40?%;font-size:%?38?%;font-weight:bolder}.selectphoto[data-v-594c70e9]{border:%?2?% dashed #cbd1d7;position:relative}.icon-21[data-v-594c70e9]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:#cbd1d7;font-size:%?60?%}",""]),t.exports=e},c52d:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"index"},[a("v-uni-view",{staticClass:"tip"},[t._v("温馨提示：为方便大家，请确保发布信息的完整性和可靠性！")]),a("v-uni-input",{staticClass:"goodsName",attrs:{placeholder:"标题  如:(合租·紫阳金利屋4居室-南卧)"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.onGoodTitle.apply(void 0,arguments)}}}),a("v-uni-input",{staticClass:"goodsName",attrs:{placeholder:"地址  如:(合租·紫阳金利屋4居室-南卧)"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.onAdress.apply(void 0,arguments)}}}),a("v-uni-textarea",{staticClass:"goodsDescribe",attrs:{placeholder:"商品描述"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.onGoodDes.apply(void 0,arguments)}}}),a("v-uni-input",{staticClass:"goodsName",attrs:{placeholder:"预期租金",type:"number"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.onGoodPrice.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"contactTitle"},[t._v("发布类别：")]),a("v-uni-view",{staticClass:"goodsType"},[a("v-uni-picker",{staticClass:"picker",attrs:{value:t.index,range:t.goodsTypeArr},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPickerChange.apply(void 0,arguments)}}},[t._v(t._s(t.goodsTypeArr[t.currentIndex]))])],1),a("v-uni-view",{staticClass:"contactTitle"},[t._v("联系方式：")]),a("v-uni-view",{staticClass:"contactType"},[a("v-uni-input",{staticClass:"goodsName",attrs:{placeholder:"QQ(选填)","data-typeId":"1"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.onCotactType.apply(void 0,arguments)}}}),a("v-uni-input",{staticClass:"goodsName",attrs:{placeholder:"微信(选填)","data-typeId":"2"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.onCotactType.apply(void 0,arguments)}}}),a("v-uni-input",{staticClass:"goodsName",attrs:{placeholder:"电话(选填)","data-typeId":"3"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.onCotactType.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"contactTitle"},[t._v("上传图片：")]),a("v-uni-view",{staticClass:"image-list"},[t._l(t.images,(function(e,i){return[a("v-uni-view",{key:i+"_0",staticClass:"image-wrap"},[a("v-uni-image",{staticClass:"image",attrs:{src:e,mode:"aspectFill","data-imgsrc":e},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onPreviewImage.apply(void 0,arguments)}}}),a("i",{staticClass:"iconfont icon-shanchu",attrs:{"data-index":i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onDelImage.apply(void 0,arguments)}}})],1)]})),a("v-uni-view",{staticClass:"image-wrap selectphoto",attrs:{hidden:!t.selectPhoto},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onChooseImage.apply(void 0,arguments)}}},[a("i",{staticClass:"iconfont icon-21"})])],2),a("v-uni-button",{staticClass:"form_type",attrs:{type:"primary",loading:t.buttonLoading},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindzfhzSubmit.apply(void 0,arguments)}}},[t._v("立即发布")])],1)},o=[]},e61f:function(t,e,a){var i=a("aaf2");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("261ae19b",i,!0,{sourceMap:!1,shadowMode:!1})}}]);