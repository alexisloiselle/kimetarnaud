import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import FormView from '@/views/FormView.vue'
import ConfirmationView from '@/views/ConfirmationView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/formulaire',
      name: 'formulaire',
      component: FormView,
    },
    {
      path: '/confirmation',
      name: 'confirmation',
      component: ConfirmationView,
    },
    {
      path: '/:pathMatch(.*)*', // Matches any path
      component: NotFoundView,
    },
  ],
})

export default router
