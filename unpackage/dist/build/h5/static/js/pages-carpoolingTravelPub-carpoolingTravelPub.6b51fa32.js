(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-carpoolingTravelPub-carpoolingTravelPub"],{"01a0":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n="",i="",o="",c="找拼友",r="",d="微信",s="",l={data:function(){return{goodsTypeArr:["找拼友","车找人"],id:0,pccx_contact:"",pccx_time:"",pccx_number:"",buttonLoading:!1,currentIndex:0}},onLoad:function(){uni.getStorage({key:"uid",success:function(t){s=t.data}})},methods:{onOrignPlace:function(t){n=t.detail.value},onAimPlace:function(t){i=t.detail.value},onGoodDes:function(t){o=t.detail.value},bindPickerChange:function(t){this.currentIndex=t.detail.value,c=this.goodsTypeArr[this.currentIndex],console.log(c)},onCotactType:function(t){r=t.detail.value,1==t.currentTarget.dataset.typeid?d="QQ":2==t.currentTarget.dataset.typeid?d="微信":3==t.currentTarget.dataset.typeid&&(d="电话")},bindpccxSubmit:function(){var t=uni.getStorageSync("nickName"),a=(new Date).toLocaleDateString(),e={pccx_people:t,pccx_time:a,pccx_orignPlace:n,pccx_aimPlace:i,pccx_des:o,pccx_phonenum:r,contactType:d,goodsType:c,uid:s};console.log(e),uni.request({url:"http://58.87.94.58:4000/api/postPccxData",method:"POST",data:e,success:function(t){wx.showToast({title:"发布成功",icon:"success",success:function(t){uni.navigateTo({url:"../carpoolingTravel/carpoolingTravel"})}})}}),uni.hideLoading()}}};a.default=l},"0f3a":function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"index"},[e("v-uni-view",{staticClass:"tip"},[t._v("温馨提示：为方便大家，请确保发布信息的完整性和可靠性！")]),e("v-uni-input",{staticClass:"goodsName",attrs:{placeholder:"出发地"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.onOrignPlace.apply(void 0,arguments)}}}),e("v-uni-input",{staticClass:"goodsName",attrs:{placeholder:"目的地"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.onAimPlace.apply(void 0,arguments)}}}),e("v-uni-textarea",{staticClass:"goodsDescribe",attrs:{placeholder:"拼车详情(如: 9月6号上午10点到12点之间武汉站拼车回学校)"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.onGoodDes.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"contactTitle"},[t._v("发布类别：")]),e("v-uni-view",{staticClass:"goodsType"},[e("v-uni-picker",{staticClass:"picker",attrs:{value:t.index,range:t.goodsTypeArr},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.bindPickerChange.apply(void 0,arguments)}}},[t._v(t._s(t.goodsTypeArr[t.currentIndex]))])],1),e("v-uni-view",{staticClass:"contactTitle"},[t._v("联系方式：")]),e("v-uni-view",{staticClass:"contactType"},[e("v-uni-input",{staticClass:"goodsName",attrs:{placeholder:"QQ(选填)","data-typeId":"1"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.onCotactType.apply(void 0,arguments)}}}),e("v-uni-input",{staticClass:"goodsName",attrs:{placeholder:"微信(选填)","data-typeId":"2"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.onCotactType.apply(void 0,arguments)}}}),e("v-uni-input",{staticClass:"goodsName",attrs:{placeholder:"电话(选填)","data-typeId":"3"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.onCotactType.apply(void 0,arguments)}}})],1),e("v-uni-button",{staticClass:"form_type",attrs:{type:"primary",loading:t.buttonLoading},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.bindpccxSubmit.apply(void 0,arguments)}}},[t._v("立即发布")])],1)},o=[]},"730f":function(t,a,e){"use strict";var n=e("d3c7"),i=e.n(n);i.a},"88fd":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".index[data-v-168518ac]{background-color:#f1f1f1;height:100%}.tip[data-v-168518ac]{width:100%;color:#c99;font-size:%?28?%;text-align:center}.goodsName[data-v-168518ac]{width:94%;margin:%?20?% auto;height:%?70?%;line-height:%?70?%;background-color:#fff;padding-left:%?20?%}.goodsDescribe[data-v-168518ac]{width:94%;margin:%?20?% auto;background-color:#fff;padding-left:%?20?%;padding-top:%?20?%}.goodsType[data-v-168518ac]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?70?%;line-height:%?70?%;background-color:#fff;color:grey;width:94%;margin:%?20?% auto;padding-left:%?20?%}.contactTitle[data-v-168518ac]{margin-left:%?20?%}.form_type[data-v-168518ac]{width:96%;margin:0 auto}.image-list[data-v-168518ac]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin-top:%?20?%;margin-left:%?20?%;margin-bottom:%?20?%}.image-wrap[data-v-168518ac]{width:%?220?%;height:%?220?%;margin-right:%?10?%;margin-bottom:%?10?%;position:relative;overflow:hidden;text-align:center}.image[data-v-168518ac]{width:100%;height:100%}.icon-shanchu[data-v-168518ac]{position:absolute;top:0;right:0;width:%?40?%;height:%?40?%;background-color:#000;opacity:.4;color:#fff;text-align:center;line-height:%?40?%;font-size:%?38?%;font-weight:bolder}.selectphoto[data-v-168518ac]{border:%?2?% dashed #cbd1d7;position:relative}.icon-21[data-v-168518ac]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:#cbd1d7;font-size:%?60?%}",""]),t.exports=a},"9e8f":function(t,a,e){"use strict";e.r(a);var n=e("01a0"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},d3c7:function(t,a,e){var n=e("88fd");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("5c7b3d3f",n,!0,{sourceMap:!1,shadowMode:!1})},dd30:function(t,a,e){"use strict";e.r(a);var n=e("0f3a"),i=e("9e8f");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("730f");var c,r=e("f0c5"),d=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"168518ac",null,!1,n["a"],c);a["default"]=d.exports}}]);