import {createWebHistory,createRouter} from 'vue-router'

import Texto from '../components/Texto.vue'


const routes = [
    {path : '/',name: 'Texto',component: Texto},
      
]   

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router