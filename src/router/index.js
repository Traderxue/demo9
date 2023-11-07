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
          },
        ]
      },
      {
        path:"/home",
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
          },
          
        ]
      },
      {
        path:"/quotes",
        component:()=>import("@/views/Quotes/quotes.vue"),
        children:[
          {
            path:"",
            component:()=>import("@/views/Quotes/components/coins.vue")
          },
          {
            path:"/coins",
            component:()=>import("@/views/Quotes/components/coins.vue")
          },
          {
            path:"/contract",
            component:()=>import("@/views/Quotes/components/contract.vue")
          }
        ]
      },
      {
        path:"/trade",
        component:()=>import("@/views/Trade/trade.vue")
      },
      {
        path:"/wallet",
        component:()=>import("@/views/Wallet/wallet.vue"),
        children:[
          {
            path:"",
            component:()=>import("@/views/Wallet/components/assets.vue")
          },
          {
            path:"/assets",
            component:()=>import("@/views/Wallet/components/assets.vue")
          },
          {
            path:"/financial",
            component:()=>import("@/views/Wallet/components/financial.vue")
          },
          {
            path:"/mining",
            component:()=>import("@/views/Wallet/components/mining.vue")
          }
        ]
      },
      {
        path:"/mine",
        component:()=>import("@/views/Mine/mine.vue"),
      },
      {
        path:"/all",
        component:()=>import("@/views/AllPositions/all.vue")
      },
      {
        path:"/auth",
        component:()=>import("@/components/auth.vue")
      },
      {
        path:"/chongzhi",
        component:()=>import("@/components/chongzhi.vue")
      },
      {
        path:"/huazhuan",
        component:()=>import("@/components/huazhuan.vue")
      },
      {
        path:"/invite",
        component:()=>import("@/components/invite.vue")
      },
      {
        path:"/kefu",
        component:()=>import("@/components/kefu.vue")
      },
      {
        path:"/tixian",
        component:()=>import("@/components/tixian.vue")
      },
      {
        path:"/quick",
        component:()=>import("@/components/quickly.vue")
      }
    ]
   },
  ]
})

export default router
