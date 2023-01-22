import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/crew',
      name: 'Crew',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CrewView.vue')
    },
    {
      path: '/destination',
      name: 'Destination',
      component: () => import('../views/DestinationView.vue')
    },
    {
      path: '/technology',
      name: 'Technology',
      component: () => import('../views/TechnologyView.vue')
    },
    { path: '/:pathMatch(.*)*', redirect: '/'},
  ]
})

export default router
