<template>
	<div class="mainBg">
		<div class="menu"><img src="../../static/img/p2-img1.png"/></div>
		<div class="content-gm">
			<div class="contentBg"></div>
			<div class="content-items">
				<div class="content-item content-item1">
					<img src="../../static/img/p2-img3.png"/>
				</div>
				<div class="content-item  content-item2">
					<img src="../../static/img/p2-img4.png"/>
				</div>
				<div class="content-item  content-item3">
					<img src="../../static/img/p2-img5.png"/>
				</div>
				<div class="content-item  content-item4">
					<img src="../../static/img/p2-img6.png"/>
				</div>
			</div>
		</div>
		<div class="footer">
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
				this.$router.push('/menu')
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
		background-color: #ffffff;
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
		font-size: 24/@rem;
		.contentBg{
			position: absolute;
			top: 402/@rem;
			right: 0;
			background: url(../../static/img/p2-img8.png) no-repeat;
			width: 750/@rem;
			height: 414/@rem;
			background-size: cover;
			transform-origin: right;
			.animation(moveScale, @t: 3s, @fn: linear, @delay: 1s, @i: 1,@dur: alternate) ;
			                animation-fill-mode: forwards; 
		}
		.content-item{
			position: absolute;
			height: 76/@rem;
			opacity: 0;
			.animation(fadeIn, @t: 1.5s, @fn: ease-in-out, @delay:2.5s, @i: 1,@dur: alternate) ;
			                animation-fill-mode: forwards; 
			img{
				display: block;
				width: 100%;
				height: auto;
			}
			&.content-item1{
				top: 370/@rem;
				left: 220/@rem;
				width: 368/@rem;
			}
			&.content-item2{
				top: 534/@rem;
				left: 94/@rem;
				width: 280/@rem;
			}
			&.content-item3{
				top: 674/@rem;
				left: 224/@rem;
				width: 455/@rem;
			}
			&.content-item4{
				top: 860/@rem;
				left: 214/@rem;
				width: 322/@rem;
			}
		}
	}
	.footer{
		position: absolute;
		bottom: 60/@rem;
		left: 292/@rem;
		width: 170/@rem;
		height: 64/@rem;
		z-index: 100;
		span,img{
			display: block;
			width: 100%;
		}
	}
	@keyframes moveScale{
		 0%{
			right:0;
			transform: scale(1);
		 }
		 100%{
			transform: scale(2.1);
			transform-origin: right;
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
