<template>
	<div class="mainBg">
		<div class="content" v-if="!showBook">
			<div class="contentTitle"><img src="../../static/img/p4-img2.png"/></div>
			<div class="contentList">
				 <div class="contentItem" v-for="(awards,index) in awardsList" :key="index" @click="showAwars(index)">
					 <span  class="contentIcon"><img src="../../static/img/p4-img3.png"/></span>
					 <span>{{awards.enTitle}}</span>
				 </div>
			</div>
			<div class="content-tap" v-if="isMask">
				<img src="../../static/img/icon4.png" />
			</div>
			<div class="content-icon">
				<img src="../../static/img/down-load.png" />
			</div>
			
		</div>
		
		<!-- 书 -->
		<div class="content" v-if="showBook">
			<div class="contentTitle contentTitle2">{{awardsList[bookNumber].enTitle}}</div>
			<div class="contentList contentList2" ref="subContent">
				 <div ref="subList">
					 <li class="contentItem" v-for="(item,index) in awardsList[bookNumber].items" :key="index">{{item.text}}</li>
				 </div>
			</div>
			<div class="content-icon" v-if="bookNumber==9">
				<img src="../../static/img/down-load.png" />
			</div>
		</div>
		<div class="footer-m" v-if="!showBook">
			<img src="../../static/img/back-btn.png" @click="goBack"></span>
		</div>
		<div class="footer" v-if="showBook">
			<img src="../../static/img/back-menu-btn.png" @click="goMenu"></span>
		</div>
	</div>
</template>

<script>

