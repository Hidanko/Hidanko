import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import router from '../router/index'

createApp(App)
    .use(router)
    .mount('#app')

