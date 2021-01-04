<template>
	<div>
		<audio :src="audioUrl" ref="bgMusic" id="bgMusic" preload="auto" :loop="loop" @timeupdate="onTimeupdate"></audio>
		<!-- <div class="bgMusicBtn" @click="bgMusicPlayOrPause('bgMusic')">
			<img :src="playFlag ? playImg : pauseImg" :class="{rotate: playFlag}">
		</div> -->
	</div>
	
</template>

<script>
	import $ from 'jquery';
	export default {
		data() {
			return {
				playFlag: true,
				playImg: require('../../static/img/icon1.png'),
				pauseImg: require('../../static/img/icon2.png'),
				clickMusicBtn: false
			}
		},
		props:{
			audioId: {
			  type: String,
			  required: true
			},
			audioUrl: {
			  type: String,
			  required: true
			},
			loop: {
			  type: Boolean,
			  required: true
			},
			
		},
		watch:{
			"audioId": {
			  handler(newVal) {
				this.audioId = newVal;
				// console.log("audioId", newVal);
			  }
			},
		},
		mounted() {
			var _this = this;
			// _this.audioAutoPlay();
			// let audios = document.getElementById('bgMusic');
			// audios.play();
			// _this.handleCanplay();
			// console.log('mounted ----')
			// document.addEventListener("visibilitychange", (e) => { // 兼容ios微信手Q
			// 	if (this.clickMusicBtn) { // 点击了关闭音乐按钮
			// 		if (this.playFlag) {
			// 			this.audioAutoPlay('bgMusic');
			// 			this.playFlag = true;
			// 		} else {
			// 			this.audioPause('bgMusic');
			// 			this.playFlag = false;
			// 		}

			// 		text.innerHTML = e.hidden;
			// 		if (e.hidden) { // 网页被挂起
			// 			this.audioAutoPlay('bgMusic');
			// 			this.playFlag = true;
			// 		} else { // 网页被呼起
			// 			this.audioPause('bgMusic');
			// 			this.playFlag = false;
			// 		}
			// 	} else { // 未点击关闭音乐按钮
			// 		if (this.playFlag) {
			// 			this.audioPause('bgMusic');
			// 			this.playFlag = false;
			// 		} else {
			// 			this.audioAutoPlay('bgMusic');
			// 			this.playFlag = true;
			// 		}

			// 		text.innerHTML = e.hidden;
			// 		if (e.hidden) { // 网页被挂起
			// 			this.audioPause('bgMusic');
			// 			this.playFlag = false;
			// 		} else { // 网页被呼起
			// 			this.audioAutoPlay('bgMusic');
			// 			this.playFlag = true;
			// 		}
			// 	}
			// });
		},
		methods: {
			bgMusicPlayOrPause() {
				this.clickMusicBtn = !this.clickMusicBtn;
				if (this.playFlag) {
					this.audioPause(this.audioId);
					this.playFlag = false;
				} else {
					this.audioAutoPlay(this.audioId);
					this.playFlag = true;
				}
			},
			audioPause() {
				this.$refs.bgMusic.pause();
			},
			// audioAutoPlay() {
			// 	this.$refs.bgMusic.play();
			// },
			audioAutoPlay(){
				var audio1 = document.getElementById('bgMusic');
				audio1.play();
				document.addEventListener("WeixinJSBridgeReady", function () {
						audio1.play();
				}, false);
			},
			// 当timeupdate事件大概每秒一次，用来更新音频流的当前播放时间
			onTimeupdate(res) {
			  if (this.$refs.bgMusic && this.$refs.bgMusic.currentTime>=this.$refs.bgMusic.duration) {
				  this.$refs.bgMusic.currentTime= '4'
				  
				  this.$refs.bgMusic.play();
			  }
			},
			handleCanplay() {
			  this.$nextTick(() => {
				this.$refs.bgMusic.play()
			  })
			}
		}
	}
</script>

<style>
</style>
