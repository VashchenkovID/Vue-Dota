
import StartPage  from '@/pages/StartPage.vue';
import { createRouter, createWebHistory } from 'vue-router';
import  TeamsList  from '@/pages/TeamsList.vue';
import MatchesList  from '@/pages/MatchesList.vue';

const routes = [
    {
        path: '/',
        component: StartPage
    },
    {
        path: '/teams',
        component: TeamsList
    },
    {
        path: '/matches',
        component: MatchesList
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
