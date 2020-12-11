<template>
	<div class="mainBg">
		<div v-show="!showBook">
			<swiper :options="swiperOption" class="swiperBox">
				<swiper-slide><img src="../assets/zbsc/book-1.png" @click="openBook(1)" /></swiper-slide>
				<swiper-slide><img src="../assets/zbsc/book-2.png" /></swiper-slide>
				<swiper-slide><img src="../assets/zbsc/book-3.png" /></swiper-slide>
			</swiper>
			<div class="footer">
				<img src="../assets/zbsc/foot-text.png" class="footText" />
			</div>
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
				loop: true,
			}
		};
	},
	created() {},
	methods: {
		goBack() {
			this.$router.push('/menu');
		},
		goMenu() {
			this.showBook = 0;
		},
		openBook1() {
			this.showBook = 2;
		},
		openBook(num) {
			this.showBook = 1;
			this.bookNumber = this.bookContent.length - 1;
			var that = this;
			setTimeout(function() {
				that.bookNumber = num;
			}, 50);
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
		margin-top: 420/@r;
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
	.footer {
		margin: 50/@r auto 0;
		width: 236 / @r;
		height: 28 / @r;
		// width: 178/@r;
		img {
			width: 100%;
			height: 100%;
		}
	}
}
</style>
