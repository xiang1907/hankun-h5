
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
      redirect: '/index',
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
    },
  ]
})
