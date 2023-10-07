import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '../views/register.vue'
import Login from '../views/Login.vue'
import index from '../views/index.vue'
import Concern from '../views/Concern.vue'
import Personal from '../views/Personal.vue'
import comment from '../views/comment.vue'
import collect from '../views/collect.vue'
import setting from '../views/setting.vue'
import Home from '../views/Home.vue'
import navnews from '../views/navnews.vue'
import column from '../views/column.vue'
import article from '../views/article.vue'
import Test from '../views/Test.vue'
import hotComment from '../views/hotComment.vue'
import Guanyu from '../views/guanyu.vue'
import Shangcheng from '../views/shangcheng.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    component: register
  },
  {
    path: '/',
    component:index
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:Login
  },
  {
    path: '/Concern',
    component:Concern
  },
  {
    path: '/Personal',
    component:Personal
  },
  {
    path: '/comment',
    component:comment
  },
  {
    path: '/collect',
    component:collect
  },
  {
    path: '/setting',
    component:setting
  },
  {
    path: '/Home',
    component:Home
  },
  {
    path: '/navnews',
    component:navnews
  },
  {
    path: '/column',
    component:column
  },
  {
    path: '/article',
    component:article
  }, {
    path: '/Test',
    component:Test
  },
  {
    path: '/hotComment',
    component:hotComment
  },
  {
    path: '/Guanyu',
    component:Guanyu
  },
  {
    path: '/Shangcheng',
    component:Shangcheng
  }
]

const router = new VueRouter({
  routes
})

export default router
