<template>
	<div class="wraper-m">
		<div class="mask" v-if="isMask">
			<img src="../../static/img/hkly/bg-mask.png" />
		</div>
		<div class="content-tap" v-if="isMask">
			<img src="../../static/img/icon6.png" />
		</div>
	<div class="mainBg">
		<div v-show="!showBook">
			<swiper :options="swiperOption" class="swiperBox">
				<swiper-slide>
					<img src="../../static/img/hkly/book-big.png" class="bigImg" @click="jumpPage" />
				</swiper-slide>
				<swiper-slide>
					<div class="bookBox">
						<img src="../../static/img/hkly/book-1.png" @click="openBook1" />
						<img src="../../static/img/hkly/book-2.png" @click="openBook(0)" />
						<img src="../../static/img/hkly/book-3.png" @click="openBook(1)" />
						<img src="../../static/img/hkly/book-4.png" @click="openBook(2)" />
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="bookBox">
						<img src="../../static/img/hkly/book-5.png" @click="openBook(3)" />
						<img src="../../static/img/hkly/book-6.png" @click="openBook(4)" />
						<img src="../../static/img/hkly/book-7.png" @click="openBook(5)" />
						<img src="../../static/img/hkly/book-8.png" @click="openBook(6)" />
					</div>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
			<div class="footer">
				<img src="../../static/img/back-btn.png" @click="goBack"></span>
			</div>
		</div>
		<!-- 书 -->
		<div class="bookBg" v-show="showBook == 1">
			<div class="bookTitle">
				<img :src="bookContent[bookNumber].bookTitleImg" alt="">
			</div>
			<div ref="bookTextScroll" class="bookText" v-html="bookContent[bookNumber].bookText"></div>
			
			<div class="footer">
				<img src="../../static/img/hkly/back-menu-btn.png" @click="goMenu"></span>
			</div>
		</div>
		<!-- 兼收和并购 -->
		<div class="bookContentBg" v-show="showBook == 2">
			<div class="bookBox">
				<img src="../../static/img/hkly/book-content.png" alt="">
			</div>
			<!-- <div class="bottom"></div> -->
			<div class="footer">
				<img src="../../static/img/hkly/back-menu-btn.png" @click="goMenu"></span>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
// import VueAwesomeSwiper from 'vue-awesome-swiper';
// import 'swiper/swiper-bundle.css';
import Vue from 'vue';

