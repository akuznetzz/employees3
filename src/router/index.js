import { createRouter, createWebHistory } from 'vue-router'
import EmployeesList from '../views/EmployeesList.vue'

const routes = [
  {
    path: '/',
    name: 'EmployeesList',
    component: EmployeesList
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
