import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/survey',
    name: 'Survey',
    component: () => import('../views/Survey.vue'),
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import('../views/Result.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
