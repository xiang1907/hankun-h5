<template>
   <div class="container" >
	  <div class="title"><img src="../../static/img/p0-img1.png"/></div>
      <div class="loading-panel">
		  <div class="loading-progress">
			  <span class="loading-dis"></span>
		  </div>
		  <span class="loading-precent">42%{{precent}}</span>
		  <span>寻找并点亮图标，开启神秘贺卡</span>
      </div>
	  <div class="footer"><img src="../../static/img/p0-img2.png"/></div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
		count: 0,
		precent: '',
		imgs:[{
				url:'../../static/img/p0-img1.png'
			},{
				url:"../../static/img/p0-img2.png",
			},{
				url:"../../static/img/p1-img1.png",
			},{
				url:"../../static/img/p1-img2.png",
			},{
				url:"../../static/img/bg.png"
			}
		]
      };
    },
    mounted: function() {
       this.preload()
    },
    methods: {
        preload(){
			 var _this = this;
			  for (let i=0;i<_this.imgs.length;i++) {
				  let image = new Image()
				  image.src = _this.imgs[i].url;
				  console.log(image)
				  image.onload = ()=> {
				  		console.log('sss')
				  }
				  // image.onload = () =>{ //加载完成
				  // 	// _this.count ++ ;
				  // 	// console.log(this.count,_this.urls.length)
				  // 	// let percentNum = Math.floor(_this.count / _this.imgs.length * 100);
				  // 	// _this.percent = `${percentNum}%`
				  // }
				 
			  }
		}
    },
    watch: {
        count: function(val) {
          console.log(val)
          if (val ===  _this.imgs.length) {
            // 图片加载完成后跳转页面
            this.$router.push({path: 'menu'})
          }
        }
    }
  };
</script>

<style lang="less" >
	@rem: 50rem;
	.container{
		width: 100%;
		height: 100%;
		background-color: #e7d9d0;
		position: absolute;
		top: 0;
		left: 0;
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
				width: 40%;
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
	.footer{
		width: 230/@rem;
		margin: 280/@rem auto 150/@rem;
		img{
			display: inline-block;
			width: 100%;
		}
	}
</style>
