<template>
   <div class="container" >
	  <div class="title"><img src="../../static/img/p0-img1.png"/></div>
      <div class="loading-panel">
		  <div class="loading-progress">
			  <span class="loading-dis" :style="{'width':precent}" ></span>
		  </div>
		  <span class="loading-precent">{{precent}}</span>
		  <span>寻找并点亮图标，开启神秘贺卡</span>
      </div>
	  <div class="footer-f"><img src="../../static/img/p0-img2.png"/></div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
		count: 0,
		precent: '',
		imgs:[{
				url:require('../../static/img/p0-img1.png')
			},{
				url:require("../../static/img/p0-img2.png"),
			},{
				url:require("../../static/img/p1-img1.png"),
			},{
				url:require("../../static/img/p1-img2.png"),
			},{
				url:require("../../static/img/bg.png")
			},{
				url:require("../../static/img/p2-img8.png"),
			},{
				url:require("../../static/img/p2-img2.png"),
			},{
				url:require("../../static/img/p3-img1.png"),
			},{
				url:require("../../static/img/p3-img2.png"),
			},{
				url:require("../../static/img/p3-img3.png"),
			},{
				url:require("../../static/img/p3-img5.jpg"),
			},{
				url:require("../../static/img/p4-img1.png"),
			},{
				url:require("../../static/img/p4-img2.png"),
			},{
				url:require("../../static/img/p4-img3.png"),
			},{
				url:require("../../static/img/hkly/book-1.png"),
			},{
				url:require("../../static/img/hkly/book-2.png"),
			},{
				url:require("../../static/img/hkly/book-3.png"),
			},{
				url:require("../../static/img/hkly/book-4.png"),
			},{
				url:require("../../static/img/hkly/book-5.png"),
			},{
				url:require("../../static/img/hkly/book-6.png"),
			},{
				url:require("../../static/img/hkly/book-7.png"),
			},{
				url:require("../../static/img/hkly/book-8.png"),
			},{
				url:require("../../static/img/hkly/book-bg.png"),
			},{
				url:require("../../static/img/hkly/book-big.png"),
			},{
				url:require("../../static/img/hkly/book-content.png"),
			},{
				url:require("../../static/img/hkly/book-content-1.png"),
			},{
				url:require("../../static/img/hkly/book-title-2.png"),
			},{
				url:require("../../static/img/hkly/book-title-3.png"),
			},{
				url:require("../../static/img/hkly/book-title-4.png"),
			},{
				url:require("../../static/img/hkly/book-title-5.png"),
			},{
				url:require("../../static/img/hkly/book-title-6.png"),
			},{
				url:require("../../static/img/hkly/book-title-7.png"),
			},{
				url:require("../../static/img/hkly/book-title-8.png"),
			},{
				url:require("../../static/img/zbsc/book-1.png"),
			},{
				url:require("../../static/img/zbsc/book-2.png"),
			},{
				url:require("../../static/img/zbsc/foot-text.png"),
			},{
				url:require("../../static/img/zbsc/step2-bg.png"),
			},{
				url:require("../../static/img/zbsc/step2-bq.png"),
			},{
				url:require("../../static/img/zbsc/step2-coffee.png"),
			},{
				url:require("../../static/img/zbsc/step2-text-1.png"),
			},{
				url:require("../../static/img/zbsc/step2-text-2.png"),
			},{
				url:require("../../static/img/zbsc/step2-text-3.png"),
			},{
				url:require("../../static/img/zbsc/step2-xinfeng.png"),
			},{
				url:require("../../static/img/zbsc/step3-bg.png"),
			},{
				url:require("../../static/img/zbsc/step3-text-1.png"),
			},{
				url:require("../../static/img/zbsc/step3-text-2.png"),
			},{
				url:require("../../static/img/zbsc/step3-text-3.png"),
			}
		],
		porgressWidth: 0
      };
    },
    mounted: function() {
		var that = this;
		that.preload()
    },
    methods: {
        preload(){
			 var _this = this;
			 for(let img in _this.imgs){
			 	let image = new Image();
			 	image.src = _this.imgs[img].url;
			 	// console.log(image);
			 	image.onload = () =>{ //加载完成
			 		_this.count ++ ;
			 		let percentNum = Math.floor(_this.count / _this.imgs.length * 100);
			 		_this.precent = `${percentNum}%`
			 	}
			 }
		},
		jumpPage(){
			setTimeout(()=>{
				this.$router.replace({path: 'menu'})
			},2000)
		}
    },
    watch: {
        count: function(val) {
		  var _this = this;
          if (val ===  this.imgs.length) {
            // 图片加载完成后跳转页面
			this.$router.replace({path: 'menu'})
			// _this.jumpPage();
          }
        }
    }
  };
</script>

<style lang="less" scoped>
	@rem: 50rem;
	.container{
		width: 100%;
		height: 100%;
		background-color: #e7d9d0;
		position: absolute;
		top: 0;
		left: 0;
		overflow: hidden;
	}
	.title{
		width: 541/@rem;
		margin: 280/@rem auto 150/@rem ;
		img{
			display: inline-block;
			width: 100%;
		}
	}
	.loading-panel{
		font-size: 26/@rem;
		color: #89796e;
		span{
			display: block;
		}
		.loading-progress{
			position: relative;
			border: 2px solid #000000;
			border-radius: 10px;
			width: 533/@rem;
			height: 33/@rem;
			margin: 0 auto;
			.loading-dis{
				position: absolute;
				left: 0;
				top: 0;
				width: 0;
				height: 100%;
				border-radius: 10px;
				background-color: #e94b4d;
			}
		}
		.loading-precent{
			font-weight: bold;
			margin: 20/@rem auto;
		}
		
	}
	.footer-f{
		width: 230/@rem;
		margin: 280/@rem auto 150/@rem;
		img{
			display: inline-block;
			width: 100%;
		}
	}
	
</style>
