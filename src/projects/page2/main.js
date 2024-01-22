/*
 * @Author: Shber
 * @Date: 2024-01-19 14:35:19
 * @LastEditors: Shber
 * @LastEditTime: 2024-01-22 20:00:15
 * @Description: 
 */

import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/assets/index.scss'


const app = createApp(App)

// app.use(createPinia())
app.use(router)

app.mount('#app')
