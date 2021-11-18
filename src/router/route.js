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
        path: '/qlist',
        name: '套题列表页面',
        component: () => import(/* webpackChunkName: "Home" */ '../views/home/qlist.vue'),
      },
      {
        path: '/klist',
        name: '题库列表页面',
        component: () => import(/* webpackChunkName: "Home" */ '../views/home/klist.vue'),
      }
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
