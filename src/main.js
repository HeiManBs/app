import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入Ul组件库
import Vant from 'vant'
import { Toast } from 'vant';
//引入组件css文件
import 'vant/lib/index.css'
//注册vant ui组件库的标签
Vue.use(Vant)
import axios from "axios"
// 绑定到原型
Vue.prototype.$axios=axios

Vue.config.productionTip = false

//添加路由守卫
router.beforeEach((to,from,next) => {
  if (to.path==='/Personal') {
    if (localStorage.getItem('token')) {
      next()
    } else {
      Toast.fail('系统繁忙，请登录再试');
      setTimeout(() => {
        router.push('/')
      }, 500);
    }
  } else {
    next()
  }
})

//全局拦截器
axios.interceptors.response.use((res) => {
  const reg = /^4\d{2}$/
  if (reg.test(res.data.statusCode)) {
    Toast.fail(res.data.message);
  }
  if (res.data.message==='用户信息验证失败') {
    localStorage.clear()
     setTimeout(() => {
      router.push({
        path:'/'
    })
    }, 500);
  }
  return res
})

// 请求拦截器
// 可以拦截所有请求, 并且对其执行一个回调
axios.interceptors.request.use(config=>{
  // 这里可以接受一个形参, 拿到当前请求的配置

  // 条件判断, 是否需要带上 token
  // 1. 用户已登录(有token)
  // 2. 页面内的请求代码本身没有带上 Authorization
  if (localStorage.getItem('token') && !config.headers.Authorization) {
    config.headers.Authorization = "Bearer " + localStorage.getItem('token')
  }

  // 拦截一定要放行
  return config
})


//基准路径
axios.defaults.baseURL='http://157.122.54.189:9083'


new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
