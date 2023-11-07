<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const navList = ref([
    {
        logo:"http://127.0.0.1:5173/chongzhi.png",
        title:"充值",
        path:"/chongzhi"
    },
    {
        logo:"http://127.0.0.1:5173/tixian.png",
        title:"提现",
        path:"/tixian"
    },
    {
        logo:"http://127.0.0.1:5173/huazhan.png",
        title:"划转",
        path:"/huazhuan"
    },
    {
        logo:"http://127.0.0.1:5173/invite.png",
        title:"邀请好友",
        path:"/invite"
    },
    {
        logo:"http://127.0.0.1:5173/record.png",
        title:"仓位记录",
        path:"/all"
    },
    {
        logo:"http://127.0.0.1:5173/yanzheng.png",
        title:"身份验证",
        path:"/auth"
    },
    {
        logo:"http://127.0.0.1:5173/kefu.png",
        title:"联系客服",
        path:"/kefu"
    },
    
])

const goTabs = (item) =>{
    router.push(item.path)
}
</script>

<template>
  <div class="mine">
    <div class="header">
      <img src="@/assets/img/acavtor.png" alt="" />
      <span>v8科技</span>
      <div>
        <span>ID: 2346</span>
        <span>等级: VIP1</span>
      </div>
    </div>
    <div class="box">
      <div class="per" v-for="(item,index) in navList" :key="index" @click="goTabs(item)">
        <div>
          <img :src="item.logo" alt="" />
          <span>{{item.title}}</span>
        </div>
        <span class="material-symbols-outlined arrow"> arrow_forward_ios </span>
      </div>
      <div class="btn">
        <button>退出登录</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mine {
  width: auto;
  height: auto;
  padding: 15px;
  .header {
    height: 150px;
    padding: 20px 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    font-size: 14px;
    font-weight: 600;
    background-image: url("@/assets/img/bg_1.png");
    margin: -15px;
    padding: 15px;
    font-size: 18px;
    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-bottom: 10px;
    }
    span {
      padding: 0px 10px;
    }
  }
  .box{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    background: #FFF;
    margin-top: 50px;
    margin-bottom: 20px;
    padding: 30px 15px;
    border-radius: 5px;
    .per{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0px;
        div{
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-size: 14px;
            img{
                width: 35px;
                height: 35px;
                margin-right: 10px;
            }
        }
        .arrow{
            font-size: 20px;
        }
    }
    .btn{
        padding: 10px 0px;
        button{
            width: 100%;
            height: 35px;
            background: #364f6b;
            color: #FFF;
            font-size: 14px;
            border: 0;
            border-radius: 3px;
        }
    }
  }
}
</style>