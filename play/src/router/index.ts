import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: ''
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
