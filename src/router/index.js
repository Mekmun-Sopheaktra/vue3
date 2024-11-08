import { createRouter, createWebHistory } from 'vue-router';
import guards from './guards';

const routes = [
  {
    path: '/',
    name: 'default',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/pinia',
    name: 'pinia',
    component: () => import('../views/PiniaView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes,
});

router.beforeEach(guards.beforeEach);
router.beforeResolve(guards.beforeResolve);
router.afterEach(guards.afterEach);

export default router;
