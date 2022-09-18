import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/oferta',
      name: 'services',
      component: () => import('../views/Services.vue'),
    },
    {
      path: '/wspolpraca',
      name: 'affiliation',
      component: () => import('../views/Affiliation.vue'),
    },
    {
      path: '/kontakt',
      name: 'contact',
      component: () => import('../views/Contact.vue'),
    },
  ],
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0, behavior: 'smooth' });
      }, 200);
    });
  },
});

export default router;