export default {
	name: '',
	data() {
		return {
			isMask: this.Global.isMask,
			showBook: 0,
			bookNumber: 0,
			bookContent: [{
				bookTitleImg: require('../../static/img/hkly/book-title-2.png'),
				bookText: "汉坤是私募投资领域的顶尖中国律所<br>汉坤代表众多基金和公司客户，参与完成数百个境内境外架构的的私募基金投融资项目。在项目中我们既代表大量投资行业最活跃的投资机构，也代表许多处于各个行业最前沿的明星公司、独角兽企业。<br>“（汉坤）为许多风险投资和初创公司提供投资建议，也因其强大的私募股权能力而备受推崇。在TMT、金融科技和医疗保健等各行业拥有处理大量在岸和跨境结构交易的傲人履历。” <br>—— Chambers Asia Pacific Guide 2020"
			},
			{
				bookTitleImg: require('../../static/img/hkly/book-title-3.png'),
				bookText: "汉坤基金律师团队经验丰富，业务兼具深度与广度，综合能力及跨境能力突出。迄今，汉坤投资基金团队已代表客户设立及投资了超过2000支投资基金，包括1500多支人民币基金，近700支美元基金（包括若干支境内及跨境S基金）。<br>“这支令人刮目相看且不断壮大的团队代表各个行业领域里著名的基金管理和资产管理机构。以其处理大型风投基金设立的实力而受到青睐，并因其处理在岸和离岸业务的能力备受好评。特别擅长处理平行基金和母基金结构。仍然是人民币基金业务的一个热门选择。”<br>—— Chambers Asia Pacific Guide 2020"
			},
			{
				bookTitleImg: require('../../static/img/hkly/book-title-4.png'),
				bookText: "代表多家全球知名资产管理机构参与了金融和资管市场开放后的市场首例或首批项目；为多家不同类型的头部金融科技企业提供全方位合规支持；代表数家出租人和银行参与飞机融资与租赁交易的债务重组与争议解决。随着市场领军团队的加入，夯实了汉坤在不动产领域相关金融产品的服务能力，并协助客户完成多个首批公募REITs试点项目的申报，代表资产方和资金方完成仓储、产业园、IDC基金的设立和运作，领跑不动产资产证券化领域等，持续保持在银行金融、跨境资管、金融衍生品、航空金融、金融科技、不良资产重组等领域的市场领先地位。"
			},
			{
				bookTitleImg: require('../../static/img/hkly/book-title-5.png'),
				bookText: "受益于行业的蓬勃发展以及汉坤在该领域的良好口碑，在过去一年中，汉坤继续在数百起生命科学和健康医疗领域的投融资和并购交易中为客户保驾护航。汉坤律师也在近些年日益增多的授权许可交易（license-in/out）以及药品资产剥离交易中为客户提供优质的法律服务。《基本医疗卫生与健康促进法》、新《药品管理法》及其一系列配套规定的陆续出台，使该领域的合规工作面临更多的新挑战，汉坤律师紧跟监管要求，持续为客户公司处理各种复杂的合规问题。"
			},
			{
				bookTitleImg: require('../../static/img/hkly/book-title-6.png'),
				bookText: "精英团队，精品服务，夯实基础，砥砺前行。知识产权业务依托雄厚的实力不断获得业界的广泛认可，被IP Star, ALB, Benchmark litigation, IAM等权威机构均评为年度上榜律所。2020年，知识产权诉讼业务和专利申请业务并进，收获了更多的复杂高难度业务，团队得到突飞猛进的发展，知识产权部正在以勤奋的工匠精神不断为客户争取更大的利益和增添更多的价值。"
			},
			{
				bookTitleImg: require('../../static/img/hkly/book-title-7.png'),
				bookText: "一流团队再次升级。争议解决团队在2020年迎来多位重量级合伙人、资深顾问加盟，人员翻倍，实力增强。在多起引起社会广泛关注或具有重大影响的案件中崭露头角，为客户披荆斩棘、保驾护航。在发挥传统优势的同时，于井喷式增长的破产清算相关诉讼、债券违约、债券虚假陈述等领域稳固市场地位。数起最高院再审案件的完美收官，帮陷于绝望的客户“峰回路转”，迎来客户的大家赞誉。"
			},
			{
				bookTitleImg: require('../../static/img/hkly/book-title-8.png'),
				bookText: "汉坤的反垄断业务在业内迅速获得良好口碑。我们的经营者集中申报业务有了长足的发展，代理了一些重大并购案件；我们的受托监督执行业务的实力也受到好评。代表国际知名客户处理市监总局调查和法院反垄断诉讼的业务经验收到业界瞩目，包括智能设备公司、互联网公司、医药研发公司、私募股权基金公司。"
			},
			{
				bookTitleImg: '',
				bookText: ""
			}],
			swiperOption: {
				// 所有的参数同 swiper 官方 api 参数一样
				pagination: {
					el: '.swiper-pagination',
				},
			}
		};
	},
	created() {
		var _this = this;
		setTimeout(()=>{
			_this.isMask = false;
			Vue.prototype.Global.isMask = false;
		},3000)
	},
	methods: {
		jumpPage() {
			this.$router.replace('zbsc')
		},
		goBack(){
			this.$router.replace('/menu')
		},
		goMenu() {
			this.showBook = 0
		},
		openBook1() {
			this.showBook = 2
		},
		openBook(num) {
			this.showBook = 1
			this.bookNumber = this.bookContent.length-1;
			var that = this
			setTimeout(function(){
				that.bookNumber = num
			},50)
		},
		hideMask(){
			this.isMask = false;
			Vue.prototype.Global.isMask = false;
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
.wraper-m{
	width: 100%;
	height: 100%;
	position: relative;
	.mask{
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 101;
		background-color: rgba(0,0,0,0.9);
		.animation(fadeIn, @t: 3s, @fn: ease-in-out, @delay: 0.5s, @i: 1, @dur: alternate);
		animation-fill-mode: both !important;
		// pointer-events: none;
		img{
			.scale(500, 297);
			.pos-center;
			display: block;
		}
	}
	.content-tap{
		position: absolute;
		.scale(184, 166);
		// .pos-center;
		left: 55%;
		top: 50%;
		transform: translate(-50%,-58%);
		.animation(fadeIn, @t: 1.5s, @fn: ease-in-out, @delay: 0.5s, @i: 3, @dur: alternate);
		animation-fill-mode: both !important;
		z-index: 102;
		img{
			width: 100%;
			display: block;
		}
	}
}

.mainBg {
	.scale(750, 1300);
	.pos-center;
	background-image: url('../../static/img/hkly/bg.png');
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
	.bookContentBg {
		.scale(750,1300);
		.pos-center;
		background-image: url('../../static/img/hkly/book-content-1.png');
		background-size: 100% auto;
		background-repeat: no-repeat;
		background-position: center;
		.bookBox {
			overflow-y: auto;
			.scale(579,800);
			position: absolute;
			top:212/@r;left:50%;
			transform: translateX(-50%);
			img {
				width:100%;
				height:auto;
			}
		}
		// .bottom {
		// 	position: fixed;
		// 	background: linear-gradient(to bottom,rgba(246, 239, 222, 0), rgba(246, 239, 222, 0.8));
		// 	width:579/@r;height:80/@r;
		// 	left: 50%;
		// 	transform: translateX(-50%);
		// 	bottom:280/@r;
		// }
		.footer{
			position: absolute;
			bottom: 60/@r;
			left: 50%;
			width:136/@r;
			height: 51/@r;
			transform: translateX(-50%);
			// width: 178/@r;
			img {
				width:100%;
				height:100%;
			}
		}
	}
	.bookBg {
		.scale(750, 1300);
		max-height: 100%;
		background-size: 100% auto;
		background-repeat: no-repeat;
		background-position: center;
		background-image: url('../../static/img/hkly/book-bg.png');
		.bookTitle {
			.scale(580,132);
			.pos-a(209,102);
			img {
				width:100%;
			}
		}
		.bookText {
			.scale(510,550);
			.pos-a(341,102);
			margin:62/@r 35/@r 0;
			line-height: 68/@r;
			font-size:16px;
			text-align: left;
			overflow: auto;
		}
		.footer{
			position: absolute;
			bottom: 60/@r;
			left: 50%;
			width:136/@r;
			height: 51/@r;
			transform: translateX(-50%);
			// width: 178/@r;
			img {
				width:100%;
				height:100%;
			}
		}
	}
}
@keyframes fadeIn {
	0% {
		opacity: 1;
	}

	100% {
		opacity: 0;
	}
}
</style>
