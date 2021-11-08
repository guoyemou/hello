import Vue from 'vue'
import VueRouter from "vue-router";

import Main from "../views/Main";
import Login from "../views/Login";
import List from "../views/user/List";
import Profile from "../views/user/Profile";
import Not from "../views/Not";
//安装路由
Vue.use(VueRouter)
export default new VueRouter({
  mode:"history",
  routes: [
    {
      path: "/login",
      component: Login
    },
    {
      path: "/main",
      component:Main,
      children:[
        {
          path:'/user/list/:id',
          name:'list',
          component:List,
          props:true
        },
        {
          path:'/user/profile/:id',
          name:'profile',
          component:Profile
        }
      ]
    },
    {
      path:"/goHome",
      redirect:'/main'
    },{
      path:'*',
      component:Not
  }
  ]
})
