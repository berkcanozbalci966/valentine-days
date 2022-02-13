import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import 'sweetalert2/dist/sweetalert2.min.css';


import Love from '@/views/Love.vue'
import Level2 from '@/views/Level2.vue'
import Level3 from '@/views/Level3.vue'
import Level4 from '@/views/Level4.vue'
import Level5 from '@/views/Level5.vue'
import Level6 from '@/views/Level6.vue'
import Level7 from '@/views/Level7.vue'

import Finish from '@/views/Finish.vue'




const routes = [
    { path: '/', name: 'Home', component: Love },
    { path: '/level2', name: 'level2', component: Level2 },
    { path: '/level3666', name: 'level3', component: Level3 },
    { path: '/level4777', name: 'level4', component: Level4 },
    { path: '/5667', name: 'level5', component: Level5 },
    { path: '/level969696', name: 'level6', component: Level6 },
    { path: '/level777777', name: 'level7', component: Level7 },
    { path: '/Finish', name: 'Finish', component: Finish },


]

const router = createRouter({
    history: createWebHistory(),
    routes
})


createApp(App).use(router).mount('#app')
