import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/MyLogin.vue'
import Home from '../components/MyHome.vue'

import Users from '../components/menus/MyUsers.vue'
import Goods from '../components/menus/MyGoods.vue'
import Rights from '../components/menus/MyRights.vue'
import Setting from '../components/menus/MySetting.vue'
import Orders from '../components/menus/MyOrders.vue'
import UserInfo from '../components/user/MyUserDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    redirect: '/home/users',
    component: Home,
    children: [
      { path: 'users', component: Users },
      { path: 'goods', component: Goods },
      { path: 'rights', component: Rights },
      { path: 'setting', component: Setting },
      { path: 'orders', component: Orders },
      { path: 'userinfo/:id', component: UserInfo, props: true }
    ]
  },
  { path: '/', redirect: 'login' },
  { path: '/login', component: Login }

]

const router = new VueRouter({
  routes
})

// 全局前置守衛
router.beforeEach(function (to, from, next) {
  const pathArr = ['/home', '/home/users', '/home/goods', '/home/rights', '/home/setting', '/home/orders']
  if (pathArr.indexOf(to.path) !== -1) {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      (
        next('/login')
      )
    }
  } else {
    next()
  }
})

export default router
