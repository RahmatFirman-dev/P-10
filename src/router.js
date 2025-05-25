import { createRouter, createWebHistory } from 'vue-router'

import Home from './view/Home.vue'
import HTML from './view/HTML.vue'
import CSS from './view/CSS.vue'
import JavaScript from './view/JavaScript.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/html', name: 'HTML', component: HTML },
  { path: '/css', name: 'CSS', component: CSS },
  { path: '/javascript', name: 'JavaScript', component: JavaScript },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
