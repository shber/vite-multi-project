/*
 * @Author: Shber
 * @Date: 2024-01-26 12:02:03
 * @LastEditors: Shber
 * @LastEditTime: 2024-01-26 16:47:39
 * @Description: 
 */
import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: '/home',
      name: 'index',
      component: () => import('@projects/host/views/index.vue'),
      meta: { title: '首页' }
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
