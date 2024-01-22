/*
 * @Author: Shber
 * @Date: 2024-01-19 14:35:19
 * @LastEditors: Shber
 * @LastEditTime: 2024-01-22 18:51:20
 * @Description: 
 */
import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/assets/index.scss'

const app = createApp(App)
app.use(router).mount('#app')
