<template>
	<div class="mainBg">
		<div v-show="!showBook">
			<swiper :options="swiperOption" class="swiperBox" ref="mySwiper">
				<swiper-slide v-for="(slider,index) in slideList" :key="index" ><img :src="slider.imgSrc"  />
				</swiper-slide>
				<!-- <swiper-slide ><img src="../../static/img/zbsc/book-2.png"  @click="openBook(1)" /></swiper-slide>
				<swiper-slide ><img src="../../static/img/zbsc/book-3.png"  @click="openBook(2)" /></swiper-slide> -->
			</swiper>
			<div class="footerText"><img src="../../static/img/zbsc/foot-text.png" /></div>
			<div class="footerBack"><img src="../../static/img/back-btn.png" @click="goBack" /></div>
		</div>
		<!-- 第二阶段 -->
		<div class="step2-bg" v-show="showBook == 1">
			<img src="../../static/img/zbsc/step2-coffee.png" class="step-coffee">
			<img src="../../static/img/zbsc/step2-bq.png" class="step-bq">
			<img :src="bookContent[bookNumber].bookTextImg" :class="'step-text-'+bookNumber">
			<img src="../../static/img/zbsc/step2-xinfeng.png" class="step-xinfeng">
		</div>
		<!-- 第三阶段 -->
		<div class="step3-bg" v-show="showBook == 2">
			<div class="step-content" ref="stepCon">
				<img :src="bookContent[bookNumber].bookImg" :class="'step-text-'+bookNumber" :ref="'imgSize'+bookNumber" @load="loadImg($event.target)">
			</div>
			<div class="step-icon" v-if="bookNumber!=1">
				<img src="../../static/img/down-load.png" />
			</div>
			<div class="footerBack"><img src="../../static/img/back-btn.png" @click="goBack2" /></div>
		</div>
	</div>
</template>

<script>
// import VueAwesomeSwiper from 'vue-awesome-swiper';
// import 'swiper/swiper-bundle.css';
let vm = null;
export default {
	name: '',
	data() {
		return {
			showBook: 0,
			bookNumber: 0,
			isShowLoad: true,
			slideList:[
				{
					imgSrc:require('../../static/img/zbsc/book-1.png'),
				},{
					imgSrc:require('../../static/img/zbsc/book-2.png'),
				},{
					imgSrc:require('../../static/img/zbsc/book-3.png'),
				}
			],
			bookContent: [
			{
				bookTextImg: require('../../static/img/zbsc/step2-text-1.png'),
				bookImg: require('../../static/img/zbsc/step3-text-1.png'),
			},
			{
				bookTextImg: require('../../static/img/zbsc/step2-text-2.png'),
				bookImg: require('../../static/img/zbsc/step3-text-2.png'),
			},
			{
				bookTextImg: require('../../static/img/zbsc/step2-text-3.png'),
				bookImg: require('../../static/img/zbsc/step3-text-3.png'),
			}],
			swiperOption: {
				// 所有的参数同 swiper 官方 api 参数一样
				// cssMode: true,
				effect: 'coverflow',
				speed: 1000,
				coverflowEffect: {
					rotate: 50,
					stretch: 80,
					depth: 40,
					modifier: 1,
					slideShadows: false
				},
				slidesPerView: 1.5,
				centeredSlides: true,
				loop: false,
				preventLinksPropagation: false,
				on: {
					click:(v)=>{
						const realIndex = vm.$refs.mySwiper.$swiper.realIndex;
						// console.log(vm.$refs.mySwiper.$swiper.realIndex)
						vm.openBook(vm.$refs.mySwiper.$swiper.realIndex)
					}
				}
			}
		};
	},
	created() {
		vm = this;
		 //获取屏幕大小
		let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
		// console.log(clientHeight);
	},
	methods: {
		goBack() {
			this.$router.replace('/hkly');
		},
		goBack2() {
			this.showBook = 0;
		},
		goMenu() {
			this.showBook = 0;
		},
		openBook1() {
			this.showBook = 2;
		},
		openBook(num) {
			this.showBook = 1;
			this.bookNumber = num;
			var that = this;
			setTimeout(function() {
				that.showBook = 2;
			}, 3000);
		},
		loadImg(e){
			// console.log(e.height)
			if(e.height < 700){
				this.isShowLoad = false;
			}else{
				this.isShowLoad = true;
			}
		}
	},
	computed: {
		swiper(){
			return vm.$refs.mySwiper.swiper;
		}
	}
};
</script>

