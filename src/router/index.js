import Vue from 'vue'
import Router from 'vue-router'
 
import Home from '../components/mainPage/home.vue'
import system from '../components/mainPage/system.vue'
import page1 from '../components/mainPage/page1.vue'
import page2 from '../components/mainPage/page2.vue'
import MainPage from '../components/mainPage.vue'
import loginPage from '../components/loginPage.vue'
Vue.use(Router)

export default new Router({
   routes:[
    {path:'/',component:loginPage},
    {path: '/home', component: Home },
    {path: '/system', component: system },
    {path: '/mainPage', component:MainPage },
    {path: '/page1', component:page1 },
    {path: '/page2', component:page2 },
   ]
})