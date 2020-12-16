/* eslint-disable*/
import wx from 'weixin-js-sdk'			//微信sdk依赖
const jsApiList = ['onMenuShareAppMessage', 'onMenuShareTimeline', 'onMenuShareQQ', 'onMenuShareWeibo']
//要用到微信API
function getJSSDK (data, dataForWeixin) {
	console.log(data)
  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: data.data.AppId, // 必填，公众号的唯一标识
    timestamp: data.data.Timestamp, // 必填，生成签名的时间戳
    nonceStr: data.data.NonceStr, // 必填，生成签名的随机串
    signature: data.data.Signature, // 必填，签名
    jsApiList: jsApiList, // 必填，需要使用的JS接口列表
    success: () => {
      alert('success')
    },
  })
  wx.ready(function () {
    wx.onMenuShareAppMessage({
      title: dataForWeixin.title,
      desc: dataForWeixin.desc,
      link: dataForWeixin.linkurl,
      imgUrl: dataForWeixin.img,
      trigger: function trigger (res) { },
      success: function success (res) {
        alert('已分享');
      },
      cancel: function cancel (res) {
        alert('已取消');
      },
      fail: function fail (res) {
        alert('进来了');
      }
    });
    // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
    wx.onMenuShareTimeline({
      title: dataForWeixin.title,
      link: dataForWeixin.linkurl,
      imgUrl: dataForWeixin.img,
      trigger: function trigger (res) {
        // alert('用户点击分享到朋友圈');
      },
      success: function success (res) {
        // alert('已分享');
      },
      cancel: function cancel (res) {
        //alert('已取消');
      },
      fail: function fail (res) {
        // alert(JSON.stringify(res));
      }
    });
    // 2.3 监听“分享到QQ”按钮点击、自定义分享内容及分享结果接口
    wx.onMenuShareQQ({
      title: dataForWeixin.title,
      desc: dataForWeixin.desc,
      link: dataForWeixin.linkurl,
      imgUrl: dataForWeixin.img,
      trigger: function trigger (res) {
        //alert('用户点击分享到QQ');
      },
      complete: function complete (res) {
        // alert(JSON.stringify(res));
      },
      success: function success (res) {
        //alert('已分享');
      },
      cancel: function cancel (res) {
        //alert('已取消');
      },
      fail: function fail (res) {
        //alert(JSON.stringify(res));
      }
    });
    // 2.4 监听“分享到微博”按钮点击、自定义分享内容及分享结果接口
    wx.onMenuShareWeibo({
      title: dataForWeixin.title,
      desc: dataForWeixin.desc,
      link: dataForWeixin.linkurl,
      imgUrl: dataForWeixin.img,
      trigger: function trigger (res) {
        //alert('用户点击分享到微博');
      },
      complete: function complete (res) {
        // alert(JSON.stringify(res));
      },
      success: function success (res) {
        //alert('已分享');
      },
      cancel: function cancel (res) {
        // alert('已取消');
      },
      fail: function fail (res) {
        // alert(JSON.stringify(res));
        // console.log(JSON.stringify(res));
      }
    });
  })
  wx.error((res) => {
    console.log(JSON.stringify(res) + "微信验证失败");
  });
}
export default {
  // 获取JSSDK
  getJSSDK: getJSSDK
}