<style lang="less" scoped>
@import '../assets/css/index';
img {
	display: block;
}
.mainBg {
	.scale(750, 1300);
	// width: 750/@r;
	// height: 100%;
	.pos-center;
	background-image: url('../../static/img/zbsc/bg.png');
	background-size: 100% auto;
	// background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	.swiperBox {
		display: block;
		.scale(750, 533);
		margin-top: 420 / @r;
		/deep/ .swiper-slide {
			/* Center slide text vertically */
			// box-shadow: 0 0px 40px rgba(0, 0, 0, 0.1);
			// cursor: pointer;
			display: flex;
			flex-direction: column;
			align-items: center;
			opacity: 0.8;
			img {
				// .scale(343, 533);
				transform: scale(0.7);
				height: 100%;
				width: auto;
			}
		}
		/deep/ .swiper-slide-active {
			opacity: 1;
			// .scale(343, 533);
			img {
				transform: scale(1);
				height: 100%;
				width: auto;
			}
		}
	}
	.footerText {
		margin: 50 / @r auto 0;
		width: 236 / @r;
		height: 28 / @r;
		// width: 178/@r;
		img {
			width: 100%;
			height: 100%;
		}
	}
	.footerBack {
		position: absolute;
		bottom: 60 / @r;
		left: 50%;
		transform: translateX(-50%);
		width: 175 / @r;
		height: 35 / @r;
		// width: 178/@r;
		img {
			width: 100%;
			height: 100%;
		}
	}
	.step2-bg {
		.scale(750, 1300);
		.pos-center;
		position: relative !important;
		background-image: url('../../static/img/zbsc/step2-bg.png');
		background-size: 100% auto;
		background-repeat: no-repeat;
		background-position: center;
		.step-coffee {
			.animation(fadeOut, @t: 2s, @delay: 0s, @i: 1, @dur: alternate);
			animation-fill-mode:forwards;
			position: absolute;
			.scale(320,347);
			top:4/@r;left:0;
			z-index: 10;
		}
		.step-bq {
			.animation(fadeOut, @t: 2s, @delay: 0.5s, @i: 1, @dur: alternate);
			animation-fill-mode:forwards;
			position: absolute;
			.scale(317,345);
			top:87/@r;left:448/@r;
			z-index: 9;
		}
		.step-xinfeng {
			.animation(fadeOut, @t: 2s, @delay: 1s, @i: 1, @dur: alternate);
			animation-fill-mode:forwards;
			position: absolute;
			.scale(784,1084);
			top:162/@r;left:-19/@r;
			z-index: 1;
		}
		.step-text-0,.step-text-1,.step-text-2 {
			.animation(fadeOut, @t: 2s, @delay: 1s, @i: 1, @dur: alternate);
			animation-fill-mode:forwards;
			position: absolute;
			z-index: 5;
		}
		.step-text-0 {
			.scale(673,782);
			top:337/@r;left:42/@r;
		}
		.step-text-1 {
			.scale(672,732);
			top:389/@r;left:43/@r;
		}
		.step-text-2 {
			.scale(683,733);
			top:389/@r;left:43/@r;
		}
	}
	
	.step3-bg {
		.scale(750, 1300);
		.pos-center;
		.animation(fadeIn, @t: 0.5s, @delay: 0s, @i: 1, @dur: alternate);
		animation-fill-mode:forwards;
		position: relative !important;
		background-image: url('../../static/img/zbsc/step3-bg.png');
		background-size: 100% auto;
		background-repeat: no-repeat;
		background-position: center;
		.step-content{
			position: absolute;
			.scale(537,803);
			top:229/@r;left:118/@r;
			overflow: auto;
			z-index: 5;
			img{
				display: block;
				height: auto;
				width: 100%;
				overflow: auto;
			}
		}
		.step-icon{
			position: absolute;
			.scale(144, 50);
			left: 50%;
			bottom: 190/@r;
			transform: translateX(-50%);
			img{
				width: 100%;
				display: block;
			}
		}
		// .step-text-0,.step-text-1,.step-text-2 {
		// 	position: absolute;
		// 	z-index: 5;
		// }
		// .step-text-0 {
		// 	.scale(537,853);
		// 	top:229/@r;left:118/@r;
		// }
		// .step-text-1 {
		// 	.scale(537,672);
		// 	top:249/@r;left:118/@r;
		// }
		// .step-text-2 {
		// 	.scale(553,682);
		// 	top:248/@r;left:118/@r;
		// }
	}
}

@keyframes fadeOut{
	0%{
		opacity: 1;
	}
	100%{
		opacity: 0;
	}
}
@keyframes fadeIn{
	0%{
		opacity: 0;
	}
	100%{
		opacity: 1;
	}
}
</style>
