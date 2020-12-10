<template>
	<div v-if="isShow">
		
	</div>
	<div v-else class="wraper">
		<div class="menu"><img src="../../static/img/p1-img1.png"/></div>
		<div class="content">
			<div class="content-item content-item1" @click="jumpPage('1')">
				<span class="item-icon active"></span>汉坤规模
			</div>
			<div class="content-item  content-item2"  @click="jumpPage('2')">
				<span class="item-icon"></span>汉坤荣誉
			</div>
			<div class="content-item  content-item3"  @click="jumpPage('3')">
				汉坤领域<span class="item-icon"></span>
			</div>
			<div class="content-item  content-item4"  @click="jumpPage('4')">
				2020寄语<span class="item-icon"></span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				isShow:true
			}
		},
		methods:{
			jumpPage(index){
				if(index === '1'){//汉坤规模
					this.$router.push('hkgm')
				}else if(index === '2'){//汉坤荣誉
					this.$router.push('hkry')
				}else if(index === '3'){//汉坤领域
					this.$router.push('hkly')
				}else if(index === '4'){//2020寄语
					this.$router.push('hkjy')
				}else{
					this.$router.push('menu')
				}
			}
		}
	}
</script>

<style lang="less">
	@rem: 50rem;
	
	.animation(@n, @t: 0s, @fn: ease-in-out, @delay: 0s, @i: infinite, @dur: alternate) {
		animation: @n @t @fn @delay @i @dur;
		-webkit-animation: @n @t @fn @delay @i @dur;
		-o-animation: @n @t @fn @delay @i @dur;
		-moz-animation: @n @t @fn @delay @i @dur;
	}
	
	.wraper{
		width: 100%;
		height: 100%;
		overflow-x: auto;
	}
	.menu{
		position: absolute;
		left: 160/@rem;
		top: -40/@rem;
		width: 412/@rem;
		height: auto;
		z-index: 99;
		img{
			display: block;
			width: 100%;
		}
	}
	.content{
		position: relative;
		background: url(../../static/img/bg.png) no-repeat;
		width: 1710/@rem;
		height: 1300/@rem;
		background-size: cover;
		font-size: 24/@rem;
		color: #ffffff;
		overflow: auto;
		.content-item{
			position: absolute;
			display: inline-flex;
			width: 186/@rem;
			height: 60/@rem;
			.item-icon{
				display: block;
				width: 24/@rem;
				height: 24/@rem;
				background-image: url(../../static/img/icon1.png);
				background-size: cover;
				margin-top: 4/@rem;
				.animation(fadeIn, @t: 1s, @fn: ease-in-out, @delay: 0.5s, @i: infinite,@dur: alternate) ;
				                animation-fill-mode: forwards; 
				&.active{
					background-image: url(../../static/img/icon2.png);
				}
			}
			&.content-item1{
				top: 262/@rem;
				left: 434/@rem;
			}
			&.content-item2{
				top: 454/@rem;
				left: 626/@rem;
			}
			&.content-item3{
				top: 644/@rem;
				left: 1004/@rem;
			}
			&.content-item4{
				top: 836/@rem;
				left: 428/@rem;
			}
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
