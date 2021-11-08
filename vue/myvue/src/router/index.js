import Vue from 'vue'
import VueRouter from "vue-router"
import Main from "../components/Main";
import Content from "../components/Content";
// 安装路由
Vue.use(VueRouter)
// 配置导出路由
export default new VueRouter({
  routes: [{
    // 路出路劲
    path:'/content',
    name:'content',
    // 跳转的组件
    component:Content
  },{
    // 路出路劲
    path:'/main',
    name:'main',
    // 跳转的组件
    component:Main
  }
  ]
});
