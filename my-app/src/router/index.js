import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Login from '../pages/login'
import Reg from '../pages/reg'
import Shopping from '../pages/shopping'
import Movie from '../pages/movie'
import Book from '../pages/book'
import Status from '../pages/status'
import Group from '../pages/group'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: Shopping
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: Shopping
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/status',
      name: 'Status',
      component: Status
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    }
  ]
})
