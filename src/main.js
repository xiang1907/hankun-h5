import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './libs/rem.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/swiper-bundle.css'
import 'swiper/css/swiper.min.css'
import Global from './components/Global'
Vue.use(VueAwesomeSwiper)
Vue.prototype.Global = Global.modalState ;
Vue.config.productionTip = false

router.afterEach(route => {
  // iView.LoadingBar.finish();
  window.scrollTo(0, 0);
  // 回到顶部
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
