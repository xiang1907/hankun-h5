<template>
	<div class="mainBg">
		<div class="content-jy">
			<div class="contentBg">
				<img src="../../static/img/p3-img2.png" />
			</div>
			<div class="code"> 
				<img src="../../static/img/p3-img3.png" />
			</div>
		</div>
		<div class="footer">
			<span class="btn-back" @click="share"></span>
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
			share(){
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
		background-color: #806b5f;
		background-image: url(../../static/img/p3-img1.png);
		background-size: cover;
		width: 750/@rem;
		height: 100%;
	}
	.content-jy{
		position: relative;
		font-size: 24/@rem;
		img{
			display: block;
			width: 100%;
		}
		.contentBg{
			position: absolute;
			top: 0;
			left: 0;
			width: 750/@rem;
			height: 1249/@rem;
		}
		.code{
			position: absolute;
			top: 982/@rem;
			left: 92/@rem;
			width: 111/@rem;
			height: 111/@rem;
		}
	}
	.footer{
		position: absolute;
		bottom: 65/@rem;
		left: 292/@rem;
		width: 190/@rem;
		height: 64/@rem;
		font-size: 34/@rem;
		letter-spacing: 2px;
		color: #ffffff;
	}
	@keyframes moveScale{
		 0%{
			transform: scale(1);
		 }
		 100%{
			 // top: 176/@rem;
			 left: -54%;
			 transform: scale(2.1);
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
