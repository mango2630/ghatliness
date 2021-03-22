import { createRouter, createWebHistory } from 'vue-router'

const LogIn = ()=> import('../views/login/LogIn.vue')
const Entrance = ()=> import('../views/entrance/Entrance.vue')
const Home = ()=> import('../views/home/Home.vue')
const PersonCenter = ()=> import('../views/personCenter/PersonCenter.vue')
const ProManage = ()=> import('../views/projectManagement/ProMange.vue')
const ComInfo = ()=> import('../views/competitionInfo/ComInfo.vue')


const routes = [
  {
    path: '',
    name: 'login',
    component: LogIn
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/personcenter',
    name: 'PersonCenter',
    component: PersonCenter
  },
  {
    path: '/promanage',
    name: 'ProManage',
    component: ProManage
  },
  {
    path: '/cominfo',
    name: 'ComInfo',
    component: ComInfo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


// router.beforeEach((to, from, next) => {
//   if (to.path === '/login' || to.path === '/register' || to.path === '/') {
//     next();
//   } else {
//     let token = localStorage.getItem('Authorization');

//     if (token === null || token === '') {
//       next('/login');
//     } else {
//       next();
//     }
//   }
// })

export default router
