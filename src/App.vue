<template>
	<div id="app" ref="app">
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
		},
		onShow: function() {
			console.log(this);
		},
		onHide: function() {
			console.log('App Hide')
		},
		mounted() {
			const that = this;
			var _hmt = _hmt || [];
			// (function() {
			//   var hm = document.createElement("script");
			//   hm.src = "https://hm.baidu.com/hm.js?30a0e753e13df64ce600f684a543f957";
			//   var s = document.getElementsByTagName("script")[0]; 
			//   s.parentNode.insertBefore(hm, s);
			// })();

			wx.ready(function() {
				console.log('ready');
			})
			const url = encodeURIComponent(window.location.href.split('#')[0]); //'https://app.slinqueen.com/WXQuestion/h5/index.html'; 
			// const url = window.location.href.split('#')[0]; //'https://app.slinqueen.com/WXQuestion/h5/index.html'; 
			console.log(url)
			this.axios.post('https://app.slinqueen.com/WXQuestion/api/wx/JSSDKApi/GetShareCode??returnUrl='+url).then(function(res) {
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
						wx.onMenuShareAppMessage({
							title: "汉坤2020时光之旅",
							desc: '汉坤2020时光之旅',
							link: url,
							imgUrl: 'https://app.slinqueen.com/project/share.png',
							type: 'link', // 分享类型,music、video或link，不填默认为link
							success: function() {
								this.$router.push('menu')
							},
							cancel: function() {
								alert("未分享!");
							}
						});
						wx.onMenuShareTimeline({
							title: "汉坤2020时光之旅",
							link: url,
							imgUrl: 'https://app.slinqueen.com/project/share.png',
							trigger: function(res) {},
							success: function(res) {},
							cancel: function(res) {},
							fail: function(res) {
								console.log(res)
							}
						});
					});
				}
			})
			// if (window.history && window.history.pushState) {
			// 	history.pushState(null, null, document.URL)
			// 	window.addEventListener('popstate', this.goBack, false)
			// }
			// window.onresize = ()=>{
			// 	return (() => {
			// 		window.screenWidth = document.body.clientWidth
			// 		that.screenWidth = window.screenWidth
			// 	})()
			// }
		},
		watch: {
			screenWidth(val) {
				if (!this.timer) {
					this.screenWidth = val
					this.timer = true
					let that = this
					setTimeout(function() {
						// that.screenWidth = that.$store.state.canvasWidth
						console.log(that.screenWidth)
						that.init()
						that.timer = false
					}, 400)
				}
			}
		},
		methods: {
			goBack() {
				this.$router.push('/index') // 这里写上你要跳转的页面
			}
		},
		destroyed() {
			window.removeEventListener('popstate', this.goBack, false)
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
		overflow-x: auto;
	}

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		margin: 0;
		width: 100%;
		height: 100%;
		background-image: url('../static/img/bg2.png');
		/* display: flex;
    flex-direction: column;
	justify-content: center; */
	}
</style>
