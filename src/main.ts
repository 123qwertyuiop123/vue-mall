import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import elementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Axios from 'axios'

const app = createApp(App)
app.config.globalProperties.$axios=Axios;
app.use(elementPlus).use(router).mount('#app')
