import { createApp } from 'vue'
import App from './App.vue'
import Route from '@/router'
import router from './router'
import store from './store'
createApp(App).use(store).use(router)
    .use(Route)
    .mount('#app')
