(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-schoolMap-schoolMap"],{"4f24":function(n,t,e){var a=e("5a93");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("744e07c9",a,!0,{sourceMap:!1,shadowMode:!1})},"5a93":function(n,t,e){var a=e("24fb");t=a(!1),t.push([n.i,".content[data-v-8637c62c]{background-color:#f1f1f1;height:100vh}.content uni-image[data-v-8637c62c]{width:90%;margin:%?40?% %?35?% %?0?% %?35?%}.tips[data-v-8637c62c]{color:grey;font-size:%?26?%;margin-top:%?35?%;margin-left:%?220?%}",""]),n.exports=t},7934:function(n,t,e){"use strict";e.r(t);var a=e("88f3"),i=e("b1ab");for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);e("fb54");var r,c=e("f0c5"),u=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"8637c62c",null,!1,a["a"],r);t["default"]=u.exports},"88f3":function(n,t,e){"use strict";var a;e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}));var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("v-uni-view",{staticClass:"content"},[e("v-uni-image",{attrs:{src:n.mapArr[0],mode:"widthFix"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.onPreview.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"tips"},[n._v("地图在手，东湖我有^_^")])],1)],1)},o=[]},b1ab:function(n,t,e){"use strict";e.r(t);var a=e("d8f9"),i=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=i.a},d8f9:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{mapArr:["https://yanxuan.nosdn.127.net/eda811bde388b5fe1bae9caeed5ae7e3.jpg"]}},methods:{onPreview:function(){uni.previewImage({urls:this.mapArr,longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(n){console.log("选中了第"+(n.tapIndex+1)+"个按钮,第"+(n.index+1)+"张图片")},fail:function(n){console.log(n.errMsg)}}})}}};t.default=a},fb54:function(n,t,e){"use strict";var a=e("4f24"),i=e.n(a);i.a}}]);