import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path:"",
    component:()=>import("@/views/index.vue"),
    children:[
      {
        path:"",
        component:()=>import("@/views/Home/home.vue"),
        children:[
          {
            path:"",
            component:()=>import("@/views/Home/components/increase.vue")
          },
          {
            path:"/increase",
            component:()=>import("@/views/Home/components/increase.vue")
          },
          {
            path:"/deal",
            component:()=>import("@/views/Home/components/deal.vue")
          },
          {
            path:"/newcoin",
            component:()=>import("@/views/Home/components/newcoin.vue")
          }
        ]
      },
      {
        path:"/home",
        component:()=>import("@/views/Home/home.vue")
      }
    ]
   },
  ]
})

export default router
