<template>
	<div id="app">
		<router-view />
		<!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
	</div>
</template>


<script>
	var wx = require('jweixin-module');

	export default {
		onLaunch: function() {
			console.log('App Launch')
			
			var _hmt = _hmt || [];
			// (function() {
			//   var hm = document.createElement("script");
			//   hm.src = "https://hm.baidu.com/hm.js?30a0e753e13df64ce600f684a543f957";
			//   var s = document.getElementsByTagName("script")[0]; 
			//   s.parentNode.insertBefore(hm, s);
			// })();
			
			var that = this;
			wx.ready(function(){
				console.log('ready');
			})
			//#ifdef H5
			const url = encodeURIComponent(window.location.href.split('#')[0]);//'https://app.slinqueen.com/WXQuestion/h5/index.html'; 
			this.axios.post('https://app.slinqueen.com/WXQuestion/api/wx/JSSDKApi/GetShareCode', {
			
			}).then(function(res) {
				console.log(res);
				if (res.data.code == 0) {
					wx.config({
						debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
						appId: res.data.data.AppId, // 必填，公众号的唯一标识
						timestamp: res.data.data.Timestamp, // 必填，生成签名的时间戳
						nonceStr: res.data.data.NonceStr, // 必填，生成签名的随机串
						signature: res.data.data.Signature, // 必填，签名
						jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline'] // 必填，需要使用的JS接口列表
					});
					wx.ready(function() {
						//分享到朋友
						// wx.onMenuShareAppMessage({
						wx.updateAppMessageShareData({
							title: "汉坤2020时光之旅",
							desc: '汉坤2020时光之旅',
							link: "https://app.slinqueen.com/WXQuestion/h5/index.html",
							imgUrl: 'https://app.slinqueen.com/WXQuestion/icon.png',
							type: 'link', // 分享类型,music、video或link，不填默认为link
							success: function() {
								this.$router.push('menu')
							},
							cancel: function() {
								//alert("未分享!");
							}
						});
						wx.onMenuShareTimeline({
							title: "汉坤2020时光之旅",
							link: "https://app.slinqueen.com/WXQuestion/h5/index.html",
							imgUrl: 'https://app.slinqueen.com/WXQuestion/icon.png',
							trigger: function(res) {},
							success: function(res) {},
							cancel: function(res) {},
							fail: function(res) {}
						});
					});
				}
			})
			//#endif
		},
		onShow: function() {

		},
		onHide: function() {
			console.log('App Hide')
		}
	}

</script>

<style>
html,
body {
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	display: block;
	overflow: auto;
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	margin: 0;
	width: 100%;
	height: 100%;
	background-image: url('./assets/bg.png');
	/* display: flex;
    flex-direction: column;
	justify-content: center; */
}
</style>
    
