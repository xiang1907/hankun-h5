<template>
	<div class="wraper">
		<div class="menu"><img src="../../static/img/p1-img1.png" /></div>
		<div class="content">
			<div class="sque"  @click="jumpPage('1')"></div>
			<div class="content-item content-item1" :class="{'active':item1}"  @click="jumpPage('1')">
				<span class="item-icon "></span>汉坤规模
			</div>
			<div class="content-item  content-item2" :class="{'active':item2}"  @click="jumpPage('2')">
				<span class="item-icon"></span>汉坤荣誉
			</div>
			<div class="content-item  content-item3" :class="{'active':item3}"  @click="jumpPage('3')">
				汉坤领域<span class="item-icon"></span>
			</div>
			<div class="content-item  content-item4" :class="{'active':item4}" @click="jumpPage('4')">
				2020寄语<span class="item-icon"></span>
			</div>
			<!-- <div v-show="item1 && item2 && item3" class="content-item  content-item4" :class="{'active':item4}" @click="jumpPage('4')">
				2020寄语<span class="item-icon"></span>
			</div> -->
			<div class="dialog-mask" v-if="isDialog">
				<img src="../../static/img/p1-img7.png"/>
			</div>
		</div>
		
		<div class="big" v-if="isShow" ref="doorBox" :class="{'active':isStart}">
			<!-- <div class="door-tap" @click="startDoor" v-if="isClick"><img src="../../static/img/icon3.png"/></div> -->
			<div class="door-kuang"><img src="../../static/img/p1-img5.png"/></div>
			<div class="door-men"><img src="../../static/img/p1-img4.png"/></div>
			<div class="guang"><img src="../../static/img/p1-img3.png"/></div>
		</div>
		<div class="footer-r" v-if="!isShow"><img src="../../static/img/p1-img6.png"/></div>
	</div>
</template>

