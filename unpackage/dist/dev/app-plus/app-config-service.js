
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/profile/profile","pages/publish/publish","pages/schoolCalendar/schoolCalendar","pages/schoolMap/schoolMap","pages/repairPhone/repairPhone","pages/schoolCommunity/schoolCommunity","pages/myCourse/myCourse","pages/schoolGrades/schoolGrades","pages/gradeExamination/gradeExamination","pages/gradesTable/gradesTable","pages/secondHand/secondHand","pages/secondHandPub/secondHandPub","pages/lostAndFound/lostAndFound","pages/lostAndFoundPub/lostAndFoundPub","pages/secondHandDetail/secondHandDetail","pages/carpoolingTravel/carpoolingTravel","pages/carpoolingTravelPub/carpoolingTravelPub","pages/runningServices/runningServices","pages/runningServicesPub/runningServicesPub","pages/rentHouse/rentHouse","pages/rentHousePub/rentHousePub","pages/rentHouseDetail/rentHouseDetail","pages/myEsxzPub/myEsxzPub","pages/mySwzlPub/mySwzlPub","pages/myPccxPub/myPccxPub","pages/myZfhzPub/myZfhzPub","pages/aboutUs/aboutUs","pages/feedback/feedback","pages/myCollection/myCollection","pages/myDqfwPub/myDqfwPub"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"DH生活帮","navigationBarBackgroundColor":"#CC9999","backgroundColor":"#CC9999"},"tabBar":{"color":"#7A7E83","selectedColor":"#CC9999","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/fonts/tabbar/index.png","selectedIconPath":"static/fonts/tabbar/index-activate.png","text":"首页"},{"pagePath":"pages/myCourse/myCourse","iconPath":"static/fonts/tabbar/course.png","selectedIconPath":"static/fonts/tabbar/course-activate.png","text":"我的课表"},{"pagePath":"pages/publish/publish","iconPath":"static/fonts/tabbar/publish.png","selectedIconPath":"static/fonts/tabbar/publish-activate.png","text":"生活圈"},{"pagePath":"pages/profile/profile","iconPath":"static/fonts/tabbar/login.png","selectedIconPath":"static/fonts/tabbar/login-activate.png","text":"个人中心"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"DH生活助手","compilerVersion":"2.9.1","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页"}},{"path":"/pages/profile/profile","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"个人中心"}},{"path":"/pages/publish/publish","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"校园圈"}},{"path":"/pages/schoolCalendar/schoolCalendar","meta":{},"window":{"navigationBarTitleText":"东大校历"}},{"path":"/pages/schoolMap/schoolMap","meta":{},"window":{"navigationBarTitleText":"东大地图"}},{"path":"/pages/repairPhone/repairPhone","meta":{},"window":{"navigationBarTitleText":"后勤电话"}},{"path":"/pages/schoolCommunity/schoolCommunity","meta":{},"window":{"navigationBarTitleText":"社团一览"}},{"path":"/pages/myCourse/myCourse","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的课表"}},{"path":"/pages/schoolGrades/schoolGrades","meta":{},"window":{"navigationBarTitleText":"在校成绩"}},{"path":"/pages/gradeExamination/gradeExamination","meta":{},"window":{"navigationBarTitleText":"等级考试"}},{"path":"/pages/gradesTable/gradesTable","meta":{},"window":{"navigationBarTitleText":"成绩单"}},{"path":"/pages/secondHand/secondHand","meta":{},"window":{"navigationBarTitleText":"二手市场"}},{"path":"/pages/secondHandPub/secondHandPub","meta":{},"window":{"navigationBarTitleText":"二手发布"}},{"path":"/pages/lostAndFound/lostAndFound","meta":{},"window":{"navigationBarTitleText":"失物招领"}},{"path":"/pages/lostAndFoundPub/lostAndFoundPub","meta":{},"window":{"navigationBarTitleText":"发布"}},{"path":"/pages/secondHandDetail/secondHandDetail","meta":{},"window":{"navigationBarTitleText":"详情"}},{"path":"/pages/carpoolingTravel/carpoolingTravel","meta":{},"window":{"navigationBarTitleText":"拼车出行"}},{"path":"/pages/carpoolingTravelPub/carpoolingTravelPub","meta":{},"window":{"navigationBarTitleText":"拼车发布"}},{"path":"/pages/runningServices/runningServices","meta":{},"window":{"navigationBarTitleText":"代大厅"}},{"path":"/pages/runningServicesPub/runningServicesPub","meta":{},"window":{"navigationBarTitleText":"代发布"}},{"path":"/pages/rentHouse/rentHouse","meta":{},"window":{"navigationBarTitleText":"房源大厅"}},{"path":"/pages/rentHousePub/rentHousePub","meta":{},"window":{"navigationBarTitleText":"房源发布"}},{"path":"/pages/rentHouseDetail/rentHouseDetail","meta":{},"window":{"navigationBarTitleText":"房源详情"}},{"path":"/pages/myEsxzPub/myEsxzPub","meta":{},"window":{"navigationBarTitleText":"我的发布"}},{"path":"/pages/mySwzlPub/mySwzlPub","meta":{},"window":{"navigationBarTitleText":"我的发布"}},{"path":"/pages/myPccxPub/myPccxPub","meta":{},"window":{"navigationBarTitleText":"我的发布"}},{"path":"/pages/myZfhzPub/myZfhzPub","meta":{},"window":{"navigationBarTitleText":"我的发布"}},{"path":"/pages/aboutUs/aboutUs","meta":{},"window":{"navigationBarTitleText":"关于我们"}},{"path":"/pages/feedback/feedback","meta":{},"window":{"navigationBarTitleText":"意见反馈"}},{"path":"/pages/myCollection/myCollection","meta":{},"window":{"navigationBarTitleText":"我的收藏"}},{"path":"/pages/myDqfwPub/myDqfwPub","meta":{},"window":{"navigationBarTitleText":"我的发布"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
