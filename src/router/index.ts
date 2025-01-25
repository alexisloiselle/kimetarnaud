import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import FormView from '@/views/FormView.vue'
import ConfirmationView from '@/views/ConfirmationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
  ],
})

export default router
