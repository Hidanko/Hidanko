import Home from '@/components/Home.vue'
import About from "@/components/About.vue";
import Main from '@/components/Main.vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from "@/App.vue";

const routes= [
        {path: '/', name: 'Main', component: Main},
        {path:'/home', name:"Home", component: Home},
        {path: '/about', name: 'About', component: About}
    ]

const router = createRouter({
    history: createWebHistory('/'), routes
})

export default router