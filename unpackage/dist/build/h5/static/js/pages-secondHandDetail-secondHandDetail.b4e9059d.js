(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-secondHandDetail-secondHandDetail"],{"0c6b":function(t,o,e){var i=e("24fb");o=i(!1),o.push([t.i,".swiper[data-v-431b0ff2]{width:100%;height:%?500?%}.good_img[data-v-431b0ff2]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?500?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;border-bottom:1px solid #e4e4e4}.good_details .good_content[data-v-431b0ff2]{padding-top:%?70?%;padding-left:%?50?%;margin-top:%?10?%;border-bottom:1px solid #e4e4e4;border-top:1px solid #e4e4e4}.good_details .good_content .good_name[data-v-431b0ff2]{margin:%?15?% 0;font-size:%?60?%;font-weight:500}.good_details .good_content .good_seller_name[data-v-431b0ff2]{color:#c8c8c8;margin:%?15?% 0}.good_details .good_content .good_seller_price[data-v-431b0ff2]{color:#c8c8c8;margin:%?15?% 0}.good_details .good_content .good_number[data-v-431b0ff2]{color:#c8c8c8;margin:%?15?% 0;padding-right:%?10?%;margin-bottom:%?70?%}.good_details .good_content .good_qq[data-v-431b0ff2]{color:#c8c8c8;margin:%?15?% 0}.good_details .good_content .good_wx[data-v-431b0ff2]{color:#c8c8c8;margin:%?15?% 0}.good_details .good_content .good_data[data-v-431b0ff2]{color:#c8c8c8;margin:%?15?% 0}.good_details .btm_tool_wrap[data-v-431b0ff2]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?100?%;width:100%;background-color:#fff;position:fixed;bottom:0;left:0}.good_details .btm_tool_wrap .btm_item[data-v-431b0ff2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center}.good_details .btm_tool_wrap .cart[data-v-431b0ff2]{position:relative}.good_details .btm_tool_wrap .cart .iconfont[data-v-431b0ff2]{position:absolute;top:%?30?%;left:%?35?%}.good_details .btm_tool_wrap .share[data-v-431b0ff2]{position:relative}.good_details .btm_tool_wrap .share .icon-fenxiang[data-v-431b0ff2]{position:absolute;top:%?20?%;left:%?30?%}.good_details .btm_tool_wrap .share uni-button[data-v-431b0ff2]{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0}.good_details .btm_tool_wrap .cart[data-v-431b0ff2]{position:relative}.good_details .btm_tool_wrap .cart .icon-shoucang[data-v-431b0ff2]{position:absolute;top:%?25?%;left:%?35?%}.good_details .btm_tool_wrap .add_collection[data-v-431b0ff2]{-webkit-box-flex:2;-webkit-flex:2;flex:2;color:#fff;background-color:#eb4450;font-size:%?32?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.good_details .btm_tool_wrap .contact_now[data-v-431b0ff2]{-webkit-box-flex:2;-webkit-flex:2;flex:2;color:#fff;background-color:#c99;font-size:%?32?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}",""]),t.exports=o},"38bd":function(t,o,e){"use strict";e.r(o);var i=e("e77e"),a=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(o,t,(function(){return i[t]}))}(n);o["default"]=a.a},"8e5d":function(t,o,e){"use strict";var i=e("a2ec"),a=e.n(i);a.a},a2ec:function(t,o,e){var i=e("0c6b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("5f2e70c7",i,!0,{sourceMap:!1,shadowMode:!1})},d096:function(t,o,e){"use strict";e.r(o);var i=e("f7c1"),a=e("38bd");for(var n in a)"default"!==n&&function(t){e.d(o,t,(function(){return a[t]}))}(n);e("8e5d");var s,c=e("f0c5"),d=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"431b0ff2",null,!1,i["a"],s);o["default"]=d.exports},e77e:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i={data:function(){return{goodArray:[],goodsId:""}},onShareAppMessage:function(){return{title:"东湖闲置街欢迎您前来选购！",path:"/pages/secondHand/secondHand"}},onLoad:function(t){var o=this;console.log(t),this.goodsId=t.id,uni.request({url:"http://58.87.94.58:4000/api/queryEsxzDetail",method:"GET",data:{goodsId:this.goodsId},success:function(t){console.log(t),o.goodArray=t.data}})},methods:{handleItemAdd:function(){var t=this;console.log(this.goodArray[0].goodsUrl),uni.getStorage({key:"uid",success:function(o){uni.request({url:"http://58.87.94.58:4000/api/postMyEsxzCollectionData",method:"GET",data:{collectionId:t.goodArray[0].id,uid:o.data},success:function(t){uni.showToast({title:"收藏成功",icon:"success"})}})}})},handleItemCon:function(){uni.showModal({title:"请收到添加联系方式"})}}};o.default=i},f7c1:function(t,o,e){"use strict";var i;e.d(o,"b",(function(){return a})),e.d(o,"c",(function(){return n})),e.d(o,"a",(function(){return i}));var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-uni-view",[e("v-uni-view",{staticClass:"good_details"},[t._l(t.goodArray,(function(o,i){return[e("v-uni-swiper",{key:i+"_0",staticClass:"swiper",attrs:{"indicator-dots":!0,circular:!0,autoplay:"true","indicator-active-color":"#CC9999"}},t._l(o.goodsUrl,(function(t,o){return e("v-uni-swiper-item",{key:o},[e("v-uni-view",{staticClass:"good_img"},[e("v-uni-image",{attrs:{src:t,mode:"aspectFit"}})],1)],1)})),1),e("v-uni-view",{key:i+"_1",staticClass:"good_content"},[e("v-uni-view",{staticClass:"good_name"},[e("v-uni-text",[t._v(t._s(o.goodsName))])],1),e("v-uni-view",{staticClass:"good_seller_name"},[e("v-uni-text",[t._v("卖家："+t._s(o.nickName))])],1),e("v-uni-view",{staticClass:"good_seller_price"},[e("v-uni-text",[t._v("价格："+t._s(o.goodsPrice))])],1),e("v-uni-view",{staticClass:"good_qq"},[e("v-uni-text",{attrs:{selectable:"true"}},[t._v(t._s(o.contactType)+"："+t._s(o.contactNum))]),e("v-uni-button",{staticStyle:{display:"none"},attrs:{bindtap:"copy"}},[t._v("复制")])],1),e("v-uni-view",{staticClass:"good_data"},[e("v-uni-text",[t._v("发布时间: "+t._s(o.publishTime))])],1),e("v-uni-view",{staticClass:"good_number"},[e("v-uni-text",[t._v("详情描述："+t._s(o.goodsDescribe))])],1)],1)]})),e("v-uni-view",{staticClass:"btm_tool_wrap"},[e("v-uni-view",{staticClass:"btm_item share"},[e("v-uni-text",{staticClass:"iconfont icon-fenxiang",staticStyle:{"font-size":"60rpx"}}),e("v-uni-button",{attrs:{"open-type":"share"}},[t._v("分享")])],1),e("v-uni-navigator",{staticClass:"btm_item cart",attrs:{"hover-class":"none",url:"../myCollection/myCollection"}},[e("v-uni-text",{staticClass:"iconfont icon-shoucang",staticStyle:{"font-size":"54rpx"}})],1),e("v-uni-view",{staticClass:"btm_item add_collection",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.handleItemAdd.apply(void 0,arguments)}}},[t._v("加入收藏")]),e("v-uni-view",{staticClass:"btm_item contact_now",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.handleItemCon.apply(void 0,arguments)}}},[e("v-uni-icon",{staticClass:"iconfont icon-lianximaijia",staticStyle:{"margin-right":"8rpx","margin-bottom":"5rpx"}}),t._v("联系卖家")],1)],1)],2)],1)},n=[]}}]);