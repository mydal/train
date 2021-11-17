import { createApp } from 'vue'
import { Button } from 'ant-design-vue'
import App from './App.vue'
import Route from '@/router'
import router from './router'
import store from './store'
createApp(App).use(store).use(router)
    .use(Route)
    .use(Button)

    // .use(Button.name,Button)
    // .component(Button.name, Button)
    .mount('#app')
