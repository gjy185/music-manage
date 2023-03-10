import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


// 配置路由
export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../pages/Login.vue'], resolve)
    },
    {
      path: '/Info',
      component: resolve => require(['../pages/Info.vue'], resolve)
    },

  ]
})
