// (function(){
//     //用此匿名函数来修改字体大小（根据手机设备大小进行修改
//     function resize(){
//         var baseFontSize=15; //设计稿100像素相当于1rem,750px--7.5rem---各种屏幕的100%的宽度
//         var designWidth=750;//设计稿的宽度
//         var width=window.innerWidth//获取屏幕的宽度
//         var currentFontSize=(width/designWidth)*baseFontSize;
//         document.querySelector('html').style.fontSize=currentFontSize+'px';

//     }



//     window.onresize=function(){
//         resize()
//     }
//     // 当文档载入时监听修改文字大小
//     document.addEventListener('DOMContentLoaded',resize)
// }())

var ftsize=16;
(function (doc, win) {
    var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    _isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
    var viewport = doc.createElement('meta');
    viewport.name='viewport';
    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no');
    doc.head.appendChild(viewport);
    var recalc = function () {
        var clientWidth =docEl.clientWidth;
        if (!clientWidth) return;
        if(_isMobile){
            ftsize = clientWidth / 15;// 750/15=50
            doc.body.classList.add('d_m');
        }else{
            var cw=clientWidth;
            // 设计图总宽1664，主内容区宽度1300
            // if(cw>1300){，否则不留空
            if(cw>1300){//当页面宽度大于1300时，主内容区两边按固定比例留空
                cw=clientWidth*(1300/1664);
            }else if(cw<=1300 && cw>1000){//当页面在此区间时，主内容区宽度固定
                cw=1000;
            };
                //小于1000时，两边不留空
            ftsize = cw / 26;// 1300/26=50
            doc.body.classList.add('d_pc');
        };
        docEl.style.fontSize = ftsize + 'px';
    };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
	
})(document, window);


/*
* android禁止微信浏览器调整字体大小
*  这种方法会导致网页延迟大约1S
*/
(function () {
    if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
        handleFontSize();
    } else {
　　    if (document.addEventListener) {
    　　　　document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
    　　} else if (document.attachEvent) {
    　　　　document.attachEvent("WeixinJSBridgeReady", handleFontSize);
    　　　　document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
    　　}
    }
    function handleFontSize() {
    　　// 设置网页字体为默认大小
    　　WeixinJSBridge.invoke('setFontSizeCallback', {
    　　'fontSize': ftsize+'px'
    　　});
    　　// 重写设置网页字体大小的事件
    　　WeixinJSBridge.on('menu:setfont', function () {
    　　　　WeixinJSBridge.invoke('setFontSizeCallback', {
    　　　　　　'fontSize': ftsize+'px'
    　　　　});
    　　});
　　}
})();