/*
 * @Author: Shber
 * @Date: 2024-01-19 14:59:13
 * @LastEditors: Shber
 * @LastEditTime: 2024-01-22 19:55:36
 * @Description: 
 */
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'page1',
      component: () => import('@projects/page1/views/example.vue'),
      meta: {title: '案例1'}
    }
  ]
})

router.afterEach((to, from, next) => {
  //遍历meta改变title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  window.scrollTo(0, 0)
})

export default router
