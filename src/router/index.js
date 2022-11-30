import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/Product/ProductView.vue'
import ProductAdd from '../views/Product/ProductAdd.vue'
import ProductEdit from '../views/Product/ProductEdit.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import('../views/AboutView.vue')
    }
  },
  {
    path: '/product',
    name: 'product',
    component: ProductView
  },
  {
    path: '/product/add',
    name: 'productadd',
    component: ProductAdd
  },
  {
    path: '/product/edit/:id',
    name: 'productedit',
    component: ProductEdit
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
