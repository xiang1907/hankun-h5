<template>
	<div id="app" ref="app" v-if="isScreen">
		<router-view />
		<audio-com ref="audios" :audioId="audioId" :audioUrl="audioUrl" :loop="loop"></audio-com>
	</div>
	<div v-else style="width: 100%;">
		<img src="../static/img/landspace.jpg" style="display: block;width: 100%;"/>
	</div>
</template>

<script src="http://res.wx.qq.com/open/js/jweixin-1.4.0.js" type="text/javascript"></script>
<script>
	import share from './libs/share';
	import $ from 'jquery';
	import wxShare from './libs/wxShare';
	import audioCom from './components/audio'
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
		data() {
			return{
				audioId :'bgMusic',
				loop :true,
				// bgMusicUrl: require('../static/mp3/bgMusic.mp3'),
				// clickMusicUrl:require('../static/mp3/clickMusic.mp3'),
				audioUrl: require('../static/mp3/bgMusic.mp3'),
				isScreen: true
			}
		},
		components:{
			audioCom
		},
		created() {
			// const url = encodeURIComponent(window.location.href.split('#')[0]); //'https://app.slinqueen.com/WXQuestion/h5/index.htm
		},
		beforeMount() {
		　　window.addEventListener('orientationchange',this.renderResize, false)  
		},
		mounted(){
			var _this = this;
			window['startAudio'] = (id) => {
				this.startAudio()
		    }
			_this.renderResize();
		    // 监听 resize 方法
			window.addEventListener("resize", _this.renderResize, false)
			window.addEventListener('load', _this.renderResize, false)
		},
		
		methods: {
			goBack() {
				this.$router.replace('/index') // 这里写上你要跳转的页面
			},
			startAudio(){
				// this.audioUrl = this.clickMusicUrl;
				this.loop = false;
				this.$refs.audios.audioAutoPlay();
			},
			// audioPause(){
			// 	this.audioId = this.bgMusicUrl;
			// 	this.$refs.audios.audioPause();
			// },
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
			renderResize() {
				// 判断横竖屏
				let width = document.documentElement.clientWidth
				let height = document.documentElement.clientHeight
				if(width > height) {
					// alert('横屏')
					this.isScreen = false
				}else{
					this.isScreen = true
				}
			}

		},
		destroyed() {
			window.removeEventListener('popstate', this.goBack, false)
			window.removeEventListener("resize", this.renderResize, false)
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
