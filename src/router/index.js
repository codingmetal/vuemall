import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import("@/views/home/Home");
const Category = () => import("@/views/category/Category");
const Cart = () => import("@/views/cart/Cart");
const Profile = () => import("@/views/profile/Profile");
const Detail = () => import("@/views/details/Details")

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: 'home',
    path: '/home',
    component: Home
  },
  {
    name: 'category',
    path: '/category',
    component: Category
  },
  {
    name: 'cart',
    path: '/cart',
    component: Cart
  },
  {
    name: 'profile',
    path: '/profile',
    component: Profile
  },
  {
    name: 'detail',
    path: '/detail/:iid',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