<script>
    import Vue from 'vue';
	export default {
		data() {
			return {
				isShow: this.Global.isShowAni,
				// isShow: true,
				item1: this.Global.item1Flag,
				item2: this.Global.item2Flag,
				item3: this.Global.item3Flag,
				item4: this.Global.item4Flag,
				isClick: true,//是否可点击
				isStart:false,//是否开始动画
				isDialog: false,//文末寄语提示框
			}
		},
		mounted() {
			var _this = this;
			window.startAudio();
			setTimeout(function(){
				_this.isShow = false;
			},9000);
		},
		methods: {
			jumpPage(index) {
				Vue.prototype.Global.isShowAni = false;
				if (index === '1') { //汉坤规模
					Vue.prototype.Global.item1Flag = true;
					this.$router.replace('/hkgm')
				} else if (index === '2') { //汉坤荣誉
					Vue.prototype.Global.item2Flag = true;
					this.$router.replace('/hkry')
				} else if (index === '3') { //汉坤领域
					Vue.prototype.Global.item3Flag = true;
					this.$router.replace('/hkly')
				} else if (index === '4') { //2020寄语
					if(this.item1 && this.item2 && this.item3){
						Vue.prototype.Global.item4Flag = true;
						this.$router.replace('/hkjy')
					}else{
						this.isDialog = true;
						setTimeout(()=>{
							this.isDialog = false;
						},2000)
					}
					
				} else {
					this.$router.replace('/menu')
				}
			},
			startDoor(){
				var _this = this;
				this.isClick = false;
				this.isStart = true;
				// window.startAudio();//开始播放音乐
				setTimeout(function(){
					_this.isShow = false;
				},7000);
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

	.wraper {
		width: 750/@rem;
		height: 100%;
		background-color: #88736a;
		overflow-x: auto;
		max-width: 750px;
		margin: 0 auto;
	}

	.menu {
		position: absolute;
		left: 160/@rem;
		top: -40/@rem;
		width: 412/@rem;
		height: auto;
		z-index: 99;

		img {
			display: block;
			width: 100%;
			transform: scale(0.8);
		}
	}

	.content {
		position: relative;
		background: url(../../static/img/bg.png) no-repeat;
		width: 1710/@rem;
		height: 1300/@rem;
		background-size: cover;
		font-size: 30/@rem;
		color: #ffffff;
		overflow: auto;
		margin-left: -100/@rem;
		.sque{
			position: absolute;
			top: 311/@rem;
			left: 398/@rem;
			width: 99/@rem;
			height: 119/@rem;
			background: url('../../static/img/p1-img2.png') no-repeat;
			background-size: auto 119/ @rem;
			// animation: step 4s steps(9) infinite;
			// transform-origin: top left;
			// transform: scale(0.6);
			img{
				display: block;
				width: 100%;
			}
		}
		.content-item {
			position: absolute;
			display: inline-flex;
			width: 186/@rem;
			height: 60/@rem;
			.animation(fadeIn, @t: 1s, @fn: ease-in-out, @delay: 0.5s, @i: infinite, @dur: alternate);
			animation-fill-mode: forwards;
			&.active {
				.item-icon{
					background-image: url(../../static/img/icon2.png);
				}
				color: #e1bd8d;
				.animation(fadeDis, @t: 1s, @fn: ease-in-out, @delay: 0.5s, @i: infinite, @dur: alternate);
				animation-fill-mode: forwards;
				&.content-item2{
					.animation(fadeDis, @t: 1s, @fn: ease-in-out, @delay: 0.5s, @i: infinite, @dur: alternate);
					animation-fill-mode: forwards;
				}
			}
			.item-icon {
				display: block;
				width: 25/@rem;
				height: 25/@rem;
				background-image: url(../../static/img/icon1.png);
				background-size: cover;
				margin: 10/@rem  2px 0 2px;
			}
			&.content-item1 {
				top: 262/@rem;
				left: 410/@rem;
			}

			&.content-item2 {
				top: 448/@rem;
				left: 620/@rem;
				.animation(fadeIn, @t: 1s, @fn: ease-in-out, @delay: 1s, @i: infinite, @dur: alternate);
				animation-fill-mode: forwards;
			}

			&.content-item3 {
				top: 634/@rem;
				left: 1004/@rem;
			}

			&.content-item4 {
				top: 818/@rem;
				left: 424/@rem;
				.animation(fadeIn, @t: 1s, @fn: ease-in-out, @delay: 0.8s, @i: infinite, @dur: alternate);
				animation-fill-mode: forwards;
			}
		}
		.dialog-mask{
			position: absolute;
			width: 239/@rem;
			height: 259/@rem;
			top: 730/@rem;
			left: 340/@rem;
			img{
				display: block;
				width: 100%;
			}
		}
	}
	.big { 
		perspective: 1200px;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 1300/@rem;
		max-height: 100%;
		z-index: 100;
		display: block;
		pointer-events: none;
		.animation(scaleToPage, @t: 4s, @fn: ease-in-out, @delay: 4s, @i: 1, @dur: alternate);
		animation-fill-mode: forwards;
		overflow: hidden;
		// &.active{
		// 	.animation(scaleToPage, @t: 6s, @fn: ease-in-out, @delay: 3.5s, @i: 1, @dur: alternate);
		// 	animation-fill-mode: forwards;
		// 	.door-men{
		// 		.animation(move, @t: 11s, @fn: ease-in-out, @delay: 1s, @i: 1, @dur: alternate);
		// 		animation-fill-mode: forwards;
		// 	}
		// 	.guang{
		// 		.animation(fadeOut, @t: 6s, @fn: ease-in-out, @delay: 3.5s, @i: 1, @dur: alternate);
		// 		animation-fill-mode: forwards;
		// 	}
		// }
		img{
			display: block;
			width: 100%;
			height: 100%;
		}
	}
	/*点击音效*/
	.door-tap{
		position: absolute;
		top: 52%;
		left: 66%;
		width: 64/@rem;
		height: 64/@rem;
		z-index: 102;
		pointer-events: auto;
		img{
			.animation(fadeIn, @t: 1s, @fn: ease-in-out, @delay: 0.8s, @i: infinite, @dur: alternate);
			animation-fill-mode: forwards;
		}
	}
	.door-kuang{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 1300/@rem;
		z-index: 102;
	}
	.door-men{
		position: absolute;
		left: 110/@rem;
		top: 133/@rem;
		width: 525/@rem;
		height: 1100/@rem;
		.animation(move, @t: 7s, @fn: ease-in-out, @delay: 1s, @i: 1, @dur: alternate);
		animation-fill-mode: forwards;
		transform-origin: left;
		z-index: 101;
		overflow: hidden;
	}
	.guang{
		position: absolute;
		left: 0;
		top: 0;
		width: 750/@rem;
		height: 100%;
		z-index: 100;
		.animation(fadeOut, @t: 6s, @fn: ease-in-out, @delay: 3.5s, @i: 1, @dur: alternate);
		animation-fill-mode: forwards;
	}
	.footer-r{
		position: absolute;
		top: 93%;
		left: 50%;
		width: 306/@rem;
		height: 29/@rem;
		transform: translateX(-50%);
		z-index: 100;
		
		span,
		img {
			display: block;
			width: 100%;
			height: 100%;
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
	@keyframes fadeOut {
		0% {
			opacity: 1;
		}
	
		100% {
			opacity: 0;
			display: none;
		}
	}
	@keyframes fadeDis{
		0%{
			opacity: 1;
		}
		100%{
			opacity: 1;
		}
	}
	
	@keyframes move {
		0% {
			transform: rotateY(0deg);
		}
	
		50% {
			transform: rotateY(120deg);
		}
	
		100% {
			transform: rotateY(120deg);
		}
	}
	
	@keyframes scaleToPage {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(1.5);
			display: none;
		}
	}
	
	@keyframes round_animate {
	   to {
		 transform: rotate(1turn);
	   }
    }
	
	@keyframes step {
		0% {
		  background-position: 0 0;
		}

		100% {
		  background-position: -1800 / @rem 0;
		}
	}

	@-webkit-keyframes step {
		0% {
		  background-position: 0 0;
		}

		100% {
		  background-position: -1800 / @rem 0;
		}
	}
	
</style>
