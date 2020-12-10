
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
let NODE_ENV = process.env.NODE_ENV;
let mode = '';
mode = NODE_ENV == 'production' ? 'history' : 'hash';

export default new Router({
  linkActiveClass: "active",
  mode: 'hash',
  //base:'/sjp2p/',
  routes: [
    {
      path: '/',
      name: '默认',
      redirect: '/menu',
    },{
      path: '/index',
      name: '/index',
      component: resolve => { require(['@/views/index'], resolve) },
    },{
      path: '/menu',
      name: '/menu',
      component: resolve => { require(['@/views/menu'], resolve) },
    },{
      path: '/hkly',
      name: '汉坤领域',
      component: resolve => { require(['@/views/hkly'], resolve) },
    },{
      path: '/hkgm',
      name: '汉坤规模',
      component: resolve => { require(['@/views/hkgm'], resolve) },
    },{
      path: '/hkjy',
      name: '2020寄语',
      component: resolve => { require(['@/views/hkjy'], resolve) },
    },
  ]
})
