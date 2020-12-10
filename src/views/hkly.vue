<template>
	<div class="mainBg">
		<swiper :options="swiperOption" class="swiperBox">
			<swiper-slide>
				<img src="../assets/hkly/book-big.png" class="bigImg" />
			</swiper-slide>
			<swiper-slide>
				<div class="bookBox">
					<img src="../assets/hkly/book-1.png" @click="openBook(1)" />
					<img src="../assets/hkly/book-2.png" />
					<img src="../assets/hkly/book-3.png" />
					<img src="../assets/hkly/book-4.png" />
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="bookBox">
					<img src="../assets/hkly/book-5.png" />
					<img src="../assets/hkly/book-6.png" />
					<img src="../assets/hkly/book-7.png" />
					<img src="../assets/hkly/book-8.png" />
				</div>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<div class="footer">
			<img src="../assets/back-btn.png" @click="goBack"></span>
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
			swiperOption: {
				// 所有的参数同 swiper 官方 api 参数一样
				pagination: {
					el: '.swiper-pagination',
				},
			}
		};
	},
	created() {
	},
	methods: {
		goBack(){
			this.$router.push('/menu')
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
	background-image: url('../assets/hkly/bg.png');
	background-size: 100% auto;
	background-repeat: no-repeat;
	background-position: center;
	.swiperBox {
		.scale(636, 949);
		.pos-center;
		.bookBox {
			.scale(636, 836);
			margin: 0 auto;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-around;
			flex-wrap: wrap;
			img {
				.scale(293, 373);
			}
		}
		.bigImg {
			.scale(552,771);
			margin: 20/@r auto 0;
		}
	}
	.swiperBox /deep/ .swiper-pagination-bullet {
		background-color: #bcbcbc;
		opacity: 1;
	}
	.swiperBox /deep/ .swiper-pagination-bullet-active {
		background-color: #ffffff;
		opacity: 1;
	}
	.footer{
		position: absolute;
		bottom: 60/@r;
		left: 50%;
		width:175/@r;
		height: 35/@r;
		transform: translateX(-50%);
		// width: 178/@r;
		img {
			width:100%;
			height:100%;
		}
	}
}
</style>
