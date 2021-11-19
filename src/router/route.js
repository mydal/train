const routes = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (Home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Home" */ '../views/home'),
    redirect:'/qlist',
    //定义嵌套路由
    children: [
    
      {
        /** 套题列表路由 */
        path: '/qlist',
        name: '/qlist',
        component: () => import(/* webpackChunkName: "Home" */ '../views/home/qlist.vue'),
      
      },
      {
        path: '/qlistAdd',
        name: 'qlistAdd',
        component: () => import(/* webpackChunkName: "Home" */ '../views/home/qlistAdd.vue'),

      }
      ,
      {
        /** 题库列表路由 */
        path: '/klist',
        name: '/klist',
        component: () => import(/* webpackChunkName: "Home" */ '../views/home/klist.vue'),
      },
      
    
    ]
  },
  {
    path: '/userCenter',
    name: 'UserCenter',
    // route level code-splitting
    // this generates a separate chunk (UserCenter.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "userCenter" */ '../views/user')
  }
]
export default routes
