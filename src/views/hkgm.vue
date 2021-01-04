<template>
	<div class="mainBg">
		<!-- <div class="menu"><img src="../../static/img/p2-img1.png"/></div> -->
		<div class="content-gm">
			<div class="contentBg"></div>
			<div class="content-items">
				<div class="content-item content-item1">
					<img src="../../static/img/p2-img3.png"/>
					<div class="text">京沪深港<br/>规模扩大<span class="text-ani">12</span>%</div>
				</div>
				<div class="content-item  content-item2">
					<img src="../../static/img/p2-img4.png"/>
					<div class="text">员工接近<br/><span class="text-ani">600</span>人</div>
				</div>
				<div class="content-item  content-item3">
					<img src="../../static/img/p2-img5.png"/>
					<div class="text">新加入和内部晋升合伙人<span class="text-ani">22</span>人</div>
				</div>
				<div class="content-item  content-item4">
					<img src="../../static/img/p2-img6.png"/>
					<div class="text">专业人员接近<span class="text-ani">500</span>人</div>
				</div>
			</div>
		</div>
		<div class="footer-m">
			<span class="btn-back" @click="goBack"><img src="../../static/img/back-btn.png"/></span>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods:{
			goBack(){
				this.$router.replace('/menu')
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
	.mainBg {
		// background-color: #ffffff;
		background-image: url(../../static/img/p2-img7.png);
		background-size: cover;
		width: 750/@rem;
		height: 100%;
	}
	.menu{
		position: absolute;
		top: 118/@rem;
		left: 256/@rem;
		width: 237/@rem;
		height: auto;
		z-index: 99;
		img{
			display: block;
			width: 100%;
		}
	}
	.content-gm{
		position: relative;
		width: 100%;
		height: 100%;
		// font-size: 24/@rem;
		.contentBg{
			position: absolute;
			// top: 402/@rem;
			top: 50%;
			right: 0;
			background: url(../../static/img/p2-img2.png) no-repeat;
			width: 750/@rem;
			height: 1222/@rem;
			background-size: cover;
			transform: translateY(-50%);
			// transform-origin: right;
			// .animation(moveScale, @t: 2s, @fn: linear, @delay: 0.5s, @i: 1,@dur: alternate) ;
			//                 animation-fill-mode: forwards; 
		}
		.content-items{
			position: absolute;
			width: 584/@rem;
			height: 494/@rem;
			top: 45%;
			left: 50%;
			transform: translate(-50%,-50%);
			display: flex;
			flex-flow: wrap;
			justify-content: space-evenly;
		}
		.content-item{
			// position: absolute;
			position: relative;
			width: 272/@rem;
			height: 230/@rem;
			opacity: 0;
			animation-fill-mode: both !important;
			// .animation(fadeIn, @t: 1.5s, @fn: ease-in-out, @delay:2.5s, @i: 1,@dur: alternate) ;
			//                 animation-fill-mode: forwards; 
			img{
				display: block;
				width: 100%;
				height: auto;
				position: absolute;
				top: 0;
				left: 0;
			}
			.text{
				position: absolute;
				width: 80%;
				height: 90/@rem;
				bottom: 20/@rem;
				left: 10%;
				text-align: center;
				font-size: 30/@rem;
				align-items: center;
				display: inline-block;
				vertical-align:middle; 
				    
				.text-ani{
					// font-size: 40/@rem;
					font-weight: bold;
					// transform-origin: right;
					.animation(moveScale, @t: 2s, @fn: linear, @delay: 2.5s, @i: 1,@dur: alternate) ;
					                animation-fill-mode: forwards; 
				}
			}
			&.content-item1{
				.animation(fadeIn, @t: 1.5s, @fn: ease-in-out, @delay:0.5s, @i: 1, @dur: alternate) ;
			}
			&.content-item2{
				.animation(fadeIn, @t: 1.5s, @fn: ease-in-out, @delay:1s, @i: 1,@dur: alternate) ;
				// .text{
				// 	bottom: 0;
				// }
			}
			&.content-item3{
				.animation(fadeIn, @t: 1.5s, @fn: ease-in-out, @delay:1.5s, @i: 1,@dur: alternate) ;
			}
			&.content-item4{
				.animation(fadeIn, @t: 1.5s, @fn: ease-in-out, @delay:2s, @i: 1,@dur: alternate) ;
			}
		}
	}
	.footer-m{
		position: absolute;
		top: 90%;
		left: 50%;
		// bottom: 60/@rem;
		// left: 292/@rem;
		width: 170/@rem;
		height: 64/@rem;
		transform: translateX(-50%);
		z-index: 100;
		span,img{
			display: block;
			width: 100%;
		}
	}
	@keyframes moveScale{
		 0%{
			font-size: 26/@rem;
		 }
		 100%{
			font-size: 40/@rem;
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
	@keyframes fadeOut {
		0% {
			opacity: 1;
		}
	
		100% {
			opacity: 0;
		}
	}
	
</style>
