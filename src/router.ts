// router.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from './views/Home.vue';
import Generators from './views/Generators.vue';
import Blog from './views/Blog.vue';
import Pricing from './views/Pricing.vue';
import SignIn from './views/Auth/SignIn.vue';
import SignUp from './views/Auth/SignUp.vue';
import NotFound from './views/NotFound.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home',component: Home },
  { path: '/generators', name:'generators', component: Generators },
  { path: '/blog', name:'blog', component: Blog },
  { path: '/pricing', name:'pricing', component: Pricing},
  { path: '/login', name:'login', component: SignIn},
  { path: '/register', name:'register', component: SignUp},
  {
    // Unrecognized path automatically matches 404
    path: '/:pathMatch(.*)*', 
    name: "not-found",
    component: NotFound,
},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
