(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-myDqfwPub-myDqfwPub"],{"0310":function(e,t,i){"use strict";i.r(t);var n=i("939c"),c=i("f63f");for(var a in c)"default"!==a&&function(e){i.d(t,e,(function(){return c[e]}))}(a);i("1db1");var s,o=i("f0c5"),l=Object(o["a"])(c["default"],n["b"],n["c"],!1,null,"7910e2c7",null,!1,n["a"],s);t["default"]=l.exports},"0a95":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".collectionItemTop[data-v-7910e2c7]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?0?% %?20?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?80?%;font-size:%?26?%}\n/* .collectionItemMid{\n\tbackground-color: #F1F1F1;\n\theight: 100vh;\n} */.bottomBar[data-v-7910e2c7]{background-color:hsla(0,0%,100%,.6);height:%?120?%;display:-webkit-box;display:-webkit-flex;display:flex;padding:0 %?18?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;left:0;right:0;bottom:0}.cancelBtn[data-v-7910e2c7]{margin-left:%?400?%;width:%?180?%;font-size:%?26?%}.item[data-v-7910e2c7]{padding:%?0?% %?10?%;border-top:%?10?% solid #f1f1f1}.itemTop[data-v-7910e2c7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?100?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:%?2?% solid #f1f1f1}.serviceType[data-v-7910e2c7]{height:%?60?%;line-height:%?60?%;font-size:%?28?%;padding:%?4?% %?20?%;border-radius:%?6?%;background-color:#fbeff8;color:#c99;font-weight:600}.serviceContent[data-v-7910e2c7]{color:#fa4b22;font-weight:700;margin-right:%?20?%}.serivceDes[data-v-7910e2c7]{font-size:%?28?%;color:grey;margin-right:%?20?%}.itemMid[data-v-7910e2c7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?160?%;border-bottom:%?2?% solid #f1f1f1}.serviceAddress[data-v-7910e2c7]{margin-top:%?30?%;margin-bottom:%?30?%}.oriTitle[data-v-7910e2c7]{background-color:#000;color:#fff;padding:%?5?% %?10?%;font-size:%?26?%;border-radius:50%;margin-right:%?10?%}.aimTitle[data-v-7910e2c7]{background-color:#f0ad4e;padding:%?5?% %?10?%;font-size:%?26?%;color:#fff;border-radius:50%;margin-right:%?10?%}.itemBot[data-v-7910e2c7]{padding-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.contact[data-v-7910e2c7]{margin-left:%?10?%;font-size:%?26?%;color:grey}.time[data-v-7910e2c7]{margin-right:%?20?%;font-size:%?26?%;color:grey;margin-top:%?16?%}",""]),e.exports=t},"1db1":function(e,t,i){"use strict";var n=i("a564"),c=i.n(n);c.a},"939c":function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return c})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"index"},[i("v-uni-view",{staticClass:"collectionItem"},[i("v-uni-view",{staticClass:"collectionItemTop"},[i("v-uni-view",[e._v("共计发布"),i("v-uni-text",{staticStyle:{color:"#D43C43",padding:"0rpx 5rpx"}},[e._v(e._s(e.courseCollectionArr.length))]),e._v("条")],1),i("v-uni-view",{staticStyle:{color:"#D43C43",padding:"20rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onEdit.apply(void 0,arguments)}}},[e._v(e._s(e.editText))])],1),i("v-uni-view",{staticClass:"collectionItemMid"},[i("v-uni-checkbox-group",{on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.singleSelect.apply(void 0,arguments)}}},e._l(e.courseCollectionArr,(function(t,n){return i("v-uni-view",{key:n,staticClass:"billItem"},[i("v-uni-checkbox",{attrs:{value:t.id,checked:t.check,hidden:!e.isEdit}}),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"itemTop"},[i("v-uni-view",{staticClass:"serviceType"},[e._v(e._s(t.publishType))]),i("v-uni-view",{staticClass:"serviceContent"},[e._v("￥ "+e._s(t.price))])],1),i("v-uni-view",{staticClass:"itemMid"},[i("v-uni-view",{},[i("v-uni-view",{staticClass:"serviceAddress"},[i("span",{staticClass:"oriTitle"},[e._v("起")]),e._v(e._s(t.orignPlace))]),i("v-uni-view",{staticClass:"serviceAddress"},[i("span",{staticClass:"aimTitle"},[e._v("终")]),e._v(e._s(t.aimsPlace))])],1),i("v-uni-view",{staticClass:"serivceDes"},[i("v-uni-icon",{staticClass:"iconfont icon-wupin"}),e._v("："+e._s(t.publishDescribe))],1)],1),i("v-uni-view",{staticClass:"itemBot"},[i("v-uni-view",{staticClass:"contact"},[i("v-uni-icon",{staticClass:"iconfont icon-shouji"}),e._v(e._s(t.contactType)+": "+e._s(t.contactNum))],1),i("v-uni-view",{staticClass:"time"},[e._v(e._s(t.publishTime))])],1)],1)],1)})),1)],1)],1),i("v-uni-view",{staticClass:"itemBottom"},[i("v-uni-view",{staticClass:"bottomBar",attrs:{hidden:!e.isEdit}},[i("v-uni-checkbox-group",{on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.allSelect.apply(void 0,arguments)}}},[i("v-uni-checkbox",{attrs:{value:"all",checked:e.checkkAll}},[e._v("全选")])],1),i("v-uni-button",{staticClass:"cancelBtn",attrs:{type:"warn"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onCancelCollection.apply(void 0,arguments)}}},[e._v("取消发布")])],1)],1)],1)},a=[]},a564:function(e,t,i){var n=i("0a95");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var c=i("4f06").default;c("5d8cd85b",n,!0,{sourceMap:!1,shadowMode:!1})},b257:function(e,t,i){"use strict";i("4160"),i("caad"),i("d81d"),i("2532"),i("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{courseCollectionArr:[],editText:"编辑",isEdit:!1,cancelId:[],checkkAll:!1,uid:""}},onLoad:function(e){var t=this;uni.getStorage({key:"uid",success:function(e){t.uid=e.data,uni.request({url:"http://58.87.94.58:4000/api/queryMyDqfwData",method:"GET",data:{userId:t.uid},success:function(e){console.log(e),t.courseCollectionArr=e.data}})}})},methods:{onEdit:function(){this.isEdit?(this.editText="编辑",this.isEdit=!1):(this.editText="完成",this.isEdit=!0)},singleSelect:function(e){console.log(e),this.cancelId=e.detail.value,console.log(this.cancelId)},allSelect:function(e){var t=this;"all"==e.detail.value?(this.ckAll=!0,this.courseCollectionArr.forEach((function(e){e.check=t.ckAll;var i=e.goodsId;t.cancelId.includes(i)?console.log("重复id"):t.cancelId.push(i),console.log(t.cancelId)}))):(this.ckAll=!1,this.courseCollectionArr.map((function(e){return e.check=t.ckAll})),this.cancelId=[],console.log(this.cancelId))},onCancelCollection:function(){console.log(this.cancelId),uni.request({url:"http://58.87.94.58:4000/api/deleteMyDqfwData",method:"POST",data:{userId:this.uid,deletIds:this.cancelId},success:function(e){console.log(e),uni.showToast({title:"删除成功",icon:"success",success:function(e){uni.redirectTo({url:"../mySwzlPub/mySwzlPub"})}})}})}}};t.default=n},f63f:function(e,t,i){"use strict";i.r(t);var n=i("b257"),c=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=c.a}}]);