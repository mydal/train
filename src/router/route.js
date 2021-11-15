const routes = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (Home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Home" */ '../views/home')
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
