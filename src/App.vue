<template>
	<div id="app" ref="app">
		<router-view />
	</div>
</template>

<script src="http://res.wx.qq.com/open/js/jweixin-1.4.0.js" type="text/javascript"></script>
<script>
	import share from './libs/share';
	import $ from 'jquery';
	 import wxShare from './libs/wxShare';

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
		created() {
			// const url = encodeURIComponent(window.location.href.split('#')[0]); //'https://app.slinqueen.com/WXQuestion/h5/index.htm
			// var dataForWeixin={
			// 	title: "汉坤2020时光之旅",
			// 	desc: '汉坤2020时光之旅',
			// 	link: url,
			// 	imgUrl: 'https://app.slinqueen.com/project/share.png',
			// 	type: 'link', // 分享类型,music、video或link，不填默认为link
			// }
			
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
		mounted(){
			// const u = navigator.userAgent
			// const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
			// if (isiOS) {
			//   window.history.pushState({}, 'title', '#')
			// }
			this.back();
		},
		methods: {
			goBack() {
				this.$router.replace('/index') // 这里写上你要跳转的页面
			},
			pushHistory() {
				//写入空白历史路径
				  let state = {
					title: 'title',
					url: "#"
				  }
				  window.history.pushState(state, state.title, state.url)
			},
			back() {
				  this.pushHistory();
				  window.addEventListener("popstate", function (e) {
					location.href = window.location.url;//（此处为要跳转的制定路径）
				  }, false);
			},

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
