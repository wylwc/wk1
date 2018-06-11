import Vue from 'vue'
import App from './App.vue'
import Router from "vue-router"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import main from "./router/main/main.vue"
import login from "./router/login/login.vue"
import message from "./router/message/message.vue"
// import myapply from "./router/message/myapply.vue"
import Employee_admin from "./children/employee_admin.vue"
import User_admin from "./children/user_admin.vue"
import Menu_admin from "./children/menu_admin.vue"
// Myapply_admin
import Myapply_admin from "./children/myapply_admin.vue"
import Change_name from "./children/change_name.vue"
import Transfer_name from "./children/transfer_name.vue"
import Maintain_name from "./children/maintain_name.vue"
import Othertype_name from "./children/othertype_name.vue"
import http from "./untils/http"
import store from "./store"
// import axios from "axios"
// 将axios挂载到vue,实现全局
// Vue.prototype.$http = axios;
// axios  支持请求拦截，和响应拦截
Vue.use(http)
Vue.use(ElementUI)
Vue.use(Router)
Vue.config.productionTip = false;
Vue.config.devtools = false;
// 去掉# => mode:"history",
let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "main",
      component: main,
      redirect: "/login"
    }, {
      path: "/login",
      name: "login",
      component: login,
    }, {
      path: "/message",
      name: "message",
      component: message,
      children: [
        {
          path: "employee_admin",
          name: "employee_admin",
          component: Employee_admin
        },
        {
          path: "user_admin",
          name: "user_admin",
          component: User_admin
        },
        {
          path: "menu_admin",
          name: "menu_admin",
          component: Menu_admin
        },
        {
          path: "myapply_admin",
          name: "myapply_admin",
          component: Myapply_admin
        },
        {
          path: "change_name",
          name: "change_name",
          component: Change_name
        },
        {
          path: "transfer_name",
          name: "transfer_name",
          component: Transfer_name
        },
        {
          path: "maintain_name",
          name: "maintain_name",
          component: Maintain_name
        },
        {
          path: "othertype_name",
          name: "othertype_name",
          component: Othertype_name
        }
      ]
    }
  ]
})
new Vue({
  el: '#app',
  router: router,
  store,
  render: h => h(App)
})
