<template>
	<div class="mainBg"   >
		<div class="content-jy" v-if="!isMask"> 
			<img src="../../static/img/p3-img5.jpg" />
		<!-- 	<div class="contentBg">
				<img src="../../static/img/p3-img2.png" />
			</div>-->
			<div class="code">
				长按保存图片
			</div>
			<div class="backMenu" @click="backMenu">
				<img src="../../static/img/p3-img6.png" />
			</div>
			<div class="share" @click="share">
				<img src="../../static/img/p3-img4.png" />
			</div> 
		</div>
		<div class="mask" v-if="isMask">
			<img src="../../static/img/mask.png" />
			<div class="backBtn" @click="hideMask">
				<img src="../../static/img/icon5.png"/>
			</div>
		</div>
		
	</div>
	
</template>

<script>
	var wx = require('jweixin-module');
	export default {
		data() {
			return {
				isMask: false
			}
		},
		methods: {
			share() {
				this.isMask = true;
			},
			hideMask(){
				this.isMask = false;
			},
			backMenu(){
				this.$router.replace('/menu')
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../assets/css/index';
	@rem: 50rem;

	.animation(@n, @t: 0s, @fn: ease-in-out, @delay: 0s, @i: infinite, @dur: alternate) {
		animation: @n @t @fn @delay @i @dur;
		-webkit-animation: @n @t @fn @delay @i @dur;
		-o-animation: @n @t @fn @delay @i @dur;
		-moz-animation: @n @t @fn @delay @i @dur;
	}

	.mainBg {
		background-color: #88736a;
		background: url(../../static/img/bg2.png) no-repeat;
		background-size: contain;
		width: 100%;
		height: 100%;
		z-index: 99;
		overflow-y: auto;
	}
	.shareImg{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 101;
		// opacity: 0;
		pointer-events: auto;
		img{
			display: block;
			width: 100%;
		}
	}
	.content-jy {
		position: relative;
		// width: 100%;
		// height: 100%;
		// .scale(750, 1249);
		// .pos-center;
		width: 750/@rem;
		height: 1249/@rem;
		// background-image: url('../../static/img/p3-img2.png');
		// background-size: 100% auto;
		// background-repeat: no-repeat;
		// background-position: center;

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
			top: 1080/@rem;
			left: 192/@rem;
			width: 221/@rem;
			text-align: left;
			font-size: 22/@rem;
			color: #1b1e53;
			z-index: 100;
		}
		.share{
			position: absolute;
			top: 96%;
			left: 413/@rem;
			width: 200/@rem;
			height: 68/@rem;
			z-index: 100;
		}
		.backMenu{
			position: absolute;
			top: 96%;
			left: 144/@rem;
			width: 200/@rem;
			height: 68/@rem;
			z-index: 100;
		}
	}
	.mask{
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0,0.8);
		position: absolute;
		top: 0;
		left: 0;
		z-index: 100;
		img{
			display: block;
			width: 100%;
		}
		.backBtn{
			position: absolute;
			top: 85%;
			left: 50%;
			width: 172/@rem;
			height: 36/@rem;
			transform: translateX(-50%);
			z-index: 100;
		}
	}
	
	@media only screen and (max-height:1300px) and (min-height:1100px){
		.share{
			border: 1px solid red;
			bottom: 80/@rem !important;
		}
	}
	@media only screen and (min-height:1301px) {
		.share{
			border: 1px solid green;
			bottom: -20/@rem !important;
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
