import { createRouter, createWebHistory } from 'vue-router';

const files = import.meta.glob('./modules/*.js', {
  eager: true,
});

const routeModuleList = [];

Object.keys(files).forEach((key) => {
  const module = files[key].default || {};
  const moduleList = Array.isArray(module) ? [...module] : [module];
  routeModuleList.push(...moduleList);
});

const asyncRouterList = [...routeModuleList];

const defaultRouterList = [];

const routes = [...defaultRouterList, ...asyncRouterList];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    };
  },
});

export default router;
