/* 项目的启动入口，会加载App根组件 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ui9981 from './modules/9981-ui'
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont.js'

//createApp(App).use(router).mount('#app')
createApp(App).use(router).use(ui9981).mount('#app')
