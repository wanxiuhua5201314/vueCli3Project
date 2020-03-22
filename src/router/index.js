import Vue from 'vue'
import Router from 'vue-router'
 
import Home from '../components/mainPage/home.vue'
import system from '../components/mainPage/system.vue'
import MainPage from '../components/mainPage.vue'

Vue.use(Router)

export default new Router({
   routes:[
    { path: '/home', component: Home },
    { path: '/system', component: system },
    { path: '/mainPage', component:MainPage },
   ]
})