import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '@/views/About.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'About',
        component: About,
    }
    //add other routes for other pages here
];

const router = new VueRouter({
    mode: 'history',
    base:ProcessingInstruction.env.BASE_URL,
    routes,
});

export default router;