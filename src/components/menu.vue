<script setup>
import { showToast } from "vant";
import { ref } from "vue";
import useClipboard from "vue-clipboard3";
import { useRouter } from "vue-router";
const router = useRouter()

const { toClipboard } = useClipboard();

const u_id = ref("46152");

const navData = ref([
    {
        title:"邀请好友",
        icon:"person_add",
        path:"/invite"
    },
    {
        title:"身份验证",
        icon:"badge",
        path:"/auth"
    },
    {
        title:"个人中心",
        icon:"person",
        path:"/mine"
    },
    {
        title:"安全中心",
        icon:"verified_user",
        path:"/security"
    },
    {
        title:"联系客服",
        icon:"chat",
        path:"/kefu"
    }

])

const copyUid = async () => {
  await toClipboard(u_id.value);
  showToast("复制成功");
};

const goTabs = (item)=>{
    router.push(item.path)
}

const login = ()=>{
  router.push("/login")
} 

const register = ()=>{
  router.push("/register")
}
</script>

<template>
  <div class="menu">
    <div class="header">
      <h3>火神</h3>
      <div>
        <span>UID: {{ u_id }}</span>
        <span class="material-symbols-outlined copy" @click="copyUid">
          file_copy
        </span>
      </div>
    </div>
    <div class="box">
      <div v-for="(item,index) in navData" :key="index" @click="goTabs(item)">
        <span class="material-symbols-outlined person_add"> {{item.icon}} </span><span>{{item.title}}</span>
      </div>
      <div class="btn">
        <span @click="login">登录</span><span @click="register">注册</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.menu {
  padding: 35px 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  color: #333;
  .header {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    h3 {
      padding: 10px 0px;
    }
    div {
      display: flex;
      align-items: center;
      span {
        font-size: 14px;
      }
      .copy {
        font-size: 18px;
        margin-left: 10px;
      }
    }
  }
  .box {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 10px;
    margin-top: 30px;
    div {
      display: flex;
      align-items: center;
      padding: 10px 0px;
      .person_add{
        margin-right: 10px;
      }
    }
    .btn{
        display: flex;
        justify-content: space-around;
        color: #2879FF;
        margin: 10px 0px;
    }
  }
}
</style>