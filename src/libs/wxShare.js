import $ from 'jquery';
import wx from 'weixin-js-sdk'			//微信sdk依赖

var timestamp = ''
var noncestr = ''
var signature = ''
var appid=''
// var serverUrl = "https://app.slinqueen.com/wxquestion";
// var baseUrl = "https://app.slinqueen.com/project";
var serverUrl = "https://h5.hankunlaw.com"; 
var baseUrl = "https://h5.hankunlaw.com";

const url = encodeURIComponent(window.location.href.split('#')[0]);
// console.log(url)
var weixin={
	title: "汉坤2020时光之旅",
	desc: '汉坤2020时光之旅',
	link: baseUrl+'/hankun-h5/index.html',
	imgUrl: baseUrl+'/hankun-h5/share.jpg',
	type: 'link', // 分享类型,music、video或link，不填默认为link
}
$(function () {
    $.ajax({
        url: serverUrl+"/api/wx/JSSDKApi/GetShareCode?returnUrl=" + url,
        type: 'POST',
        async: false,
        success: function (resp) {
			// console.log(resp);
            if (resp.code == 0) {
                var obj = resp.data
				appid=obj.AppId
                timestamp = obj.Timestamp
                noncestr = obj.NonceStr
                signature = obj.Signature
                share()
            } else {
                console.log(resp.codeMsg)
            }
        },
        error: function (resp) {
            console.log('error')
        }
    });
})

function share() {
	// console.log('weixinShare===='+weixin.link)
    wx.config({
        debug: false,
        appId: appid, // 必填，公众号的唯一标识
        timestamp: timestamp, // 必填，生成签名的时间戳
        nonceStr: noncestr, // 必填，生成签名的随机串
        signature: signature, // 必填，签名，见附录1
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
    });
    wx.ready(function () {
        // 分享到微信朋友圈
        // alert(weixin.img)
        // alert(weixin.description)
		console.log("ready share==="+weixin.url)
        wx.onMenuShareTimeline({
            title: weixin.title,
            desc: weixin.desc,
            link: weixin.link,
            imgUrl: weixin.imgUrl,
            success: function () {
                // 用户确认分享后执行的回调函数
                // alert(weixin.link)
                // 关闭当前页面
                // window.opener=null;
                // window.open('','_self');
                // window.close()
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
        // 分享到微信朋友
        wx.onMenuShareAppMessage({
            title: weixin.title,
            desc: weixin.desc,
            link: weixin.link,
            imgUrl: weixin.imgUrl,
            success: function () {
                // 用户确认分享后执行的回调函数
                // 关闭当前页面
                // window.opener=null;
                // window.open('','_self');
                // window.close()
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
   
    })

    wx.error(function (res) {
        console.log('微信验证失败')
    });
}