import { createApp } from 'vue'
import App from './App.vue'
import { Button } from 'ant-design-vue'
import Route from '@/router'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css'
const app = createApp(App)
app.config.productionTip = false
app.use(store)
  .use(router)
  .use(Route)
  .use(Button)
  .mount('#app')
