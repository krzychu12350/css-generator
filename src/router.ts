// router.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from './views/Home.vue';
import GetStarted from './views/GetStarted.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home',component: Home },
  { path: '/getting-started', name:'get-started', component: GetStarted },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
