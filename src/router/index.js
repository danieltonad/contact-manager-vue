import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Add from '../views/contacts/contact-add.vue'
import Edit from '../views/contacts/contact-edit.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/add',
    name: 'contactAdd',
    component: Add
  },
  {
    path: '/edit/:id',
    name: 'contactEdit',
    component: Edit
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
