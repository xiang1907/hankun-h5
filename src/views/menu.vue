<template>
	<div class="wraper">
		<div class="menu"><img src="../../static/img/p1-img1.png"/></div>
		<div class="content">
			<div class="content-item content-item1">
				<img src="../../static/img/icon1.png" />汉坤规模
			</div>
			<div class="content-item  content-item2">
				<img src="../../static/img/icon1.png" />汉坤荣誉
			</div>
			<div class="content-item  content-item3">
				汉坤领域<img src="../../static/img/icon1.png" />
			</div>
			<div class="content-item  content-item4">
				2020寄语<img src="../../static/img/icon1.png" />
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less">
	@rem: 50rem;
	.wraper{
		background: url(../../static/img/bg.png) no-repeat;
		width: 750/@rem;
		height: 1300/@rem;
		background-size: cover;
		// background-position-x: -160/@rem;
	}
	.menu{
		width: 412/@rem;
		height: auto;
		margin: 0 auto;
		img{
			display: block;
			width: 100%;
		}
	}
	.content{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		font-size: 24/@rem;
		color: #ffffff;
		.content-item{
			position: absolute;
			display: inline-flex;
			width: 186/@rem;
			height: 60/@rem;
			img{
				display: block;
				width: 24/@rem;
				height: 24/@rem;
				padding-top: 4/@rem;
			}
			&.content-item1{
				top: 260/@rem;
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
</style>