import Vue from 'vue';
export default {
	name: '',
	data() {
		return {
			showBook: false,
			isMask: this.Global.isMask2,
			isShowDown: false,//是否显示向下箭头
			bookNumber: 0,
			awardsList: [{
				enTitle: 'Chambers Asia Pacific (2021)',
				items: [
					{
						text:'Band 1 私人股权中国律所',
					},{
						text:'Band 1 TMT中国律所',
					},{
						text:'Band 1 航空金融中国律所',
					},
				]
			},{
				enTitle: 'Chambers Fintech (2021)',
				items: [
					{
						text:'中国区 Band 1 律所',
					},
				]
			},{
				enTitle: 'IFLR1000 (2021)',
				items: [
					{
						text:'Tier 1 私人股权中国律所',
					},{
						text:'Tier 1 投资基金中国律所',
					},{
						text:'Tier 1 资本市场（股权）中国律所',
					},{
						text:'Tier 1 资本市场（债券）中国律所',
					}
				]
			},{
				enTitle: 'Legal 500 Asia Pacific (2020)',
				items: [
					{
						text:'Tier 1 私募融资风险投资中国律所',
					},{
						text:'Tier 1 投资基金中国律所',
					},{
						text:'Tier 1 TMT中国律所',
					},{
						text:'Tier 1 金融科技中国律所'
					}
				]
			},{
				enTitle: 'ALB (2020)',
				items: [
					{
						text:'Tier 1 并购中国律所',
					},{
						text:'年度最佳私人股权投资中国律所',
					},
				]
			},{
				enTitle: 'The Asian Lawyer (2020)',
				items: [
					{
						text:'年度并购律所',
					}
				]
			},{
				enTitle: 'China Law and Practice (2020)',
				items: [
					{
						text:'年度投资基金中国杰出律所',
					},{
						text:'年度私募风投中国杰出律所',
					}
				]
			},{
				enTitle: 'Asialaw Profiles (2021)',
				items: [
					{
						text:'公司/并购第一梯队中国律所',
					},{
						text:'投资基金及私募股权第一梯队中国律所',
					},{
						text:'科技与电信第一梯队中国律所',
					}
				]
			},{
				enTitle: 'Asialaw Client Service Excellence (2020)',
				items: [
					{
						text:'卓越客户服务中国律所',
					}
				]
			},{
				enTitle: 'China Business Law Journal (2020)',
				items: [
					{
						text:'卓越综合实力律所（北京）',
					},{
						text:'私募股权及创业投资卓越律所',
					},{
						text:'境外资本市场卓越律所',
					},{
						text:'航空卓越律所',
					},{
						text:'信息科技及电信卓越律所'
					},{
						text:'互联网及电商卓越律所'
					},{
						text:'反贿赂及反腐败卓越律所'
					},{
						text:'医疗、制药及生命科学卓越律所'
					}
				]
			},{
				enTitle: 'Mergermarket (2020)',
				items: [
					{
						text:'年度最佳TMT行业并购法律顾问',
					}
				]
			},{
				enTitle: '36氪 (2020)',
				items: [
					{
						text:'「新经济之王」中国VC/PE行业最具影响力法律顾问机构Top 5',
					}
				]
			},{
				enTitle: '全球PE论坛丨财新智库 (2019-2020)',
				items: [
					{
						text:'中国（PE/VC支持）十佳中介服务机构',
					}
				]
			},{
				enTitle: 'Benchmark Litigation Asia-Pacific (2020)',
				items: [
					{
						text:'知识产权推荐中国律所',
					},{
						text:'商业及交易诉讼推荐中国律所',
					}
				]
			},{
				enTitle: 'IAM Patent 1000 (2020)',
				items: [
					{
						text:'诉讼类中国律所',
					},{
						text:'申请类中国律所',
					}
				]
			},{
				enTitle: 'Intellectual Asset Management (IAM) & World Trademark Review (WTR) (2020)',
				items: [
					{
						text:'中国年度最佳专利律所',
					}
				]
			},{
				enTitle: 'Managing Intellectual Property (MIP) (2020)',
				items: [
					{
						text:'专利诉讼推荐中国律所',
					},{
						text:'商标诉讼推荐中国律所',
					},{
						text:'专利申请推荐中国律所'
					}
				]
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
			Vue.prototype.Global.isMask2 = false;
		},3000)
		
	},
	methods: {
		goBack(){
			this.$router.replace('/menu')
		},
		goMenu() {
			this.showBook = 0
		},
		showAwars(index) {
			var that = this;
			this.showBook = true;
			this.bookNumber = index;
			// setTimeout(function(){
			// 	let subH = that.$refs['subList'].offsetHeight;
			// 	console.log(subH)
			// },1000)
			
			// var that = this
			// setTimeout(function(){
			// 	that.bookNumber = num
			// },50)
		}
	},
	computed: {}
};
</script>

<style lang="less" scoped>
@import '../assets/css/index';
@rem: 50rem;
img {
	display: block;
}
.mainBg {
	position: relative;
	background: url(../../static/img/p3-img1.png) no-repeat;
	.scale(750, 1300);
	background-size: 100% auto;
	// width: 750/@rem;
	// height: 100%;
	// background-size: cover;
	background-position: center;
	.content{
		position: absolute;
		.scale(736, 1017);
		left: 0;
		top: 108/@rem;
		// .pos-center;
		background: url(../../static/img/p4-img1.png) no-repeat;
		background-size: 100% auto;
		background-position: center;
		img{
			display: block;
			width: 100%;
		}
		.contentTitle{
			// position: absolute;
			margin: 114/@rem auto 90/@rem auto;
			.scale(413, 102);
			// top: 132/@rem;
			// left: 174/@rem;
		}
		.contentList{
			// position: absolute;
			.scale(520, 526);
			margin-left: 134/@rem;
			// top: 290/@rem;
			// left: 134/@rem;
			font-size: 28/@rem;
			font-weight: 600;
			color: #664a0b;
			overflow-y: auto;
			
			.contentItem{
				height: 135/@rem;
				// height: auto;
				text-align: left;
				// margin: 10/@rem auto 30/@rem auto;
				border-bottom: 1px dotted #664a0b;
				position: relative;
				.contentIcon{
					.scale(54, 54);
					margin-right: 20/@rem;
					position: absolute;
					top: 50%;
					left: 0;
					transform: translateY(-50%);
				}
				span{
					display: inline-block;
					vertical-align: middle;
					width: 80%;
					position: absolute;
					top: 50%;
					left: 70/@rem;
					transform: translateY(-50%);
				}
			}
			
		}
		/* 奖项内容css*/
		.contentTitle2{
			width: 550/@rem;
			text-align: center;
			// left: 50%;
			// transform: translateX(-50%);
			color: #8d6221;
			font-size: 46/@rem;
			font-weight: 600;
			height: auto;
			-webkit-mask-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#c9a765), to(#8d6221)); 
		}
		.contentList2{
			color: #2b2a29;
			font-weight: 500;
			top: 350/@rem;
			.contentItem{
				border-bottom: 1px solid #b8b4ae;
				line-height: 60/@rem;
				height: 60/@rem;
				margin: 20/@rem auto 10/@rem auto;
			}
		}
		.content-icon{
			position: absolute;
			.scale(144, 50);
			left: 50%;
			bottom: 30/@rem;
			transform: translateX(-50%);
		}
		.content-tap{
			position: absolute;
			.scale(72, 58);
			left: 80%;
			top: 390/@rem;
			transform: translateX(-50%);
			.animation(fadeIn, @t: 2s, @fn: ease-in-out, @delay: 0.5s, @i: 3, @dur: alternate);
			animation-fill-mode: both !important;
			img{
				width: 100%;
				display: block;
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
<style lang="less">
	@r: 50rem;
	.footer-m{
		position: absolute;
		bottom: 60/@r;
		left: 50%;
		width: 170/@r;
		height: 35/@r;
		transform: translateX(-50%);
		// width: 178/@r;
		img {
			width:100%;
			height:100%;
		}
	}
	.footer{
		position: absolute;
		bottom: 40/@r;
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
</style>
