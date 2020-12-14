<template>
	<div class="mainBg">
		<div class="content-jy">
			<div class="contentBg">
				<img src="../../static/img/p3-img2.png" />
			</div>
			<div class="code">
				<img src="../../static/img/p3-img3.png" />
			</div>
			<div class="share">
				<img src="../../static/img/p3-img4.png" />
			</div>
		</div>
		<!-- <div class="footer-j">
			<span class="btn-back" @click="share"><img src="../../static/img/p3-img4.png" /></span>
		</div> -->
	</div>
</template>

<script>
	var wx = require('jweixin-module');
	export default {
		data() {
			return {}
		},
		methods: {
			share() {
				// this.$router.push('/menu')
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
			}
		}
	}
</script>

<style lang="less" scoped>
	@rem: 50rem;

	.animation(@n, @t: 0s, @fn: ease-in-out, @delay: 0s, @i: infinite, @dur: alternate) {
		animation: @n @t @fn @delay @i @dur;
		-webkit-animation: @n @t @fn @delay @i @dur;
		-o-animation: @n @t @fn @delay @i @dur;
		-moz-animation: @n @t @fn @delay @i @dur;
	}

	.mainBg {
		background-color: #ffffff;
		background: url(../../static/img/p3-img1.png) no-repeat;
		background-size: cover;
		width: 100%;
		height: 100%;
		z-index: 99;
		overflow-y: auto;
	}

	.content-jy {
		position: relative;
		width: 100%;
		height: 100%;

		img {
			display: block;
			width: 100%;
		}

		.contentBg {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 1249/@rem;
			z-index: 99;
			pointer-events: none;
		}

		.code {
			position: absolute;
			top: 982/@rem;
			left: 92/@rem;
			width: 111/@rem;
			height: 111/@rem;
			z-index: 100;
		}
		.share{
			position: absolute;
			top: 1225/@rem;
			left: 50%;
			width: 233/@rem;
			height: 41/@rem;
			transform: translateX(-50%);
			z-index: 100;
		}
	}

	.footer-j {
		position: absolute;
		top: 94%;
		left: 50%;
		width: 233/@rem;
		height: 41/@rem;
		transform: translateX(-50%);
		z-index: 100;

		span,
		img {
			display: block;
			width: 100%;
			height: 100%;
		}
	}

	@keyframes moveScale {
		0% {
			transform: scale(1);
		}

		100% {
			// top: 176/@rem;
			left: -54%;
			transform: scale(2.1);
		}
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}
	@media only screen and (min-aspect-ratio: ~'1334/600'){
		.mainBg{
			border: 1px solid green;
		}
	}
	@media  screen and (min-height: 1330px) {
		.mainBg{
			border: 1px blueviolet solid;
		}
	}
</style>
