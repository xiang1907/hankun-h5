<template>
	<div class="mainBg">
		<div v-show="!showBook">
			<swiper :options="swiperOption" class="swiperBox">
				<swiper-slide><img src="../assets/zbsc/book-1.png" @click="openBook(1)" /></swiper-slide>
				<swiper-slide><img src="../assets/zbsc/book-2.png" /></swiper-slide>
				<swiper-slide><img src="../assets/zbsc/book-3.png" /></swiper-slide>
			</swiper>
			<div class="footerText"><img src="../assets/zbsc/foot-text.png" /></div>
			<div class="footerBack"><img src="../assets/back-btn.png" @click="goBack" /></div>
		</div>
		<!-- 第二阶段 -->
		<div class="step2-bg" v-show="showBook == 1">
			<img src="../assets/zbsc/step2-coffee.png" class="step-coffee">
			<img src="../assets/zbsc/step2-bq.png" class="step-bq">
			<img src="../assets/zbsc/step2-text-1.png" class="step-text-1">
			<img src="../assets/zbsc/step2-xinfeng.png" class="step-xinfeng">
		</div>
		<!-- 第三阶段 -->
		<div class="step3-bg" v-show="showBook == 2">
			<img src="../assets/zbsc/step3-text-1.png" class="step-text">
			<div class="footerBack"><img src="../assets/back-btn.png" @click="goBack2" /></div>
		</div>
	</div>
</template>

<script>
// import VueAwesomeSwiper from 'vue-awesome-swiper';
// import 'swiper/swiper-bundle.css';

export default {
	name: '',
	data() {
		return {
			showBook: 0,
			bookNumber: 0,
			swiperOption: {
				// 所有的参数同 swiper 官方 api 参数一样
				// cssMode: true,
				effect: 'coverflow',
				coverflowEffect: {
					rotate: 0,
					stretch: 100,
					depth: 40,
					modifier: 1,
					slideShadows: false
				},
				slidesPerView: 1.5,
				centeredSlides: true,
				loop: true
			}
		};
	},
	created() {},
	methods: {
		goBack() {
			this.$router.push('/hkly');
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
			// this.bookNumber = this.bookContent.length - 1;
			var that = this;
			setTimeout(function() {
				that.showBook = 2;
			}, 500);
		}
	},
	computed: {}
};
</script>

<style lang="less" scoped>
@import '../assets/css/index';
img {
	display: block;
}
.mainBg {
	.scale(750, 1300);
	.pos-center;
	background-image: url('../assets/zbsc/bg.png');
	background-size: 100% auto;
	background-repeat: no-repeat;
	background-position: center;
	.swiperBox {
		// height: 533 / @r;
		// width: 100%;
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
		background-image: url('../assets/zbsc/step2-bg.png');
		background-size: 100% auto;
		background-repeat: no-repeat;
		background-position: center;
		.step-coffee {
			position: absolute;
			.scale(320,347);
			top:4/@r;left:0;
			z-index: 10;
		}
		.step-bq {
			position: absolute;
			.scale(317,345);
			top:87/@r;left:448/@r;
			z-index: 9;
		}
		.step-xinfeng {
			position: absolute;
			.scale(784,1084);
			top:162/@r;left:-19/@r;
			z-index: 1;
		}
		.step-text-1 {
			position: absolute;
			.scale(683,733);
			top:389/@r;left:43/@r;
			z-index: 5;
		}
	}
	.step3-bg {
		.scale(750, 1300);
		.pos-center;
		position: relative !important;
		background-image: url('../assets/zbsc/step3-bg.png');
		background-size: 100% auto;
		background-repeat: no-repeat;
		background-position: center;
		.step-text {
			position: absolute;
			.scale(537,853);
			top:229/@r;left:118/@r;
			z-index: 5;
		}
	}
}
</style>
