import Vue from 'vue'
import VueRouter from 'vue-router'
import UserList from '../views/UserList.vue'
import UserDetail from '../views/UserDetail.vue'
import UserEdit from '../views/UserEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/users/:id',
    name: 'UserDetail',
    component: UserDetail,
    props: true
  },
  {
    path: '/users/edit/:id?',
    name: 'UserEdit',
    component: UserEdit,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router