import { createApp } from 'vue'
import App from './App.vue'
import Route from '@/router'
import router from './router'
import store from './store'
import {setupAntd} from './ant-design-vue'
const app = createApp(App)
setupAntd(app)
app.config.productionTip = false
app.use(store)
  .use(router)
  .use(Route)
  .mount('#app')
