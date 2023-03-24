import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LuckyNumbers from '../views/LuckyNumbers.vue'
import TodoList from '../views/TodoList.vue'
import Counter from '../views/Counter.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/luckynumbers',
      name: 'luckynumbers',
      component: LuckyNumbers
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: TodoList
    },
    {
      path: '/counter',
      name: 'counter',
      component: Counter
    }
  ]
})

export default router
