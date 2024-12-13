import { createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: () => import('./components/pages/Home.vue')
    },
    {
        name: 'About',
        path: '/about',
        component: () => import('./components/pages/About.vue')
    },
    {
        name: 'Projects',
        path: '/projects',
        component: () => import('./components/pages/Projects.vue')
    },
    {
        name: 'Contact',
        path: '/contact',
        component: () => import('./components/pages/Contact.vue')
    },
    {
        name: 'Skills',
        path: '/skills',
        component: () => import('./components/pages/Skills.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;