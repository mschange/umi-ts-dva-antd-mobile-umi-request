import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/baseLayou',
      routes: [
        { path: '/login', component: '@/pages/login' },
        {
          path: '/',
          component: '@/layouts/main',
          routes: [
            { path: '/', component: '@/pages/home' },
            { path: '/shop', component: '@/pages/shop' },
            { path: '/list', component: '@/pages/list' },
            { path: '/user', component: '@/pages/user' },
          ]
        },
      ]
    }
  ],
});
