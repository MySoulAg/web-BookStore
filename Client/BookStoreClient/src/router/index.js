import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Buy from '@/components/Buy'
import ShopingCar from '@/components/ShopingCar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Buy',
      component: Buy
    },
    {
      path: '/ShopingCar',
      name: 'ShopingCar',
      component: ShopingCar
    },
  ]
})
